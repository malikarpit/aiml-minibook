/**
 * Engineering Minibooks · study lens controller
 * Preserves the existing ModeManager API used by chapter HTML.
 */
'use strict';

(() => {
  const KEY = 'aiml-mode';
  const LEGACY_KEY = 'cn-mode';
  const ALLOWED = new Set(['all', 'uni', 'gate', 'advanced']);

  const MODES = {
    all:      { label: 'All', sel: null, hide: [] },
    uni:      { label: 'University', sel: '.mode-uni', hide: ['.mode-gate', '.mode-adv'] },
    gate:     { label: 'GATE', sel: '.mode-gate', hide: ['.mode-uni', '.mode-adv'] },
    advanced: { label: 'Advanced', sel: '.mode-adv', hide: ['.mode-uni', '.mode-gate'] }
  };

  function normalize(value) {
    const mode = value === 'adv' ? 'advanced' : value;
    return ALLOWED.has(mode) ? mode : 'all';
  }

  function readInitial() {
    try {
      return normalize(localStorage.getItem(KEY) || localStorage.getItem(LEGACY_KEY) || 'all');
    } catch {
      return 'all';
    }
  }

  let current = readInitial();

  function persist(mode) {
    try { localStorage.setItem(KEY, mode); } catch { /* non-persistent session is fine */ }
  }

  function filterContent(mode) {
    document.querySelectorAll('.mode-uni, .mode-gate, .mode-adv').forEach(el => {
      el.classList.remove('mode-hidden');
      el.removeAttribute('aria-hidden');
    });

    if (mode !== 'all') {
      MODES[mode].hide.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
          el.classList.add('mode-hidden');
          el.setAttribute('aria-hidden', 'true');
        });
      });
    }
  }

  function filterPapers(mode) {
    document.querySelectorAll('[data-paper-type]').forEach(el => {
      const visible = mode === 'all' || mode === 'advanced' || el.dataset.paperType === mode;
      el.classList.toggle('mode-hidden', !visible);
      el.setAttribute('aria-hidden', String(!visible));
    });
  }

  function updateControls(mode) {
    document.querySelectorAll('.mode-btn').forEach(btn => {
      const active = btn.dataset.mode === mode;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    document.querySelectorAll('.uni-toggle-btn').forEach(btn => {
      const target = normalize(btn.dataset.mode || (btn.id === 'filter-uni-btn' ? 'uni' : btn.id === 'filter-all-btn' ? 'all' : ''));
      const active = target === mode;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    const indicator = document.getElementById('mode-indicator');
    if (indicator) {
      indicator.textContent = MODES[mode].label;
      indicator.dataset.mode = mode;
    }
  }

  function apply(value, { silent = false } = {}) {
    const mode = normalize(value);
    current = mode;
    persist(mode);
    document.body.dataset.mode = mode;
    document.documentElement.dataset.mode = mode;
    filterContent(mode);
    filterPapers(mode);
    updateControls(mode);
    if (!silent && window.Toast?.show) window.Toast.show(`Mode: ${MODES[mode].label}`, 'info');
    return mode;
  }

  function bindButtons() {
    document.querySelectorAll('.mode-btn, .uni-toggle-btn').forEach(btn => {
      // Several chapter files still contain inline onclick handlers. Do not double-bind those.
      if (btn.dataset.modeBound === '1' || btn.getAttribute('onclick')) return;
      btn.dataset.modeBound = '1';
      btn.addEventListener('click', () => apply(btn.dataset.mode || (btn.id === 'filter-uni-btn' ? 'uni' : 'all')));
    });
  }

  function init() {
    bindButtons();
    apply(current, { silent: true });
  }

  const API = { init, apply, get: () => current };
  window.ModeManager = API;
  document.addEventListener('DOMContentLoaded', init, { once: true });
})();
