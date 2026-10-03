// ⚡ Arpit | timer-notifications.js — Audio & Browser Notifications
'use strict';

window.PomoNotifications = (() => {
  let _ctx = null;
  let _notifGranted = (typeof Notification !== 'undefined' && Notification.permission === 'granted');
  let _initialized = false;
  let _unlockBound = false;

  function _getCtx() {
    if (!_ctx) {
      const AudioCtor = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtor) return null;
      _ctx = new AudioCtor();
    }
    if (_ctx && _ctx.state === 'suspended') {
      try { void _ctx.resume(); } catch (_) {}
    }
    return _ctx;
  }

  function _getVolume() {
    const volume = window.PomoSettings?.get?.('volume');
    return Math.min(1, Math.max(0, Number(volume) || 0.6));
  }

  // ── Sound engines ─────────────────────────────────────────────────────────
  const SOUNDS = {
    bell(ctx, vol) {
      // Three-strike resonant bell
      [0, 0.22, 0.44].forEach((offset, i) => {
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.value = 880 * (1 - i * 0.08);
        const t = ctx.currentTime + offset;
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(vol, t + 0.012);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 1.0);
        osc.start(t); osc.stop(t + 1.05);
      });
    },

    chime(ctx, vol) {
      // Ascending pentatonic chime
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.value = freq;
        const t = ctx.currentTime + i * 0.18;
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(vol * 0.65, t + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 1.4);
        osc.start(t); osc.stop(t + 1.45);
      });
    },

    digital(ctx, vol) {
      // Classic 3-beep digital alert
      [0, 0.15, 0.30].forEach(offset => {
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'square';
        osc.frequency.value = 880;
        const t = ctx.currentTime + offset;
        gain.gain.setValueAtTime(vol * 0.25, t);
        gain.gain.setValueAtTime(0,           t + 0.09);
        osc.start(t); osc.stop(t + 0.12);
      });
    },
  };

  // ── Public audio API ──────────────────────────────────────────────────────
  function playSound(name, volume) {
    try {
      if (window.PomoSettings?.get?.('sound') === 'silent') return;
      const ctx = _getCtx();
      if (!ctx) return;
      const soundName = SOUNDS[name] ? name : 'bell';
      (SOUNDS[soundName] || SOUNDS.bell)(ctx, Math.min(1, Math.max(0, Number(volume) || 0.6)));
    } catch (e) { console.warn('[PomoAudio]', e); }
  }

  function preview(name) {
    playSound(name, _getVolume());
  }

  // ── Browser Notifications ─────────────────────────────────────────────────
  async function requestPermission() {
    if (typeof Notification === 'undefined') return false;
    if (Notification.permission === 'granted') { _notifGranted = true; return true; }
    if (Notification.permission === 'denied')  return false;
    const result = await Notification.requestPermission();
    _notifGranted = result === 'granted';
    return _notifGranted;
  }

  function _notify(title, body) {
    if (!_notifGranted || !document.hidden || typeof Notification === 'undefined') return;
    try { new Notification(title, { body }); } catch (_) {}
  }

  // ── Phase complete handler ────────────────────────────────────────────────
  function _onPhaseComplete({ completedPhase, sessions }) {
    const vol   = window.PomoSettings.get('volume');
    const sound = window.PomoSettings.get('sound');
    playSound(sound, vol);

    if (completedPhase === 'work') {
      const limit = Math.max(1, Number(window.PomoSettings.get('sessionsBeforeLongBreak')) || 4);
      const isLong = sessions % limit === 0;
      const breakSeconds = isLong
        ? Number(window.PomoSettings.get('longBreak')) || 0
        : Number(window.PomoSettings.get('shortBreak')) || 0;
      const minutes = Math.max(1, Math.round(breakSeconds / 60));
      _notify(
        isLong ? 'Long break time' : 'Short break time',
        `Focus session ${sessions} complete. Take a ${minutes}-minute break.`
      );
    } else {
      _notify('Break finished', 'Your next focus session is ready.');
    }
  }

  // ── Init ──────────────────────────────────────────────────────────────────
  function init() {
    if (_initialized) return;
    _initialized = true;

    PomoBus.on('timer:phase_complete', _onPhaseComplete);
    // Unlock AudioContext on first user gesture (required by browsers)
    const unlock = () => { try { _getCtx(); } catch (_) {} };
    if (!_unlockBound) {
      _unlockBound = true;
      document.addEventListener('click',   unlock, { once: true });
      document.addEventListener('keydown', unlock, { once: true });
    }
    // Re-check notification permission (may have been granted previously)
    if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
      _notifGranted = true;
    }
  }

  return { init, playSound, preview, requestPermission };
})();
