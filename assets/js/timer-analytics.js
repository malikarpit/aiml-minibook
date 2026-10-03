// ⚡ Arpit | timer-analytics.js — Session Analytics & Export
'use strict';

window.PomoAnalytics = (() => {
  const HISTORY_KEY = 'pomo_history';
  const STREAK_KEY  = 'pomo_streak';
  const MAX_ENTRIES = 2000;

  let _history = [];   // array of session entry objects
  let _streak  = { current: 0, longest: 0, lastDate: null };
  let _initialized = false;

  // ── Storage ───────────────────────────────────────────────────────────────
  function _saveHistory() {
    try { localStorage.setItem(HISTORY_KEY, JSON.stringify(_history.slice(-MAX_ENTRIES))); } catch (_) {}
  }
  function _saveStreak() {
    try { localStorage.setItem(STREAK_KEY, JSON.stringify(_streak)); } catch (_) {}
  }
  function _loadHistory() {
    try {
      const parsed = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
      _history = Array.isArray(parsed) ? parsed.filter(e => e && typeof e === 'object').slice(-MAX_ENTRIES) : [];
    } catch (_) { _history = []; }
  }
  function _loadStreak() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STREAK_KEY) || 'null');
      _streak = parsed && typeof parsed === 'object' ? {
        current: Math.max(0, Number(parsed.current) || 0),
        longest: Math.max(0, Number(parsed.longest) || 0),
        lastDate: typeof parsed.lastDate === 'string' ? parsed.lastDate : null,
      } : { current: 0, longest: 0, lastDate: null };
    } catch (_) { _streak = { current: 0, longest: 0, lastDate: null }; }
  }

  // ── Helpers ───────────────────────────────────────────────────────────────
  function _localDateKey(date = new Date()) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function _todayKey() { return _localDateKey(new Date()); }

  function _dateKey(msSinceEpoch) { return _localDateKey(new Date(msSinceEpoch)); }

  // ── Streak logic ──────────────────────────────────────────────────────────
  function _updateStreak() {
    const today     = _todayKey();
    if (_streak.lastDate === today) return; // already credited today

    const yesterday = _dateKey(Date.now() - 86400000);
    _streak.current = (_streak.lastDate === yesterday) ? _streak.current + 1 : 1;
    _streak.longest = Math.max(_streak.longest, _streak.current);
    _streak.lastDate = today;
    _saveStreak();
    PomoBus.emit('analytics:streak_updated', { ..._streak });
  }

  // ── Record ────────────────────────────────────────────────────────────────
  function recordSession(data) {
    const entry = {
      id:        (globalThis.crypto && typeof globalThis.crypto.randomUUID === 'function')
        ? globalThis.crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
      phase:     data.phase,
      date:      _todayKey(),
      timestamp: data.timestamp || Date.now(),
      sessions:  data.sessions || 0,
      skipped:   data.skipped  || false,
    };
    _history.push(entry);
    _saveHistory();

    if (data.phase === 'work' && !data.skipped) _updateStreak();

    PomoBus.emit('analytics:updated', getStats());
  }

  // ── Queries ───────────────────────────────────────────────────────────────
  function getTodaySessions() {
    const today = _todayKey();
    return _history.filter(e => e.date === today && e.phase === 'work' && !e.skipped);
  }

  function getWeekData() {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setHours(12, 0, 0, 0);
      d.setDate(d.getDate() - i);
      const key   = _localDateKey(d);
      const label = d.toLocaleDateString(undefined, { weekday: 'short' });
      const count = _history.filter(e => e.date === key && e.phase === 'work' && !e.skipped).length;
      days.push({ date: key, label, count });
    }
    return days;
  }

  function getStats() {
    const todayDone  = getTodaySessions().length;
    const goal       = Math.max(1, Number(window.PomoSettings.get('sessionGoal')) || 1);
    const workSec    = Math.max(0, Number(window.PomoSettings.get('workDuration')) || 0);
    const allWork    = _history.filter(e => e.phase === 'work' && !e.skipped);
    return {
      today:             todayDone,
      goal,
      goalProgress:      Math.min(todayDone / goal, 1),
      todayFocusMinutes: Math.floor(todayDone * workSec / 60),
      streak:            { ..._streak },
      week:              getWeekData(),
      total:             allWork.length,
    };
  }

  // ── Export ────────────────────────────────────────────────────────────────
  function exportCSV() {
    const header = ['ID', 'Date', 'Phase', 'Timestamp_ISO', 'Sessions_Cumulative', 'Skipped'];
    const escapeCell = value => {
      const text = String(value ?? '');
      return /[\",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
    };
    const rows = _history.map(e => [
      e.id, e.date, e.phase,
      new Date(e.timestamp).toISOString(),
      e.sessions, e.skipped,
    ]);
    _download('pomo-history.csv',
      [header, ...rows].map(r => r.map(escapeCell).join(',')).join('\n'),
      'text/csv;charset=utf-8');
  }

  function exportJSON() {
    _download('pomo-history.json',
      JSON.stringify({ exportedAt: new Date().toISOString(), stats: getStats(), history: _history }, null, 2),
      'application/json');
  }

  function _download(filename, content, type) {
    const a = Object.assign(document.createElement('a'), {
      href:     URL.createObjectURL(new Blob([content], { type })),
      download: filename,
    });
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  // ── Clear ─────────────────────────────────────────────────────────────────
  function clearHistory() {
    _history = [];
    _streak  = { current: 0, longest: 0, lastDate: null };
    _saveHistory(); _saveStreak();
    PomoBus.emit('analytics:updated', getStats());
  }

  // ── Init ──────────────────────────────────────────────────────────────────
  function init() {
    if (_initialized) return;
    _initialized = true;
    _loadHistory();
    _loadStreak();
    PomoBus.on('analytics:session_end', recordSession);
    // Emit initial stats so UI can populate on load
    PomoBus.emit('analytics:updated', getStats());
  }

  return { init, getStats, getTodaySessions, exportCSV, exportJSON, clearHistory };
})();
