/**
 * ⚡ Arpit | sw.js — AIML MiniBook 2026 Service Worker (v1)
 * Network-First for Navigation (always fresh HTML) + Cache-First for static assets
 */

const CACHE_NAME    = 'aiml-minibook-v11';
const RUNTIME_CACHE = 'aiml-minibook-runtime-v11';
const ASSETS = [
  './',
  './index.html',
  './progress.html',
  './rapid/learn-fast.html',
  './rapid/last-minute.html',
  './assets/css/rapid.css',
  './assets/js/rapid.js',
  './exams/mock-exam.html',
  './exams/unit-quiz.html',
  './exams/written-papers.html',
  './exams/formula-sheet.html',
  './coding/index.html',
  './coding/code-00-coding-foundation.html',
  './coding/code-01-python-numpy-workflow.html',
  './coding/code-u1-01-bfs-dfs.html',
  './coding/code-u1-02-greedy-a-star.html',
  './coding/code-u1-03-csp-backtracking.html',
  './coding/code-u1-04-minimax-alpha-beta.html',
  './coding/code-u2-01-ml-workflow.html',
  './coding/code-u2-02-linear-regression.html',
  './coding/code-u2-03-logistic-regression.html',
  './coding/code-u2-04-decision-trees.html',
  './coding/code-u2-05-classification-metrics-roc.html',
  './coding/code-u2-06-ridge-lasso-regularization.html',
  './coding/code-u2-07-ml-evaluation-comparison.html',
  './coding/code-u2-08-knn-svm-practical-comparison.html',
  './coding/code-u3-01-neuron-perceptron.html',
  './coding/code-u3-02-mlp-forward-propagation.html',
  './coding/code-u3-03-backpropagation-scratch.html',
  './coding/code-u3-04-cnn-image-classification.html',
  './coding/code-u3-05-rnn-lstm-sequence-modelling.html',
  './coding/code-u4-01-mdp-q-learning.html',
  './coding/code-u4-02-policy-gradients-reinforce.html',
  './coding/code-u4-03-nlp-text-classification.html',
  './coding/code-u4-04-autoencoders-pytorch.html',
  './coding/code-u4-05-gans-pytorch.html',
  './coding/code-23-debugging-testing-reproducibility.html',
  './coding/code-24-coding-capstone-checklist.html',
  './math/index.html',
  './math/m01-mathematical-notation.html',
  './math/m02-algebra-foundations.html',
  './math/m03-functions-graphs-logs.html',
  './math/m04-vectors-and-components.html',
  './math/m05-norms-and-distance.html',
  './math/m06-dot-product-and-orthogonality.html',
  './math/m07-matrices-and-indexing.html',
  './math/m08-matrix-multiplication-transforms.html',
  './math/m09-linear-systems-least-squares.html',
  './math/m10-probability-foundations.html',
  './math/m11-conditional-prob-bayes.html',
  './math/m12-independence.html',
  './math/m13-random-variables-pmf-pdf-cdf.html',
  './math/m14-joint-marginal-conditional.html',
  './math/m15-expectation-expected-value.html',
  './math/m16-variance-standard-deviation.html',
  './math/m17-covariance-and-correlation.html',
  './math/m18-derivatives-rates-of-change.html',
  './math/m19-partial-derivatives.html',
  './math/m20-chain-rule-computational-graphs.html',
  './math/m21-gradients-and-jacobians.html',
  './math/m22-optimization-gradient-descent.html',
  './math/m23-sgd-mini-batches.html',
  './math/m24-l1-l2-regularization.html',
  './math/math-99-master-compendium.html',
  './assets/js/quiz-data.js',
  './assets/css/main.css',
  './assets/css/components.css',
  './assets/css/chapters.css',
  './assets/css/animations.css',
  './assets/css/math.css',
  './assets/css/coding.css',
  './chapters/ch01-what-is-ai.html',
  './chapters/ch02-intelligent-agents.html',
  './chapters/ch03-problem-formulation.html',
  './chapters/ch04-uninformed-search.html',
  './chapters/ch05-heuristics.html',
  './chapters/ch06-greedy-best-first-search.html',
  './chapters/ch07-a-star-search.html',
  './chapters/ch08-local-and-evolutionary-search.html',
  './chapters/ch09-constraint-satisfaction-problems.html',
  './chapters/ch10-game-playing.html',
  './chapters/ch11-minimax-and-alpha-beta-pruning.html',
  './chapters/ch12-resource-limited-game-search.html',
  './chapters/ch13-unit-1-consolidation.html',
  './chapters/ch14-what-is-ml.html',
  './chapters/ch15-ml-paradigms.html',
  './chapters/ch16-hypothesis-classes-bias-knn.html',
  './chapters/ch17-bias-variance-generalization.html',
  './chapters/ch18-linear-regression.html',
  './chapters/ch19-linear-regression-math.html',
  './chapters/ch20-logistic-regression.html',
  './chapters/ch21-logistic-regression-math.html',
  './chapters/ch22-decision-trees.html',
  './chapters/ch23-decision-trees-math.html',
  './chapters/ch24-confusion-matrix-evaluation.html',
  './chapters/ch25-precision-recall-roc-auc.html',
  './chapters/ch26-regularization-foundations.html',
  './chapters/ch27-ridge-regression.html',
  './chapters/ch28-lasso-regression.html',
  './chapters/ch29-ridge-vs-lasso-comparison.html',
  './chapters/ch30-neural-network-foundations.html',
  './chapters/ch31-perceptron-learning-algorithm.html',
  './chapters/ch32-multi-layer-perceptron.html',
  './chapters/ch33-activations-and-loss-functions.html',
  './chapters/ch34-gradient-descent-optimization.html',
  './chapters/ch35-backpropagation.html',
  './chapters/ch36-convolutional-neural-networks.html',
  './chapters/ch37-recurrent-neural-networks.html',
  './chapters/ch38-long-short-term-memory-lstm.html',
  './chapters/ch39-unit-3-consolidation.html',
  './chapters/ch40-markov-decision-processes.html',
  './chapters/ch41-q-learning.html',
  './chapters/ch42-policy-gradient-methods.html',
  './chapters/ch43-nlp-preprocessing-text-classification.html',
  './chapters/ch44-autoencoders.html',
  './chapters/ch45-generative-adversarial-networks.html',
  './chapters/ch46-ai-ethics-bias-fairness.html',
  './chapters/ch47-ai-in-healthcare.html',
  './chapters/ch48-autonomous-vehicles.html',
  './chapters/ch49-ai-in-financial-systems.html',
  './chapters/ch50-unit-4-consolidation.html',
  './assets/js/core.js',
  './assets/js/state.js',
  './assets/js/modes.js',
  './assets/js/tts.js',
  './assets/js/print.js',
  './assets/js/notes.js',
  './assets/js/glossary.js',
  './assets/js/timer.js',
  './assets/js/timer-settings.js',
  './assets/js/timer-analytics.js',
  './assets/js/timer-notifications.js',
  './assets/js/timer-ui.js',
  './manifest.json'
];

function isCacheableResponse(response) {
  return response && response.status === 200 && response.type !== 'opaque';
}

function isNavigationRequest(request) {
  return request.mode === 'navigate' || (request.headers && request.headers.get('accept') && request.headers.get('accept').includes('text/html'));
}

/* ── INSTALL: Pre-cache all core assets ───────────────────── */
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return Promise.allSettled(
          ASSETS.map(url => cache.add(url).catch(err => console.warn('SW cache miss:', url, err)))
        );
      })
  );
});

/* ── ACTIVATE: Clean up old caches immediately ───────────── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME && k !== RUNTIME_CACHE).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

/* ── FETCH: Network-first for HTML, Cache-first for assets ─ */
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  // 1. Navigation requests (HTML pages): Network-First with cache fallback
  if (isNavigationRequest(event.request)) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (isCacheableResponse(response)) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request).then(cached => {
            if (cached) return cached;
            return caches.match('./index.html');
          });
        })
    );
    return;
  }

  // 2. Static Assets: Cache-first with background revalidation
  event.respondWith(
    caches.match(event.request).then(cached => {
      const networkFetch = fetch(event.request)
        .then(response => {
          if (isCacheableResponse(response)) {
            const clone = response.clone();
            caches.open(RUNTIME_CACHE).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => null);

      if (cached) {
        event.waitUntil(networkFetch);
        return cached;
      }

      return networkFetch.then(response => response || undefined);
    })
  );
});

/* ── BACKGROUND SYNC / SKIP_WAITING ──────────────────────── */
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
    event.waitUntil(
      self.clients.matchAll({ type: 'window', includeUncontrolled: true })
        .then(clients => clients.forEach(client => client.postMessage({ type: 'SW_SKIP_WAITING' })))
    );
  }
});
