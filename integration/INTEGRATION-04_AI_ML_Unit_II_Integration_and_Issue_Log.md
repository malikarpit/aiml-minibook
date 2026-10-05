---
title: "INTEGRATION-04 — Unit II Integration and Issue Log"
system: "AI & Machine Learning Self-Learning System"
version: "1.0"
status: "Active Integration Work"
updated: "05 October 2026"
scope: "Unit II — C14–C29 (Classical Machine Learning)"
parent:
  - INTEGRATION-PLAYBOOK
  - INTEGRATION-01
  - INTEGRATION-02
  - MASTER-00 v2.0
  - MASTER-01 v2.0
  - MASTER-02 v2.0
  - MASTER-03 v2.0
  - MASTER-04 v2.0
  - MASTER-05 v2.0
---

# INTEGRATION-04 — Unit II Integration and Issue Log

> **Purpose:** Reconcile all Unit II (Classical Machine Learning) learning artifacts into one connected knowledge graph across Main Book (C14–C29), Learn Fast, Revision, Exam Suite, Coding Labs (Track 2: Labs 01–08), and Math Companion (Tracks 2–4).

---

# 1. Unit II Scope & Canonical Map

```text
K-U2-C14 What Is Machine Learning?
K-U2-C15 Machine Learning Paradigms (Supervised, Unsupervised, RL)
K-U2-C16 Hypothesis Classes, Inductive Bias and KNN
K-U2-C17 Generalization, Bias-Variance Tradeoff, Overfitting & Underfitting
K-U2-C18 Linear Regression
K-U2-C19 Linear Regression Mathematics and Least Squares
K-U2-C20 Logistic Regression
K-U2-C21 Logistic Regression Mathematics and Decision Boundaries
K-U2-C22 Decision Trees (ID3, CART)
K-U2-C23 Decision Trees Mathematics (Entropy, Information Gain, Gini Impurity)
K-U2-C24 Classification Evaluation and Confusion Matrix
K-U2-C25 Precision, Recall, F1 Score, ROC and AUC
K-U2-C26 Regularization Foundations (Why It Exists, Occam's Razor)
K-U2-C27 Ridge Regression (L2 Penalty)
K-U2-C28 Lasso Regression (L1 Penalty, Sparsity)
K-U2-C29 Ridge vs Lasso Regularization Comparison
```

---

# 2. Unit II Integration Matrix

| Canonical ID | Concept | Main Chapter | Rapid View | Coding Lab | Math Companion | Exam Suite | Status |
|---|---|---|---|---|---|---|---|
| `K-U2-C14` | What Is ML? | `ch14-what-is-ml.html` | `LF-II / REV-II` | `code-u2-01-ml-workflow.html` | N/A | `mock-exam.html` | VERIFIED |
| `K-U2-C15` | ML Paradigms | `ch15-ml-paradigms.html` | `LF-II / REV-II` | `code-u2-01-ml-workflow.html` | N/A | `mock-exam.html` | VERIFIED |
| `K-U2-C16` | Hypothesis, Bias, KNN | `ch16-hypothesis-classes-bias-knn.html` | `LF-II / REV-II` | `code-u2-08-knn-svm-practical-comparison.html` | `m05-norms-and-distance.html` | `mock-exam.html` | VERIFIED |
| `K-U2-C17` | Bias-Variance | `ch17-bias-variance-generalization.html` | `LF-II / REV-II` | `code-u2-07-ml-evaluation-comparison.html` | `m16-variance-standard-deviation.html` | `mock-exam.html` | VERIFIED |
| `K-U2-C18` | Linear Regression | `ch18-linear-regression.html` | `LF-II / REV-II` | `code-u2-02-linear-regression.html` | `m09-linear-systems-least-squares.html` | `mock-exam.html` | VERIFIED |
| `K-U2-C19` | Least Squares Math | `ch19-linear-regression-math.html` | `LF-II / REV-II` | `code-u2-02-linear-regression.html` | `m09-linear-systems-least-squares.html` | `mock-exam.html` | VERIFIED |
| `K-U2-C20` | Logistic Regression | `ch20-logistic-regression.html` | `LF-II / REV-II` | `code-u2-03-logistic-regression.html` | `m03-functions-graphs-logs.html` | `mock-exam.html` | VERIFIED |
| `K-U2-C21` | Logistic Reg Math | `ch21-logistic-regression-math.html` | `LF-II / REV-II` | `code-u2-03-logistic-regression.html` | `m22-optimization-gradient-descent.html` | `mock-exam.html` | VERIFIED |
| `K-U2-C22` | Decision Trees | `ch22-decision-trees.html` | `LF-II / REV-II` | `code-u2-04-decision-trees.html` | `m10-probability-foundations.html` | `mock-exam.html` | VERIFIED |
| `K-U2-C23` | Tree Mathematics | `ch23-decision-trees-math.html` | `LF-II / REV-II` | `code-u2-04-decision-trees.html` | `m11-conditional-prob-bayes.html` | `mock-exam.html` | VERIFIED |
| `K-U2-C24` | Confusion Matrix | `ch24-confusion-matrix-evaluation.html` | `LF-II / REV-II` | `code-u2-05-classification-metrics-roc.html` | N/A | `mock-exam.html` | VERIFIED |
| `K-U2-C25` | Precision, Recall, ROC | `ch25-precision-recall-roc-auc.html` | `LF-II / REV-II` | `code-u2-05-classification-metrics-roc.html` | N/A | `mock-exam.html` | VERIFIED |
| `K-U2-C26` | Regularization | `ch26-regularization-foundations.html` | `LF-II / REV-II` | `code-u2-06-ridge-lasso-regularization.html` | `m24-l1-l2-regularization.html` | `mock-exam.html` | VERIFIED |
| `K-U2-C27` | Ridge Regression | `ch27-ridge-regression.html` | `LF-II / REV-II` | `code-u2-06-ridge-lasso-regularization.html` | `m24-l1-l2-regularization.html` | `mock-exam.html` | VERIFIED |
| `K-U2-C28` | Lasso Regression | `ch28-lasso-regression.html` | `LF-II / REV-II` | `code-u2-06-ridge-lasso-regularization.html` | `m24-l1-l2-regularization.html` | `mock-exam.html` | VERIFIED |
| `K-U2-C29` | Ridge vs Lasso | `ch29-ridge-vs-lasso-comparison.html` | `LF-II / REV-II` | `code-u2-06-ridge-lasso-regularization.html` | `m24-l1-l2-regularization.html` | `mock-exam.html` | VERIFIED |

---

# 3. Unit II Issues & Resolutions

## ISSUE-U2-001 — Mathematics Chapter Pairs
In Unit II, several topics are split into Conceptual vs Mathematical chapters:
- `C18 (Linear Regression)` ↔ `C19 (Least Squares Math)`
- `C20 (Logistic Regression)` ↔ `C21 (Logistic Math & Decision Boundaries)`
- `C22 (Decision Trees)` ↔ `C23 (Entropy & Information Gain Math)`

**Resolution:** Both chapters share the same high-level concept family (`K-U2-C18.x`, `K-U2-C20.x`, `K-U2-C22.x`) and cross-reference each other with explicit next/prev bridges.

## ISSUE-U2-002 — Metric Definitions & Invariants
Precision, Recall, F1, and Confusion Matrix metrics must agree identically across Main, Rapid, Exam, and Coding Labs:
- $\text{Precision} = \frac{TP}{TP + FP}$
- $\text{Recall} = \frac{TP}{TP + FN}$
- $F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$

**Resolution:** Formulas verified across [ch24-confusion-matrix-evaluation.html](file:///Users/arpit/minibook/aiml/chapters/ch24-confusion-matrix-evaluation.html), [ch25-precision-recall-roc-auc.html](file:///Users/arpit/minibook/aiml/chapters/ch25-precision-recall-roc-auc.html), [rapid/learn-fast.html](file:///Users/arpit/minibook/aiml/rapid/learn-fast.html), and [code-u2-05](file:///Users/arpit/minibook/aiml/coding/code-u2-05-classification-metrics-roc.html).


## 4. Verification Results & Release Certification

- **Canonical Stamping:** All chapters `ch14-what-is-ml.html` through `ch29-ridge-vs-lasso-comparison.html` stamped with `data-canonical="K-U2-Cxx"`.
- **Rapid View Bridge:** 16 chapter-to-rapid anchor bridges verified into [learn-fast.html](../rapid/learn-fast.html) (`#u2-sec-*`) and [last-minute.html](../rapid/last-minute.html) (`#rev-u2-sec-*`).
- **Coding Lab Track 2:** Integrated with 8 interactive Python coding labs (`code-u2-01` through `code-u2-08`).
- **Math Companion Bridge:** Connected to foundational math tracks (`m03`, `m05`, `m09`, `m10`, `m11`, `m16`, `m22`, `m24`).
- **Zero Dead Links:** Validated by automated system crawler across all 16 chapters.
