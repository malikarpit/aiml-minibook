---
title: "AI/ML Integration — File Inventory"
system: "AI & Machine Learning Self-Learning System"
version: "1.0"
status: "Working Integration Artifact"
updated: "05 October 2026"
basis:
  - "MASTER-00 v2.0"
  - "MASTER-01 v2.0"
  - "MASTER-02 v2.0"
  - "MASTER-03 v2.0"
  - "MASTER-04 v2.0"
  - "MASTER-05 v2.0"
---

# AI/ML Integration — File Inventory

> **Purpose:** Establish the authoritative working inventory before cross-book integration.
>
> **Important:** `ARCHITECTURE-DECLARED` means the file is part of the current planned architecture according to the Master layer. `FILE-VERIFIED` should only be applied after the actual file has been located and checked.

---

# 1. Status vocabulary

| Status | Meaning |
|---|---|
| `ARCHITECTURE-DECLARED` | Required by the current system architecture; individual file existence/content has not yet been checked here. |
| `FILE-VERIFIED` | Actual file located and inspected. |
| `CONNECTED` | File has been mapped into the canonical graph. |
| `QA-PASSED` | Integration and content checks passed. |
| `LEGACY` | Older file/reference retained only as an alias or historical artifact. |
| `MISSING` | Required file is expected but cannot be located. |

Do not use `FILE-VERIFIED`, `CONNECTED`, or `QA-PASSED` merely because a file is listed in an architecture document.

---

# 2. Integration / Control Layer

| File | Role | Current state |
|---|---|---|
| `MASTER-00` | System index + gap audit | FILE-VERIFIED |
| `MASTER-01` | Cross-book map + dependency graph | FILE-VERIFIED |
| `MASTER-02` | Mastery + progress | FILE-VERIFIED |
| `MASTER-03` | Practice + transfer | FILE-VERIFIED |
| `MASTER-04` | Resource + citation | FILE-VERIFIED |
| `MASTER-05` | Final QA + release | FILE-VERIFIED |

---

# 3. Design Layer

| File | Role | State |
|---|---|---|
| `DESIGN-01` | Visual design system | ARCHITECTURE-DECLARED |
| `DESIGN-02` | Content / teaching system | ARCHITECTURE-DECLARED |
| `DESIGN-03` | Resource + citation system | ARCHITECTURE-DECLARED |
| `DESIGN-04` | Exam + coding integration system | ARCHITECTURE-DECLARED |

---

# 4. Main Book

## Foundation

| ID | File / identity | Role | State |
|---|---|---|---|
| `MAIN-00` | AI/ML Foundation and Learning System | System introduction | ARCHITECTURE-DECLARED |

## Unit I — AI Foundations and Search

| ID | Topic |
|---|---|
| `C01` | What Is AI? |
| `C02` | Intelligent Agents |
| `C03` | Problem Formulation |
| `C04` | Uninformed Search |
| `C05` | Heuristics |
| `C06` | Greedy Best-First Search |
| `C07` | A* Search |
| `C08` | Local and Evolutionary Search |
| `C09` | Constraint Satisfaction Problems |
| `C10` | Game Playing |
| `C11` | Minimax and Alpha-Beta Pruning |
| `C12` | Resource-Limited Game Search and Evaluation |
| `C13` | Unit I Consolidation and Search Mastery |

## Unit II — Classical Machine Learning

| ID | Topic |
|---|---|
| `C14` | What Is Machine Learning? |
| `C15` | Machine Learning Paradigms |
| `C16` | Hypothesis Classes, Inductive Bias and KNN |
| `C17` | Generalization, Bias-Variance, Overfitting and Underfitting |
| `C18` | Linear Regression |
| `C19` | Linear Regression Mathematics and Least Squares |
| `C20` | Logistic Regression |
| `C21` | Logistic Regression Mathematics and Decision Boundaries |
| `C22` | Decision Trees |
| `C23` | Decision Trees Mathematics |
| `C24` | Classification Evaluation and Confusion Matrix |
| `C25` | Precision, Recall, F1, ROC and AUC |
| `C26` | Regularization: Why It Exists |
| `C27` | Ridge Regression |
| `C28` | Lasso Regression |
| `C29` | Ridge vs Lasso Comparison |

## Unit III — Neural Networks

| ID | Topic |
|---|---|
| `C30` | Neural Network Foundations |
| `C31` | Perceptron and Learning Algorithm |
| `C32` | Multi-Layer Perceptron |
| `C33` | Activation and Loss Functions |
| `C34` | Gradient Descent and Neural Network Optimization |
| `C35` | Backpropagation |
| `C36` | CNN |
| `C37` | RNN |
| `C38` | LSTM |
| `C39` | Unit III Consolidation and Mastery |

## Unit IV — Advanced AI

| ID | Topic |
|---|---|
| `C40` | Markov Decision Processes |
| `C41` | Q-Learning |
| `C42` | Policy Gradient Methods |
| `C43` | NLP Preprocessing and Text Classification |
| `C44` | Autoencoders |
| `C45` | GANs |
| `C46` | AI Ethics, Bias, Fairness and Accountability |
| `C47` | AI in Healthcare |
| `C48` | Autonomous Vehicles |
| `C49` | AI in Financial Systems |
| `C50` | Unit IV Consolidation and Mastery |

**Main Book declared architecture:** `MAIN-00 + C01–C50`.

---

# 5. Rapid Study Layer

| File | Role | State |
|---|---|---|
| `RAPID-00` | Rapid study system | FILE-VERIFIED |
| `RAPID-01` | Priority + content mapping | FILE-VERIFIED |
| `RAPID-02` | Learn Fast — Unit I | FILE-VERIFIED |
| `RAPID-03` | Last-Minute Revision — Unit I | FILE-VERIFIED |
| `RAPID-04` | Learn Fast — Unit II | FILE-VERIFIED |
| `RAPID-05` | Last-Minute Revision — Unit II | FILE-VERIFIED |
| `RAPID-06` | Learn Fast — Unit III | FILE-VERIFIED |
| `RAPID-07` | Last-Minute Revision — Unit III | FILE-VERIFIED |
| `RAPID-08` | Learn Fast — Unit IV | FILE-VERIFIED |
| `RAPID-09` | Last-Minute Revision — Unit IV | FILE-VERIFIED |

**Important:** The rapid layer is a view over canonical concepts, not a separate curriculum.

---

# 6. Exam Book

| File | Scope | State |
|---|---|---|
| `EXAM-00` | Exam operating system | FILE-VERIFIED |
| `EXAM-U1` | Unit I / C01–C13 | ARCHITECTURE-DECLARED |
| `EXAM-U2` | Unit II / C14–C29 | FILE-VERIFIED |
| `EXAM-U3` | Unit III / C30–C39 | ARCHITECTURE-DECLARED |
| `EXAM-U4` | Unit IV / C40–C50 | ARCHITECTURE-DECLARED |
| `EXAM-98` | Mixed questions + timed practice | ARCHITECTURE-DECLARED |
| `EXAM-99` | Last-day revision + master formula sheet | ARCHITECTURE-DECLARED |

---

# 7. Math Companion

| File | Scope | State |
|---|---|---|
| `MATH-00` | Math track foundation | ARCHITECTURE-DECLARED |
| `M01`–`M09` | Algebra + vectors + matrices + least squares | ARCHITECTURE-DECLARED |
| `M10`–`M17` | Probability + statistics | ARCHITECTURE-DECLARED |
| `M18`–`M24` | Calculus + gradients + optimization + regularization | ARCHITECTURE-DECLARED |
| `MATH-99` | Master formula map + revision | ARCHITECTURE-DECLARED |

The declared sequence is 24 mathematical modules plus foundation/revision files.

---

# 8. Coding Book

| File group | State |
|---|---|
| `CODE-00`, `CODE-01` | ARCHITECTURE-DECLARED |
| `CODE-U1-01`–`CODE-U1-04` | ARCHITECTURE-DECLARED |
| `CODE-U2-01`–`CODE-U2-08` | ARCHITECTURE-DECLARED |
| `CODE-U3-01`–`CODE-U3-05` | ARCHITECTURE-DECLARED |
| `CODE-U4-01`–`CODE-U4-05` | ARCHITECTURE-DECLARED |
| `CODE-23`, `CODE-24` | ARCHITECTURE-DECLARED |

**Current architecture count:** 26 coding files.

---

# 9. Practice / Resource / Mastery

These are partly index-driven rather than one-file-per-concept systems.

| Layer | Control file(s) | State |
|---|---|---|
| Practice | `MASTER-03` + existing problem/practice files | FILE-VERIFIED at control level |
| Resource | `MASTER-04` + Master Learning Resource Guide | FILE-VERIFIED at control level |
| Mastery | `MASTER-02` | FILE-VERIFIED |
| Recall | Rapid Revision + recall items in practice/mastery system | FILE-VERIFIED at architecture level |

---

# 10. Legacy / Alias Watchlist

The integration pass should actively look for older naming forms such as:

```text
MAIN-U1-Cxx
MAIN-U2-Cxx
Exam-ML-*
PRAC-*
Practice Bank
Resource Shelf
RES-*
Older CODE-24 count references
Older MAIN-00 chapter-map text
```

These should be normalized through aliases rather than mass-renamed immediately.

---

# 11. Immediate Inventory Actions

The next operational step is to move these entries from:

```text
ARCHITECTURE-DECLARED
```

to:

```text
FILE-VERIFIED
```

by locating and inspecting the actual files.

Then mark each relevant record:

```text
FILE-VERIFIED
→ CONNECTED
→ QA-PASSED
```

Do not skip directly to QA-PASSED.

---

# 12. Inventory Completion Gate

Inventory is complete when:

- every intended learner-facing file has been located;
- duplicates are identified;
- legacy files are separated from current files;
- current naming is reconciled with canonical identities;
- missing files are explicitly recorded;
- the current architecture and actual repository no longer disagree silently.
