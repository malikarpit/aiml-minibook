/**
 * Engineering Minibooks · Computer Networks
 * notes.js — local, inline annotations with accessible editorial UI.
 *
 * Compatibility contract preserved:
 *   window.NotesManager
 *   NotesManager.init()
 *   NotesManager.getAllNotes()
 *   NotesManager.deleteNote()
 *   NotesManager.exportNotes()
 *   NotesManager.importNotes()
 *
 * Storage keys are preserved for existing notebooks.
 */
'use strict';

const NotesManager = (() => {
  const STORE_KEY = 'aiml-notes-v1';
  const LEGACY_STORE_KEY = 'cn-notes-v1';
  const PAGE = location.pathname.split('/').pop() || 'index';

  // Engineering Minibooks annotation palette: restrained, semantic, theme-safe.
  const COLORS = [
    { value: '#7A6035', label: 'Ochre' },
    { value: '#5E654F', label: 'Olive' },
    { value: '#536A7E', label: 'Mineral blue' },
    { value: '#805F4B', label: 'Clay' },
    { value: '#6C5A67', label: 'Dusty plum' }
  ];

  const LEGACY_COLOR_MAP = {
    '#fbbf24': '#7A6035',
    '#34d399': '#5E654F',
    '#60a5fa': '#536A7E',
    '#f87171': '#805F4B',
    '#a78bfa': '#6C5A67'
  };

  let notes = {};
  let popover = null;
  let addBtn = null;
  let currentRange = null;
  let currentText = '';
  let focusReturnEl = null;
  let initialized = false;
  let isMarking = false;

  function debounce(fn, wait = 300) {
    let timeout = null;
    return (...args) => {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => fn(...args), wait);
    };
  }

  function normalizeColor(value) {
    const input = String(value || '').trim().toLowerCase();
    if (LEGACY_COLOR_MAP[input]) return LEGACY_COLOR_MAP[input];
    const valid = COLORS.some((item) => item.value.toLowerCase() === input);
    return valid ? value : COLORS[0].value;
  }

  function normalizeNote(raw) {
    if (!raw || typeof raw !== 'object') return null;

    const selectedText = String(raw.selectedText ?? raw.text ?? '').trim();
    const noteText = String(raw.noteText ?? raw.note ?? '').trim();
    const page = String(raw.page ?? '').trim();
    if (!selectedText || !noteText || !page) return null;

    const ts = Number.isFinite(Number(raw.ts)) ? Number(raw.ts) : Date.now();

    return {
      selectedText,
      noteText,
      color: normalizeColor(raw.color),
      page,
      ts
    };
  }

  function normalizeCollection(input) {
    const source = input && typeof input === 'object' && !Array.isArray(input) ? input : {};
    const output = {};

    Object.entries(source).forEach(([id, raw]) => {
      const note = normalizeNote(raw);
      if (note) output[String(id)] = note;
    });

    return output;
  }

  function load() {
    try {
      const current = localStorage.getItem(STORE_KEY);
      const legacy = localStorage.getItem(LEGACY_STORE_KEY);
      notes = normalizeCollection(JSON.parse(current || legacy || '{}'));

      // Quietly migrate legacy values if the current store was absent.
      if (!current && legacy && Object.keys(notes).length) {
        localStorage.setItem(STORE_KEY, JSON.stringify(notes));
      }
    } catch (error) {
      console.warn('NotesManager: unable to load notes.', error);
      notes = {};
    }
  }

  function save() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(notes));
      return true;
    } catch (error) {
      console.error('NotesManager: unable to save notes.', error);
      if (window.Toast) Toast.show('Notes could not be saved in browser storage.', 'error');
      return false;
    }
  }

  function makeId(text) {
    // Preserve the original ID algorithm so existing notes remain addressable.
    return 'n-' + [...String(text).slice(0, 40)]
      .reduce((acc, char) => ((acc << 5) - acc) + char.charCodeAt(0) | 0, 0)
      .toString(36)
      .replace('-', 'x');
  }

  function createElement(tag, props = {}, text = null) {
    const el = document.createElement(tag);
    Object.entries(props).forEach(([key, value]) => {
      if (value == null) return;
      if (key === 'className') el.className = value;
      else if (key === 'textContent') el.textContent = value;
      else if (key === 'style' && typeof value === 'object') Object.assign(el.style, value);
      else if (key === 'dataset' && typeof value === 'object') {
        Object.entries(value).forEach(([k, v]) => { el.dataset[k] = String(v); });
      } else if (key in el) {
        try { el[key] = value; } catch { el.setAttribute(key, String(value)); }
      } else {
        el.setAttribute(key, String(value));
      }
    });
    if (text != null) el.textContent = text;
    return el;
  }

  function toast(message, type = 'info') {
    if (window.Toast?.show) window.Toast.show(message, type);
  }

  function createAddBtn() {
    if (addBtn) return addBtn;
    addBtn = createElement('button', {
      id: 'note-add-btn',
      type: 'button',
      className: 'note-add-action',
      'aria-label': 'Add a note to the selected text'
    });
    addBtn.textContent = 'Add note';
    document.body.appendChild(addBtn);
    addBtn.addEventListener('click', openNotePopover);
    return addBtn;
  }

  function showAddBtn(rect) {
    const button = createAddBtn();
    const halfWidth = (button.offsetWidth || 96) / 2;
    const center = rect.left + (rect.width / 2);
    const left = Math.min(
      Math.max(center, halfWidth + 12),
      window.innerWidth - halfWidth - 12
    );
    const top = Math.max(rect.top + window.scrollY - 42, 12 + window.scrollY);

    button.style.left = `${left}px`;
    button.style.top = `${top}px`;
    button.classList.add('visible');
  }

  function hideAddBtn() {
    addBtn?.classList.remove('visible');
  }

  function closePopover(options = {}) {
    const { restoreFocus = true } = options;
    if (popover) popover.remove();
    popover = null;
    currentRange = null;
    currentText = '';

    if (restoreFocus && focusReturnEl?.isConnected) {
      try { focusReturnEl.focus(); } catch { /* non-fatal */ }
    }
    focusReturnEl = null;
  }

  function placePopover(anchorRect, element) {
    const margin = 12;
    const gap = 8;
    const width = Math.min(element.offsetWidth || 320, window.innerWidth - (margin * 2));
    const height = element.offsetHeight || 220;

    let left = anchorRect.left + window.scrollX;
    let top = anchorRect.bottom + window.scrollY + gap;

    left = Math.min(left, window.innerWidth + window.scrollX - width - margin);
    left = Math.max(left, window.scrollX + margin);

    const viewportBottom = window.scrollY + window.innerHeight - margin;
    if (top + height > viewportBottom) {
      const above = anchorRect.top + window.scrollY - height - gap;
      if (above >= window.scrollY + margin) top = above;
    }

    element.style.left = `${left}px`;
    element.style.top = `${top}px`;
  }

  function buildColorPicker(selectedColor) {
    const wrapper = createElement('div', {
      className: 'note-pop-colors',
      role: 'group',
      'aria-label': 'Annotation colour'
    });

    let chosen = normalizeColor(selectedColor);
    const buttons = [];

    COLORS.forEach((color, index) => {
      const button = createElement('button', {
        type: 'button',
        className: 'note-color-btn',
        dataset: { color: color.value, label: color.label },
        title: color.label,
        'aria-label': `Use ${color.label} annotation colour`,
        'aria-pressed': color.value === chosen ? 'true' : 'false'
      });
      button.style.backgroundColor = color.value;
      if (color.value === chosen) button.classList.add('active');

      button.addEventListener('click', () => {
        chosen = color.value;
        buttons.forEach((item) => {
          const active = item.dataset.color === chosen;
          item.classList.toggle('active', active);
          item.setAttribute('aria-pressed', String(active));
        });
      });

      buttons.push(button);
      wrapper.appendChild(button);

      if (index === 0) button.dataset.defaultOption = 'true';
    });

    return { element: wrapper, getValue: () => chosen };
  }

  function buildNotePopover({ noteId, note, quote, title, anchorRect }) {
    const root = createElement('div', {
      id: 'note-popover',
      role: 'dialog',
      'aria-modal': 'false',
      'aria-labelledby': 'note-pop-title',
      dataset: { noteId }
    });

    const header = createElement('div', { className: 'note-pop-header' });
    const heading = createElement('span', { id: 'note-pop-title', className: 'note-pop-title' }, title);
    const close = createElement('button', {
      id: 'note-pop-close',
      type: 'button',
      className: 'icon-btn note-pop-close',
      'aria-label': 'Close note editor'
    }, '×');
    header.append(heading, close);

    const quoteEl = createElement('div', { className: 'note-pop-quote' });
    quoteEl.textContent = `“${quote.slice(0, 120)}${quote.length > 120 ? '…' : ''}”`;

    const label = createElement('label', { className: 'note-pop-label', htmlFor: 'note-pop-text' }, 'Your note');
    const textarea = createElement('textarea', {
      id: 'note-pop-text',
      rows: 5,
      placeholder: 'Write a short explanation, reminder, or connection…',
      spellcheck: true,
      autocomplete: 'off'
    });
    textarea.value = note?.noteText || '';

    const colorPicker = buildColorPicker(note?.color);

    const actions = createElement('div', { className: 'note-pop-actions' });
    const saveButton = createElement('button', {
      id: 'note-pop-save',
      type: 'button',
      className: 'note-btn-primary'
    }, note ? 'Save changes' : 'Save note');
    actions.appendChild(saveButton);

    if (note) {
      const deleteButton = createElement('button', {
        id: 'note-pop-delete',
        type: 'button',
        className: 'note-btn-danger'
      }, 'Delete');
      actions.appendChild(deleteButton);
      deleteButton.addEventListener('click', () => {
        deleteNote(noteId);
        closePopover();
      });
    }

    root.append(header, quoteEl, label, textarea, colorPicker.element, actions);
    document.body.appendChild(root);

    close.addEventListener('click', () => closePopover());
    saveButton.addEventListener('click', () => {
      const value = textarea.value.trim();
      if (!value) {
        toast('Write a note before saving.', 'warning');
        textarea.focus();
        return;
      }
      saveNote(noteId, quote, value, colorPicker.getValue(), note?.page || PAGE);
      closePopover();
    });

    root.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closePopover();
      }
      if (event.key === 'Enter' && (event.metaKey || event.ctrlKey) && event.target === textarea) {
        event.preventDefault();
        saveButton.click();
      }
    });

    requestAnimationFrame(() => {
      placePopover(anchorRect, root);
      textarea.focus();
    });

    return root;
  }

  function openNotePopover() {
    if (!currentText || !currentRange) return;
    hideAddBtn();
    closePopover({ restoreFocus: false });

    const noteId = makeId(currentText);
    const existing = notes[noteId];
    focusReturnEl = addBtn;
    buildNotePopover({
      noteId,
      note: existing,
      quote: currentText,
      title: existing ? 'Edit note' : 'Add note',
      anchorRect: currentRange.getBoundingClientRect()
    });
  }

  function openNotePopoverForExisting(noteId, markEl) {
    const note = notes[noteId];
    if (!note) return;

    closePopover({ restoreFocus: false });
    hideAddBtn();
    focusReturnEl = markEl;
    currentText = note.selectedText;
    currentRange = null;

    buildNotePopover({
      noteId,
      note,
      quote: note.selectedText,
      title: 'Edit note',
      anchorRect: markEl.getBoundingClientRect()
    });
  }

  function saveNote(noteId, selectedText, noteText, color, page = PAGE) {
    const normalized = normalizeNote({ selectedText, noteText, color, page, ts: Date.now() });
    if (!normalized) {
      toast('The note could not be saved.', 'error');
      return;
    }

    notes[noteId] = normalized;
    if (!save()) return;

    debouncedRenderMarks();
    renderSidebarPanel();
    window.dispatchEvent(new CustomEvent('cn:notes-changed', { detail: { noteId, action: 'save' } }));
    toast('Note saved.', 'success');
  }

  function deleteNote(noteId) {
    if (!Object.prototype.hasOwnProperty.call(notes, noteId)) return;
    delete notes[noteId];
    if (!save()) return;

    debouncedRenderMarks();
    renderSidebarPanel();
    window.dispatchEvent(new CustomEvent('cn:notes-changed', { detail: { noteId, action: 'delete' } }));
    toast('Note deleted.', 'info');
  }

  function shouldSkipElement(element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return true;
    if (element.closest('#sidebar, #main-header, #note-popover, #note-add-btn, script, style, textarea, input, select, button, a')) return true;
    if (element.closest('.glossary-tooltip, .glossary-term')) return true;
    if (element.closest('[contenteditable="true"], [data-no-annotate], .note-mark')) return true;
    return false;
  }

  function renderAllNoteMarks() {
    if (isMarking) return;
    const main = document.getElementById('main-content');
    if (!main) return;

    isMarking = true;
    try {
      document.querySelectorAll('.note-mark').forEach((mark) => {
        const parent = mark.parentNode;
        if (parent) {
          parent.replaceChild(document.createTextNode(mark.textContent || ''), mark);
          parent.normalize();
        }
      });

      Object.entries(notes).forEach(([noteId, note]) => {
        if (note.page !== PAGE) return;
        markText(main, note.selectedText, noteId, note.color, note.noteText);
      });
    } catch (error) {
      console.error('NotesManager: render marks failed.', error);
    } finally {
      isMarking = false;
    }
  }

  function markText(container, searchText, noteId, color, noteText) {
    const query = String(searchText || '').trim();
    if (query.length < 3) return;

    try {
      const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);

      for (const node of nodes) {
        const parent = node.parentElement;
        if (!parent || shouldSkipElement(parent)) continue;

        const content = node.textContent || '';
        const index = content.indexOf(query);
        if (index === -1) continue;

        const fragment = document.createDocumentFragment();
        if (index > 0) fragment.appendChild(document.createTextNode(content.slice(0, index)));

        const mark = createElement('mark', {
          className: 'note-mark',
          dataset: { noteId },
          title: `Note: ${noteText}`,
          tabIndex: 0,
          'aria-label': `Annotated text. Note: ${noteText}`
        });
        mark.textContent = query;
        mark.style.setProperty('--note-color', color);
        mark.style.borderBottomColor = color;
        mark.style.backgroundColor = `color-mix(in srgb, ${color} 18%, transparent)`;

        const remainder = content.slice(index + query.length);
        fragment.appendChild(mark);
        if (remainder) fragment.appendChild(document.createTextNode(remainder));

        node.parentNode.replaceChild(fragment, node);

        const open = (event) => {
          event.preventDefault();
          event.stopPropagation();
          openNotePopoverForExisting(noteId, mark);
        };
        mark.addEventListener('click', open);
        mark.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') open(event);
        });
        break;
      }
    } catch (error) {
      console.error('NotesManager: markText failed.', error);
    }
  }

  const debouncedRenderMarks = debounce(renderAllNoteMarks, 450);

  function cssEscape(value) {
    if (window.CSS?.escape) return window.CSS.escape(String(value));
    return String(value).replace(/[^a-zA-Z0-9_-]/g, (char) => `\\${char.charCodeAt(0).toString(16)} `);
  }

  function renderSidebarPanel() {
    const panel = document.getElementById('notes-sidebar-list');
    if (!panel) return;

    panel.replaceChildren();
    const pageNotes = Object.entries(notes)
      .filter(([, note]) => note.page === PAGE)
      .sort((a, b) => b[1].ts - a[1].ts);

    if (!pageNotes.length) {
      const empty = createElement('p', { className: 'text-xs text-muted' }, 'No notes on this page yet.');
      empty.style.padding = '8px 12px';
      panel.appendChild(empty);
      return;
    }

    pageNotes.forEach(([id, note]) => {
      const item = createElement('div', {
        className: 'note-sidebar-item',
        dataset: { id },
        role: 'button',
        tabIndex: 0,
        'aria-label': `Open note: ${note.noteText}`
      });

      const swatch = createElement('div', { className: 'note-sidebar-color' });
      swatch.style.backgroundColor = note.color;

      const body = createElement('div', { className: 'note-sidebar-body' });
      const quote = createElement('div', { className: 'note-sidebar-quote' });
      quote.textContent = `“${note.selectedText.slice(0, 52)}${note.selectedText.length > 52 ? '…' : ''}”`;
      const noteText = createElement('div', { className: 'note-sidebar-text' });
      noteText.textContent = `${note.noteText.slice(0, 72)}${note.noteText.length > 72 ? '…' : ''}`;
      body.append(quote, noteText);
      item.append(swatch, body);

      const openFromSidebar = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const mark = document.querySelector(`.note-mark[data-note-id="${cssEscape(id)}"]`);
        if (mark) {
          mark.scrollIntoView({ behavior: 'smooth', block: 'center' });
          window.setTimeout(() => openNotePopoverForExisting(id, mark), 180);
        } else {
          toast('The original highlighted text could not be located on this page.', 'warning');
        }
      };

      item.addEventListener('click', openFromSidebar);
      item.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') openFromSidebar(event);
      });
      panel.appendChild(item);
    });
  }

  function getAllNotes() {
    return { ...notes };
  }

  function exportNotes() {
    try {
      const payload = {
        format: 'engineering-minibooks-notes',
        version: 1,
        exportedAt: new Date().toISOString(),
        notes
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = `cn-notes-backup-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(url);
      toast('Notes exported.', 'success');
    } catch (error) {
      console.error('NotesManager: export failed.', error);
      toast('Notes export failed.', 'error');
    }
  }

  function importNotes() {
    try {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json,application/json';
      input.addEventListener('change', () => {
        const file = input.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
          try {
            const parsed = JSON.parse(String(reader.result || '{}'));
            const incoming = parsed?.notes && typeof parsed.notes === 'object' ? parsed.notes : parsed;
            const normalized = normalizeCollection(incoming);
            if (!Object.keys(normalized).length) throw new Error('No valid notes found');

            notes = { ...notes, ...normalized };
            if (!save()) return;
            renderSidebarPanel();
            debouncedRenderMarks();
            window.dispatchEvent(new CustomEvent('cn:notes-changed', { detail: { action: 'import' } }));
            toast('Notes imported.', 'success');
          } catch (error) {
            console.error('NotesManager: import validation failed.', error);
            toast('The selected file is not a valid notes backup.', 'error');
          }
        };
        reader.onerror = () => toast('Could not read the selected file.', 'error');
        reader.readAsText(file);
      }, { once: true });
      input.click();
    } catch (error) {
      console.error('NotesManager: import failed.', error);
    }
  }

  function isInsideMainContent(range) {
    if (!range) return false;
    const node = range.commonAncestorContainer;
    if (node?.nodeType === Node.ELEMENT_NODE) return Boolean(node.closest('#main-content'));
    return Boolean(node?.parentElement?.closest('#main-content'));
  }

  function initSelectionListener() {
    document.addEventListener('mouseup', (event) => {
      if (event.target.closest?.('#note-popover, #note-add-btn, .note-mark')) return;

      const selection = window.getSelection();
      if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
        hideAddBtn();
        return;
      }

      const text = selection.toString().trim();
      if (text.length < 3 || text.length > 500) {
        hideAddBtn();
        return;
      }

      const range = selection.getRangeAt(0);
      if (!isInsideMainContent(range)) {
        hideAddBtn();
        return;
      }

      currentText = text;
      currentRange = range.cloneRange();
      showAddBtn(range.getBoundingClientRect());
    });

    document.addEventListener('mousedown', (event) => {
      if (event.target.closest?.('#note-popover, #note-add-btn, .note-mark')) return;
      closePopover({ restoreFocus: false });
      if (!event.target.closest?.('#main-content')) hideAddBtn();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        const hadPopover = Boolean(popover);
        closePopover();
        hideAddBtn();
        if (hadPopover) event.stopPropagation();
      }
    });

    window.addEventListener('resize', () => {
      hideAddBtn();
      if (popover) {
        const anchor = document.querySelector(`.note-mark[data-note-id="${cssEscape(popover.dataset?.noteId || '')}"]`);
        if (anchor) placePopover(anchor.getBoundingClientRect(), popover);
      }
    });
  }

  function init() {
    if (initialized) return;
    initialized = true;
    try {
      load();
      initSelectionListener();
      renderAllNoteMarks();
      renderSidebarPanel();
    } catch (error) {
      console.error('NotesManager: initialization failed.', error);
    }
  }

  return { init, getAllNotes, deleteNote, exportNotes, importNotes };
})();

window.NotesManager = NotesManager;
document.addEventListener('DOMContentLoaded', () => NotesManager.init());
