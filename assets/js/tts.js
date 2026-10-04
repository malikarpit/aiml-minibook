/*
 * tts-pro-add-now.js
 * Premium TTS engine focused on core add-now features:
 * - SSML-lite preprocessing
 * - Queue + multi-document reading
 * - Semantic chunking
 * - Better resume recovery
 * - Proper state machine
 * - Error taxonomy
 * - DOM mutation protection
 * - Memory cleanup
 * - Hardened pronunciation dictionary
 * - Mini floating player
 */

(function (global) {
  'use strict';

  let compatBootstrapDone = false;

  const DEFAULT_SELECTORS_TO_REMOVE = [
    '.mode-hidden', '.tts-section-btn', '.bookmark-btn', '.code-copy', '.sr-only',
    'button', 'script', 'style', 'noscript', 'nav', 'header', 'aside',
    '#sidebar', '#mobile-nav', '#mode-panel', '#tts-panel', '#pomodoro',
    '#search-modal', '.sidebar-nav', '[aria-hidden="true"]', '[data-tts-ignore="true"]',
    'svg', 'img'
  ];

  const STATES = Object.freeze({
    IDLE: 'IDLE',
    LOADING_VOICES: 'LOADING_VOICES',
    READY: 'READY',
    BUFFERING: 'BUFFERING',
    PLAYING: 'PLAYING',
    PAUSED: 'PAUSED',
    SEEKING: 'SEEKING',
    STOPPED: 'STOPPED',
    ENDED: 'ENDED',
    ERROR: 'ERROR'
  });

  const ERROR_CODES = Object.freeze({
    UNSUPPORTED: 'UNSUPPORTED',
    VOICE_NOT_FOUND: 'VOICE_NOT_FOUND',
    EMPTY_TEXT: 'EMPTY_TEXT',
    AUDIO_INTERRUPTED: 'AUDIO_INTERRUPTED',
    ENGINE_TIMEOUT: 'ENGINE_TIMEOUT',
    DOM_CHANGED: 'DOM_CHANGED',
    SESSION_NOT_FOUND: 'SESSION_NOT_FOUND',
    INVALID_BOOKMARK: 'INVALID_BOOKMARK',
    INVALID_STATE_TRANSITION: 'INVALID_STATE_TRANSITION',
    SPEAK_ERROR: 'SPEAK_ERROR'
  });

  const DEFAULTS = {
    lang: null,
    voiceURI: null,
    rate: 1,
    pitch: 1,
    volume: 1,
    chunkSize: 260,
    rootSelector: '#main-content',
    clickableStartSelector: 'p, li, blockquote, h1, h2, h3, h4, h5, h6',
    sectionButtonSelector: '.tts-section-btn',
    removeSelectors: DEFAULT_SELECTORS_TO_REMOVE,
    persist: true,
    autoInit: true,
    autoSaveSession: true,
    keyboardShortcut: true,
    clickableStart: false,
    enableMutationProtection: true,
    enableHighlighting: true,
    pronunciationDictionary: {},
    ssml: true,
    storageKey: 'tts-add-now-settings',
    sessionKey: 'tts-add-now-session',
    bookmarksKey: 'tts-add-now-bookmarks',
    queueKey: 'tts-add-now-queue',
    maxAutoRetries: 1,
    watchdogMs: 25000,
    onToast: null,
    debug: false
  };

  function canUseStorage() {
    try {
      const key = '__tts_test__';
      localStorage.setItem(key, '1');
      localStorage.removeItem(key);
      return true;
    } catch (_) {
      return false;
    }
  }

  function safeJsonParse(raw, fallback) {
    try { return JSON.parse(raw); } catch (_) { return fallback; }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  class BrowserTTSProvider {
    constructor(engine) { this.engine = engine; this.name = 'browser'; }
    isAvailable() { return 'speechSynthesis' in global && 'SpeechSynthesisUtterance' in global; }
    speak(payload) {
      const utter = new SpeechSynthesisUtterance(payload.text);
      if (payload.voice) utter.voice = payload.voice;
      if (payload.lang) utter.lang = payload.lang;
      utter.rate = payload.rate;
      utter.pitch = payload.pitch;
      utter.volume = payload.volume;
      utter.onstart = payload.onstart;
      utter.onboundary = payload.onboundary;
      utter.onend = payload.onend;
      utter.onerror = payload.onerror;
      global.speechSynthesis.speak(utter);
      return utter;
    }
    pause() { global.speechSynthesis.pause(); }
    resume() { global.speechSynthesis.resume(); }
    cancel() { global.speechSynthesis.cancel(); }
  }

  class TTSStateMachine {
    constructor(initial = STATES.IDLE) {
      this.state = initial;
      this.allowed = {
        [STATES.IDLE]: [STATES.LOADING_VOICES, STATES.READY, STATES.ERROR],
        [STATES.LOADING_VOICES]: [STATES.READY, STATES.ERROR],
        [STATES.READY]: [STATES.BUFFERING, STATES.PLAYING, STATES.STOPPED, STATES.ERROR, STATES.SEEKING],
        [STATES.BUFFERING]: [STATES.PLAYING, STATES.ERROR, STATES.STOPPED],
        [STATES.PLAYING]: [STATES.PAUSED, STATES.SEEKING, STATES.ENDED, STATES.STOPPED, STATES.ERROR],
        [STATES.PAUSED]: [STATES.PLAYING, STATES.SEEKING, STATES.STOPPED, STATES.ERROR],
        [STATES.SEEKING]: [STATES.PLAYING, STATES.ERROR, STATES.STOPPED],
        [STATES.STOPPED]: [STATES.READY, STATES.BUFFERING, STATES.PLAYING, STATES.ERROR],
        [STATES.ENDED]: [STATES.READY, STATES.BUFFERING, STATES.PLAYING, STATES.ERROR],
        [STATES.ERROR]: [STATES.READY, STATES.STOPPED, STATES.LOADING_VOICES]
      };
    }
    transition(next) {
      if (this.state === next) return true;
      const allowed = this.allowed[this.state] || [];
      if (!allowed.includes(next)) return false;
      this.state = next;
      return true;
    }
    getState() { return this.state; }
  }

  class TTSEngine extends EventTarget {
    constructor(options = {}) {
      super();
      this.options = { ...DEFAULTS, ...options };
      this.storageAvailable = canUseStorage();
      this.provider = new BrowserTTSProvider(this);
      this.supported = this.provider.isAvailable();
      this.synth = this.supported ? global.speechSynthesis : null;
      this.stateMachine = new TTSStateMachine();
      this.voices = [];
      this.queue = [];
      this.documentQueue = this._loadStored(this.options.queueKey, []);
      this.bookmarks = this._loadStored(this.options.bookmarksKey, []);
      this.settings = {
        lang: this.options.lang,
        voiceURI: this.options.voiceURI,
        rate: this.options.rate,
        pitch: this.options.pitch,
        volume: this.options.volume
      };
      this.currentText = '';
      this.currentChunks = [];
      this.currentChunkIndex = -1;
      this.currentLocator = null;
      this.boundaryIndex = 0;
      this.currentSession = null;
      this.lastSession = this._loadStored(this.options.sessionKey, null);
      this.currentUtterance = null;
      this.retryCount = 0;
      this.watchdogTimer = null;
      this.mutationObserver = null;
      this.cleanupFns = [];
      this.highlightState = null;
      this._loadPersistedSettings();
      this._voicesChangedHandler = this.loadVoices.bind(this);
    }

    log(...args) { if (this.options.debug) console.log('[TTS]', ...args); }

    async init() {
      if (!this.supported) return this._fail(ERROR_CODES.UNSUPPORTED, 'Speech synthesis unsupported');
      this._transition(STATES.LOADING_VOICES);
      await this.loadVoices();
      if (this.synth) this.synth.addEventListener('voiceschanged', this._voicesChangedHandler);
      this._transition(STATES.READY);
      return true;
    }

    async loadVoices() {
      if (!this.synth) return [];
      const available = this.synth.getVoices() || [];
      this.voices = available.slice().sort((a, b) => this.rankVoice(b) - this.rankVoice(a));
      this._ensureValidVoice();
      this.dispatchEvent(new CustomEvent('voiceschanged', { detail: this.voices.slice() }));
      return this.voices;
    }

    rankVoice(voice) {
      if (!voice) return 0;
      let score = 0;
      const name = (voice.name || '').toLowerCase();
      const lang = (voice.lang || '').toLowerCase();
      if (voice.default) score += 20;
      if (this.settings.lang && lang.startsWith(this.settings.lang.toLowerCase())) score += 25;
      if (/natural|neural|premium|enhanced/.test(name)) score += 8;
      if (/google|microsoft|alex|samantha/.test(name)) score += 5;
      if (/compact|robot|espeak/.test(name)) score -= 6;
      return score;
    }

    getRecommendedVoices(limit = 5) {
      return this.voices.map(voice => ({ voice, score: this.rankVoice(voice) })).sort((a, b) => b.score - a.score).slice(0, limit);
    }

    getState() { return this.stateMachine.getState(); }
    getSettings() { return { ...this.settings }; }
    getQueue() { return this.documentQueue.slice(); }
    getBookmarks() { return this.bookmarks.slice(); }
    getProgress() {
      const total = this.currentChunks.length || 0;
      return {
        chunkIndex: this.currentChunkIndex,
        totalChunks: total,
        boundaryIndex: this.boundaryIndex,
        percent: total ? Math.round(((this.currentChunkIndex + 1) / total) * 100) : 0
      };
    }

    setVoice(voiceOrURI) {
      const voice = typeof voiceOrURI === 'string' ? this.voices.find(v => v.voiceURI === voiceOrURI) : voiceOrURI;
      if (!voice) return this._fail(ERROR_CODES.VOICE_NOT_FOUND, 'Selected voice not found', false);
      this.settings.voiceURI = voice.voiceURI;
      this.settings.lang = voice.lang || this.settings.lang;
      this._persistSettings();
      this.dispatchEvent(new CustomEvent('voicechange', { detail: voice }));
      return true;
    }

    setRate(v) { this.settings.rate = Math.min(2, Math.max(0.5, Number(v) || 1)); this._persistSettings(); this._emitSettings(); }
    setPitch(v) { this.settings.pitch = Math.min(2, Math.max(0, Number(v) || 1)); this._persistSettings(); this._emitSettings(); }
    setVolume(v) { this.settings.volume = Math.min(1, Math.max(0, Number(v) || 1)); this._persistSettings(); this._emitSettings(); }
    setLanguage(v) { this.settings.lang = v || null; this._persistSettings(); this._emitSettings(); }
    setPronunciationDictionary(dict = {}) { this.options.pronunciationDictionary = { ...this.options.pronunciationDictionary, ...dict }; }

    addToQueue(item) {
      if (!item) return false;
      this.documentQueue.push({
        id: item.id || `doc-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        label: item.label || item.source || 'Queued item',
        text: item.text || null,
        locator: item.locator || null,
        source: item.source || 'queue',
        queuedAt: new Date().toISOString()
      });
      this._persistQueue();
      this.dispatchEvent(new CustomEvent('queuechange', { detail: this.getQueue() }));
      return true;
    }

    clearQueue() {
      this.documentQueue = [];
      this._persistQueue();
      this.dispatchEvent(new CustomEvent('queuechange', { detail: [] }));
    }

    playQueue(startIndex = 0) {
      const next = this.documentQueue[startIndex];
      if (!next) return false;
      return this.speak(next.text || '', { source: next.source || 'queue', label: next.label, locator: next.locator, queueIndex: startIndex, playRemainingQueue: true });
    }

    speak(text, metadata = {}) {
      const prepared = this.prepareText(text, metadata);
      if (!prepared.text) return this._fail(ERROR_CODES.EMPTY_TEXT, 'No readable text found', false);
      this.stop(false);
      this.currentText = prepared.text;
      this.currentChunks = prepared.chunks;
      this.currentChunkIndex = -1;
      this.boundaryIndex = 0;
      this.currentLocator = metadata.locator || null;
      this.currentSession = {
        id: `tts-${Date.now()}`,
        text: prepared.text,
        label: metadata.label || metadata.source || 'Text',
        source: metadata.source || 'text',
        locator: metadata.locator || null,
        chunkIndex: 0,
        boundaryIndex: 0,
        totalChunks: prepared.chunks.length,
        rootFingerprint: metadata.rootFingerprint || this._fingerprint(prepared.text),
        startedAt: new Date().toISOString()
      };
      this.queue = prepared.chunks.map((chunk, index) => ({ chunk, index, metadata }));
      this.dispatchEvent(new CustomEvent('queuestart', { detail: { totalChunks: this.queue.length, metadata } }));
      this._speakNextChunk();
      return true;
    }

    speakElement(element, metadata = {}) {
      const extraction = this.extractStructuredText(element, metadata);
      if (!extraction.text) return this._fail(ERROR_CODES.EMPTY_TEXT, 'No readable content in element', false);
      return this.speak(extraction.text, {
        ...metadata,
        source: metadata.source || 'element',
        label: metadata.label || extraction.label,
        locator: extraction.locator,
        rootFingerprint: extraction.fingerprint,
        chunkPlan: extraction.chunkPlan
      });
    }

    speakSelection() {
      const text = global.getSelection ? global.getSelection().toString().trim() : '';
      return text ? this.speak(text, { source: 'selection', label: 'Selected text' }) : this._fail(ERROR_CODES.EMPTY_TEXT, 'Nothing selected', false);
    }

    speakFromNode(node, metadata = {}) {
      if (!node) return false;
      return this.speakElement(node, { ...metadata, source: metadata.source || 'node' });
    }

    pause() {
      if (this.getState() !== STATES.PLAYING) return false;
      this.provider.pause();
      this._saveCurrentSession();
      this._transition(STATES.PAUSED);
      return true;
    }

    resume() {
      if (this.getState() !== STATES.PAUSED) return false;
      this.provider.resume();
      this._transition(STATES.PLAYING);
      return true;
    }

    stop(emit = true) {
      this._saveCurrentSession();
      this.provider.cancel();
      this._clearWatchdog();
      this._disconnectMutationProtection();
      this.currentUtterance = null;
      this.queue = [];
      this.currentChunks = [];
      this.currentChunkIndex = -1;
      this.boundaryIndex = 0;
      this.highlightState = null;
      if (emit) this._transition(STATES.STOPPED);
      return true;
    }

    nextChunk() {
      if (!this.currentChunks.length) return false;
      return this._seekTo(Math.min(this.currentChunkIndex + 1, this.currentChunks.length - 1));
    }

    previousChunk() {
      if (!this.currentChunks.length) return false;
      return this._seekTo(Math.max(this.currentChunkIndex - 1, 0));
    }

    resumeLastSession() {
      if (!this.lastSession || !this.lastSession.text) return this._fail(ERROR_CODES.SESSION_NOT_FOUND, 'No session to resume', false);
      const session = this.lastSession;
      this.currentText = session.text;
      this.currentChunks = this._semanticChunk(session.text, this.options.chunkSize).map((text, index) => ({ text, index, locator: session.locator || null }));
      const root = session.locator ? document.querySelector(session.locator) : null;
      if (root && session.rootFingerprint) {
        const currentFingerprint = this._fingerprint(this.extractReadableText(root));
        if (currentFingerprint !== session.rootFingerprint) {
          this.dispatchEvent(new CustomEvent('warning', { detail: { code: ERROR_CODES.DOM_CHANGED, message: 'Content changed since last session' } }));
        }
      }
      const startIndex = Math.min(session.chunkIndex || 0, Math.max(0, this.currentChunks.length - 1));
      this.queue = this.currentChunks.slice(startIndex).map((chunk, offset) => ({ chunk, index: startIndex + offset, metadata: { source: 'resume-session', label: session.label || 'Resume' } }));
      this.currentChunkIndex = startIndex - 1;
      this.boundaryIndex = session.boundaryIndex || 0;
      this.currentSession = { ...session };
      this._speakNextChunk();
      return true;
    }

    addBookmark(name) {
      if (!this.currentSession) return null;
      const bookmark = {
        id: `bm-${Date.now()}`,
        name: name || `Bookmark ${this.bookmarks.length + 1}`,
        createdAt: new Date().toISOString(),
        chunkIndex: this.currentChunkIndex,
        boundaryIndex: this.boundaryIndex,
        label: this.currentSession.label,
        locator: this.currentSession.locator,
        text: this.currentText,
        rootFingerprint: this.currentSession.rootFingerprint
      };
      this.bookmarks.push(bookmark);
      this._persistBookmarks();
      this.dispatchEvent(new CustomEvent('bookmarkadd', { detail: bookmark }));
      return bookmark;
    }

    goToBookmark(id) {
      const bookmark = this.bookmarks.find(item => item.id === id);
      if (!bookmark) return this._fail(ERROR_CODES.INVALID_BOOKMARK, 'Bookmark not found', false);
      this.lastSession = { ...bookmark };
      this._persistSession();
      return this.resumeLastSession();
    }

    removeBookmark(id) {
      this.bookmarks = this.bookmarks.filter(item => item.id !== id);
      this._persistBookmarks();
      this.dispatchEvent(new CustomEvent('bookmarkremove', { detail: { id } }));
    }

    extractReadableText(element, options = {}) {
      return this.extractStructuredText(element, options).text;
    }

    // ── Phase 1: DOM-aware structured text walker ─────────────────────────
    _walkDomToText(el) {
      const SKIP_TAGS = new Set(['script','style','noscript','svg','img','button','input','select','textarea']);
      const SKIP_SEL  = '#sidebar,#mobile-nav,#mode-panel,#tts-panel,#pomodoro,#search-modal,nav,header,aside,footer';
      const parts = [];
      const walk = (node) => {
        if (!node) return;
        if (node.nodeType === 3) { const t = node.textContent; if (t.trim()) parts.push(t); return; }
        if (node.nodeType !== 1) return;
        if (SKIP_TAGS.has(node.tagName.toLowerCase())) return;
        if (node.hidden || node.getAttribute('aria-hidden') === 'true') return;
        if (node.classList.contains('mode-hidden') || node.classList.contains('code-block')) {
          parts.push(' [Code block, see screen]. '); return;
        }
        try { if (node.matches(SKIP_SEL)) return; } catch(_) {}
        const tag = node.tagName.toLowerCase();
        switch(tag) {
          case 'h1': parts.push(`\n\n Chapter: ${node.textContent.trim()}. \n`); return;
          case 'h2': parts.push(`\n\n Section: ${node.textContent.trim()}. \n`); return;
          case 'h3': parts.push(`\n\n Topic: ${node.textContent.trim()}. \n`); return;
          case 'h4': case 'h5': case 'h6': parts.push(`\n Subsection: ${node.textContent.trim()}. `); return;
          case 'blockquote': parts.push(`\n Quote: ${node.textContent.trim()}. \n`); return;
          case 'kbd': parts.push(`key ${node.textContent.trim()} `); return;
          case 'pre': parts.push(' [Code example, see screen]. '); return;
          case 'br': parts.push(' '); return;
          case 'li': {
            const parent = node.parentElement?.tagName.toLowerCase();
            const idx = parent === 'ol' ? ([...node.parentElement.children].indexOf(node) + 1) + '. ' : '';
            parts.push(`\n ${idx}${node.textContent.trim()}. `); return;
          }
          case 'table': {
            parts.push('\n Table: ');
            const cap = node.querySelector('caption');
            if (cap) parts.push(cap.textContent.trim() + '. ');
            node.querySelectorAll('tr').forEach((row, ri) => {
              const cells = [...row.querySelectorAll('th,td')].map(c => c.textContent.trim());
              parts.push((ri === 0 ? 'Columns: ' : 'Row ' + ri + ': ') + cells.join(', ') + '. ');
            });
            parts.push('\n'); return;
          }
          case 'details': {
            const sum = node.querySelector('summary');
            if (sum) parts.push(`\n Note: ${sum.textContent.trim()}. `);
            if (node.open) node.childNodes.forEach(c => { if (c !== sum) walk(c); });
            return;
          }
          case 'summary': return; // handled in details
          default: {
            const cl = node.classList;
            if (cl.contains('callout') && cl.contains('info'))    { parts.push(`\n Note: ${node.textContent.trim()}. \n`); return; }
            if (cl.contains('callout') && cl.contains('warn'))    { parts.push(`\n Warning: ${node.textContent.trim()}. \n`); return; }
            if (cl.contains('callout') && cl.contains('formula')) { parts.push(`\n Formula: ${node.textContent.trim()}. \n`); return; }
            node.childNodes.forEach(walk);
          }
        }
      };
      walk(el);
      return parts.join('');
    }

    extractStructuredText(element, options = {}) {
      if (!element) return { text: '', locator: null, label: '', chunkPlan: [], fingerprint: null };
      const clone = element.cloneNode(true);
      // Remove UI-only noise
      (options.removeSelectors || this.options.removeSelectors).forEach(sel => {
        try { clone.querySelectorAll(sel).forEach(n => n.remove()); } catch(_) {}
      });
      clone.querySelectorAll('[type="hidden"]').forEach(n => n.remove());
      // Use DOM-aware walker instead of raw textContent
      const rawText = this._walkDomToText(clone);
      const text = this.prepareText(rawText, options).text;
      const locator = this._buildLocator(element);
      const label = options.label || element.getAttribute('data-tts-label') || element.id || element.tagName.toLowerCase();
      return { text, locator, label, chunkPlan: this._semanticChunk(text, this.options.chunkSize), fingerprint: this._fingerprint(text) };
    }

    prepareText(text, metadata = {}) {
      let normalized = this._normalizeText(text || '');
      if (this.options.ssml) normalized = this._applySSMLLite(normalized);
      normalized = this._applyPronunciationDictionary(normalized);
      const chunks = (metadata.chunkPlan || this._semanticChunk(normalized, this.options.chunkSize)).map((chunk, index) => ({ text: chunk, index, locator: metadata.locator || null }));
      return { text: normalized, chunks };
    }

    destroy() {
      this.stop(false);
      this._disconnectMutationProtection();
      this._runCleanup();
      if (this.synth) this.synth.removeEventListener('voiceschanged', this._voicesChangedHandler);
      this.dispatchEvent(new CustomEvent('destroy'));
    }

    _speakNextChunk() {
      if (!this.queue.length) {
        this._clearWatchdog();
        if (this.currentSession) {
          this.currentSession.completedAt = new Date().toISOString();
          this.currentSession.chunkIndex = this.currentChunks.length - 1;
          this.currentSession.boundaryIndex = this.boundaryIndex;
          this.lastSession = { ...this.currentSession, text: this.currentText };
          this._persistSession();
        }
        this._transition(STATES.ENDED);
        this.dispatchEvent(new CustomEvent('queueend', { detail: this.getProgress() }));
        if (this.currentSession?.source === 'queue' || this.currentSession?.source === 'playlist') {
          this._playNextQueuedDocument();
        }
        return;
      }

      const next = this.queue.shift();
      const chunk = typeof next.chunk === 'string' ? { text: next.chunk, locator: next.metadata?.locator || null } : next.chunk;
      this.currentChunkIndex = next.index;
      this.retryCount = 0;
      this._transition(STATES.BUFFERING);
      this._enableMutationProtection();

      const payload = {
        text: chunk.text,
        voice: this._getSelectedVoice(),
        lang: this.settings.lang,
        rate: this.settings.rate,
        pitch: this.settings.pitch,
        volume: this.settings.volume,
        onstart: () => {
          if (this.currentSession) {
            this.currentSession.chunkIndex = next.index;
            this.currentSession.boundaryIndex = 0;
          }
          this._transition(STATES.PLAYING);
          this._startWatchdog(next);
          this.dispatchEvent(new CustomEvent('chunkstart', { detail: { chunkIndex: next.index, locator: chunk.locator, progress: this.getProgress() } }));
        },
        onboundary: (event) => {
          this.boundaryIndex = event.charIndex || 0;
          if (this.currentSession) this.currentSession.boundaryIndex = this.boundaryIndex;
          this.highlightState = { locator: chunk.locator, chunkIndex: next.index, charIndex: this.boundaryIndex, text: chunk.text };
          this.dispatchEvent(new CustomEvent('boundary', { detail: { ...this.highlightState, progress: this.getProgress() } }));
          this._saveCurrentSession();
        },
        onend: () => {
          this._clearWatchdog();
          this.dispatchEvent(new CustomEvent('chunkend', { detail: { chunkIndex: next.index, locator: chunk.locator, progress: this.getProgress() } }));
          this._saveCurrentSession();
          this._speakNextChunk();
        },
        onerror: (event) => this._handleSpeakError(event, next)
      };

      try {
        this.currentUtterance = this.provider.speak(payload);
      } catch (error) {
        this._handleSpeakError({ error: error.message || ERROR_CODES.SPEAK_ERROR }, next);
      }
    }

    _handleSpeakError(event, next) {
      this._clearWatchdog();
      const code = event.error || ERROR_CODES.SPEAK_ERROR;
      this.dispatchEvent(new CustomEvent('error', { detail: { code, chunkIndex: next.index } }));
      if (this.retryCount < this.options.maxAutoRetries) {
        this.retryCount += 1;
        this.queue.unshift(next);
        this._speakNextChunk();
        return;
      }
      this._fail(code, 'Speech playback failed');
    }

    _seekTo(index) {
      if (!this.currentChunks.length) return false;
      this._transition(STATES.SEEKING);
      this.provider.cancel();
      const target = Math.min(Math.max(index, 0), this.currentChunks.length - 1);
      this.queue = this.currentChunks.slice(target).map((chunk, offset) => ({ chunk, index: target + offset, metadata: { source: 'seek' } }));
      this.currentChunkIndex = target - 1;
      this.boundaryIndex = 0;
      this._speakNextChunk();
      return true;
    }

    _playNextQueuedDocument() {
      const currentIndex = this.documentQueue.findIndex(item => item.label === this.currentSession?.label && item.source === this.currentSession?.source);
      const next = this.documentQueue[currentIndex + 1];
      if (next) {
        this.speak(next.text || '', { source: 'queue', label: next.label, locator: next.locator });
      }
    }

    _enableMutationProtection() {
      if (!this.options.enableMutationProtection || !this.currentSession?.locator || this.mutationObserver) return;
      const root = document.querySelector(this.currentSession.locator);
      if (!root) return;
      const baseline = this._fingerprint(this.extractReadableText(root));
      this.mutationObserver = new MutationObserver(() => {
        const now = this._fingerprint(this.extractReadableText(root));
        if (now !== baseline) {
          this.dispatchEvent(new CustomEvent('warning', { detail: { code: ERROR_CODES.DOM_CHANGED, message: 'Source DOM changed during playback' } }));
        }
      });
      this.mutationObserver.observe(root, { childList: true, subtree: true, characterData: true });
    }

    _disconnectMutationProtection() {
      if (this.mutationObserver) {
        this.mutationObserver.disconnect();
        this.mutationObserver = null;
      }
    }

    _startWatchdog(next) {
      this._clearWatchdog();
      this.watchdogTimer = global.setTimeout(() => {
        this._handleSpeakError({ error: ERROR_CODES.ENGINE_TIMEOUT }, next);
      }, this.options.watchdogMs);
    }

    _clearWatchdog() {
      if (this.watchdogTimer) {
        clearTimeout(this.watchdogTimer);
        this.watchdogTimer = null;
      }
    }

    _applySSMLLite(text) {
      return text
        .replace(/<break\s+time="(\d+)ms"\s*\/?>/gi, (_, ms) => '. '.repeat(Math.max(1, Math.round(Number(ms) / 300))))
        .replace(/<emphasis>(.*?)<\/emphasis>/gi, '$1')
        .replace(/<prosody[^>]*rate="slow"[^>]*>(.*?)<\/prosody>/gi, '$1')
        .replace(/<prosody[^>]*rate="fast"[^>]*>(.*?)<\/prosody>/gi, '$1')
        .replace(/<say-as[^>]*>(.*?)<\/say-as>/gi, '$1')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    _applyPronunciationDictionary(text) {
      let output = text;
      // User-defined dictionary first
      Object.entries(this.options.pronunciationDictionary || {}).forEach(([key, value]) => {
        const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        output = output.replace(new RegExp(`\\b${escaped}\\b`, 'gi'), value);
      });
      // ── Phase 2: OS Textbook Domain Dictionary ────────────────────────────
      // Math & Big-O notation (must come before single-letter replacements)
      output = output
        .replace(/O\(n²\)/g, 'order n squared')
        .replace(/O\(n\s*log\s*n\)/g, 'order n log n')
        .replace(/O\(log\s*n\)/g, 'order log n')
        .replace(/O\(n\)/g, 'order n')
        .replace(/O\(1\)/g, 'order 1, constant time')
        .replace(/O\(2\^n\)/g, 'order 2 to the power n');
      // Math symbols
      output = output
        .replace(/≤/g, ' less than or equal to ')
        .replace(/≥/g, ' greater than or equal to ')
        .replace(/→/g, ' leads to ')
        .replace(/←/g, ' comes from ')
        .replace(/↔/g, ' corresponds to ')
        .replace(/∑/g, ' sum of ')
        .replace(/∞/g, ' infinity ')
        .replace(/≠/g, ' not equal to ')
        .replace(/≈/g, ' approximately ')
        .replace(/∈/g, ' is in ')
        .replace(/∉/g, ' is not in ')
        .replace(/×/g, ' times ')
        .replace(/÷/g, ' divided by ')
        .replace(/\^/g, ' to the power ');
      // Units
      output = output
        .replace(/(\d+)\s*KB/g, '$1 kilobytes')
        .replace(/(\d+)\s*MB/g, '$1 megabytes')
        .replace(/(\d+)\s*GB/g, '$1 gigabytes')
        .replace(/(\d+)\s*TB/g, '$1 terabytes')
        .replace(/(\d+)\s*ms/g, '$1 milliseconds')
        .replace(/(\d+)\s*ns/g, '$1 nanoseconds')
        .replace(/(\d+)\s*%/g, '$1 percent');
      // Math expressions
      output = output
        .replace(/\bn\s*-\s*1\b/g, 'n minus 1')
        .replace(/\bn\s*\+\s*1\b/g, 'n plus 1')
        .replace(/\bn\s*\/\s*2\b/g, 'n divided by 2');
      // OS Process & Scheduling acronyms
      output = output
        .replace(/\bPCB\b/g, 'P C B, process control block,')
        .replace(/\bTCB\b/g, 'T C B, thread control block,')
        .replace(/\bFCFS\b/g, 'F C F S, first come first served,')
        .replace(/\bSJF\b/g, 'S J F, shortest job first,')
        .replace(/\bSRTF\b/g, 'S R T F, shortest remaining time first,')
        .replace(/\bMLFQ\b/g, 'M L F Q, multi-level feedback queue,')
        .replace(/\bMLQ\b/g, 'M L Q, multi-level queue,')
        .replace(/\bIPC\b/g, 'I P C, inter-process communication,')
        .replace(/\bI\/O\b/g, 'I O')
        .replace(/\bCPU\b/g, 'C P U')
        .replace(/\bGPU\b/g, 'G P U')
        .replace(/\bOS\b/g, 'O S')
        .replace(/\bRR\b/g, 'round robin');
      // Memory Management
      output = output
        .replace(/\bTLB\b/g, 'T L B, translation lookaside buffer,')
        .replace(/\bMMU\b/g, 'M M U, memory management unit,')
        .replace(/\bDMA\b/g, 'D M A, direct memory access,')
        .replace(/\bLRU\b/g, 'L R U, least recently used,')
        .replace(/\bFIFO\b/g, 'F I F O, first in first out,')
        .replace(/\bNRU\b/g, 'N R U, not recently used,')
        .replace(/\bRAM\b/g, 'R A M')
        .replace(/\bROM\b/g, 'R O M')
        .replace(/\bVMM\b/g, 'V M M, virtual memory manager,');
      // File Systems
      output = output
        .replace(/\bFCB\b/g, 'F C B, file control block,')
        .replace(/\bVFS\b/g, 'V F S, virtual file system,')
        .replace(/\bFAT\b/g, 'F A T, file allocation table,')
        .replace(/\bRAID\b/g, 'raid')
        .replace(/\bSSD\b/g, 'S S D')
        .replace(/\bHDD\b/g, 'H D D');
      // General tech
      output = output
        .replace(/\bAI\b/g, 'A I')
        .replace(/\bAPI\b/g, 'A P I')
        .replace(/\bUI\b/g, 'U I')
        .replace(/\bUX\b/g, 'U X')
        .replace(/\bSQL\b/g, 'sequel')
        .replace(/\bHTML\b/g, 'H T M L')
        .replace(/\bCSS\b/g, 'C S S')
        .replace(/\bJSON\b/g, 'J S O N')
        .replace(/\bXML\b/g, 'X M L');
      return output;
    }

    _semanticChunk(text, maxLength) {
      const MAX = maxLength || 400; // larger chunks = more natural flow
      const normalized = this._normalizeText(text);
      if (!normalized) return [];

      // Split into paragraphs / structural blocks first
      const paragraphs = normalized.split(/\n{1,}/).map(p => p.trim()).filter(Boolean);
      const sourceBlocks = paragraphs.length ? paragraphs : [normalized];
      const chunks = [];

      // Smarter sentence splitter — avoids false breaks on abbreviations
      const ABBR = /\b(Mr|Mrs|Ms|Dr|Prof|etc|e\.g|i\.e|vs|Fig|No|vol|pp|ch|sec|approx)\./gi;
      const splitSentences = (block) => {
        // Protect abbreviations by replacing their dot temporarily
        const protected_ = block.replace(ABBR, (m) => m.replace('.', '\u2024'));
        const raw = protected_.match(/[^.!?]+[.!?]+/g) || [protected_];
        return raw.map(s => s.replace(/\u2024/g, '.').trim()).filter(Boolean);
      };

      sourceBlocks.forEach(block => {
        // If block starts with heading/list marker, keep it as its own chunk
        if (/^(Chapter|Section|Topic|Subsection|Quote|Note|Warning|Formula|\d+\.)/.test(block)) {
          if (block.length <= MAX * 1.5) { chunks.push(block); return; }
        }
        const sentences = splitSentences(block);
        let buffer = '';
        sentences.forEach(sentence => {
          const trimmed = sentence.trim();
          if (!trimmed) return;
          const candidate = (buffer + ' ' + trimmed).trim();
          if (candidate.length <= MAX) { buffer = candidate; return; }
          if (buffer) chunks.push(buffer);
          if (trimmed.length <= MAX) { buffer = trimmed; return; }
          // Long sentence — split on clause boundaries
          const clauses = trimmed.split(/(?<=[,;:])\s+/).map(p => p.trim()).filter(Boolean);
          let clauseBuffer = '';
          clauses.forEach(clause => {
            const cc = (clauseBuffer + ' ' + clause).trim();
            if (cc.length <= MAX) clauseBuffer = cc;
            else { if (clauseBuffer) chunks.push(clauseBuffer); clauseBuffer = clause; }
          });
          buffer = clauseBuffer;
        });
        if (buffer.trim()) chunks.push(buffer.trim());
      });

      return chunks.length ? chunks : [normalized];
    }

    _normalizeText(text) {
      return String(text || '')
        .replace(/\u00a0/g, ' ')
        .replace(/[\t\r]+/g, ' ')
        .replace(/\n{3,}/g, '\n\n')
        .replace(/https?:\/\/\S+/g, '[link]')
        // camelCase → insert space
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        // snake_case → replace underscores
        .replace(/\b([a-z]+)_([a-z]+)\b/g, '$1 $2')
        // Remove markdown artifacts
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/\*([^*]+)\*/g, '$1')
        .replace(/`([^`]+)`/g, '$1')
        // Arrow operators in code → words
        .replace(/->/g, ' points to ')
        .replace(/<-/g, ' gets ')
        // Fractions
        .replace(/(\d+)\/(\d+)/g, '$1 over $2')
        // Remove leftover symbols
        .replace(/[#@\[\]{}|\\]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    _fingerprint(text) {
      let hash = 0;
      const input = String(text || '');
      for (let i = 0; i < input.length; i += 1) hash = ((hash << 5) - hash) + input.charCodeAt(i);
      return String(hash >>> 0);
    }

    _buildLocator(node) {
      if (!node) return null;
      if (node.id) return `#${node.id}`;
      const parts = [];
      let current = node;
      while (current && current.nodeType === 1 && parts.length < 4) {
        let part = current.tagName.toLowerCase();
        if (current.classList && current.classList.length) part += '.' + Array.from(current.classList).slice(0, 2).join('.');
        parts.unshift(part);
        current = current.parentElement;
      }
      return parts.join(' > ');
    }

    _getSelectedVoice() {
      if (this.settings.voiceURI) {
        const found = this.voices.find(v => v.voiceURI === this.settings.voiceURI);
        if (found) return found;
      }
      if (this.settings.lang) {
        const exact = this.voices.find(v => (v.lang || '').toLowerCase() === this.settings.lang.toLowerCase());
        if (exact) return exact;
        const prefixed = this.voices.find(v => (v.lang || '').toLowerCase().startsWith(this.settings.lang.toLowerCase()));
        if (prefixed) return prefixed;
      }
      return this.voices.find(v => v.default) || this.voices[0] || null;
    }

    _ensureValidVoice() {
      const current = this._getSelectedVoice();
      if (current) {
        this.settings.voiceURI = current.voiceURI;
        if (!this.settings.lang) this.settings.lang = current.lang || null;
      }
    }

    _transition(next) {
      const prev = this.getState();
      const ok = this.stateMachine.transition(next);
      if (!ok) {
        this.dispatchEvent(new CustomEvent('error', { detail: { code: ERROR_CODES.INVALID_STATE_TRANSITION, from: prev, to: next } }));
        return false;
      }
      this.dispatchEvent(new CustomEvent('statechange', { detail: { state: next, previous: prev } }));
      return true;
    }

    _fail(code, message, transition = true) {
      if (transition) this._transition(STATES.ERROR);
      this.dispatchEvent(new CustomEvent('error', { detail: { code, message } }));
      return false;
    }

    _emitSettings() {
      this.dispatchEvent(new CustomEvent('settingschange', { detail: this.getSettings() }));
    }

    _loadPersistedSettings() {
      if (!this.options.persist || !this.storageAvailable) return;
      const parsed = this._loadStored(this.options.storageKey, null);
      if (parsed) this.settings = { ...this.settings, ...parsed };
    }

    _persistSettings() {
      if (this.options.persist && this.storageAvailable) localStorage.setItem(this.options.storageKey, JSON.stringify(this.settings));
    }

    _saveCurrentSession() {
      if (!this.options.autoSaveSession || !this.storageAvailable || !this.currentSession) return;
      this.lastSession = {
        ...this.currentSession,
        chunkIndex: this.currentChunkIndex,
        boundaryIndex: this.boundaryIndex,
        text: this.currentText
      };
      this._persistSession();
    }

    _persistSession() { if (this.storageAvailable) localStorage.setItem(this.options.sessionKey, JSON.stringify(this.lastSession)); }
    _persistBookmarks() { if (this.storageAvailable) localStorage.setItem(this.options.bookmarksKey, JSON.stringify(this.bookmarks)); }
    _persistQueue() { if (this.storageAvailable) localStorage.setItem(this.options.queueKey, JSON.stringify(this.documentQueue)); }
    _loadStored(key, fallback) { if (!this.storageAvailable) return fallback; const raw = localStorage.getItem(key); return raw ? safeJsonParse(raw, fallback) : fallback; }

    _runCleanup() {
      this.cleanupFns.forEach(fn => { try { fn(); } catch (_) {} });
      this.cleanupFns = [];
    }
  }

  class TTSMiniPlayer {
    constructor(manager, options = {}) {
      this.manager = manager;
      this.options = { mount: 'body', ...options };
      this.el = null;
      this.drag = { active: false, x: 0, y: 0, left: 0, top: 0 };
    }

    mount() {
      if (this.el) return this.el;
      const host = document.querySelector(this.options.mount) || document.body;
      const wrap = document.createElement('div');
      wrap.className = 'tts-mini-player';
      wrap.setAttribute('role', 'region');
      wrap.setAttribute('aria-label', 'Text to speech controls');
      wrap.innerHTML = `
        <div class="tts-mini-head" id="tts-mini-handle" tabindex="0">Text to speech</div>
        <div class="tts-mini-body">
          <div class="tts-mini-row">
            <button id="tts-play" type="button" aria-label="Play or pause">Play</button>
            <button id="tts-stop" type="button" aria-label="Stop">Stop</button>
            <button id="tts-prev" type="button" aria-label="Previous chunk">Prev</button>
            <button id="tts-next" type="button" aria-label="Next chunk">Next</button>
          </div>
          <div class="tts-mini-row tts-mini-progress-row">
            <progress id="tts-progress" max="100" value="0" aria-label="Reading progress"></progress>
            <span id="tts-progress-text">0%</span>
          </div>
          <div class="tts-mini-row">
            <button id="tts-resume" type="button">Resume</button>
            <button id="tts-bookmark" type="button">Bookmark</button>
          </div>
          <div class="tts-mini-status" id="tts-status" aria-live="polite">Idle</div>
        </div>
      `;
      host.appendChild(wrap);
      this.el = wrap;
      this._injectStyles();
      this._bindControls();
      this._bindDrag();
      this._bindEngineEvents();
      return wrap;
    }

    _injectStyles() {
      if (document.getElementById('tts-mini-player-style')) return;
      const style = document.createElement('style');
      style.id = 'tts-mini-player-style';
      style.textContent = `
        .tts-mini-player{position:fixed;right:16px;bottom:16px;width:min(320px,calc(100vw - 32px));background:var(--em-surface-1,#fefdfc);color:var(--em-text,#252624);border:1px solid var(--em-border,#d6d3cb);border-radius:var(--em-radius-md,10px);box-shadow:0 14px 36px rgba(37,38,36,.12);z-index:9999;font:13px/1.45 var(--font-sans,system-ui,sans-serif);overflow:hidden}
        .tts-mini-head{padding:10px 12px;background:var(--em-surface-2,#f3f1eb);cursor:grab;font-weight:650;border-bottom:1px solid var(--em-border,#d6d3cb)}
        .tts-mini-head:focus-visible{outline:2px solid var(--em-accent,#46645f);outline-offset:-2px}
        .tts-mini-body{padding:12px}
        .tts-mini-row{display:flex;gap:8px;align-items:center;justify-content:space-between;margin-bottom:10px}
        .tts-mini-player button{background:var(--em-surface-1,#fefdfc);color:var(--em-text,#252624);border:1px solid var(--em-border,#d6d3cb);border-radius:var(--em-radius-sm,6px);padding:6px 8px;cursor:pointer;min-height:32px}
        .tts-mini-player button:hover{background:var(--em-accent-soft,#e7eeec);border-color:var(--em-accent,#46645f)}
        .tts-mini-player button:focus-visible{outline:2px solid var(--em-accent,#46645f);outline-offset:2px}
        .tts-mini-progress-row progress{width:100%;accent-color:var(--em-accent,#46645f)}
        .tts-mini-status{font-size:12px;color:var(--em-text-secondary,#5f615c)}
        @media (max-width:600px){.tts-mini-player{right:12px;bottom:12px;width:calc(100vw - 24px)}}
        @media (prefers-reduced-motion:reduce){.tts-mini-player *{transition:none !important;animation:none !important}}
      `;
      document.head.appendChild(style);
    }

    _bindControls() {
      this.el.querySelector('#tts-play')?.addEventListener('click', () => {
        const state = this.manager.getState();
        if (state === STATES.PLAYING) this.manager.pause();
        else if (state === STATES.PAUSED) this.manager.resume();
        else this.manager.readPage();
      });
      this.el.querySelector('#tts-stop')?.addEventListener('click', () => this.manager.stop());
      this.el.querySelector('#tts-prev')?.addEventListener('click', () => this.manager.previous());
      this.el.querySelector('#tts-next')?.addEventListener('click', () => this.manager.next());
      this.el.querySelector('#tts-resume')?.addEventListener('click', () => this.manager.resumeLastSession());
      this.el.querySelector('#tts-bookmark')?.addEventListener('click', () => this.manager.addBookmark());
    }

    _bindDrag() {
      const handle = this.el.querySelector('#tts-mini-handle');
      const onMove = (e) => {
        if (!this.drag.active) return;
        const x = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
        const y = e.clientY || (e.touches && e.touches[0]?.clientY) || 0;
        this.el.style.left = `${this.drag.left + (x - this.drag.x)}px`;
        this.el.style.top = `${this.drag.top + (y - this.drag.y)}px`;
        this.el.style.right = 'auto';
        this.el.style.bottom = 'auto';
      };
      const onUp = () => { this.drag.active = false; };
      const onDown = (e) => {
        this.drag.active = true;
        this.drag.x = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
        this.drag.y = e.clientY || (e.touches && e.touches[0]?.clientY) || 0;
        const rect = this.el.getBoundingClientRect();
        this.drag.left = rect.left;
        this.drag.top = rect.top;
      };
      handle.addEventListener('mousedown', onDown);
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
      handle.addEventListener('touchstart', onDown, { passive: true });
      document.addEventListener('touchmove', onMove, { passive: true });
      document.addEventListener('touchend', onUp);
    }

    _bindEngineEvents() {
      this.manager.on('statechange', (e) => {
        const status = this.el.querySelector('#tts-status');
        if (status) status.textContent = e.detail.state;
      });
      this.manager.on('boundary', (e) => {
        const p = this.el.querySelector('#tts-progress');
        const t = this.el.querySelector('#tts-progress-text');
        const progress = e.detail.progress || { percent: 0 };
        if (p) p.value = progress.percent || 0;
        if (t) t.textContent = `${progress.percent || 0}%`;
      });
      this.manager.on('error', (e) => {
        const status = this.el.querySelector('#tts-status');
        if (status) status.textContent = `Error: ${e.detail.code}`;
      });
    }
  }

  function createTTSManager(options = {}) {
    const engine = new TTSEngine(options);
    const manager = {
      engine,
      miniPlayer: null,
      init: () => engine.init(),
      mountMiniPlayer(opts = {}) { this.miniPlayer = new TTSMiniPlayer(this, opts); return this.miniPlayer.mount(); },
      speak: (text, metadata) => engine.speak(text, metadata),
      readPage: () => engine.speakElement(document.querySelector(engine.options.rootSelector), { source: 'page', label: 'Page' }),
      readSection: (el) => engine.speakElement(el, { source: 'section', label: 'Section' }),
      readSelection: () => engine.speakSelection(),
      readFromNode: (node, metadata) => engine.speakFromNode(node, metadata),
      pause: () => engine.pause(),
      resume: () => engine.resume(),
      stop: () => engine.stop(),
      next: () => engine.nextChunk(),
      previous: () => engine.previousChunk(),
      resumeLastSession: () => engine.resumeLastSession(),
      addToQueue: (item) => engine.addToQueue(item),
      clearQueue: () => engine.clearQueue(),
      playQueue: (index) => engine.playQueue(index),
      addBookmark: (name) => engine.addBookmark(name),
      goToBookmark: (id) => engine.goToBookmark(id),
      removeBookmark: (id) => engine.removeBookmark(id),
      getBookmarks: () => engine.getBookmarks(),
      getQueue: () => engine.getQueue(),
      getRecommendedVoices: (limit) => engine.getRecommendedVoices(limit),
      getState: () => engine.getState(),
      getSettings: () => engine.getSettings(),
      getProgress: () => engine.getProgress(),
      setVoice: (v) => engine.setVoice(v),
      setRate: (v) => engine.setRate(v),
      setPitch: (v) => engine.setPitch(v),
      setVolume: (v) => engine.setVolume(v),
      setLanguage: (v) => engine.setLanguage(v),
      setPronunciationDictionary: (d) => engine.setPronunciationDictionary(d),
      extractReadableText: (el, opts) => engine.extractReadableText(el, opts),
      extractStructuredText: (el, opts) => engine.extractStructuredText(el, opts),
      destroy: () => engine.destroy(),
      on: (eventName, handler) => engine.addEventListener(eventName, handler),
      off: (eventName, handler) => engine.removeEventListener(eventName, handler)
    };
    return manager;
  }

  global.TTSStates = STATES;
  global.TTSErrorCodes = ERROR_CODES;
  global.BrowserTTSProvider = BrowserTTSProvider;
  global.TTSStateMachine = TTSStateMachine;
  global.TTSEngine = TTSEngine;
  global.TTSMiniPlayer = TTSMiniPlayer;
  global.createTTSManager = createTTSManager;
  global.TTSManager = createTTSManager();

  // ── Compatibility init: wires up the existing HTML TTS panel ──────────────
  // Connects #tts-play, #tts-stop, #tts-rate, #tts-voice-select, #tts-toggle
  // to the new engine so chapters & index.html work without any HTML changes.
  document.addEventListener('DOMContentLoaded', () => {
    if (compatBootstrapDone) return;
    compatBootstrapDone = true;

    const manager = global.TTSManager;

    // 1. Initialize the engine (loads voices)
    manager.init();

    // 2. Populate the voice <select> when voices are available
    function populateVoiceSelect() {
      const sel = document.getElementById('tts-voice-select');
      if (!sel) return;
      const allVoices = manager.engine.voices;
      if (!allVoices.length) return;
      sel.replaceChildren();
      allVoices.forEach((voice) => {
        const option = document.createElement('option');
        option.value = voice.voiceURI || '';
        option.textContent = `${voice.name || 'Unnamed voice'} (${voice.lang || 'unknown'})`;
        option.selected = voice.voiceURI === manager.engine.settings.voiceURI;
        sel.appendChild(option);
      });
      if (!sel.dataset.ttsBound) {
        sel.dataset.ttsBound = 'true';
        sel.addEventListener('change', () => manager.setVoice(sel.value));
      }
    }
    manager.engine.addEventListener('voiceschanged', populateVoiceSelect);
    populateVoiceSelect(); // in case voices already loaded

    // 3. Play / Pause button
    document.getElementById('tts-play')?.addEventListener('click', () => {
      const state = manager.getState();
      if (state === STATES.PLAYING) manager.pause();
      else if (state === STATES.PAUSED) manager.resume();
      else manager.readPage();
    });

    // 4. Stop button
    document.getElementById('tts-stop')?.addEventListener('click', () => manager.stop());

    // 5. Rate slider — restart from current chunk so new rate takes effect immediately
    const rateSlider = document.getElementById('tts-rate');
    const rateLabel  = document.getElementById('tts-rate-label');
    rateSlider?.addEventListener('input', () => {
      const v = parseFloat(rateSlider.value);
      manager.setRate(v);
      if (rateLabel) rateLabel.textContent = v.toFixed(1) + 'x';
      // _seekTo handles cancel + state transition internally
      const st = manager.getState();
      if (st === STATES.PLAYING || st === STATES.PAUSED) {
        manager.engine._seekTo(Math.max(0, manager.engine.currentChunkIndex));
      }
    });

    // 6. TTS toggle button in header (shows/hides panel)
    document.getElementById('tts-toggle')?.addEventListener('click', () => {
      const panel = document.getElementById('tts-panel');
      if (panel) panel.classList.toggle('visible');
    });

    // 7. Section-level read buttons
    document.querySelectorAll('.tts-section-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const section = btn.closest('[data-search-section]') || btn.closest('section') || btn.closest('.prose');
        if (section) manager.readSection(section);
      });
    });

    // 8. Keyboard shortcut: Ctrl/Cmd+Shift+R to read selection or page
    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'r') {
        e.preventDefault();
        const sel = global.getSelection?.()?.toString().trim();
        if (sel) manager.speak(sel, { source: 'selection', label: 'Selected text' });
        else manager.readPage();
      }
    });

    // 9. Sync play button icon with engine state
    manager.on('statechange', (e) => {
      const btn = document.getElementById('tts-play');
      const panel = document.getElementById('tts-panel');
      const isPlaying = e.detail.state === STATES.PLAYING;
      const isPaused  = e.detail.state === STATES.PAUSED;
      if (btn) {
        btn.textContent = (isPlaying && !isPaused) ? 'Pause' : (isPaused ? 'Resume' : 'Play');
        btn.setAttribute('aria-label', (isPlaying && !isPaused) ? 'Pause text to speech' : (isPaused ? 'Resume text to speech' : 'Play text to speech'));
      }
      if (panel) panel.classList.toggle('visible', isPlaying || isPaused);
    });
  });
})(window);

