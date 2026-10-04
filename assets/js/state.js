/* ── state.js — extracted StateManager for modularity ────────────────── */
'use strict';

(() => {
  const KEY      = 'aiml-minibook-state';
  const NUDGE_KEY= 'aiml-minibook-backup-nudge';
  const DEFAULT_STATE = {
    theme: 'auto',
    sidebarOpen: typeof window !== 'undefined' ? window.innerWidth > 1024 : true,
    checklist: {},
    bookmarks: [],
    highlights: [],
    fontSize: 16,
    mcqResults: {},
    readProgress: {},
    readingMode: false
  };

  let state = clone(DEFAULT_STATE);

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function normalizeTheme(value) {
    return ['auto', 'light', 'dark', 'paper'].includes(value) ? value : 'auto';
  }

  function normalizeState(candidate) {
    const next = { ...clone(DEFAULT_STATE), ...(candidate && typeof candidate === 'object' ? candidate : {}) };
    next.theme = normalizeTheme(next.theme);
    next.sidebarOpen = Boolean(next.sidebarOpen);
    next.checklist = next.checklist && typeof next.checklist === 'object' ? next.checklist : {};
    next.bookmarks = Array.isArray(next.bookmarks) ? next.bookmarks : [];
    next.highlights = Array.isArray(next.highlights) ? next.highlights : [];
    next.mcqResults = next.mcqResults && typeof next.mcqResults === 'object' ? next.mcqResults : {};
    next.readProgress = next.readProgress && typeof next.readProgress === 'object' ? next.readProgress : {};
    next.readingMode = Boolean(next.readingMode);
    const numericFont = Number(next.fontSize);
    next.fontSize = Number.isFinite(numericFont) ? Math.min(22, Math.max(14, Math.round(numericFont))) : 16;
    return next;
  }

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { console.warn('safeGet failed', e); return null; }
  }
  function safeSet(key, value) {
    try { localStorage.setItem(key, value); return true; } catch (e) { console.warn('safeSet failed', e); return false; }
  }

  function init() {
    try {
      const saved = safeGet(KEY) || safeGet('os-minibook-state');
      if (saved) {
        try { state = normalizeState(JSON.parse(saved)); }
        catch (e) { console.warn('Ignoring invalid saved state:', e); state = clone(DEFAULT_STATE); }
      }

      // Migrate legacy keys
      ['cn-theme','cn-sidebar','cn-bookmarks','os-theme','os-sidebar','os-bookmarks'].forEach(k => {
        const v = safeGet(k);
        if (!v) return;
        if (k.endsWith('theme')) state.theme = normalizeTheme(v);
        if (k.endsWith('sidebar')) state.sidebarOpen = v === 'open' || v === 'true';
        if (k.endsWith('bookmarks')) {
          try {
            const parsed = JSON.parse(v);
            if (Array.isArray(parsed)) state.bookmarks = parsed;
          } catch (e) { /* ignore malformed legacy value */ }
        }
        try { localStorage.removeItem(k); } catch(e){}
      });

      state = normalizeState(state);
      save();
      _checkBackupNudge();
    } catch (e) { console.warn('State init error', e); }
  }

  function save() {
    try {
      state = normalizeState(state);
      const json = JSON.stringify(state);
      if (json.length > 4_500_000) {
        window.Toast?.show?.('Storage is nearly full. Export your data soon.', 'error');
      }
      if (!safeSet(KEY, json)) {
        window.Toast?.show?.('Browser storage is unavailable. Export your data to keep a backup.', 'error');
      }
    } catch (e) {
      console.warn('State save failed:', e);
      window.Toast?.show?.('Could not save local state. Export your data now.', 'error');
    }
  }

  function get(k) { return state[k]; }
  function set(k, v) { state[k] = v; save(); return state[k]; }

  /* MCQ */
  function setMCQResult(id, correct) {
    if (!state.mcqResults) state.mcqResults = {};
    state.mcqResults[id] = { correct, ts: Date.now() };
    save();
  }
  function getMCQStats() {
    const results = Object.values(state.mcqResults || {});
    const total   = results.length;
    const correct = results.filter(r => r.correct).length;
    return { total, correct, pct: total ? Math.round((correct/total)*100) : 0 };
  }

  /* Read progress */
  function setReadProgress(page, pct) {
    const key = String(page || '').trim();
    const value = Math.min(100, Math.max(0, Number(pct) || 0));
    if (!key) return;
    if (state.readProgress[key] === undefined || state.readProgress[key] < value) {
      state.readProgress[key] = Math.round(value);
      save();
    }
  }
  function getReadProgress(page) { return (state.readProgress || {})[page] || 0; }
  function getAllReadProgress() { return state.readProgress || {}; }

  function _checkBackupNudge() {
    const last  = parseInt(safeGet(NUDGE_KEY) || '0', 10);
    const now   = Date.now();
    const seven = 7 * 24 * 60 * 60 * 1000;
    if (now - last > seven && Array.isArray(state.bookmarks) && state.bookmarks.length > 0) {
      setTimeout(() => {
        window.Toast?.show && window.Toast.show('💾 It\'s been 7 days — export your notes & bookmarks for safekeeping!', 'info');
        safeSet(NUDGE_KEY, String(now));
      }, 5000);
    }
  }

  function exportData() {
    const notesData = safeGet('aiml-notes-v1') || safeGet('cn-notes-v1');
    let notes = {};
    if (notesData) {
      try { notes = JSON.parse(notesData); } catch (e) { notes = {}; }
    }
    const fullExport = { state: normalizeState(state), notes };
    const blob = new Blob([JSON.stringify(fullExport, null, 2)], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = `aiml-minibook-backup-${new Date().toISOString().slice(0,10)}.json`;
    a.click(); URL.revokeObjectURL(url);
    safeSet(NUDGE_KEY, String(Date.now()));
    window.Toast?.show && window.Toast.show('✅ Full backup exported (state + notes)!', 'success');
  }

  function importData() {
    const input = document.createElement('input');
    input.type = 'file'; input.accept = '.json';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const parsed = JSON.parse(ev.target.result);
          if (parsed.state) {
            state = normalizeState({ ...state, ...parsed.state });
            if (parsed.notes) safeSet('aiml-notes-v1', JSON.stringify(parsed.notes));
          } else {
            state = normalizeState({ ...state, ...parsed });
          }
          save(); location.reload();
        } catch (err) { window.Toast?.show && window.Toast.show('❌ Invalid backup file!', 'error'); }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  const API = { init, get, set, save, exportData, importData, setMCQResult, getMCQStats, setReadProgress, getReadProgress, getAllReadProgress };
  window.StateManager = API;
})();
