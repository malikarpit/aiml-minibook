/**
 * AI & MACHINE LEARNING MINIBOOK — RAPID STUDY CONTROLLER
 * rapid.js — Dynamic filtering, Active Recall flashcards, and Time Presets
 */

(function () {
  'use strict';

  // State Management
  const state = {
    timePreset: localStorage.getItem('aiml-rapid-time') || '3day',
    activeUnit: 'all',
    activeTag: 'all',
    searchQuery: '',
    revMode: localStorage.getItem('aiml-rapid-rev-mode') || 'read' // 'read' | 'recall' | 'questions'
  };

  function init() {
    initTheme();
    initSidebar();
    initTimePresets();
    initUnitFilters();
    initSearchFilter();
    initRevisionModes();
    initRecallClicks();
    initGlobalControls();
    applyFilters();
  }

  // 1. Theme Management (matches core.js)
  function initTheme() {
    const savedTheme = localStorage.getItem('aiml_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
      themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
      themeToggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('aiml_theme', next);
        themeToggleBtn.textContent = next === 'dark' ? '☀️' : '🌙';
      });
    }
  }

  // 2. Sidebar Drawer (matches core.js)
  function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const toggleBtn = document.getElementById('sidebar-toggle');

    if (!sidebar || !toggleBtn) return;

    function openSidebar() {
      sidebar.classList.add('open');
      sidebar.classList.remove('collapsed');
      if (overlay) overlay.classList.add('show');
    }

    function closeSidebar() {
      sidebar.classList.remove('open');
      if (window.innerWidth > 1024) {
        sidebar.classList.add('collapsed');
      }
      if (overlay) overlay.classList.remove('show');
    }

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (window.innerWidth <= 1024) {
        sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
      } else {
        sidebar.classList.toggle('collapsed');
      }
    });

    if (overlay) {
      overlay.addEventListener('click', closeSidebar);
    }
  }

  // 3. Time Preset Controller (3-4 Days, 2 Days, 1 Day, Tonight)
  function initTimePresets() {
    const presetPills = document.querySelectorAll('.time-preset-pill');
    if (!presetPills.length) return;

    presetPills.forEach(pill => {
      const preset = pill.getAttribute('data-preset');
      if (preset === state.timePreset) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }

      pill.addEventListener('click', () => {
        presetPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.timePreset = preset;
        localStorage.setItem('aiml-rapid-time', preset);
        updateTimeHint(preset);
        applyFilters();
      });
    });

    updateTimeHint(state.timePreset);
  }

  function updateTimeHint(preset) {
    const hintEl = document.getElementById('time-hint-text');
    if (!hintEl) return;

    switch (preset) {
      case '3day':
        hintEl.textContent = 'Route: Comprehensive Rapid Walkthrough (Units I → II → III → IV). Showing Core + Important topics.';
        break;
      case '2day':
        hintEl.textContent = 'Route: High-Yield Sprint (Units I & II on Day 1, Units III & IV on Day 2). Showing P1 & P2 topics.';
        break;
      case '1day':
        hintEl.textContent = 'Route: Exam Cockpit Mode. Showing only P1 Must-Know concepts, essential formulas, and core algorithms.';
        break;
      case 'tonight':
        hintEl.textContent = 'Emergency Mode: Ultra-condensed triggers, definitions, formula banks, and trap callouts only!';
        break;
    }
  }

  // 4. Unit & Tag Filters
  function initUnitFilters() {
    const unitChips = document.querySelectorAll('.unit-chip');
    unitChips.forEach(chip => {
      chip.addEventListener('click', () => {
        unitChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.activeUnit = chip.getAttribute('data-unit') || 'all';
        applyFilters();
      });
    });

    const tagChips = document.querySelectorAll('.tag-chip');
    tagChips.forEach(chip => {
      chip.addEventListener('click', () => {
        tagChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.activeTag = chip.getAttribute('data-tag') || 'all';
        applyFilters();
      });
    });
  }

  // 5. Search Filter
  function initSearchFilter() {
    const searchInput = document.getElementById('rapid-search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }

  // 6. Last-Minute Modes (Read, Recall, Questions)
  function initRevisionModes() {
    const modeBtns = document.querySelectorAll('.rev-mode-btn');
    if (!modeBtns.length) return;

    modeBtns.forEach(btn => {
      const mode = btn.getAttribute('data-mode');
      if (mode === state.revMode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }

      btn.addEventListener('click', () => {
        modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.revMode = mode;
        localStorage.setItem('aiml-rapid-rev-mode', mode);
        updateRevisionModeViews();
      });
    });

    updateRevisionModeViews();
  }

  function updateRevisionModeViews() {
    const bodyEl = document.body;
    bodyEl.classList.remove('rev-mode-read', 'rev-mode-recall', 'rev-mode-questions');
    bodyEl.classList.add('rev-mode-' + state.revMode);

    const revealControls = document.getElementById('reveal-controls');
    if (revealControls) {
      revealControls.style.display = state.revMode === 'recall' ? 'flex' : 'none';
    }

    // Adjust card visibility according to mode
    document.querySelectorAll('.rev-strip').forEach(strip => {
      const readContent = strip.querySelector('.rev-read-content');
      const recallContent = strip.querySelector('.recall-container');
      const questionContent = strip.querySelector('.q-skeleton-container');

      if (readContent) readContent.style.display = (state.revMode === 'read') ? 'block' : 'none';
      if (recallContent) recallContent.style.display = (state.revMode === 'recall') ? 'flex' : 'none';
      if (questionContent) questionContent.style.display = (state.revMode === 'questions') ? 'block' : 'none';
    });
  }

  // 7. Click-to-Reveal Flashcard Behavior
  function initRecallClicks() {
    document.addEventListener('click', (e) => {
      const promptBar = e.target.closest('.recall-prompt-bar');
      if (promptBar) {
        const item = promptBar.closest('.recall-item');
        if (item) {
          item.classList.toggle('revealed');
          const btn = item.querySelector('.recall-reveal-btn');
          if (btn) {
            btn.textContent = item.classList.contains('revealed') ? 'Hide' : 'Reveal';
          }
        }
      }
    });
  }

  // 8. Global Controls (Reveal All / Hide All)
  function initGlobalControls() {
    const revealAllBtn = document.getElementById('btn-reveal-all');
    const hideAllBtn = document.getElementById('btn-hide-all');

    if (revealAllBtn) {
      revealAllBtn.addEventListener('click', () => {
        document.querySelectorAll('.recall-item').forEach(item => {
          item.classList.add('revealed');
          const btn = item.querySelector('.recall-reveal-btn');
          if (btn) btn.textContent = 'Hide';
        });
      });
    }

    if (hideAllBtn) {
      hideAllBtn.addEventListener('click', () => {
        document.querySelectorAll('.recall-item').forEach(item => {
          item.classList.remove('revealed');
          const btn = item.querySelector('.recall-reveal-btn');
          if (btn) btn.textContent = 'Reveal';
        });
      });
    }
  }

  // 9. Master Filter Engine
  function applyFilters() {
    const items = document.querySelectorAll('.lf-card, .rev-strip');
    let visibleCount = 0;

    items.forEach(el => {
      const itemUnit = el.getAttribute('data-unit') || '';
      const itemPriority = el.getAttribute('data-priority') || 'p1';
      const itemTags = (el.getAttribute('data-tags') || '').split(' ');
      const itemText = el.textContent.toLowerCase();

      // Check Unit Filter
      const passUnit = (state.activeUnit === 'all') || (itemUnit === state.activeUnit);

      // Check Tag Filter
      const passTag = (state.activeTag === 'all') || itemTags.includes(state.activeTag);

      // Check Time Preset Filter
      let passTime = true;
      if (state.timePreset === '2day') {
        passTime = (itemPriority === 'p1' || itemPriority === 'p2');
      } else if (state.timePreset === '1day') {
        passTime = (itemPriority === 'p1');
      } else if (state.timePreset === 'tonight') {
        passTime = (itemPriority === 'p1') && (itemTags.includes('core') || itemTags.includes('formula') || itemTags.includes('algorithm'));
      }

      // Check Search Query
      const passSearch = !state.searchQuery || itemText.includes(state.searchQuery);

      if (passUnit && passTag && passTime && passSearch) {
        el.style.display = '';
        visibleCount++;
      } else {
        el.style.display = 'none';
      }
    });

    const countDisplay = document.getElementById('active-topics-count');
    if (countDisplay) {
      countDisplay.textContent = visibleCount;
    }
  }

  // Auto-init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
