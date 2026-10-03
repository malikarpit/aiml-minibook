/**
 * Engineering Minibooks · print/export controller
 * Preserves PrintManager.init() and PrintManager.print().
 */
'use strict';

(() => {
  let initialized = false;
  let printing = false;
  let cleanupTimer = null;
  let previousTitle = '';
  let previousDetails = [];

  function rememberAndOpenDetails() {
    previousDetails = [];
    document.querySelectorAll('details').forEach(details => {
      const wasOpen = details.open;
      previousDetails.push({ details, wasOpen });
      details.open = true;
    });
  }

  function restoreDetails() {
    previousDetails.forEach(({ details, wasOpen }) => { details.open = wasOpen; });
    previousDetails = [];
  }

  function chapterTitle() {
    return (document.querySelector('.chapter-title, h1.chapter-title')?.textContent ||
      document.querySelector('h1')?.textContent ||
      document.title || 'Engineering Minibooks').trim();
  }

  function injectHeader() {
    document.getElementById('print-header-inject')?.remove();

    const main = document.getElementById('main-content');
    if (!main) return;

    const wrap = document.createElement('div');
    wrap.id = 'print-header-inject';
    wrap.setAttribute('aria-hidden', 'true');

    const brand = document.createElement('div');
    brand.className = 'print-book-header';

    const book = document.createElement('div');
    book.className = 'print-logo';
    book.textContent = 'ENGINEERING MINIBOOKS';

    const meta = document.createElement('div');
    meta.className = 'print-meta';
    meta.textContent = 'Computer Networks';

    brand.append(book, meta);

    const title = document.createElement('h1');
    title.className = 'print-chapter-title';
    title.textContent = chapterTitle();

    const date = document.createElement('div');
    date.className = 'print-date';
    date.textContent = `Exported ${new Intl.DateTimeFormat('en-IN', { dateStyle: 'long' }).format(new Date())}`;

    const rule = document.createElement('hr');
    rule.className = 'print-divider';

    wrap.append(brand, title, date, rule);
    main.insertBefore(wrap, main.firstChild);
  }

  function removeHeader() {
    document.getElementById('print-header-inject')?.remove();
  }

  function cleanup() {
    if (!printing) return;
    printing = false;
    if (cleanupTimer) { clearTimeout(cleanupTimer); cleanupTimer = null; }
    restoreDetails();
    removeHeader();
    document.body.classList.remove('print-mode');
    if (previousTitle) document.title = previousTitle;
    previousTitle = '';
    window.removeEventListener('afterprint', cleanup);
  }

  function print() {
    if (printing) return;
    printing = true;
    previousTitle = document.title;

    rememberAndOpenDetails();
    injectHeader();
    document.body.classList.add('print-mode');
    document.title = `${chapterTitle()} — Engineering Minibooks`;

    window.addEventListener('afterprint', cleanup, { once: true });

    window.setTimeout(() => {
      try { window.print(); }
      catch (error) { console.warn('Print request failed:', error); cleanup(); return; }
      cleanupTimer = window.setTimeout(cleanup, 12000);
    }, 120);
  }

  function init() {
    if (initialized) return;
    initialized = true;
    const btn = document.getElementById('print-btn');
    if (btn && btn.dataset.printBound !== '1') {
      btn.dataset.printBound = '1';
      btn.addEventListener('click', print);
    }
  }

  const API = { init, print };
  window.PrintManager = API;
  document.addEventListener('DOMContentLoaded', init, { once: true });
})();
