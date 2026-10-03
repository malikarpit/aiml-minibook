/**
 * ⚡ Arpit | core.js — Pro Edition
 * Theme, Sidebar, Progress, Scroll-Spy, Search, Bookmarks, Keyboard, State, A11y
 * 25+ Features Integrated | Local-First Architecture
 */
'use strict';

/* ── UTILITIES (Debounce, rAF, A11y) ─────────────────────────────── */
const Utils = (() => {
  /** @param {Function} func @param {number} wait */
  const debounce = (func, wait = 300) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };
  const isReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const safeScrollTo = (top) => window.scrollTo({ top, behavior: isReducedMotion() ? 'auto' : 'smooth' });
  return { debounce, isReducedMotion, safeScrollTo };
})();

/* StateManager now provided by assets/js/state.js - keep global alias */
const StateManager = window.StateManager || {
  init() {}, get() { return undefined; }, set() {}, save() {},
  exportData() {}, importData() {}, setMCQResult() {}, getMCQStats() { return { total: 0, correct: 0, pct: 0 }; },
  setReadProgress() {}, getReadProgress() { return 0; }, getAllReadProgress() { return {}; }
};

/* ── THEME ──────────────────────────────────────────────────────────── */
const ThemeManager = (() => {
  const root = document.documentElement;
  const THEMES = ['auto', 'light', 'dark', 'paper'];

  function actualTheme(mode) {
    if (mode === 'auto') {
      return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return ['light', 'dark', 'paper'].includes(mode) ? mode : 'light';
  }

  function icon(theme) {
    const paths = {
      light: '<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/>',
      dark: '<path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',
      paper: '<path d="M6 3.5h10.5A1.5 1.5 0 0 1 18 5v14.5H7.5A1.5 1.5 0 0 1 6 18V3.5Z"/><path d="M8.5 7h6M8.5 10h6M8.5 13h4"/>'
    };
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[theme] || paths.light}</svg>`;
  }

  function apply(mode, options = {}) {
    const normalized = THEMES.includes(mode) ? mode : 'auto';
    const active = actualTheme(normalized);
    root.setAttribute('data-theme', active);
    root.dataset.themePreference = normalized;
    if (!options.skipPersist) StateManager.set('theme', normalized);

    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.innerHTML = icon(active);
      btn.dataset.theme = active;
      btn.dataset.themePreference = normalized;
      btn.setAttribute('aria-label', `Theme: ${normalized}. Current appearance: ${active}. Press T to change.`);
      btn.title = `Theme: ${normalized}`;
    }
    return active;
  }

  function toggle() {
    const current = THEMES.includes(StateManager.get('theme')) ? StateManager.get('theme') : 'auto';
    const next = THEMES[(THEMES.indexOf(current) + 1) % THEMES.length];
    return apply(next);
  }

  function init() {
    apply(StateManager.get('theme') || 'auto', { skipPersist: true });
    const media = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (media) {
      const handler = () => { if (StateManager.get('theme') === 'auto') apply('auto', { skipPersist: true }); };
      if (media.addEventListener) media.addEventListener('change', handler);
      else if (media.addListener) media.addListener(handler);
    }
  }

  return { init, toggle, apply };
})();

/* ── SIDEBAR ───────────────────────────────────────────────────────── */
const SidebarManager = (() => {
  function apply() {
    const isOpen = StateManager.get('sidebarOpen');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('main-content');
    const overlay = document.getElementById('sidebar-overlay');
    const isMobile = window.innerWidth <= 768;
    
    if (!sidebar) return;
    sidebar.setAttribute('aria-expanded', isOpen);

    if (isMobile) {
      sidebar.classList.toggle('open', isOpen);
      if (overlay) overlay.classList.toggle('show', isOpen);
    } else {
      sidebar.classList.toggle('collapsed', !isOpen);
      if (content) content.classList.toggle('sidebar-collapsed', !isOpen);
    }
  }

  function toggle() { 
    StateManager.set('sidebarOpen', !StateManager.get('sidebarOpen')); 
    apply(); 
  }

  function init() {
    apply();
    document.getElementById('sidebar-overlay')?.addEventListener('click', () => {
      StateManager.set('sidebarOpen', false); apply();
    });
    
    // Debounced Resize
    window.addEventListener('resize', Utils.debounce(() => {
      if (window.innerWidth > 768 && StateManager.get('sidebarOpen') === false) {
        StateManager.set('sidebarOpen', true);
      }
      apply();
    }, 150));
  }
  return { init, toggle };
})();

/* ── PROGRESS BAR (rAF Optimized) ──────────────────────────────────── */
const ProgressBar = (() => {
  let ticking = false;
  function update() {
    const bar = document.getElementById('progress-bar');
    if (!bar) return;
    const el = document.documentElement;
    const max = el.scrollHeight - el.clientHeight;
    const pct = max > 0 ? (el.scrollTop / max) * 100 : 0;
    bar.style.width = Math.min(100, Math.max(0, pct)) + '%';
    ticking = false;
  }
  function init() {
    window.addEventListener('scroll', () => {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }
  return { init };
})();

/* ── SCROLL SPY ────────────────────────────────────────────────────── */
const ScrollSpy = (() => {
  function init() {
    const links = document.querySelectorAll('.sidebar-link[href^="#"]');
    const sections = [...links].map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
    if (!sections.length) return;

    const obs = new IntersectionObserver((entries) => {
      // Use rAF for class manipulations to avoid layout thrashing
      window.requestAnimationFrame(() => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            links.forEach(l => l.classList.remove('active'));
            const active = document.querySelector(`.sidebar-link[href="#${e.target.id}"]`);
            if (active) {
              active.classList.add('active');
              const sb = document.getElementById('sidebar') || active.closest('aside');
              if (sb) {
                const relTop = active.offsetTop - sb.offsetTop;
                if (relTop < sb.scrollTop || relTop > sb.scrollTop + sb.clientHeight - 40) {
                  sb.scrollTo({ top: Math.max(0, relTop - sb.clientHeight / 3), behavior: 'smooth' });
                }
              }
            }
            const hdr = document.querySelector('.header-chapter-title');
            if (hdr) { hdr.textContent = e.target.querySelector('h2,h3')?.textContent || ''; hdr.classList.add('visible'); }
          }
        });
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(s => obs.observe(s));
  }
  return { init };
})();

/* ── CHAPTER CHECKLIST & PROGRESS DASHBOARD ────────────────────────── */
const ChecklistManager = (() => {
  function updateDashboard() {
    const cbs = document.querySelectorAll('.chapter-checklist input[type=checkbox]');
    if (!cbs.length) return;
    const checked = Array.from(cbs).filter(cb => cb.checked).length;
    const pct = Math.round((checked / cbs.length) * 100);
    
    let dash = document.getElementById('syllabus-dashboard');
    if (!dash) {
      dash = document.createElement('div');
      dash.id = 'syllabus-dashboard';
      dash.style.cssText = 'padding:15px; margin: 10px; background:var(--bg-card); border-radius:8px; text-align:center; font-size:12px; font-weight:bold; color:var(--tx-main);';
      const sidebar = document.getElementById('sidebar');
      if (sidebar) sidebar.insertBefore(dash, sidebar.firstChild);
    }
    dash.innerHTML = `🏆 CN Mastery: <span style="color:var(--accent, #46645f)">${pct}%</span> (${checked}/${cbs.length})`;
  }

  function init() {
    const clData = StateManager.get('checklist') || {};
    document.querySelectorAll('.chapter-checklist input[type=checkbox]').forEach(cb => {
      if (clData[cb.id]) cb.checked = true;
      cb.closest('label')?.classList.toggle('done', cb.checked);
      
      cb.addEventListener('change', () => {
        clData[cb.id] = cb.checked;
        StateManager.set('checklist', clData);
        cb.closest('label')?.classList.toggle('done', cb.checked);
        Toast.show(cb.checked ? '✅ Section marked complete!' : '↩ Marked incomplete', 'success');
        updateDashboard();
      });
    });
    updateDashboard();
  }
  return { init };
})();

/* ── BOOKMARKS ─────────────────────────────────────────────────────── */
const BookmarkManager = (() => {
  function list() {
    const value = StateManager.get('bookmarks');
    return Array.isArray(value) ? value : [];
  }

  function toggle(id, label) {
    const bms = list();
    const idx = bms.findIndex(b => b.id === id);
    const safeId = typeof CSS !== 'undefined' && CSS.escape ? CSS.escape(String(id)) : String(id).replace(/[^a-zA-Z0-9_-]/g, '\\$&');
    const btn = document.querySelector(`.bookmark-btn[data-id="${safeId}"]`);
    if (idx >= 0) {
      bms.splice(idx, 1);
      btn?.classList.remove('bookmarked');
      btn?.setAttribute('aria-pressed', 'false');
      if (btn) btn.title = 'Bookmark';
      Toast.show('Bookmark removed', 'info');
    } else {
      bms.push({ id: String(id), label: String(label || id), url: `${location.href.split('#')[0]}#${encodeURIComponent(id)}`, ts: Date.now() });
      btn?.classList.add('bookmarked');
      btn?.setAttribute('aria-pressed', 'true');
      if (btn) btn.title = 'Bookmarked';
      Toast.show('Bookmarked', 'success');
    }
    StateManager.set('bookmarks', bms);
    renderPanel();
  }

  function renderPanel() {
    const panel = document.getElementById('bookmarks-list');
    if (!panel) return;
    panel.replaceChildren();
    const bms = list();
    if (!bms.length) {
      const empty = document.createElement('p');
      empty.className = 'text-xs text-muted';
      empty.textContent = 'No bookmarks yet.';
      panel.appendChild(empty);
      return;
    }
    bms.forEach(bookmark => {
      const a = document.createElement('a');
      a.href = bookmark.url;
      a.className = 'sidebar-link';
      const icon = document.createElement('span');
      icon.className = 'link-icon';
      icon.textContent = '•';
      a.append(icon, document.createTextNode(` ${bookmark.label}`));
      panel.appendChild(a);
    });
  }

  function init() {
    const bms = list();
    document.querySelectorAll('.bookmark-btn').forEach(btn => {
      const active = bms.some(b => b.id === btn.dataset.id);
      btn.classList.toggle('bookmarked', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    renderPanel();
    const urlKey = 'cn-scroll-' + location.pathname;
    try {
      const saved = sessionStorage.getItem(urlKey);
      if (saved) setTimeout(() => Utils.safeScrollTo(Number(saved) || 0), 50);
      window.addEventListener('scroll', Utils.debounce(() => sessionStorage.setItem(urlKey, String(window.scrollY)), 200), { passive: true });
    } catch { /* session storage unavailable */ }
  }
  return { init, toggle };
})();

/* ── SEARCH & COMMAND PALETTE ──────────────────────────────────────── */
const SearchManager = (() => {
  let index = [];
  let modal, input, results;
  function buildIndex() {
    if (index.length) return;
    document.querySelectorAll('[data-search-section], section.content-section').forEach(section => {
      const id = section.id || '';
      const title = section.querySelector('h2,h3,h4')?.textContent?.trim() || section.dataset.searchSection || 'Section';
      const body = (section.textContent || '').replace(/\s+/g, ' ').trim();
      index.push({ id, title, body });
    });
  }
  function clearResults() { results?.replaceChildren(); }
  function addEmpty(message) { clearResults(); const el=document.createElement('div'); el.className='search-empty'; el.textContent=message; results?.appendChild(el); }
  function runCommand(name) {
    const commands = {
      'toggle theme': ThemeManager.toggle,
      'toggle sidebar': SidebarManager.toggle,
      'export data': StateManager.exportData,
      'import data': StateManager.importData,
      'clear storage': () => { try { localStorage.clear(); } finally { location.reload(); } }
    };
    commands[name]?.(); close();
  }
  function executeCommand(query) {
    clearResults();
    const names=['toggle theme','toggle sidebar','export data','import data','clear storage'].filter(name=>name.includes(query));
    if(!names.length) return addEmpty('No commands found.');
    names.forEach(name=>{ const item=document.createElement('button'); item.type='button'; item.className='search-result-item'; item.dataset.cmd=name; item.textContent=`Run: ${name}`; item.addEventListener('click',()=>runCommand(name)); results?.appendChild(item); });
  }
  function search(query) {
    const q=query.trim().toLowerCase();
    if(!q) return clearResults();
    if(q.startsWith('>')) return executeCommand(q.slice(1).trim());
    buildIndex();
    const hits=index.filter(item=>item.title.toLowerCase().includes(q)||item.body.toLowerCase().includes(q)).slice(0,12);
    clearResults();
    if(!hits.length) return addEmpty('No results found.');
    hits.forEach(hit=>{
      const item=document.createElement('button'); item.type='button'; item.className='search-result-item';
      const title=document.createElement('div'); title.className='search-result-title'; title.textContent=hit.title;
      const snippet=document.createElement('div'); snippet.className='search-result-snippet'; const pos=hit.body.toLowerCase().indexOf(q); snippet.textContent=(pos>=0?hit.body.slice(Math.max(0,pos-60),pos+q.length+100):hit.body.slice(0,120))+'…';
      item.append(title,snippet);
      item.addEventListener('click',()=>{ if(hit.id){ document.getElementById(hit.id)?.scrollIntoView({behavior:Utils.isReducedMotion()?'auto':'smooth',block:'start'}); history.replaceState(null,'',`#${encodeURIComponent(hit.id)}`);} close(); });
      results?.appendChild(item);
    });
  }
  function open(){ modal?.classList.add('open'); modal?.setAttribute('aria-hidden','false'); buildIndex(); setTimeout(()=>input?.focus(),0); }
  function close(){ modal?.classList.remove('open'); modal?.setAttribute('aria-hidden','true'); if(input) input.value=''; clearResults(); }
  function init(){
    modal=document.getElementById('search-modal'); input=document.getElementById('search-input'); results=document.getElementById('search-results');
    if(!modal||!input||!results) return;
    modal.setAttribute('role','dialog'); modal.setAttribute('aria-modal','true'); modal.setAttribute('aria-hidden','true');
    document.getElementById('search-btn')?.addEventListener('click',open);
    input.addEventListener('input',Utils.debounce(e=>search(e.target.value),180));
    modal.addEventListener('click',e=>{ if(e.target===modal) close(); });
    input.addEventListener('keydown',e=>{ if(e.key==='ArrowDown'){ const first=results.querySelector('.search-result-item'); if(first){e.preventDefault();first.focus();} } if(e.key==='Escape'){e.preventDefault();close();} });
    results.addEventListener('keydown',e=>{ const items=[...results.querySelectorAll('.search-result-item')]; const idx=items.indexOf(e.target); if(e.key==='ArrowDown'){e.preventDefault();items[idx+1]?.focus();} if(e.key==='ArrowUp'){e.preventDefault();(items[idx-1]||input).focus();} if(e.key==='Escape'){e.preventDefault();close();} });
  }
  return { init, open, close };
})();
window.SearchManager = SearchManager;
window.ThemeManager = ThemeManager;
window.SidebarManager = SidebarManager;
window.BookmarkManager = BookmarkManager;
window.ChecklistManager = ChecklistManager;
window.ProgressBar = ProgressBar;
window.ScrollSpy = ScrollSpy;


/* ── KEYBOARD SHORTCUTS ────────────────────────────────────────────── */
const KeyboardManager = (() => {
  function init() {
    document.addEventListener('keydown', e => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === 'k') { e.preventDefault(); SearchManager.open(); return; }
        if (e.key === 'p') { e.preventDefault(); window.PrintManager?.print(); return; }
      }
      if (e.target.matches?.('input, textarea, select, [contenteditable="true"]')) return;
      switch (e.key.toLowerCase()) {
        case 't': ThemeManager.toggle(); break;
        case 's': SidebarManager.toggle(); break;
        case 'f': ReadingModeManager?.toggle(); break;
        case 'escape':
          SearchManager.close();
          LightboxManager.close();
          ReadingModeManager?.toggle && document.body.classList.contains('reading-mode') && ReadingModeManager.toggle();
          break;
      }
    });
  }
  return { init };
})();

/* ── TOAST NOTIFICATIONS (A11y Friendly) ───────────────────────────── */
const Toast = (() => {
  function show(msg, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.setAttribute('aria-live', 'polite'); // Screen reader announcement
      document.body.appendChild(container);
    }
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.setAttribute('role', type === 'error' || type === 'warn' ? 'alert' : 'status');
    t.textContent = String(msg);
    container.appendChild(t);
    setTimeout(() => { t.style.opacity='0'; t.style.transform='translateX(20px)'; t.style.transition='all 0.3s ease'; }, 2200);
    setTimeout(() => t.remove(), 2600);
  }
  return { show };
})();
window.Toast = Toast;

/* ── EVENT DELEGATION (Copy & Bookmarks) ───────────────────────────── */
function initDelegatedEvents() {
  document.body.addEventListener('click', e => {
    // 1. Copy Buttons
    const copyBtn = e.target.closest('.code-copy');
    if (copyBtn) {
      const pre = copyBtn.closest('.code-block')?.querySelector('pre');
      if (pre) {
        navigator.clipboard.writeText(pre.textContent).then(() => {
          copyBtn.textContent = '✓ Copied!'; copyBtn.style.color = 'var(--success)';
          setTimeout(() => { copyBtn.textContent = 'Copy'; copyBtn.style.color = ''; }, 1800);
        });
      }
    }
    // 2. Bookmark Buttons
    const bmBtn = e.target.closest('.bookmark-btn');
    if (bmBtn) { BookmarkManager.toggle(bmBtn.dataset.id, bmBtn.dataset.label || bmBtn.dataset.id); }
    
    // 3. Image Zoom (Lightbox)
    const img = e.target.closest('img:not(.no-zoom)');
    if (img && !e.target.closest('#sidebar')) { LightboxManager.open(img.src, img.alt); }
  });
}

/* ── LIGHTBOX (Image Zoom) ─────────────────────────────────────────── */
const LightboxManager = (() => {
  let overlay, closeButton, image;
  function ensure(){
    if(overlay) return;
    overlay=document.createElement('div'); overlay.id='lightbox-overlay'; overlay.setAttribute('role','dialog'); overlay.setAttribute('aria-modal','true'); overlay.setAttribute('aria-label','Image viewer'); overlay.setAttribute('tabindex','-1');
    image=document.createElement('img'); image.className='lightbox-image';
    closeButton=document.createElement('button'); closeButton.type='button'; closeButton.className='lightbox-close'; closeButton.setAttribute('aria-label','Close image'); closeButton.textContent='×';
    overlay.append(image,closeButton); document.body.appendChild(overlay); overlay.addEventListener('click',e=>{if(e.target===overlay||e.target===closeButton) close();});
  }
  function open(src,alt){ ensure(); image.src=src; image.alt=alt||''; overlay.classList.add('open'); overlay.setAttribute('aria-hidden','false'); closeButton.focus(); }
  function close(){ if(!overlay) return; overlay.classList.remove('open'); overlay.setAttribute('aria-hidden','true'); }
  return {open,close};
})();

/* ── READING TIME ESTIMATOR ────────────────────────────────────────── */
const ReadingTimeManager = (() => {
  function init() {
    const content = document.getElementById('main-content');
    const header = document.querySelector('.header-title-area');
    if (!content || !header) return;
    
    const text = content.innerText || '';
    const wordCount = text.split(/\s+/).length;
    const mins = Math.max(1, Math.ceil(wordCount / 220)); // Avg 220 wpm
    
    if (header.querySelector('.reading-time-badge')) return;
    const badge = document.createElement('span');
    badge.className = 'reading-time-badge';
    badge.textContent = `~${mins} min read`;
    header.appendChild(badge);
  }
  return { init };
})();

/* ── FLOATING ACTION BUTTON (Scroll to Top) ────────────────────────── */
const FABManager = (() => {
  function init() {
    if (document.getElementById('scroll-top-fab')) return;
    const fab = document.createElement('button');
    fab.id = 'scroll-top-fab';
    fab.className = 'scroll-top-fab';
    fab.type = 'button';
    fab.textContent = '↑';
    fab.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(fab);

    fab.addEventListener('click', () => Utils.safeScrollTo(0));

    window.addEventListener('scroll', Utils.debounce(() => {
      if (window.scrollY > 500) {
        fab.classList.add('is-visible');
      } else {
        fab.classList.remove('is-visible');
      }
    }, 150));
  }
  return { init };
})();

/* ── FONT SIZE & HIGHLIGHTING (Basic Pro Hooks) ────────────────────── */
const DocumentEnhancer = (() => {
  function init() {
    // Apply saved Font Size
    const size = StateManager.get('fontSize');
    if (size !== 16) document.documentElement.style.setProperty('--base-font-size', `${size}px`);

    // Basic Syntax Highlighting Wrapper (Checks for PRISM/HLJS globally)
    if (window.Prism) { document.querySelectorAll('pre code').forEach(el => Prism.highlightElement(el)); }
    else if (window.hljs) { document.querySelectorAll('pre code').forEach(el => hljs.highlightElement(el)); }

    // ── TABLE AUTO-WRAP (responsive horizontal scroll) ──────────────────
    document.querySelectorAll(
      '.content-inner table, .mode-uni table, .mode-gate table, .mode-adv table, section table'
    ).forEach(table => {
      // Skip if already wrapped
      if (table.parentElement?.classList.contains('table-wrap')) return;
      // Skip tiny tables (e.g., inside def-box without min-width issue)
      const wrap = document.createElement('div');
      wrap.className = 'table-wrap';
      table.parentNode.insertBefore(wrap, table);
      wrap.appendChild(table);
    });

    // ── MCQ INTERACTION WIRING ──────────────────────────────────────────
    document.querySelectorAll('.mcq-item').forEach(item => {
      const submitBtn = item.querySelector('.mcq-submit');
      const hintBtn   = item.querySelector('.mcq-hint');
      const explanation = item.querySelector('.mcq-explanation');
      const options   = item.querySelectorAll('.mcq-option');
      const correctAns = item.dataset.correct;

      submitBtn?.addEventListener('click', () => {
        const selected = item.querySelector('.mcq-option input:checked');
        if (!selected) { Toast.show('⚠️ Please select an answer first', 'warn'); return; }
        const selectedVal = selected.value || selected.closest('.mcq-option')?.dataset.val;
        options.forEach(opt => {
          const val = opt.querySelector('input')?.value || opt.dataset.val;
          if (val === correctAns) opt.classList.add('correct-answer');
          if (val === selectedVal && val !== correctAns) opt.classList.add('selected-wrong');
          if (val === selectedVal && val === correctAns) opt.classList.add('selected-correct');
        });
        if (selectedVal === correctAns) {
          item.classList.add('correct');
          Toast.show('✅ Correct!', 'success');
        } else {
          item.classList.add('wrong');
          Toast.show('❌ Incorrect — check the highlighted answer', 'warn');
        }
        if (explanation) explanation.classList.add('visible');
        submitBtn.disabled = true;
      });

      hintBtn?.addEventListener('click', () => {
        if (explanation) explanation.classList.toggle('visible');
      });
    });

    // ── CODE COPY BUTTONS (fallback if not in event delegation) ─────────

  }
  return { init };
})();

/* ── SCROLL REVEAL ─────────────────────────────────────────────────── */
function initScrollReveal() {
  if (Utils.isReducedMotion()) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── OFFLINE CAPABILITY (Service Worker) ───────────────────────────── */
function initOfflineWorker() {
  if ('serviceWorker' in navigator) {
    // Resolve SW path relative to the root (works on GitHub Pages subdirs)
    const swPath = location.pathname.includes('/chapters/') || location.pathname.includes('/exams/')
      ? '../sw.js' : './sw.js';
    navigator.serviceWorker.register(swPath)
      .then(reg => {
        // Check for updates in background
        reg.addEventListener('updatefound', () => {
          const nw = reg.installing;
          nw?.addEventListener('statechange', () => {
            if (nw.state === 'installed' && navigator.serviceWorker.controller) {
              Toast.show('🔄 MiniBook updated! Reload to get latest version.', 'info');
            }
          });
        });
      })
      .catch(e => console.warn('SW registration failed:', e));
  }
}

/* ── READING MODE ───────────────────────────────────────────────────── */
const ReadingModeManager = (() => {
  let isReading = false;

  function createExitBar() {
    if (document.getElementById('reading-exit-bar')) return;
    const bar = document.createElement('div');
    bar.id = 'reading-exit-bar';
    bar.textContent = '📖 Reading Mode  —  Press F or click here to exit';
    bar.setAttribute('role', 'status');
    bar.addEventListener('click', toggle);
    document.body.insertBefore(bar, document.body.firstChild);
  }

  function toggle() {
    isReading = !isReading;
    document.body.classList.toggle('reading-mode', isReading);
    StateManager.set('readingMode', isReading);
    const btn = document.getElementById('reading-mode-btn');
    if (btn) btn.title = isReading ? 'Exit Reading Mode (F)' : 'Reading Mode (F)';
    if (btn) btn.setAttribute('aria-pressed', String(isReading));
    Toast.show(isReading ? '📖 Reading Mode ON — press F to exit' : '↩ Reading Mode OFF', 'info');
  }

  function init() {
    createExitBar();
    // Restore reading mode state
    if (StateManager.get('readingMode')) {
      isReading = true;
      document.body.classList.add('reading-mode');
    }
    document.getElementById('reading-mode-btn')?.addEventListener('click', toggle);
  }

  return { init, toggle };
})();
window.ReadingModeManager = ReadingModeManager;

/* ── SCROLL DEPTH TRACKER ───────────────────────────────────────────── */
function initScrollDepthTracker() {
  const page = location.pathname.split('/').pop() || 'index.html';
  window.addEventListener('scroll', Utils.debounce(() => {
    const el  = document.documentElement;
    const max = el.scrollHeight - el.clientHeight;
    const pct = max > 0 ? Math.round((el.scrollTop / max) * 100) : 0;
    if (pct > 5) StateManager.setReadProgress(page, pct);
  }, 1000), { passive: true });
}

/* ── ARPIT HIDDEN MARKS (every ~12 lines via data attrs) ───────────── */
function embedArpitMarks() { /* retired; compatibility no-op */ }

/* ── INIT SEQUENCE ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  StateManager.init();
  ThemeManager.init();
  SidebarManager.init();
  ProgressBar.init();
  ScrollSpy.init();
  SearchManager.init();
  KeyboardManager.init();
  ChecklistManager.init();
  BookmarkManager.init();
  ReadingModeManager.init();
  initDelegatedEvents();
  initScrollReveal();
  initScrollDepthTracker();
  ReadingTimeManager.init();
  FABManager.init();
  DocumentEnhancer.init();
  embedArpitMarks();
  initOfflineWorker();

  // Button hooks
  document.getElementById('sidebar-toggle')?.addEventListener('click', SidebarManager.toggle);
  document.getElementById('theme-toggle')?.addEventListener('click', ThemeManager.toggle);

  // Export/Import from search command palette
  window._stateExport = () => StateManager.exportData();
  window._stateImport = () => StateManager.importData();
});