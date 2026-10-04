# 🤖 AI & ML MiniBook — Arpit | DU B.Tech CSE

> **Artificial Intelligence & Machine Learning (DSC-14)** · University of Delhi · B.Tech CSE
> Complete Interactive Web Textbook & Examination Engine covering Classical AI, Machine Learning Foundations, Deep Learning, Reinforcement Learning, NLP, and Generative Models.
> **50 Complete Chapters · 2,125 Deep Sections · ~412,400 Words**

An interactive, visual, and mathematical study companion for Artificial Intelligence and Machine Learning covering the **complete 4-Unit Delhi University syllabus + GATE / Industry foundations**. Engineered from zero to deep mastery, pairing academic rigor with high-intuition teacher models, bilingual Hinglish breakdowns, Mermaid architecture diagrams, and from-scratch Python/NumPy implementations.

---

## 🌐 Live Site

Hosted on GitHub Pages → [`malikarpit.github.io/aiml-minibook`](https://malikarpit.github.io/aiml-minibook/)

---

## 📚 Curriculum & Content Coverage (50 Chapters · 4 Units · 22 Parts)

### Unit I: Artificial Intelligence & Search Foundations (Ch 01–13 · 586 Sections)

| Part | Chapter | Topics Covered | Sections |
|---|---|---|:---:|
| **Part I: AI Foundations & Agents** | **Ch 01: What Is Artificial Intelligence?** | Definitions (Thinking/Acting Humanly/Rationally), Turing Test & Loebner Prize, Chinese Room argument, History & AI Winters, Dartmouth 1956, AI vs ML vs DL Venn taxonomy | 46 |
| **Part I: AI Foundations & Agents** | **Ch 02: Intelligent Agents** | Architecture = Architecture + Program, PEAS specifications, 6 Environment Types, 5 Agent Architectures (Simple Reflex, Model-Based, Goal-Based, Utility-Based, Learning) | 49 |
| **Part II: Search & Problem Solving** | **Ch 03: Problem Formulation** | 5-tuple state space $(S, s_0, Actions(s), Result(s,a), GoalTest, PathCost)$, State space graphs vs Search trees, Well-defined vs Ill-defined problems | 44 |
| **Part II: Search & Problem Solving** | **Ch 04: Uninformed Search Strategies** | Completeness, Optimality, Time & Space Complexity, BFS, Uniform Cost Search (Dijkstra), DFS, Depth-Limited Search, Iterative Deepening Search (IDS), Bidirectional Search | 52 |
| **Part II: Search & Problem Solving** | **Ch 05: Heuristic Search & Exploration** | Heuristic functions $h(n)$, Relaxed problems, Admissibility ($h(n) \le h^*(n)$), Consistency / Monotonicity triangle inequality, Dominance of heuristics | 43 |
| **Part II: Search & Problem Solving** | **Ch 06: Greedy Best-First Search** | Evaluation function $f(n) = h(n)$, Incompleteness & non-optimality in general graphs, Geometric beam effects, Worst-case exponential space | 39 |
| **Part II: Search & Problem Solving** | **Ch 07: A* Search Algorithm** | Evaluation function $f(n) = g(n) + h(n)$, Mathematical proof of A* optimality with admissible $h$ on trees and consistent $h$ on graphs, Node pruning, Memory limitations | 47 |
| **Part III: Beyond Classical Search** | **Ch 08: Local Search & Optimization** | State-space landscapes, Hill Climbing & variants, Foothills, Plateaus, Ridges, Simulated Annealing & Boltzmann temperature cooling schedules, Genetic Algorithms | 42 |
| **Part III: Beyond Classical Search** | **Ch 09: Constraint Satisfaction Problems** | Variables, Domains, Constraints, Constraint propagation, Node/Arc consistency (AC-3 proof), Backtracking search, MRV and Degree heuristics, Forward checking | 46 |
| **Part IV: Games & Adversarial Search** | **Ch 10: Game Playing & Adversarial Search** | Game theory taxonomy, Zero-sum games, Perfect vs Imperfect information, Game trees, Deterministic 2-player games, Ply and depth conventions | 37 |
| **Part IV: Games & Adversarial Search** | **Ch 11: Minimax & Alpha-Beta Pruning** | Minimax decision rule, Depth-first game tree search, Alpha-Beta pruning condition ($\alpha \ge \beta$), Move ordering significance ($O(b^{m/2})$ optimal speedup) | 48 |
| **Part IV: Games & Adversarial Search** | **Ch 12: Resource-Limited Search & Evaluation** | Evaluation functions, Linear weighted features, Quiescence search, Horizon effect, Deep Blue vs AlphaGo paradigms, Transposition tables | 45 |
| **Part IV: Games & Unit I Synthesis** | **Ch 13: Unit I Consolidation & Search Mastery** | Grand Unified Search Taxonomy, Comparative Complexity Matrix, 2/5/10-Mark University Blueprint Answers, 15 Tricky Exam Pitfalls | 48 |

---

### Unit II: Machine Learning Foundations & Supervised Algorithms (Ch 14–29 · 620 Sections)

| Part | Chapter | Topics Covered | Sections |
|---|---|---|:---:|
| **Part V: Machine Learning Foundations** | **Ch 14: What Is Machine Learning?** | Mitchell's $(E, T, P)$ definition, Traditional Programming vs ML paradigm shift, Learning without being explicitly programmed | 38 |
| **Part V: Machine Learning Foundations** | **Ch 15: Machine Learning Paradigms** | Supervised, Unsupervised, Semi-supervised, Self-supervised, and Reinforcement Learning, Batch vs Online Learning | 41 |
| **Part VI: Hypothesis Classes & Inductive Bias** | **Ch 16: Hypothesis Classes & KNN** | Version space, Inductive bias necessity, K-Nearest Neighbors (KNN), Distance metrics (Euclidean, Manhattan, Minkowski), Curse of dimensionality | 39 |
| **Part VI: Hypothesis Classes & Inductive Bias** | **Ch 17: Generalization & Bias-Variance Tradeoff** | Generalization error decomposition $\text{Bias}^2 + \text{Variance} + \sigma^2$, Overfitting vs Underfitting, Learning curves, Train/Val/Test splits | 43 |
| **Part VII: Linear Models** | **Ch 18: Linear Regression** | Hypothesis $y = \mathbf{w}^T\mathbf{x} + b$, Mean Squared Error (MSE), Residual Sum of Squares (RSS), Feature scaling & Standardization | 37 |
| **Part VII: Linear Models** | **Ch 19: Linear Regression Mathematics** | Normal Equations $\mathbf{w}^* = (\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T\mathbf{y}$ closed-form derivation, Gradient Descent (Batch, Mini-batch, SGD), Convex optimization | 42 |
| **Part VII: Linear Models** | **Ch 20: Logistic Regression** | Binary classification, Odds ratio, Logit function, Sigmoid activation $\sigma(z) = \frac{1}{1 + e^{-z}}$, Decision boundaries | 36 |
| **Part VII: Linear Models** | **Ch 21: Logistic Regression Mathematics** | Maximum Likelihood Estimation (MLE), Binary Cross-Entropy (BCE) Loss derivation, Gradient derivation, Multi-class Softmax regression | 40 |
| **Part VIII: Tree-Based Models** | **Ch 22: Decision Trees** | Recursive binary splitting, Tree architecture, Root, Internal nodes, Leaves, Decision boundaries, Splitting criteria overview | 36 |
| **Part VIII: Tree-Based Models** | **Ch 23: Decision Trees Mathematics** | Shannon Entropy $H(S) = -\sum p_i \log_2 p_i$, Information Gain (ID3), Gain Ratio (C4.5), Gini Impurity (CART), Tree pruning strategies | 44 |
| **Part IX: Model Evaluation & Metrics** | **Ch 24: Classification Evaluation & Confusion Matrix** | Confusion Matrix (TP, FP, TN, FN), Accuracy, Precision, Recall, Specificity, Type I vs Type II errors, Cost-sensitive matrices | 37 |
| **Part IX: Model Evaluation & Metrics** | **Ch 25: Advanced Evaluation: F1, ROC & AUC** | $F_\beta$ Score, F1 Harmonic Mean mathematical justification, ROC Curve plotting, Area Under Curve (AUC), PR Curve for class imbalance | 41 |
| **Part X: Regularization & Overfitting Control** | **Ch 26: Regularization: Why It Exists** | Ill-posed problems, Multicollinearity, Parameter explosion, Shrinkage concept, Constrained optimization perspective | 35 |
| **Part X: Regularization & Overfitting Control** | **Ch 27: Ridge Regression (L2 Regularization)** | L2 penalty $\lambda \|\mathbf{w}\|_2^2$, Analytical solution $\mathbf{w}^* = (\mathbf{X}^T\mathbf{X} + \lambda\mathbf{I})^{-1}\mathbf{X}^T\mathbf{y}$, Weight decay intuition | 39 |
| **Part X: Regularization & Overfitting Control** | **Ch 28: Lasso Regression (L1 Regularization)** | L1 penalty $\lambda \|\mathbf{w}\|_1$, Subgradient calculus, Feature selection & sparsity mechanism, Coordinate Descent optimization | 40 |
| **Part X: Regularization & Overfitting Control** | **Ch 29: Ridge vs Lasso Comparison** | L1 Diamond vs L2 Circle geometry derivation, Elastic Net combination, Model selection guidelines, Unit II Master Blueprint | 42 |

---

### Unit III: Deep Learning, Neural Networks & Computer Vision (Ch 30–39 · 391 Sections)

| Part | Chapter | Topics Covered | Sections |
|---|---|---|:---:|
| **Part XI: Neural Network Foundations** | **Ch 30: Neural Network Foundations** | Biological vs Artificial neuron, McCulloch-Pitts neuron (1943), Synaptic weights, Threshold logic, Linear separability | 38 |
| **Part XI: Neural Network Foundations** | **Ch 31: Perceptron & Learning Algorithm** | Rosenblatt's Perceptron (1958), Convergence theorem proof, XOR limitation (Minsky & Papert 1969), Geometric decision planes | 41 |
| **Part XII: Multilayer Perceptrons & Activations** | **Ch 32: Multilayer Perceptron (MLP)** | Input, Hidden, and Output layers, Fully connected dense layers, Universal Approximation Theorem (Cybenko 1989), Forward propagation | 38 |
| **Part XII: Multilayer Perceptrons & Activations** | **Ch 33: Activation & Loss Functions** | Sigmoid, Tanh, ReLU, Leaky ReLU, ELU, Softmax, Vanishing gradient physics, MSE, Binary Cross-Entropy, Categorical Cross-Entropy | 42 |
| **Part XIII: Optimization & Training Dynamics** | **Ch 34: Gradient Descent & Optimization** | Loss surface topography, Saddle points, SGD, Mini-batch, Momentum, Nesterov, AdaGrad, RMSprop, Adam optimizer mathematics | 40 |
| **Part XIII: Optimization & Training Dynamics** | **Ch 35: Backpropagation Algorithm** | Calculus chain rule on computational graphs, Partial derivatives $\frac{\partial \mathcal{L}}{\partial \mathbf{W}}$, Error delta recurrence, Vectorized implementation | 44 |
| **Part XIV: Convolutional Neural Networks** | **Ch 36: Convolutional Neural Networks (CNNs)** | Shift-invariance, 2D Convolution operation, Stride, Padding (Valid vs Same), Max & Average Pooling, Flattening, CNN receptive fields | 38 |
| **Part XV: Recurrent Architectures** | **Ch 37: Recurrent Neural Networks (RNNs)** | Sequential data modeling, Recurrent hidden state $h_t = \tanh(W_{hh}h_{t-1} + W_{xh}x_t)$, Backpropagation Through Time (BPTT), Exploding gradients | 36 |
| **Part XV: Recurrent Architectures** | **Ch 38: Long Short-Term Memory (LSTM)** | Constant error carousel, 3 Gates (Forget, Input, Output), Candidate state, Cell state memory highway $C_t$, Gated Recurrent Units (GRU) | 37 |
| **Part XVI: Unit III Synthesis** | **Ch 39: Unit III Consolidation & Deep Learning Mastery** | Grand DL Architecture Matrix, Hyperparameter tuning protocols, 10-Mark University Blueprint Answers, 15 Tricky Exam Pitfalls | 37 |

---

### Unit IV: Reinforcement Learning, NLP, Generative AI & Frontier Domains (Ch 40–50 · 528 Sections)

| Part | Chapter | Topics Covered | Sections |
|---|---|---|:---:|
| **Part XVII: Reinforcement Learning & Sequential Decisions** | **Ch 40: Markov Decision Processes (MDPs)** | 5-tuple $(S, A, P, R, \gamma)$, Markov Property, Discounted return $G_t$, Policy $\pi(a\|s)$, State-value $V(s)$, Action-value $Q(s,a)$, Bellman Expectation & Optimality equations, Value Iteration | 50 |
| **Part XVII: Reinforcement Learning & Sequential Decisions** | **Ch 41: Q-Learning & Temporal Difference** | Model-free RL, Temporal Difference (TD) error $\delta_t$, Tabular Q-Learning update rule, $\epsilon$-greedy exploration schedule, Off-policy vs On-policy (Q-Learning vs SARSA) | 58 |
| **Part XVII: Reinforcement Learning & Sequential Decisions** | **Ch 42: Policy Gradient Methods** | Parameterized policies $\pi_\theta(a\|s)$, Policy Gradient Theorem, REINFORCE algorithm, Likelihood ratio trick, Baseline subtraction, Advantage function, Actor-Critic intro | 38 |
| **Part XVIII: Natural Language Processing** | **Ch 43: NLP Preprocessing & Text Classification** | Tokenization, Stopwords, Stemming (Porter) vs Lemmatization (WordNet), Bag of Words (BoW), TF-IDF mathematical derivation, Word2Vec (CBOW vs Skip-Gram), Naive Bayes classifier | 57 |
| **Part XIX: Deep Generative Models** | **Ch 44: Autoencoders & Representation Learning** | Encoder-decoder bottleneck architecture, Reconstruction loss, Latent space compression, Denoising Autoencoders, Variational Autoencoders (VAE), Reparameterization Trick, KL divergence | 40 |
| **Part XIX: Deep Generative Models** | **Ch 45: Generative Adversarial Networks (GANs)** | Two-player Minimax game $\min_G \max_D V(D, G)$, Generator $G(z)$ vs Discriminator $D(x)$, Alternating training loop, Nash equilibrium, Mode collapse, Vanishing gradients, WGAN-GP | 54 |
| **Part XX: AI Ethics & Governance** | **Ch 46: AI Ethics, Bias, Fairness & Accountability** | Algorithmic bias sources, Fairness definitions (Demographic Parity vs Equalized Odds), COMPAS recidivism audit, Explainable AI (LIME, SHAP), EU AI Act risk tiers | 39 |
| **Part XXI: Applied Domain Systems** | **Ch 47: AI in Healthcare Systems** | Medical imaging diagnostics (U-Net segmentation), HIPAA privacy, Federated Learning, FDA-cleared SaMD guidelines, Electronic Health Records (EHR) risk modeling | 43 |
| **Part XXI: Applied Domain Systems** | **Ch 48: Autonomous Vehicles & Robotics** | Perception pipeline (LiDAR + Camera + Radar sensor fusion), Extended Kalman Filtering (EKF), Localization & SLAM, Behavior & trajectory planning, Safety standards (ISO 26262) | 32 |
| **Part XXI: Applied Domain Systems** | **Ch 49: AI in Financial Systems & Trading** | High-Frequency Trading (HFT) limit order books, Credit risk scoring (GBDTs), Fraud detection on imbalanced streams, Basel III/IV regulatory explainability | 40 |
| **Part XXII: Grand AI/ML Capstone** | **Ch 50: Unit IV Consolidation & Grand AI/ML Capstone** | 4-Unit Grand Synthesis Matrix, Problem Formulation Decision Engine, End-to-End Enterprise MLOps Lifecycle, 10-Mark Model Answers, Complete Curriculum Review | 77 |

---

## 📝 Master Examination & Testing Suites (4 Ways to Attempt)

The MiniBook provides a 4-dimensional examination engine tailored for both multiple-choice tests (GATE / placements) and formal written university theory examinations (Delhi University B.Tech CSE DSC-14):

1. **[100 MCQ Master Mock Exam Simulator](exams/mock-exam.html):**
   - Comprehensive 100-question timed simulation (120 minutes) covering Units I, II, III, and IV (25 questions each).
   - Mode Toggle: **Real Exam Mode** (timed conditions, submit at end) vs **Instant Practice Mode** (instant correctness & step-by-step explanations).
   - 100-Question Sticky Palette Navigator with status indicators (Answered, Flagged for Review, Unvisited).
   - Post-submission performance analytics, university letter grading, and per-unit accuracy bar charts with weak topic diagnoses.

2. **[Custom Quiz Builder & Speed Blitz](exams/unit-quiz.html):**
   - 6 Instant Presets: Unit I Sprint, Unit II Sprint, Unit III Sprint, Unit IV Sprint, Speed Blitz Challenge, and Half-Length Mock.
   - Dynamic Filters: Filter by Unit, Question Count (10, 15, 25, 50), and Difficulty (Easy, Medium, Hard).
   - Speed Blitz Mode: 45-second timer per question with live streak counters (🔥) and instant answer explanations.

3. **[University Written Papers & Evaluator Marking Engine](exams/written-papers.html):**
   - Authentic Delhi University Semester Examination Papers:
     - DU Grand Comprehensive Mock Paper (75 Marks, 3 Hours): Section A (Compulsory 2-Mark definitions), Section B (5-Mark structured questions), and Section C (10-Mark in-depth derivations & proofs).
     - Individual Unit Written Papers (25 Marks each).
   - Interactive **"Reveal Model Answer & Rubric"**: Shows exact evaluator point breakdowns, full model answers with equations/diagrams, and "Common Student Traps" where marks are lost.
   - Self-evaluation scoring sliders for personal assessment.

4. **[Master Formula Sheet & Revision Deck](exams/formula-sheet.html):**
   - 30 curated mathematical equations, derivations, loss formulations, and algorithm bounds across all 4 Units.
   - **Active Recall Flashcard Mode**: Hides formulas to test active recall before exams. Click to flip and verify against formal definitions and variable notation.

---

## 📐 Math Companion Layer (24 Modules + Master Compendium · 1,134 Sections · 3,500+ Formulas)

The Math Companion answers: *"Why does the formula work, and how do I calculate it myself?"*
A self-contained mathematical depth layer that deepens derivations, vector geometry, linear transformations, probability distributions, and statistics:

### Track 1: Foundations, Symbols & Functions
- **[M01: Mathematical Notation, Symbols & Summation](math/m01-mathematical-notation.html):** Inside-out formula reading, summation loops $\sum$, Greek alphabet ($\eta, \theta, \lambda$), loss summations.
- **[M02: Algebra Foundations for AI/ML](math/m02-algebra-foundations.html):** Linear equations, quadratic forms $x^T A x$, polynomial expansions, decision hyperplanes.
- **[M03: Functions, Graphs, Exponents & Logarithms](math/m03-functions-graphs-logs.html):** Sigmoid $\sigma(z)$, cross-entropy log-loss penalty $-\log(p)$, Softmax, numerical stability.

### Track 2: Linear Algebra, Vector Spaces & Geometry
- **[M04: Vectors & Components](math/m04-vectors-and-components.html):** Geometric arrows, column vectors, linear combinations, span, basis.
- **[M05: Norms, Distance & Geometric Intuition](math/m05-norms-and-distance.html):** $L_1$ Manhattan diamond vs $L_2$ Euclidean circle unit contours, KNN metrics, Lasso sparsity.
- **[M06: Dot Product, Inner Product & Orthogonality](math/m06-dot-product-and-orthogonality.html):** Vector alignment, projection onto planes, cosine similarity, orthogonal decomposition.
- **[M07: Matrices, Dimensions & Indexing](math/m07-matrices-and-indexing.html):** Design matrices $X \in \mathbb{R}^{n \times d}$, weight matrices $W$, transpose properties $(AB)^T = B^T A^T$.
- **[M08: Matrix Multiplication & Linear Transformations](math/m08-matrix-multiplication-transforms.html):** Space rotation/shearing, non-commutativity $AB \neq BA$, neural network feedforward layers.
- **[M09: Linear Systems, Inverses & Least Squares](math/m09-linear-systems-least-squares.html):** $Ax = b$, determinants, rank, overdetermined systems, Normal Equations $(X^TX)w = X^Ty$, OLS geometry.

### Track 3: Probability, Random Variables & Statistics
- **[M10: Probability Foundations](math/m10-probability-foundations.html):** Sample space $\Omega$, Kolmogorov axioms, inclusion-exclusion principle, event algebra.
- **[M11: Conditional Probability, Bayes & Total Probability](math/m11-conditional-prob-bayes.html):** Conditioning, Law of Total Probability, Bayes' Theorem prior $\to$ posterior updates.
- **[M12: Independence & Conditional Independence](math/m12-independence.html):** Pairwise vs mutual independence, conditional independence, Naive Bayes factorization.
- **[M13: Random Variables, PMF, PDF & CDF](math/m13-random-variables-pmf-pdf-cdf.html):** Discrete PMF, continuous PDF curves, CDF integrals, Gaussian distributions.
- **[M14: Joint, Marginal & Conditional Distributions](math/m14-joint-marginal-conditional.html):** 2D joint tables, marginalization $\sum_y p(x,y)$, conditional probability slices.
- **[M15: Expectation & Expected Value](math/m15-expectation-expected-value.html):** Center of mass fulcrum, linearity of expectation $E[aX+bY] = aE[X]+bE[Y]$, LOTUS.
- **[M16: Variance & Standard Deviation](math/m16-variance-standard-deviation.html):** Distribution spread, scaling rules $\text{Var}(aX+b) = a^2\text{Var}(X)$, bias-variance tradeoff.
- **[M17: Covariance, Correlation & Statistical Relationships](math/m17-covariance-and-correlation.html):** Joint variability $\text{Cov}(X,Y)$, Pearson correlation $\rho \in [-1, 1]$, covariance matrix $\Sigma$.

### Track 4: Calculus, Gradients & Optimization (7 Modules · Track Complete)
- **[M18: Derivatives & Rates of Change](math/m18-derivatives-rates-of-change.html):** Limits, tangent slopes, sensitivity analysis, derivatives of activation functions (ReLU, Sigmoid, Tanh).
- **[M19: Partial Derivatives & Multivariable Functions](math/m19-partial-derivatives.html):** Multivariable loss surfaces $L(w_1, \dots, w_d, b)$, coordinate slices, holding variables constant.
- **[M20: Chain Rule & Computational Graphs](math/m20-chain-rule-computational-graphs.html):** Composite functions, intermediate variables, DAG forward/backward passes, backpropagation engine.
- **[M21: Gradients, Jacobians & Direction of Change](math/m21-gradients-and-jacobians.html):** Gradient vector $\nabla f$, proof of steepest ascent, contour orthogonality, Jacobian matrix $J_{ij} = \frac{\partial F_i}{\partial x_j}$, Hessian curvature.
- **[M22: Optimization, Loss & Gradient Descent](math/m22-optimization-gradient-descent.html):** Objective formulation, convex landscapes, local vs global minima, gradient update step, step-size $\eta$ dynamics.
- **[M23: SGD, Mini-Batches & Optimization Behaviour](math/m23-sgd-mini-batches.html):** Full-batch vs stochastic updates, gradient noise as regularizer, mini-batch variance reduction $\sigma^2/B$, learning rate schedules.
- **[M24: L1/L2 Norms, Regularization Geometry & Sparsity](math/m24-l1-l2-regularization.html):** Ridge vs Lasso, diamond vs circle constraints, subgradients, soft-thresholding operator, geometric feature selection.

### Master Compendium: Complete Formula & Derivation Map
- **[MATH-99: Master Formula Map & AI/ML Mathematics Revision](math/math-99-master-compendium.html):** Comprehensive formula deck, all 24 modules M01–M24 consolidated, derivation index, active recall cheatsheets, diagnostic problem-solving decision trees, and university 10-mark revision sheets.

---

## ⚖️ Integrated System Index & Gap Audit (MASTER-00)

The MiniBook includes a dedicated system control center: **[MASTER-00 — AI/ML Integrated System Index & Gap Audit](master-audit.html)**:
- **100% Curriculum Completeness Audit:** 50 Main Book chapters, 25 Math modules, 26 Coding modules, and 7 Exam decks verified with 0 content gaps.
- **Syllabus-to-Practical Coverage Matrix:** BFS/DFS, Decision Tree, k-NN, SVM, Confusion Matrix, Model Comparison, Neural Networks, CNN, Q-Learning, NLP, and GANs verified against DU DSC-14 requirements.
- **Universal 8-Step Practical Explanation Chain:** Input → Representation → Algorithm → Parameters → Loss/Reward → Training/Update → Output → Evaluation.
- **Master Knowledge Graph & Prerequisite Spine:** Visual dependency graph spanning Classical AI, Supervised Learning, Deep Learning, and Reinforcement Learning.
- **Interactive Global QA Checklists:** Content, Mathematics, Coding, Examination, and Web Application checklists persisted in local browser storage.
- **Canonical ID Architecture:** Structured ID scheme (`K-`, `M-`, `CL-`, `E-`, `F-`, `D-`, `RS-`) unifying all layers into a single stable graph.

---

## 💻 Coding Lab Layer (26 Modules Complete · 1,428 Sections · 892 Code Blocks)

The Coding Lab answers: *"Help me build it from scratch, test its state transitions, and verify against standard production libraries."*
Zero black boxes. Pure Python & NumPy implementations of classical search, heuristics, game trees, data pipelines, regression, regularizers, decision trees, k-NN, SVM, neural networks, backpropagation, CNNs, LSTMs, Q-Learning, policy gradients, NLP, autoencoders, GANs, debugging, and end-to-end capstone checklists:

### Track 0: Lab Environment & System Foundations (2 Modules)
- **[CODE-00: Coding Lab Foundation & Implementation System](coding/code-00-coding-foundation.html):** Zero-black-box philosophy, PEP-8 standards, state trajectory traces, reproducible seed discipline, and Delhi University lab guidelines.
- **[CODE-01: Python, NumPy, Matplotlib & Lab Workflow](coding/code-01-python-numpy-workflow.html):** SIMD vectorization vs looping benchmarks (50x–100x speedup), array shapes, broadcasting rules, matrix slicing, and loss visualization.

### Track 1: Classical AI & Search Algorithms (Unit I Complete · 4 Modules)
- **[CODE-U1-01: BFS and DFS From Scratch](coding/code-u1-01-bfs-dfs.html):** FIFO Queue (`collections.deque`) vs LIFO Stack (`list.pop()`), state exploration, cycle prevention with `explored` sets, frontier tracking, and path reconstruction.
- **[CODE-U1-02: Greedy Best-First & A* Search From Scratch](coding/code-u1-02-greedy-a-star.html):** Priority Queues via `heapq`, Manhattan ($L_1$) vs Euclidean ($L_2$) heuristics, path cost tracking $f(n) = g(n) + h(n)$, and admissibility tests.
- **[CODE-U1-03: CSPs and Backtracking Search](coding/code-u1-03-csp-backtracking.html):** Constraint Satisfaction formulation, MRV (Minimum Remaining Values) and Degree heuristics, Forward Checking, and AC-3 Arc Consistency.
- **[CODE-U1-04: Minimax and Alpha-Beta Pruning From Scratch](coding/code-u1-04-minimax-alpha-beta.html):** Adversarial game search, terminal evaluation, Minimax recursion, Alpha-Beta cutoffs ($\beta \le \alpha$), move ordering, and Tic-Tac-Toe AI engine.

### Track 2: Supervised Machine Learning Algorithms (Unit II Complete · 8 Modules)
- **[CODE-U2-01: ML Workflow: Preprocessing, Splitting & Evaluation](coding/code-u2-01-ml-workflow.html):** Data cleaning, StandardScaler with zero leakage (fit on train ONLY), stratified splits, and baseline evaluation.
- **[CODE-U2-02: Linear Regression From Scratch](coding/code-u2-02-linear-regression.html):** Batch Gradient Descent vs Normal Equations $(X^TX)^{-1}X^Ty$, loss surface trajectory, learning rate selection, and scikit-learn benchmark.
- **[CODE-U2-03: Logistic Regression From Scratch](coding/code-u2-03-logistic-regression.html):** Vectorized Sigmoid $\sigma(z)$, Binary Cross-Entropy (Log-Loss), Gradient Descent updates, decision boundaries, and scikit-learn benchmark.
- **[CODE-U2-04: Decision Trees From Scratch](coding/code-u2-04-decision-trees.html):** Shannon Entropy, Information Gain, Gini Impurity, recursive binary splitting, ASCII tree printing, stopping conditions, and scikit-learn benchmark.
- **[CODE-U2-05: Classification Metrics, Confusion Matrix, ROC-AUC & Thresholds](coding/code-u2-05-classification-metrics-roc.html):** From-scratch confusion matrix, Precision, Recall, F1, threshold sweeping ($\tau \in [0, 1]$), manual ROC curve construction, and trapezoidal numerical AUC integration.
- **[CODE-U2-06: Ridge & Lasso From Scratch: Regularization & Optimization](coding/code-u2-06-ridge-lasso-regularization.html):** $L_2$ Ridge closed-form $(X^TX + \lambda I)^{-1}X^Ty$, $L_1$ Lasso Coordinate Descent with soft-thresholding operator $S(\rho, \lambda)$, collinearity control, and coefficient path tracing.
- **[CODE-U2-07: ML Evaluation & Model Comparison Lab](coding/code-u2-07-ml-evaluation-comparison.html):** Controlled experiment protocol, identical frozen train/test partitions, Decision Tree vs Logistic vs k-NN/Ridge, imbalance resilience, and final model selection trade-off matrix.
- **[CODE-U2-08: KNN & SVM Practical Comparison Lab](coding/code-u2-08-knn-svm-practical-comparison.html):** From-scratch k-NN Euclidean distance vectorization, scaling sensitivity ablation, Linear & RBF SVM via Scikit-Learn, support vector inspection, and controlled tri-model benchmark with Decision Trees.

### Track 3: Deep Learning & Neural Networks (Unit III Complete · 5 Modules)
- **[CODE-U3-01: Neuron and Perceptron From Scratch](coding/code-u3-01-neuron-perceptron.html):** Artificial neuron architecture, vectorized forward pass $z = \mathbf{w}^T\mathbf{x} + b$, Step vs Sigmoid activations, Perceptron Learning Rule, Hebbian weight updates, and mathematical proof of XOR non-separability.
- **[CODE-U3-02: Multi-Layer Perceptron (MLP) & Forward Propagation](coding/code-u3-02-mlp-forward-propagation.html):** Dense hidden layers, weight matrices $W^{[l]}$, bias vectors $b^{[l]}$, non-linear activations (ReLU, Sigmoid), batch matrix multiplication, and forward cache management.
- **[CODE-U3-03: Gradient Descent & Backpropagation From Scratch](coding/code-u3-03-backpropagation-scratch.html):** Computational graph backward pass, output delta $\delta^{[L]} = \hat{y} - y$, hidden layer delta recurrence, parameter gradients $\frac{\partial \mathcal{L}}{\partial W}$, and numerical gradient checking ($\epsilon = 10^{-7}$).
- **[CODE-U3-04: Convolutional Neural Networks (CNNs) & Computer Vision](coding/code-u3-04-cnn-image-classification.html):** 2D Cross-Correlation from scratch, Stride & Padding geometry, MaxPool2D downsampling, PyTorch `nn.Conv2d` training loop on image data, and feature map visualization.
- **[CODE-U3-05: Recurrent Neural Networks (RNNs) & LSTMs](coding/code-u3-05-rnn-lstm-sequence-modelling.html):** Vanilla RNN time-step unrolling, hidden recurrence $h_t = \tanh(W_{hh}h_{t-1} + W_{xh}x_t)$, LSTM 3-gate constant error carousel (Forget, Input, Output gates), and sequence forecasting.

### Track 4: Advanced AI, Reinforcement Learning & Generative Models (Unit IV Complete · 5 Modules)
- **[CODE-U4-01: Markov Decision Processes & Q-Learning From Scratch](coding/code-u4-01-mdp-q-learning.html):** Tabular Q-Table, Bellman optimality update $Q(s,a) \leftarrow Q + \alpha[R + \gamma \max Q - Q]$, $\epsilon$-greedy exploration decay, and Gymnasium `FrozenLake-v1` gridworld navigation.
- **[CODE-U4-02: Policy Gradients & REINFORCE Algorithm](coding/code-u4-02-policy-gradients-reinforce.html):** Stochastic policy network $\pi_\theta(a|s)$, trajectory Monte Carlo sampling, discounted returns $G_t$, return standardization, and Gymnasium `CartPole-v1` pole-balancing.
- **[CODE-U4-03: NLP Preprocessing & Text Classification Pipeline](coding/code-u4-03-nlp-text-classification.html):** Text normalization, tokenization, stopword removal, vocabulary building, TF-IDF calculation from scratch, and Multinomial Naive Bayes classifier.
- **[CODE-U4-04: Autoencoders & Latent Compression](coding/code-u4-04-autoencoders-pytorch.html):** Encoder bottleneck compression, decoder reconstruction loss, latent feature visualization, denoising autoencoder noise rejection, and PyTorch training.
- **[CODE-U4-05: Generative Adversarial Networks (GANs)](coding/code-u4-05-gans-pytorch.html):** Two-player minimax game, Generator $G(z)$ vs Discriminator $D(x)$, synchronized alternating optimization loops, Binary Cross-Entropy loss duality, and PyTorch synthetic distribution synthesis.

### Track 5: Engineering Mastery & Capstone (2 Modules)
- **[CODE-23: Debugging, Testing, Visualization & Reproducibility](coding/code-23-debugging-testing-reproducibility.html):** Deterministic random seeds (`np.random.seed(42)`), shape assertions, NaN/Inf gradient traps, numerical gradient validation, data leakage prevention, and clean test harnesses.
- **[CODE-24: AI/ML Coding Capstone & Master Checklist](coding/code-24-coding-capstone-checklist.html):** End-to-end pipeline integration, model selection leaderboard, cross-validation protocols, university viva defense questions, and the Master Engineering Checklist.

---

## 🛠️ Pedagogical System & Dual-Lens Architecture

Every single chapter in the book is engineered around an integrated 4-tier pedagogical system:

1. **Dual-Lens Intuition:**
   - **Academic Formal Definition:** Precise mathematical and theoretical rigor designed for university 10-mark answers and GATE exams.
   - **Teacher Hinglish Explanation (`teacher-box`):** Conversational breakdown using real-life relatable analogies (e.g., cricket tournaments, metro route navigation, tea stalls, chai-samosa queues) to make complex mathematical intuition stick instantly.
2. **Interactive Visual Architecture:**
   - Vectorized **Mermaid Diagrams** rendering algorithmic state machines, neural computation graphs, and decision pipelines directly in the browser.
3. **Misconception & Pitfall Alerts (`confusion-box`):**
   - Highlighting common exam traps, sign errors in backpropagation, false assumptions about convergence, and tricky distinctions (e.g., A* consistency vs admissibility, L1 vs L2 regularization, SARSA vs Q-Learning).
4. **From-Scratch Python / NumPy Implementations (`code-block`):**
   - Zero-dependency mathematical implementations with one-click copy buttons and line-by-line inline commentary.
5. **Exam Ladder System:**
   - Every chapter features structured 2-Mark, 5-Mark, and 10-Mark model university exam answers designed to guarantee full marks under official Delhi University / Indian University marking schemes.

---

## 💻 Interactive Study Tools & UX

- **Omni-Search (`Ctrl+K`):** Global fuzzy search palette across all 50 chapters and 2,125 sections.
- **Text-to-Speech (TTS):** Section-by-section and full-chapter voice narration with dynamic playback rate controls.
- **Focus Mode (`F`):** Distraction-free full-width reading view.
- **Dual Themes (`T`):** Seamless one-key toggle between **Pitch-Black Dark Mode** (`#000000`) and **Warm Paper Light Mode** (`#F6F2E9`).
- **Pomodoro Timer:** Built-in 25-minute study intervals with pause and distraction logging.
- **Bookmarks & Annotations:** Persistent highlighter and local-storage study notes.
- **Progress Tracking:** Real-time reading depth tracker, per-chapter completion percentages, and progress dashboard.
- **Offline PWA:** Complete offline capabilities powered by Service Worker (`sw.js`).

---

## ⌨️ Global Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl+K` / `Cmd+K` | Open Global Search & Command Palette |
| `T` | Toggle Dark / Light Theme |
| `S` | Toggle Responsive Chapter Sidebar Navigation |
| `F` | Toggle Reading Focus Mode |
| `Ctrl+P` / `Cmd+P` | Save as Clean PDF / Print View |
| `Esc` | Close Active Modal / Popover |

---

## 🚀 Running Locally

```bash
# Clone the repository
git clone https://github.com/malikarpit/aiml-minibook.git
cd aiml-minibook

# Start any standard local HTTP server
python3 -m http.server 8080

# Open in your browser
open http://localhost:8080
```

---

## 📄 License & Attribution

Designed and engineered by **Arpit Malik** for **University of Delhi · B.Tech CSE (DSC-14 Artificial Intelligence & Machine Learning)**. Open-source educational project.
