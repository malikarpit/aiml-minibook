---
title: "RAPID-01 — AI/ML Priority and Content Mapping"
system: "Engineering Minibooks · AI & Machine Learning"
version: "0.1"
status: "Content Architecture · Initial Mapping"
purpose: "Classify the existing AIML syllabus/content for Learn Fast and Last-Minute modes"
---

# AI & MACHINE LEARNING

# RAPID-01 — Priority & Content Mapping

**Engineering Minibooks · AI/ML**  
**Version 0.1 · 05 October 2026**

> **Purpose:** Decide what each existing AIML concept becomes in Learn Fast and Last-Minute Revision, without creating duplicate textbooks.

---

# 1. Mapping rules

The existing AIML Main Book contains a much more detailed teaching sequence than the rapid modes need.

The rapid mapping therefore asks four questions:

1. **Must the student know it?**
2. **Does it require conceptual explanation, or can it be recalled directly?**
3. **Does it contain a formula, algorithm, model, comparison, or condition worth preserving?**
4. **Does removing it damage understanding of another high-priority topic?**

### Priority vocabulary

| Priority | Meaning | Learn Fast | Last-Minute |
|---|---|---:|---:|
| **P1 — Must Know** | Core exam/course foundation | Yes | Yes |
| **P2 — Important** | High-value but secondary | Yes | Selected |
| **P3 — Supporting** | Useful for completeness | Optional | Usually hidden |
| **P4 — Extension** | Beyond immediate exam need | Main only | Hidden |

### Content survival

```text
MAIN
100%

        ↓ selection

LEARN FAST
~35–60%

        ↓ compression

LAST-MINUTE
~10–25%
```

Percentages are design targets, not mathematical quotas.

---

# 2. Metadata schema

Every topic should eventually carry metadata like:

```yaml
topic_id: AIML-U1-C04

title: Uninformed Search

priority:
  overall: P1
  learn_fast: P1
  revision: P1

tags:
  - CORE
  - EXAM
  - ALGORITHM
  - COMPARE

learn_fast:
  keep:
    - definition
    - intuition
    - state-space idea
    - BFS/DFS distinction
    - representative example
  collapse:
    - extended theory
  omit:
    - historical aside

revision:
  keep:
    - definition
    - key terms
    - algorithm steps
    - complexity
    - comparison
  interaction:
    - recall

bridges:
  main: MAIN-U1-C04
  exam: EXAM-U1-...
  code: CODE-AI-...
```

This schema is a content-control layer. The learner does not see YAML.

---

# 3. UNIT I — ARTIFICIAL INTELLIGENCE & SEARCH

## Unit-level priority

**Overall:** P1

### Unit I core survival set

The following are the highest-value concepts for rapid study:

- AI definition and goals
- intelligent agents
- rationality
- problem formulation
- state-space representation
- BFS
- DFS
- heuristic
- Greedy Best-First Search
- A*
- completeness
- optimality
- search complexity
- CSP
- game playing
- minimax
- alpha-beta pruning

### Secondary set

- local search
- evolutionary search
- resource-limited game search
- deeper evaluation-function details

The Unit I consolidation chapter remains useful as a review bridge, but it should not be treated as a replacement for the individual core concepts.

---

# 4. UNIT I topic map

| Main topic | Priority | Learn Fast | Last-Minute | Primary rapid elements |
|---|---|---|---|---|
| What is AI? | P1 | Full | Full | definition, goals, AI/ML/DL relation |
| Intelligent Agents | P1 | Full | Full | agent, environment, sensors, actuators, rationality |
| Problem Formulation | P1 | Full | Full | initial state, actions, transition, goal, cost |
| Uninformed Search | P1 | Full | Full | search-space idea, BFS/DFS |
| Heuristics | P1 | Full | Full | heuristic meaning, admissibility intuition |
| Greedy Best-First | P1 | Full | Full | `f=h`, process, behaviour |
| A* Search | P1 | Full | Full | `f=g+h`, meaning, optimality condition |
| Local/Evolutionary Search | P2 | Condensed | Selected | hill climbing, local optimum, evolutionary idea |
| CSP | P1 | Full | Full | variables, domains, constraints, examples |
| Game Playing | P1 | Full | Full | adversarial search, utility |
| Minimax | P1 | Full | Full | MAX/MIN, tree evaluation |
| Alpha-Beta | P1 | Full | Full | pruning rule, alpha, beta, benefit |
| Resource-Limited Game Search | P2 | Condensed | Selected | depth limit, evaluation |
| Unit I Consolidation | P1 | Very condensed | Full | search-family map, comparisons |

### Unit I special treatment

**Search algorithms must be taught comparatively.**

A student should be able to see:

```text
BFS
→ breadth
→ FIFO queue
→ unweighted shortest path

DFS
→ depth
→ stack / recursion
→ low memory

Greedy
→ h(n)

A*
→ g(n) + h(n)
```

This comparison is more valuable in rapid study than repeating four separate definitions.

---

# 5. UNIT II — MACHINE LEARNING

## Unit-level priority

**Overall:** P1

This unit contains a particularly large amount of material that benefits from rapid compression because many concepts are naturally compared.

### Unit II core survival set

- ML definition
- supervised / unsupervised / reinforcement learning distinction
- hypothesis / generalization idea
- bias–variance intuition
- overfitting / underfitting
- linear regression
- least-squares idea
- logistic regression
- decision trees
- confusion matrix
- accuracy
- precision
- recall
- F1
- ROC
- AUC
- regularization
- Ridge
- Lasso
- Ridge vs Lasso

### Secondary set

- KNN as supporting material
- finer hypothesis-class discussion
- detailed mathematical derivations beyond core syllabus expectations

---

# 6. UNIT II topic map

| Main topic | Priority | Learn Fast | Last-Minute | Primary rapid elements |
|---|---|---|---|---|
| What is ML? | P1 | Full | Full | definition, learning idea |
| Learning Types | P1 | Full | Full | supervised, unsupervised, RL |
| Hypothesis Class / Inductive Bias / KNN | P2 | Condensed | Selected | hypothesis idea, KNN intuition |
| Generalization / Bias-Variance | P1 | Full | Full | train/test, overfit, underfit |
| Linear Regression | P1 | Full | Full | model, line, MSE |
| Least Squares Mathematics | P1 | Condensed | Formula | objective, minimization |
| Logistic Regression | P1 | Full | Full | sigmoid, probability, classification |
| Decision Trees | P1 | Full | Full | nodes, splitting, leaves |
| Decision Tree Mathematics | P2 | Condensed | Selected | impurity / split idea |
| Confusion Matrix | P1 | Full | Full | TP/TN/FP/FN |
| Precision / Recall / F1 | P1 | Full | Full | formulas + interpretation |
| ROC / AUC | P1 | Full | Full | threshold, TPR/FPR |
| Regularization | P1 | Full | Full | why it exists |
| Ridge | P1 | Full | Full | L2 penalty |
| Lasso | P1 | Full | Full | L1 penalty |
| Ridge vs Lasso | P1 | Full | Full | side-by-side comparison |

### Unit II special treatment

The metrics must be taught as a single system.

```text
Confusion Matrix
      ↓
TP / TN / FP / FN
      ↓
Precision / Recall / F1
      ↓
Threshold behaviour
      ↓
ROC / AUC
```

This avoids isolated formula memorisation.

Similarly:

```text
Overfitting
      ↓
Why it happens
      ↓
Regularization
      ↓
Ridge / Lasso
      ↓
Ridge vs Lasso
```

---

# 7. UNIT III — NEURAL NETWORKS & DEEP LEARNING

## Unit-level priority

**Overall:** P1

### Core survival set

- artificial neuron
- perceptron
- perceptron learning idea
- MLP
- activation functions
- loss functions
- gradient descent
- backpropagation
- CNN
- RNN
- LSTM

### Secondary set

- fine-grained loss-function comparisons
- deep architectural variations
- implementation details

---

# 8. UNIT III topic map

| Main topic | Priority | Learn Fast | Last-Minute | Primary rapid elements |
|---|---|---|---|---|
| Neural Network Foundations | P1 | Full | Full | neuron → network idea |
| Perceptron | P1 | Full | Full | weighted sum, activation, learning |
| MLP | P1 | Full | Full | layers, forward pass |
| Activation and Loss Functions | P1 | Full | Full | role, common functions |
| Gradient Descent | P1 | Full | Full | objective, update rule, learning rate |
| Backpropagation | P1 | Full | Full | chain rule intuition, error flow |
| CNN | P1 | Full | Full | convolution, feature maps, pooling |
| RNN | P1 | Full | Full | recurrence, sequence state |
| LSTM | P1 | Full | Full | gates, long-term dependency |
| Unit III Consolidation | P1 | Very condensed | Full | architecture comparison |

### Unit III special treatment

The rapid layer should preserve the conceptual chain:

```text
Artificial Neuron
      ↓
Perceptron
      ↓
MLP
      ↓
Activation + Loss
      ↓
Gradient Descent
      ↓
Backpropagation
      ↓
Deep architectures
      ├── CNN
      └── RNN
             ↓
           LSTM
```

This chain is more important than memorising isolated definitions.

---

# 9. UNIT IV — ADVANCED AI

## Unit-level priority

**Overall:** P1/P2 mixed

### Core survival set

- MDP
- Q-learning
- policy gradients
- NLP preprocessing
- text classification
- autoencoders
- GANs
- AI ethics
- bias / fairness / accountability

### Application set

- healthcare
- autonomous vehicles
- finance

These application chapters should primarily teach:

```text
problem
→ AI formulation
→ method
→ benefit
→ limitation
→ ethical/system consideration
```

They should not become long industry essays.

---

# 10. UNIT IV topic map

| Main topic | Priority | Learn Fast | Last-Minute | Primary rapid elements |
|---|---|---|---|---|
| MDP | P1 | Full | Full | states, actions, rewards, transitions |
| Q-Learning | P1 | Full | Full | Q-value idea, update rule |
| Policy Gradients | P2 | Full | Selected | policy idea, gradient intuition |
| NLP Preprocessing | P1 | Full | Full | tokenization, stemming, lemmatization |
| Text Classification | P1 | Full | Full | pipeline, classification objective |
| Autoencoders | P1 | Full | Full | encoder → latent → decoder |
| GANs | P1 | Full | Full | generator vs discriminator |
| AI Ethics / Bias / Fairness / Accountability | P1 | Full | Full | definitions + consequences |
| Healthcare | P2 | Condensed | Selected | use cases + limitations |
| Autonomous Vehicles | P2 | Condensed | Selected | perception/decision risks |
| Finance | P2 | Condensed | Selected | prediction/risk/fairness |
| Unit IV Consolidation | P1 | Very condensed | Full | family map |

---

# 11. Master priority map

## P1 — Must Know

### AI/Search

```text
AI
Agents
Problem Formulation
BFS
DFS
Heuristics
Greedy
A*
CSP
Game Playing
Minimax
Alpha-Beta
```

### ML

```text
ML
Learning Types
Generalization
Bias-Variance
Overfitting
Underfitting
Linear Regression
Least Squares
Logistic Regression
Decision Trees
Confusion Matrix
Precision
Recall
F1
ROC
AUC
Regularization
Ridge
Lasso
```

### Neural Networks

```text
Neuron
Perceptron
MLP
Activation
Loss
Gradient Descent
Backpropagation
CNN
RNN
LSTM
```

### Advanced AI

```text
MDP
Q-Learning
NLP Preprocessing
Text Classification
Autoencoders
GANs
Bias
Fairness
Accountability
```

---

# 12. P2 — Important

```text
Local Search
Evolutionary Search
Resource-Limited Game Search
KNN / hypothesis-class detail
Decision-tree mathematics detail
Policy Gradients
Healthcare application detail
Autonomous vehicle application detail
Finance application detail
```

P2 content should remain available in Learn Fast.

In Last-Minute, it appears when:

- the user selects the unit;
- the user selects "Important";
- the curriculum/exam metadata marks it as high-yield;
- the user has enough time remaining.

---

# 13. Rapid survival rules by content type

## Definitions

Learn Fast:

```text
formal meaning
+
intuition
+
one example
```

Last-Minute:

```text
one precise sentence
```

## Formulas

Learn Fast:

```text
formula
+
symbols
+
meaning
+
one use
```

Last-Minute:

```text
formula
+
symbol trigger
+
condition
```

## Algorithms

Learn Fast:

```text
problem
→ intuition
→ steps
→ small trace
→ property
```

Last-Minute:

```text
input
→ core steps
→ output
→ complexity/property
```

## Models

Learn Fast:

```text
problem
→ architecture
→ flow
→ role of each component
```

Last-Minute:

```text
architecture
→ distinctive feature
→ primary use
```

## Metrics

Learn Fast:

```text
question being asked
→ confusion-matrix relation
→ formula
→ interpretation
```

Last-Minute:

```text
formula
→ "what does high value mean?"
```

## Comparisons

Learn Fast:

Use a fixed set of criteria.

Last-Minute:

Reduce to the smallest discriminating features.

---

# 14. High-value comparison bank

The rapid system should explicitly maintain these comparison groups.

### Search

```text
BFS vs DFS
Greedy vs A*
A* vs BFS
Uninformed vs Informed Search
Minimax vs Alpha-Beta
Global vs Local Search
```

### Machine Learning

```text
Supervised vs Unsupervised vs RL
Overfitting vs Underfitting
Bias vs Variance
Linear vs Logistic Regression
Classification vs Regression
Ridge vs Lasso
Precision vs Recall
Precision vs F1
ROC vs AUC
```

### Neural Networks

```text
Perceptron vs MLP
Sigmoid vs ReLU
Loss vs Activation
Gradient Descent vs Backpropagation
CNN vs RNN
RNN vs LSTM
```

### Advanced AI

```text
Q-learning vs Policy Gradient
Stemming vs Lemmatization
Autoencoder vs GAN
Bias vs Fairness vs Accountability
```

These should receive high visibility in Last-Minute.

---

# 15. High-value formula bank candidates

The final Revision Unit files should pull formulas from a controlled set rather than inventing a second formula book.

Initial candidates:

### Search

\[
f(n)=g(n)+h(n)
\]

### Linear Regression

\[
y=\mathbf{w}^{T}\mathbf{x}+b
\]

\[
MSE=\frac{1}{n}\sum_{i=1}^{n}(y_i-\hat y_i)^2
\]

### Logistic Regression

\[
\sigma(z)=\frac{1}{1+e^{-z}}
\]

### Classification Metrics

\[
Accuracy=\frac{TP+TN}{TP+TN+FP+FN}
\]

\[
Precision=\frac{TP}{TP+FP}
\]

\[
Recall=\frac{TP}{TP+FN}
\]

\[
F1=2\frac{Precision\cdot Recall}{Precision+Recall}
\]

\[
TPR=Recall
\]

\[
FPR=\frac{FP}{FP+TN}
\]

### Gradient Descent

\[
\theta \leftarrow \theta-\eta\nabla J(\theta)
\]

### Q-Learning

A controlled, syllabus-aligned form of the Q-learning update should be included in the final Unit IV revision file, with all symbols defined.

### Neural Networks

The final Unit III files should include the relevant weighted-sum, activation, loss, and backpropagation expressions that are actually required by the course content.

**Rule:** a formula enters Last-Minute only when it is both correct and useful under exam conditions.

---

# 16. High-value trap bank candidates

Initial traps:

```text
Precision is not Recall.
Accuracy can be misleading on imbalanced classes.
A* is not simply "Greedy with a different name."
A heuristic is not automatically admissible.
DFS is not generally optimal.
BFS optimality depends on the cost assumptions.
Overfitting is not "high training error."
Regularization does not mean removing data.
Ridge and Lasso are not interchangeable.
Activation function and loss function do different jobs.
Gradient Descent and Backpropagation are not the same operation.
CNN and RNN solve different structural problems.
LSTM is an RNN-family architecture with gating mechanisms.
Q-learning learns action values rather than directly storing a policy in the same way as policy-gradient methods.
Stemming and lemmatization are not identical.
Autoencoders and GANs have different objectives.
Fairness is not reducible to one universal metric.
```

These traps should be verified against the final course content before publication.

---

# 17. Learning-path selection logic

When the learner chooses **3–4 DAYS**:

```text
Show P1 in depth suitable for rapid learning
+
show P2 in condensed form
+
hide P3/P4 from default
```

When the learner chooses **2 DAYS**:

```text
Show P1
+
show only strongest P2
+
increase comparison/formula emphasis
```

When the learner chooses **1 DAY**:

```text
Show P1
+
critical P2
+
formulas
+
algorithms
+
comparison bank
+
traps
```

When the learner chooses **TONIGHT**:

```text
Show:
definitions
formulas
algorithms
models
comparisons
conditions
traps
question triggers
```

---

# 18. What will NOT be copied into rapid files

The following remain in the Main Book / companion books unless specifically needed:

- long historical narratives;
- extended derivations;
- full chapter introductions;
- multiple worked examples of the same pattern;
- detailed code;
- exhaustive citations;
- research extensions;
- long application essays;
- repeated explanations already available through links.

This protects the "one concept, many views" architecture.

---

# 19. Production QA for this mapping

Before a unit file is released:

- [ ] Every syllabus-essential topic has an assigned priority.
- [ ] Every P1 topic has a Learn Fast representation.
- [ ] Every P1 topic has a Last-Minute representation.
- [ ] P2 selection is justified.
- [ ] No P3/P4 topic accidentally becomes a default emergency item.
- [ ] Formula candidates are mathematically verified.
- [ ] Algorithm comparisons are internally consistent.
- [ ] Terminology matches the Main Book.
- [ ] Stable topic IDs are preserved.
- [ ] Cross-book links can be resolved.
- [ ] The unit can be revised rapidly without opening a second textbook.

---

# 20. Next production files

The mapping is now the control layer.

The next file pair should contain actual learner-facing content:

```text
RAPID-02
AI/ML Learn Fast — Unit I

RAPID-03
AI/ML Last-Minute Revision — Unit I
```

Unit I should be the pilot because it contains several content types in compact succession:

```text
definitions
→ agents
→ problem formulation
→ search algorithms
→ heuristics
→ comparison
→ CSP
→ game playing
→ minimax
→ pruning
```

That makes it a good stress test for the rapid-study templates before Units II–IV are produced.
