// ⚡ Arpit | timer-settings.js — Settings Management
'use strict';

window.PomoSettings = (() => {
  const KEY = 'pomo_settings';
  const VALID_SOUNDS = new Set(['bell', 'chime', 'digital', 'silent']);

  const DEFAULTS = {
    workDuration:            25 * 60,  // seconds
    shortBreak:               5 * 60,
    longBreak:               15 * 60,
    sessionsBeforeLongBreak: 4,
    autoStart:               false,
    volume:                  0.6,      // 0–1
    sound:                   'bell',   // bell | chime | digital
    sessionGoal:             8,
    distractionPrompt:       true,
  };

  let _s = { ...DEFAULTS };

  function _safeParse(raw) {
    try { return JSON.parse(raw); } catch (_) { return {}; }
  }

  function _clampNumber(value, min, max, fallback) {
    const num = Number(value);
    if (!Number.isFinite(num)) return fallback;
    return Math.min(max, Math.max(min, num));
  }

  function _normalizeSettings(input = {}) {
    const merged = { ...DEFAULTS, ...input };
    return {
      workDuration:            Math.round(_clampNumber(merged.workDuration, 60, 12 * 60 * 60, DEFAULTS.workDuration)),
      shortBreak:              Math.round(_clampNumber(merged.shortBreak, 30, 60 * 60, DEFAULTS.shortBreak)),
      longBreak:               Math.round(_clampNumber(merged.longBreak, 60, 120 * 60, DEFAULTS.longBreak)),
      sessionsBeforeLongBreak: Math.round(_clampNumber(merged.sessionsBeforeLongBreak, 1, 12, DEFAULTS.sessionsBeforeLongBreak)),
      autoStart:               Boolean(merged.autoStart),
      volume:                  _clampNumber(merged.volume, 0, 1, DEFAULTS.volume),
      sound:                   VALID_SOUNDS.has(merged.sound) ? merged.sound : DEFAULTS.sound,
      sessionGoal:             Math.round(_clampNumber(merged.sessionGoal, 1, 100, DEFAULTS.sessionGoal)),
      distractionPrompt:       Boolean(merged.distractionPrompt),
    };
  }

  function _canUseStorage() {
    try {
      const probe = '__pomo_settings_probe__';
      localStorage.setItem(probe, '1');
      localStorage.removeItem(probe);
      return true;
    } catch (_) { return false; }
  }

  function load() {
    if (!_canUseStorage()) { _s = { ...DEFAULTS }; return; }
    try {
      const saved = _safeParse(localStorage.getItem(KEY) || '{}');
      _s = _normalizeSettings(saved);
    } catch (_) { _s = { ...DEFAULTS }; }
  }

  function save() {
    _s = _normalizeSettings(_s);
    try { localStorage.setItem(KEY, JSON.stringify(_s)); } catch (_) {}
    if (typeof window.PomoBus !== 'undefined' && window.PomoBus?.emit) {
      window.PomoBus.emit('settings:changed', { ..._s });
    }
  }

  function get(key) {
    return key !== undefined ? _s[key] : { ..._s };
  }

  function set(updates) {
    _s = _normalizeSettings({ ..._s, ...updates });
    save();
  }

  function reset() {
    _s = { ...DEFAULTS };
    save();
  }

  // Auto-load on script parse
  load();

  return { get, set, reset, load, save, DEFAULTS };
})();
