// ⚡ Arpit | timer.js — Pomodoro Timer (Industry Edition)
// Core: Event Bus + State Machine + Keyboard Shortcuts + Persistence
// Enhanced: Page Visibility API, error resilience, state validation, JSDoc
// Self-contained: includes a PomoSettings fallback so it works on chapter pages
// even when timer-settings.js is not loaded separately.
'use strict';

// ── Event Bus ───────────────────────────────────────────────────────────────
window.PomoBus = (() => {
  const _listeners = {};
  return {
    on(event, cb) {
      if (!_listeners[event]) _listeners[event] = [];
      _listeners[event].push(cb);
      return () => { _listeners[event] = (_listeners[event] || []).filter(l => l !== cb); };
    },
    off(event, cb) {
      if (_listeners[event]) _listeners[event] = _listeners[event].filter(l => l !== cb);
    },
    emit(event, data) {
      (_listeners[event] || []).slice().forEach(cb => {
        try { cb(data); } catch (e) { console.error(`[PomoBus] "${event}" handler error:`, e); }
      });
    },
  };
})();

// ── PomoSettings Fallback ────────────────────────────────────────────────────
// Used when timer-settings.js is not loaded (e.g. chapter pages).
// timer-settings.js will overwrite this with the full version if it loads later.
if (typeof window.PomoSettings === 'undefined') {
  window.PomoSettings = (() => {
    const DEFAULTS = {
      workDuration:            25 * 60,
      shortBreak:               5 * 60,
      longBreak:               15 * 60,
      sessionsBeforeLongBreak: 4,
      autoStart:               false,
      volume:                  0.6,
      sound:                   'bell',
      sessionGoal:             8,
      distractionPrompt:       true,
    };
    let _s = { ...DEFAULTS };
    try {
      const saved = JSON.parse(localStorage.getItem('pomo_settings') || '{}');
      _s = { ...DEFAULTS, ...saved };
    } catch (_) {}
    return {
      get:     (key)     => key !== undefined ? _s[key] : { ..._s },
      set:     (updates) => { Object.assign(_s, updates); try { localStorage.setItem('pomo_settings', JSON.stringify(_s)); } catch (_) {} },
      reset:   ()        => { _s = { ...DEFAULTS }; },
      DEFAULTS,
    };
  })();
}

// ── Timer State Machine ─────────────────────────────────────────────────────
window.PomoTimer = (() => {
  const PHASE = { WORK: 'work', SHORT_BREAK: 'short_break', LONG_BREAK: 'long_break' };

  let _interval         = null;
  let _autoStartTimeout = null;
  let _initialized      = false;   // guard against double-init

  let state = {
    phase:         PHASE.WORK,
    remaining:     0,
    running:       false,
    sessions:      0,
    totalSessions: 0,
    sessionStart:  null,
  };

  // ── Helpers ───────────────────────────────────────────────────────────────
  function _duration(phase) {
    const s = window.PomoSettings.get();
    return phase === PHASE.WORK        ? s.workDuration
         : phase === PHASE.SHORT_BREAK ? s.shortBreak
         :                               s.longBreak;
  }

  function _nextPhase() {
    if (state.phase !== PHASE.WORK) return PHASE.WORK;
    const limit = window.PomoSettings.get('sessionsBeforeLongBreak');
    // sessions is incremented before this is called; guard > 0 prevents
    // a long break firing on the very first completed session (sessions=1, 1%4≠0).
    // For limit=4: long break at sessions 4, 8, 12…
    return (state.sessions > 0 && state.sessions % limit === 0) ? PHASE.LONG_BREAK : PHASE.SHORT_BREAK;
  }

  function _broadcast() { PomoBus.emit('timer:tick', { ...state }); }

  // ── Persistence ───────────────────────────────────────────────────────────
  function _save() {
    try {
      const payload = {
        phase:         state.phase,
        remaining:     Math.max(0, state.remaining),
        sessions:      Math.max(0, state.sessions),
        totalSessions: Math.max(0, state.totalSessions),
        savedAt:       Date.now(),
      };
      localStorage.setItem('pomo_timer_state', JSON.stringify(payload));
    } catch (e) {
      console.warn('[PomoTimer] Save error:', e);
    }
  }

  function _load() {
    try {
      const raw = localStorage.getItem('pomo_timer_state');
      if (!raw) return;
      const saved      = JSON.parse(raw);
      const elapsedSec = Math.floor((Date.now() - (saved.savedAt || 0)) / 1000);
      // Reject stale state (> 1 hour)
      if (elapsedSec >= 3600) {
        console.warn('[PomoTimer] Saved state older than 1 hour, discarding');
        return;
      }
      state.phase         = saved.phase         || PHASE.WORK;
      state.sessions      = Math.max(0, saved.sessions      || 0);
      state.totalSessions = Math.max(0, saved.totalSessions || 0);
      const adjusted      = (saved.remaining    || 0) - elapsedSec;
      state.remaining     = Math.max(0, adjusted);
    } catch (e) {
      console.error('[PomoTimer] Load error:', e);
    }
    // Validate and guarantee a valid remaining value
    _validateState();
  }

  function _validateState() {
    if (!Object.values(PHASE).includes(state.phase)) {
      console.warn('[PomoTimer] Invalid phase, resetting to WORK');
      state.phase = PHASE.WORK;
    }
    if (state.remaining <= 0) {
      state.remaining = _duration(state.phase);
    }
    state.sessions      = Math.max(0, state.sessions);
    state.totalSessions = Math.max(0, state.totalSessions);
  }

  // ── Phase transition ──────────────────────────────────────────────────────
  function _phaseComplete() {
    clearInterval(_interval); _interval = null;
    state.running = false;

    const completedPhase = state.phase;

    if (completedPhase === PHASE.WORK) {
      state.sessions++;
      state.totalSessions++;
    }

    PomoBus.emit('analytics:session_end', {
      phase:     completedPhase,
      sessions:  state.sessions,
      timestamp: Date.now(),
      skipped:   false,
    });
    PomoBus.emit('timer:phase_complete', { ...state, completedPhase });
    state.phase     = _nextPhase();
    state.remaining = _duration(state.phase);
    _broadcast();
    PomoBus.emit('timer:phase_change', { ...state });

    if (window.PomoSettings.get('autoStart')) {
      _autoStartTimeout = setTimeout(() => { _autoStartTimeout = null; start(); }, 1500);
    }
  }

  // ── Core controls ─────────────────────────────────────────────────────────
  function start() {
    if (state.running) return;
    try {
      clearTimeout(_autoStartTimeout); _autoStartTimeout = null;
      if (state.remaining <= 0) state.remaining = _duration(state.phase);
      state.running      = true;
      state.sessionStart = Date.now();
      _interval = setInterval(() => {
        try {
          state.remaining--;
          _broadcast();
          if (state.remaining <= 0) _phaseComplete();
        } catch (e) {
          console.error('[PomoTimer] Interval error:', e);
          pause();
        }
      }, 1000);
      _broadcast();
      PomoBus.emit('timer:start', { ...state });
      PomoBus.emit('analytics:session_start', { phase: state.phase, timestamp: state.sessionStart });
    } catch (e) {
      console.error('[PomoTimer] Start error:', e);
    }
  }

  function pause() {
    if (!state.running) return;
    state.running = false;
    clearInterval(_interval); _interval = null;
    _broadcast();
    PomoBus.emit('timer:pause', { ...state });
  }

  function toggle() { state.running ? pause() : start(); }

  function reset() {
    pause();
    state.phase     = PHASE.WORK;
    state.remaining = _duration(PHASE.WORK);
    _broadcast();
    PomoBus.emit('timer:reset', { ...state });
  }

  function skipPhase() {
    const wasRunning = state.running;
    pause();
    if (state.phase === PHASE.WORK) {
      state.sessions++;
      state.totalSessions++;
      PomoBus.emit('analytics:session_end', {
        phase: state.phase, sessions: state.sessions,
        timestamp: Date.now(), skipped: true,
      });
    }
    state.phase     = _nextPhase();
    state.remaining = _duration(state.phase);
    _broadcast();
    PomoBus.emit('timer:phase_change', { ...state });
    if (wasRunning) start();
  }

  function getState() { return { ...state }; }

  // ── Keyboard shortcuts ────────────────────────────────────────────────────
  function _initKeyboard() {
    try {
      document.addEventListener('keydown', e => {
        const tag = (e.target || {}).tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
        switch (e.code) {
          case 'Space': e.preventDefault(); PomoBus.emit('ui:toggle_requested'); break;
          case 'KeyR':  if (!e.ctrlKey && !e.metaKey && !e.shiftKey) reset();     break;
          case 'KeyS':  if (!e.ctrlKey && !e.metaKey && !e.shiftKey) skipPhase(); break;
        }
      });
    } catch (e) {
      console.error('[PomoTimer] Keyboard init error:', e);
    }
  }

  // ── Page Visibility API: pause on tab hidden ──────────────────────────────
  function _initVisibilityListener() {
    try {
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          if (state.running) {
            pause();
            console.log('[PomoTimer] Tab hidden, paused');
          }
        } else {
          console.log('[PomoTimer] Tab visible');
          // Optional: auto-resume on visibility (not enabled by default to avoid surprises)
          // Uncomment next line if desired: if (window.PomoSettings.get('autoResumeOnFocus')) start();
        }
      });
    } catch (e) {
      console.error('[PomoTimer] Visibility listener init error:', e);
    }
  }

  // ── Init ──────────────────────────────────────────────────────────────────
  /**
   * Initialize PomoTimer: load persisted state, set up listeners, broadcast ready
   * Safe to call multiple times (guarded by _initialized flag)
   */
  function init() {
    if (_initialized) return;   // prevent double-init (shim + timer-ui.js both call this)
    _initialized = true;
    try {
      _load();
      _initKeyboard();
      _initVisibilityListener();
      setInterval(_save, 5000);
      window.addEventListener('beforeunload', _save);
      PomoBus.on('settings:changed', () => {
        if (!state.running) {
          state.remaining = _duration(state.phase);
          _broadcast();
        }
      });
      _broadcast();
      PomoBus.emit('timer:ready', { ...state });
    } catch (e) {
      console.error('[PomoTimer] Init error:', e);
    }
  }

  return {
    /** Start timer countdown */
    init,
    /** Start timer countdown */
    start,
    /** Pause timer */
    pause,
    /** Toggle between start/pause */
    toggle,
    /** Reset to WORK phase */
    reset,
    /** Skip current phase and move to next */
    skipPhase,
    /** Get current timer state { phase, remaining, running, sessions, totalSessions, sessionStart } */
    getState,
    /** Phase constants: 'work', 'short_break', 'long_break' */
    PHASE,
  };
})();

// ── Backward-Compatibility Shim ────────────────────────────────────────────
// Chapter pages have the simple pomodoro HTML: #pomo-time, #pomo-start, #pomo-reset.
// This shim wires those elements to the new PomoTimer engine automatically.
// On index.html (which has #pomo-card), the condition below is false so shim is skipped.
window.PomodoroTimer = (() => {
  function init() {
    const render = () => {
      try {
        const s = window.PomoTimer.getState();
        const m = String(Math.floor(s.remaining / 60)).padStart(2, '0');
        const sec = String(s.remaining % 60).padStart(2, '0');
        const timeEl  = document.getElementById('pomo-time');
        const labelEl = document.getElementById('pomo-label');
        const btnEl   = document.getElementById('pomo-start');
        const pomoEl  = document.getElementById('pomodoro');
        if (timeEl)  timeEl.textContent  = `${m}:${sec}`;
        if (labelEl) {
          labelEl.textContent = s.phase === 'work'
            ? `FOCUS · #${s.sessions + 1}`
            : (s.phase === 'short_break' ? 'SHORT BREAK' : 'LONG BREAK');
          labelEl.dataset.phase = s.phase;
        }
        if (btnEl) {
          btnEl.textContent = s.running ? 'Pause' : 'Start';
          btnEl.setAttribute('aria-pressed', s.running ? 'true' : 'false');
        }
        if (pomoEl) pomoEl.dataset.phase = s.phase;
      } catch (e) {
        console.error('[PomodoroTimer] Render error:', e);
      }
    };

    try {
      PomoBus.on('timer:tick',   render);
      PomoBus.on('timer:start',  render);
      PomoBus.on('timer:pause',  render);
      PomoBus.on('timer:reset',  render);
      PomoBus.on('timer:ready',  render);
      PomoBus.on('timer:phase_change', render);

      // Space-key toggle goes through bus (keyboard shortcut set up in _initKeyboard)
      PomoBus.on('ui:toggle_requested', () => window.PomoTimer.toggle());

      document.getElementById('pomo-start')?.addEventListener('click', () => window.PomoTimer.toggle());
      document.getElementById('pomo-reset')?.addEventListener('click', () => window.PomoTimer.reset());

      window.PomoTimer.init();
    } catch (e) {
      console.error('[PomodoroTimer] Init error:', e);
    }
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', () => {
  try {
    // Only activate the simple shim on chapter pages (have #pomo-time but NOT #pomo-card).
    // On index.html, #pomo-card exists → timer-ui.js handles everything instead.
    if (document.getElementById('pomo-time') && !document.getElementById('pomo-card')) {
      window.PomodoroTimer.init();
    }
  } catch (e) {
    console.error('[PomodoroTimer] DOMContentLoaded error:', e);
  }
});
