---
title: "MASTER-01 — AI/ML Cross-Book Map, Canonical IDs and Dependency Graph"
system: "AI & Machine Learning Self-Learning System"
scope: "Main + Rapid + Exam + Math + Code + Practice + Resource + Mastery"
version: "2.0"
status: "INTEGRATION MASTER"
updated: "05 October 2026"
---

# MASTER-01 — Cross-Book Map, Canonical IDs and Dependency Graph

> **Role:** Operational map of the AI/ML knowledge graph. MASTER-00 tells us what exists; MASTER-01 tells us how every learning view connects.

---

# 1. The governing rule

> **ONE CONCEPT → ONE IDENTITY → MANY VIEWS**

The same concept may be presented differently for teaching, rapid learning, revision, mathematics, coding, practice and exams.

That does not create multiple concepts.

```text
                         CANONICAL CONCEPT
                                │
        ┌───────────────┬───────┼────────┬───────────────┐
        ↓               ↓       ↓        ↓               ↓
       MAIN         LEARN FAST REVISION  EXAM            MATH
    understand       learn     recall   answer         derive
        │               │       │        │               │
        └───────────────┴───────┼────────┴───────────────┘
                                │
                   ┌────────────┼────────────┐
                   ↓            ↓            ↓
                  CODE       PRACTICE     RESOURCE
                  build      transfer      verify
                   │            │            │
                   └────────────┴────────────┘
                                ↓
                             MASTERY
                         prove competence
```

---

# 2. Canonical object taxonomy

| Object | ID pattern | What it identifies |
|---|---|---|
| Concept | `K-...` | Stable conceptual unit |
| Formula | `F-...` | Formula attached to a concept |
| Diagram | `D-...` | Teaching/technical diagram |
| Worked Example | `EX-...` | Worked example |
| Practice | `P-...` | Practice item |
| Recall | `R-...` | Active-recall item |
| Exam | `E-...` | Exam question/answer object |
| Coding Lab | `CL-...` | Implementation/practical |
| Mathematics | `M-...` | Mathematical dependency |
| Resource | `RS-...` | External/source record |
| Learn Fast view | `LF-...` | Rapid-learning presentation of a concept |
| Revision view | `REV-...` | Last-minute presentation of a concept |

### Important

`LF-*` and `REV-*` are **view identities**.

They must always point to a canonical `K-*`.

---

# 3. Concept hierarchy

A canonical concept may contain smaller sub-concepts.

Example:

```text
K-U2-C18
Linear Regression
│
├── K-U2-C18.01
│   Linear model
│
├── K-U2-C18.02
│   Residual/error
│
├── K-U2-C18.03
│   MSE
│
└── K-U2-C18.04
    Least-squares objective
```

But not every paragraph needs a K-ID.

### Rule

Create a separate concept ID when the object can reasonably be:

- explained independently;
- referenced independently;
- tested independently;
- linked to another learning view independently.

Avoid ID explosion.

---

# 4. Human-readable aliases

Filenames remain readable.

Example:

```text
MAIN-U2-C18_Linear_Regression.md
```

may map to:

```text
K-U2-C18
```

Likewise:

```text
RAPID-04_AI_ML_Learn_Fast_Unit_II.md
```

contains many `LF-*` views that point to canonical concepts.

### Alias table

```text
Filename
   ↓
File role
   ↓
Section/chapter ID
   ↓
Canonical K-ID
```

Do not rename every existing file merely to satisfy canonical IDs.

---

# 5. Required relationship types

The graph supports these relationships:

| Relationship | Meaning |
|---|---|
| `prerequisite_of` | A must be learned before B |
| `supports` | A supports understanding of B |
| `expands` | B goes deeper than A |
| `compresses` | B is a reduced view of A |
| `implements` | Code implements concept |
| `derives` | Math derives/explains concept |
| `tests` | Practice assesses concept |
| `recalls` | Revision tests recall |
| `answers` | Exam object answers/tests concept |
| `sources` | Resource provides evidence/learning |
| `related_to` | Useful conceptual relationship |
| `contrasts_with` | Explicit comparison relationship |
| `unlocks` | Mastery of A unlocks B |

---

# 6. View ownership

## MAIN

Owns:

```text
problem
→ intuition
→ formal concept
→ visual
→ mathematics
→ examples
→ misconceptions
→ connections
```

## LEARN FAST

Owns:

```text
important concept
→ concise intuition
→ essential formal definition
→ key formula/algorithm
→ one useful example
→ exam relevance
```

Relationship:

```text
LF-* --compresses--> K-*
```

## REVISION

Owns:

```text
definition
formula
algorithm trigger
comparison
trap
recall
```

Relationship:

```text
REV-* --recalls--> K-*
```

## EXAM

Owns:

```text
question
answer structure
numerical
diagram answer
comparison
timed practice
```

Relationship:

```text
E-* --answers/tests--> K-*
```

## MATH

Owns:

```text
symbols
derivation
numerical reasoning
mathematical foundations
```

Relationship:

```text
M-* --supports/derives--> K-*
```

## CODE

Owns:

```text
implementation
tests
visualization
debugging
reproducibility
```

Relationship:

```text
CL-* --implements--> K-*
```

## PRACTICE

Owns:

```text
guided
standard
exam
transfer
debug
```

Relationship:

```text
P-* --tests--> K-*
```

## RESOURCE

Owns:

```text
source
creator
purpose
location
verification
```

Relationship:

```text
RS-* --sources--> K-*
```

## MASTERY

Owns demonstrated learner status rather than teaching content.

---

# 7. Standard concept record

A canonical concept record should support:

```yaml
concept_id: K-U2-C18
title: Linear Regression
unit: II
priority: P1

views:
  main: MAIN-U2-C18
  learn_fast: LF-U2-C18
  revision: REV-U2-C18
  exam: E-U2-C18
  math: M-U2-C18
  code: CL-U2-C18
  practice: P-U2-C18
  resources:
    - RS-ML-LINREG-01

dependencies:
  prerequisites:
    - K-U1-C03
  math:
    - M-U1-...
  related:
    - K-U2-C19
    - K-U2-C26

content:
  formula: true
  algorithm: false
  diagram: true
  numerical: true
  comparison: true
  trap: true
```

This is the conceptual target for the master index, not something every learner must read.

---

# 8. Rapid-study relationship

The rapid layer must never become detached from the canonical concept.

For every P1 concept:

```text
K-ID
│
├── LF-ID
│   └── concise learning
│
└── REV-ID
    └── rapid recall
```

For selected P2 concepts:

```text
K-ID
│
├── LF-ID
└── REV-ID (optional / selected)
```

P3/P4 concepts may have no rapid view.

---

# 9. Example — A* Search

Canonical:

```text
K-U1-C07
A* Search
```

Views:

```text
MAIN-U1-C07
→ complete teaching

LF-U1-C07
→ rapid understanding

REV-U1-C07
→ formula + properties + traps

E-U1-ASTAR
→ exam answer pattern

M-U1-ASTAR
→ mathematical cost/heuristic dependency

CL-U1-02
→ implementation

P-U1-C07-01
→ search trace

RS-AI-ASTAR-01
→ source/resource
```

Core formula:

```text
F-K-U1-C07-01
f(n)=g(n)+h(n)
```

Diagram:

```text
D-K-U1-C07-01
A* evaluation flow
```

Recall:

```text
R-K-U1-C07-01
"What is f(n)?"
```

This gives one concept many operational forms.

---

# 10. Example — Precision

Canonical:

```text
K-U2-C25-PRECISION
```

Relationships:

```text
REV → recall formula
EXAM → write definition + formula + interpretation
MATH → symbolic ratio understanding
CODE → metric calculation
PRACTICE → confusion-matrix numerical
RESOURCE → metric reference
```

Formula:

\[
F= \frac{TP}{TP+FP}
\]

The exact presentation may change by view, but the mathematical meaning cannot.

---

# 11. Dependency graph: Unit I

```text
AI Foundations
      ↓
Intelligent Agents
      ↓
Problem Formulation
      ↓
Search
├── BFS
├── DFS
└── Heuristic-guided
     ├── Greedy
     └── A*
      ↓
CSP / Game Search
      ├── CSP
      └── Minimax
            ↓
        Alpha-Beta
```

Supporting relationships:

```text
Problem Formulation
→ prerequisite for search

Heuristics
→ prerequisite for Greedy / A*

Game Playing
→ prerequisite for Minimax / Alpha-Beta
```

---

# 12. Dependency graph: Unit II

```text
ML
 ↓
Learning Paradigms
 ↓
Hypothesis / Generalization
 ↓
Bias-Variance
 ↓
Overfitting / Underfitting
 ↓
Models
 ├── Linear Regression
 │    └── Least Squares / MSE
 │
 ├── Logistic Regression
 │    └── Sigmoid
 │
 └── Decision Trees
      └── Entropy / Gini / Information Gain

Evaluation
 ↓
Confusion Matrix
 ├── Accuracy
 ├── Precision
 ├── Recall
 ├── F1
 └── ROC / AUC

Overfitting
 ↓
Regularization
 ├── Ridge
 └── Lasso
```

---

# 13. Dependency graph: Unit III

```text
Neuron
 ↓
Perceptron
 ↓
MLP
 ↓
Activation + Loss
 ↓
Forward Pass
 ↓
Gradient Descent
 ↓
Backpropagation
 ↓
Deep Architectures
 ├── CNN
 └── RNN
      ↓
     LSTM
```

Critical conceptual distinction:

```text
Forward → prediction
Loss → error
Backprop → gradients
Optimizer → update
```

---

# 14. Dependency graph: Unit IV

```text
RL
 ↓
MDP
 ├── Policy
 ├── Reward
 ├── Value
 └── Return
      ↓
Q-Learning
      │
      └────── Policy Gradient

NLP
 ↓
Tokenization
 ↓
Representation
 ↓
Text Classification

Generative
 ├── Autoencoder
 └── GAN

Responsible AI
 ├── Bias
 ├── Fairness
 └── Accountability

Applications
 ├── Healthcare
 ├── Autonomous Vehicles
 └── Finance
```

---

# 15. Dependency routing rules

### When a concept has a formula

At minimum:

```text
MAIN → MATH
MAIN → RAPID formula view
MAIN → EXAM formula
```

### When a concept has an algorithm

At minimum:

```text
MAIN → CODE
MAIN → EXAM
MAIN → PRACTICE
REV → algorithm trigger
```

### When a concept has a major comparison

At minimum:

```text
MAIN → comparison explanation
RAPID → condensed comparison
EXAM → answer table
REV → discriminating features
```

### When a concept has a common trap

At minimum:

```text
MAIN → misconception
REV → trap
EXAM → exam trap where relevant
```

---

# 16. Orphan detection

The integration system should flag:

### Concept orphan

K-ID exists but has no Main destination.

### Rapid orphan

LF/REV exists but has no K-ID.

### Exam orphan

E-ID has no K-ID.

### Formula orphan

F-ID has no parent concept.

### Diagram orphan

D-ID has no parent concept.

### Practice orphan

P-ID has no parent concept.

### Resource orphan

RS-ID is not linked to a concept or chapter.

### Code orphan

CL-ID implements nothing traceable.

---

# 17. Broken relationship detection

Flag when:

```text
Main → Exam
```

points to a non-existent exam object.

Flag when:

```text
Rapid → Main
```

points to an outdated chapter ID.

Flag when:

```text
Formula
```

uses notation inconsistent with Math/Main.

Flag when:

```text
Code
```

uses a different algorithm definition from Main.

Flag when:

```text
Revision
```

claims a topic is P1 but RAPID-01 marks it P2/P3.

---

# 18. Priority inheritance rules

Priority originates in the canonical topic map.

```text
K priority
     ↓
MAIN metadata
     ↓
RAPID metadata
     ↓
EXAM emphasis
     ↓
PRACTICE selection
```

A child view may **lower visibility**, but should not silently change the canonical academic priority.

Example:

```text
K = P1

Learn Fast → mandatory
Revision → mandatory
Exam → high emphasis
```

---

# 19. Time-mode graph

The learner's selected time budget is a presentation filter.

```text
3–4 DAYS
→ P1 + P2 Learn Fast

2 DAYS
→ P1 + strongest P2

1 DAY
→ P1 + critical P2
→ formulas / algorithms / comparisons

TONIGHT
→ P1 recall
→ formulas
→ traps
→ question triggers
```

The system should not create separate concept identities for these views.

---

# 20. Cross-book connection strip

At the bottom/top of a concept page, the UI should be able to render:

```text
UNDERSTAND
→ Main

LEARN QUICKLY
→ Learn Fast

RECALL
→ Revision

EXAM
→ Exam

MATH
→ Math

BUILD
→ Code

PRACTICE
→ Practice

SOURCE
→ Resource
```

Only links that actually exist should be displayed.

---

# 21. Canonical consistency examples

## A*

All views must agree that:

\[
f(n)=g(n)+h(n)
\]

and that:

```text
g = cost so far
h = estimated remaining cost
```

## Precision

All views must agree that:

\[
Precision=\frac{TP}{TP+FP}
\]

## Gradient Descent

All views must agree on the update direction:

\[
\theta\leftarrow\theta-\eta\nabla J(\theta)
\]

## Q-Learning

All views must agree on the canonical update represented by the selected course notation.

---

# 22. Master graph record example

```yaml
concept_id: K-U3-C35
title: Backpropagation

priority: P1

main:
  file: MAIN-U3-C35
  section: backpropagation

rapid:
  learn_fast: RAPID-06 / backpropagation
  revision: RAPID-07 / backpropagation

exam:
  target: EXAM-U3

math:
  dependencies:
    - chain rule
    - partial derivatives
    - gradients

code:
  target: CODE-U3-03

practice:
  types:
    - guided
    - standard
    - exam

resources:
  - core course material
  - focused external resource

relationships:
  prerequisite_of:
    - optimization practice
  supports:
    - neural-network training
  contrasts_with:
    - gradient descent
```

---

# 23. Definition of integration completeness

`MASTER-01` is complete when:

```text
[ ] All major concepts have K-IDs.
[ ] Main destinations exist.
[ ] Rapid views have canonical targets.
[ ] Exam destinations are mapped.
[ ] Math dependencies are mapped.
[ ] Code targets are mapped.
[ ] Practice targets are mapped.
[ ] Resource routes are mapped.
[ ] Prerequisites are represented.
[ ] Contrasts are represented.
[ ] Orphans can be detected.
[ ] Broken links can be detected.
[ ] Priority inheritance is defined.
[ ] Human-readable aliases remain intact.
```

---

# 24. Integration rule for future chapters

Every new AIML concept added after this point must be registered through:

```text
1. K-ID
2. Main destination
3. priority
4. prerequisites
5. applicable formula/diagram IDs
6. rapid view decision
7. exam link
8. math link
9. code link
10. practice route
11. resource route
```

No new chapter should be considered integrated merely because its Markdown file exists.

---

# 25. Final architecture

```text
                    K = CANONICAL CONCEPT
                              │
       ┌──────────────────────┼───────────────────────┐
       │                      │                       │
      MAIN                   RAPID                   EXAM
       │               ┌──────┴──────┐                │
       │              LF             REV              │
       │               │              │                │
       └───────────────┴──────────────┴────────────────┘
                              │
                ┌─────────────┼─────────────┐
                │             │             │
               MATH          CODE        PRACTICE
                │             │             │
                └─────────────┼─────────────┘
                              ↓
                          RESOURCE
                              ↓
                           MASTERY
```

> **The graph is the product. The files are views of the graph.**
