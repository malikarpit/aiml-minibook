/**
 * Engineering Minibooks · Computer Networks
 * glossary.js — quiet, accessible inline definitions.
 *
 * Compatibility contract preserved:
 *   window.GlossaryManager
 *   GlossaryManager.init()
 *   GlossaryManager.highlightTerms()
 *   GlossaryManager.refresh()
 *   GlossaryManager.close()
 */
'use strict';

const GlossaryManager = (() => {
  const TERMS = {
    'PDU': 'Protocol Data Unit — the formal name for a unit of data transferred at a specific layer (Bits at L1, Frame at L2, Packet at L3, Segment at L4).',
    'SDU': 'Service Data Unit — the raw user data passed down from Layer N+1 across an interface (SAP) to Layer N before headers are attached.',
    'SAP': 'Service Access Point — the conceptual boundary port where an upper layer accesses the services of the layer beneath it (e.g., TSAP = Port number).',
    'MAC address': 'Media Access Control Address — a unique 48-bit (6-byte) physical hardware address used by a network interface on a local link.',
    'IP address': 'Internet Protocol Address — a logical, hierarchical address (32-bit IPv4 or 128-bit IPv6) used to route packets across internetworks.',
    'port number': 'A 16-bit integer (0 to 65535) used at the Transport Layer to identify a specific application endpoint on a host.',
    'socket address': 'The combination of an IP address and a port number (for example, 192.168.1.100:8080) identifying a transport endpoint.',
    'simplex': 'Unidirectional communication mode where one device transmits and the other receives.',
    'half-duplex': 'Bidirectional communication mode where both devices can transmit and receive, but only one transmits at a time.',
    'full-duplex': 'Bidirectional communication in which both endpoints can transmit and receive simultaneously.',
    'repeater': 'A Layer 1 device that regenerates or reshapes a received signal so transmission can continue over the next physical segment.',
    'hub': 'A multiport Layer 1 repeater that repeats an incoming signal to multiple ports; legacy shared-hub Ethernet forms a shared collision domain.',
    'bridge': 'A Layer 2 device that forwards frames using MAC addresses and a forwarding database.',
    'switch': 'A multiport Layer 2 bridge that forwards Ethernet frames according to destination MAC addresses; modern switched full-duplex ports normally do not have collisions.',
    'router': 'A Layer 3 device that forwards packets between IP networks using routing and forwarding information.',
    'gateway': 'A general term for an intermediary that provides access to another network or can translate between otherwise incompatible protocols; context determines the exact function.',
    'modem': 'Modulator-demodulator equipment that converts signals between a device interface and the signaling used by a transmission medium.',
    'collision domain': 'A network region in which simultaneous transmissions can interfere with one another on a shared medium.',
    'broadcast domain': 'A set of interfaces that receive a particular Layer 2 broadcast, subject to the network technology and forwarding configuration.',
    'attenuation': 'Loss of signal power or amplitude as a signal propagates through a transmission medium, commonly expressed in decibels (dB).',
    'distortion': 'A change in signal shape caused when different frequency components experience different attenuation or delay.',
    'thermal noise': 'Noise associated with random thermal motion of charge carriers; in an idealized channel it contributes to the thermal-noise power term kTB.',
    'crosstalk': 'Unwanted coupling of a signal from one communication channel or conductor pair into another nearby channel.',
    'SNR': 'Signal-to-noise ratio — signal power divided by noise power. In decibels, SNR_dB = 10 log10(SNR).',
    'Nyquist theorem': 'The noiseless-channel capacity relationship C = 2B log2(L), where B is bandwidth and L is the number of signal levels.',
    'Shannon capacity': 'The noisy-channel upper bound C = B log2(1 + SNR), where SNR is expressed as a linear ratio.',
    'UTP': 'Unshielded Twisted Pair — copper cabling that uses twisted conductor pairs to reduce electromagnetic interference and crosstalk.',
    'optical fiber': 'A guided transmission medium that carries information using light through a glass or polymer optical waveguide.',
    'single-mode fiber': 'Optical fiber designed to support propagation dominated by a single mode, enabling very long reach with low modal dispersion.',
    'multi-mode fiber': 'Optical fiber that supports multiple propagation modes; modal dispersion generally limits reach compared with single-mode fiber.',
    'Manchester encoding': 'A line code with a transition in the middle of each bit period; the exact 0/1 polarity convention must be stated when decoding.',
    'Differential Manchester': 'A line code with a guaranteed mid-bit transition; information is represented by the presence or absence of a transition at the start of the bit period.',
    'ASK': 'Amplitude Shift Keying — digital modulation in which discrete carrier amplitudes represent symbols or bits.',
    'FSK': 'Frequency Shift Keying — digital modulation in which discrete carrier frequencies represent symbols or bits.',
    'PSK': 'Phase Shift Keying — digital modulation in which carrier phase states represent symbols or bits.',
    'QAM': 'Quadrature Amplitude Modulation — modulation that varies two orthogonal carrier components, allowing amplitude and phase to encode symbols.',
    'FDM': 'Frequency Division Multiplexing — multiple signals share a channel by occupying different frequency bands.',
    'TDM': 'Time Division Multiplexing — multiple signals share a channel by occupying different time intervals or slots.',
    'DWDM': 'Dense Wavelength Division Multiplexing — high-density wavelength multiplexing that allows multiple optical channels to share a fiber.',
    'circuit switching': 'A communication method that establishes a path with reserved network resources for the duration of a connection, where the underlying technology provides such reservation.',
    'packet switching': 'A forwarding method in which data is divided into packets that are independently handled at intermediate nodes.',
    'virtual circuit': 'A connection-oriented packet-switching model in which packets associated with a logical connection follow forwarding state established for that connection.',
    'datagram': 'A connectionless packet in which forwarding decisions are made from the packet information rather than a previously established virtual-circuit path.',
    'framing': 'Data Link Layer mechanism for delimiting a continuous bit stream into identifiable frames.',
    'byte stuffing': 'A framing technique that inserts escape information so reserved flag or control bytes inside payload data are not mistaken for delimiters.',
    'bit stuffing': 'A framing technique that inserts a 0 after five consecutive 1 bits in the payload when using the common HDLC-style flag 01111110.',
    'parity': 'An error-detection method that adds a bit so the total number of 1 bits follows a chosen even- or odd-parity rule.',
    'checksum': 'An error-detection method based on one\'s-complement addition; the Internet checksum is used by protocols such as TCP and UDP.',
    'CRC': 'Cyclic Redundancy Check — error-detection method based on polynomial arithmetic over GF(2).',
    'Hamming distance': 'The number of positions in which two equal-length binary codewords differ. Detection and correction capability depend on the minimum Hamming distance of the code.',
    'Hamming code': 'A family of error-correcting codes that uses strategically placed parity bits; the classical Hamming code can correct a single-bit error under the standard assumptions.',
    'Stop-and-Wait': 'A protocol in which the sender limits the number of unacknowledged frames to one before sending the next.',
    'Go-Back-N': 'A sliding-window ARQ method in which a cumulative acknowledgment model is used and the sender retransmits a sequence beginning with a missing or timed-out frame.',
    'Selective Repeat': 'A sliding-window ARQ method in which correctly received out-of-order frames may be buffered and only missing frames need retransmission.',
    'pipelining': 'Sending multiple frames or packets before earlier transmissions have completed their acknowledgment cycle, increasing link utilization on long-delay paths.',
    'piggybacking': 'Carrying an acknowledgment in a reverse-direction data frame so a separate acknowledgment frame is often unnecessary.',
    'Pure ALOHA': 'A random-access protocol in which stations may transmit without slot synchronization; its ideal maximum throughput is 1/(2e).',
    'Slotted ALOHA': 'A random-access protocol that restricts new transmissions to synchronized slot boundaries; its ideal maximum throughput is 1/e.',
    'CSMA': 'Carrier Sense Multiple Access — stations sense the medium before attempting transmission.',
    'CSMA/CD': 'Carrier Sense Multiple Access with Collision Detection — a legacy shared-medium Ethernet method that detects collisions during transmission and backs off.',
    'CSMA/CA': 'Carrier Sense Multiple Access with Collision Avoidance — the medium-access approach used by IEEE 802.11 networks, with sensing, interframe spacing and randomized backoff.',
    'hidden terminal': 'A wireless topology in which two transmitters cannot hear each other but can interfere at a common receiver.',
    'exposed terminal': 'A wireless situation in which a station defers because it hears a transmission even though its own transmission would not necessarily interfere with the receiver.',
    'CDMA': 'Code Division Multiple Access — a channelization technique in which users share a frequency/time resource while being separated by coding sequences.',
    'SDN': 'Software-Defined Networking — an architecture that separates control logic from packet-forwarding functions and may use standardized southbound interfaces such as OpenFlow.'
  };

  let termEntries = [];
  let regex = null;
  let tooltipEl = null;
  let activeTermEl = null;
  let initialized = false;

  function buildMatcher() {
    termEntries = Object.entries(TERMS)
      .sort((a, b) => b[0].length - a[0].length)
      .map(([term, definition]) => ({ term, definition }));

    const alternatives = termEntries.map(({ term }) => escapeRegExp(term)).join('|');
    regex = new RegExp(`\\b(?:${alternatives})\\b`, 'gi');
  }

  function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function canonicalEntry(text) {
    const lower = text.toLowerCase();
    return termEntries.find(({ term }) => term.toLowerCase() === lower) || null;
  }

  function shouldSkipElement(element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return true;
    if (element.closest('#sidebar, #main-header, #note-popover, #note-add-btn, script, style, a, button, input, textarea, select')) return true;
    if (element.closest('.glossary-term, .glossary-tooltip, .note-mark')) return true;
    if (element.closest('[data-no-glossary], .formula-box, .formula-math, .formula, .katex, .MathJax, .mjx-container, [contenteditable="true"]')) return true;
    if (element.closest('figcaption, .mcq-option, .nav-tabs, .badge, .tab-btn, .chapter-hero, .chapter-part-banner, .chapter-breadcrumb')) return true;
    const tag = element.tagName.toLowerCase();
    return ['h1', 'h2', 'h3', 'h4', 'h5', 'pre', 'code', 'svg'].includes(tag);
  }

  function walkTextNodes(root, callback) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(callback);
  }

  function highlightNode(node) {
    const parent = node.parentElement;
    if (!parent || shouldSkipElement(parent)) return;

    const text = node.nodeValue || '';
    if (!text.trim() || !regex) return;

    regex.lastIndex = 0;
    if (!regex.test(text)) return;
    regex.lastIndex = 0;

    const fragment = document.createDocumentFragment();
    let cursor = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > cursor) {
        fragment.appendChild(document.createTextNode(text.slice(cursor, match.index)));
      }

      const matched = match[0];
      const entry = canonicalEntry(matched);
      if (!entry) {
        fragment.appendChild(document.createTextNode(matched));
      } else {
        const span = document.createElement('span');
        span.className = 'glossary-term';
        span.textContent = matched;
        span.setAttribute('role', 'button');
        span.setAttribute('tabindex', '0');
        span.setAttribute('aria-label', `Define ${entry.term}`);
        span.setAttribute('aria-expanded', 'false');
        span.dataset.term = entry.term;
        span.title = entry.definition;

        span.addEventListener('click', (event) => {
          event.preventDefault();
          event.stopPropagation();
          showTooltip(span, entry);
        });
        span.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            event.stopPropagation();
            showTooltip(span, entry);
          }
        });

        fragment.appendChild(span);
      }

      cursor = regex.lastIndex;
    }

    if (cursor < text.length) fragment.appendChild(document.createTextNode(text.slice(cursor)));
    if (fragment.childNodes.length) parent.replaceChild(fragment, node);
  }

  function positionTooltip(target, tooltip) {
    const gap = 8;
    const margin = 10;
    const rect = target.getBoundingClientRect();
    const width = Math.min(tooltip.offsetWidth || 280, window.innerWidth - (margin * 2));
    const height = tooltip.offsetHeight || 160;

    let left = rect.left + (rect.width / 2) - (width / 2);
    left = Math.max(margin, Math.min(left, window.innerWidth - width - margin));

    let top = rect.bottom + gap;
    if (top + height > window.innerHeight - margin) {
      top = rect.top - height - gap;
    }
    top = Math.max(margin, top);

    tooltip.style.left = `${left + window.scrollX}px`;
    tooltip.style.top = `${top + window.scrollY}px`;
  }

  function removeTooltip(options = {}) {
    const { restoreFocus = true } = options;
    if (tooltipEl) tooltipEl.remove();
    tooltipEl = null;

    if (activeTermEl) {
      activeTermEl.setAttribute('aria-expanded', 'false');
      if (restoreFocus && activeTermEl.isConnected) {
        try { activeTermEl.focus(); } catch { /* non-fatal */ }
      }
    }
    activeTermEl = null;
  }

  function showTooltip(target, entry) {
    removeTooltip({ restoreFocus: false });
    activeTermEl = target;
    activeTermEl.setAttribute('aria-expanded', 'true');

    tooltipEl = document.createElement('div');
    tooltipEl.id = 'glossary-tooltip';
    tooltipEl.className = 'glossary-tooltip';
    tooltipEl.setAttribute('role', 'dialog');
    tooltipEl.setAttribute('aria-label', `Definition of ${entry.term}`);
    tooltipEl.tabIndex = -1;

    const label = document.createElement('div');
    label.className = 'gloss-term';
    label.textContent = entry.term;

    const definition = document.createElement('div');
    definition.className = 'gloss-def';
    definition.textContent = entry.definition;

    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'icon-btn glossary-tooltip-close';
    close.setAttribute('aria-label', 'Close definition');
    close.textContent = '×';
    close.addEventListener('click', () => removeTooltip());

    const header = document.createElement('div');
    header.className = 'glossary-tooltip-header';
    header.append(label, close);
    tooltipEl.append(header, definition);

    document.body.appendChild(tooltipEl);
    tooltipEl.classList.add('visible');
    positionTooltip(target, tooltipEl);
    tooltipEl.focus({ preventScroll: true });
  }

  function highlightTerms() {
    const content = document.querySelector('.content-inner') || document.querySelector('#main-content');
    if (!content) return;
    buildMatcher();
    walkTextNodes(content, highlightNode);
  }

  function init() {
    if (initialized) return;
    initialized = true;
    try {
      buildMatcher();
      highlightTerms();

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && tooltipEl) {
          event.preventDefault();
          removeTooltip();
        }
      });

      document.addEventListener('mousedown', (event) => {
        if (!tooltipEl) return;
        if (event.target.closest?.('.glossary-tooltip, .glossary-term')) return;
        removeTooltip({ restoreFocus: false });
      });

      window.addEventListener('resize', () => {
        if (tooltipEl && activeTermEl) positionTooltip(activeTermEl, tooltipEl);
      });
      window.addEventListener('scroll', () => {
        if (tooltipEl && activeTermEl) positionTooltip(activeTermEl, tooltipEl);
      }, { passive: true });
    } catch (error) {
      console.error('GlossaryManager: initialization failed.', error);
    }
  }

  return {
    init,
    highlightTerms,
    refresh: highlightTerms,
    close: () => removeTooltip({ restoreFocus: false })
  };
})();

window.GlossaryManager = GlossaryManager;
document.addEventListener('DOMContentLoaded', () => GlossaryManager.init());
