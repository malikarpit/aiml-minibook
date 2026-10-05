---
title: "AI/ML Integration — Canonical Topic Map"
system: "AI & Machine Learning Self-Learning System"
version: "1.0"
status: "Working Canonical Map"
updated: "05 October 2026"
---

# AI/ML Integration — Canonical Topic Map

> **Purpose:** Provide the first canonical map from Main Book concepts to their learning views.
>
> This is deliberately a **chapter-level integration map first**. We will subdivide into finer-grained `K-*`, `F-*`, `D-*`, `P-*`, `R-*`, etc. identities only where the evidence or relationship requires it.

---

# 1. Canonical identity rule

Each important topic gets one stable concept identity:

```text
K-U1-C01
K-U1-C02
...
K-U4-C50
```

Additional objects attach to that concept:

```text
F-*   formula
D-*   diagram
EX-*  worked example
P-*   practice
R-*   recall
E-*   exam item
CL-*  coding
M-*   math dependency
RS-*  resource
LF-*  Learn Fast view
REV-* Revision view
```

The file name is not the canonical identity.

---

# 2. Routing legend

| Code | Meaning |
|---|---|
| `REQ` | Required connection |
| `USE` | Useful/expected connection |
| `OPT` | Optional |
| `N/A` | Intentionally not required |
| `VERIFY` | Destination exists in architecture but still needs file-level verification |

---

# 3. Unit I — AI Foundations and Search

| Canonical ID | Topic | Main | Rapid | Exam | Math | Code | Practice | Resource | Status |
|---|---|---|---|---|---|---|---|---|---|
| `K-U1-C01` | What Is AI? | C01 | LF-I / REV-I | U1 | N/A | N/A | REQ | USE | VERIFY |
| `K-U1-C02` | Intelligent Agents | C02 | LF-I / REV-I | U1 | OPT | N/A | REQ | USE | VERIFY |
| `K-U1-C03` | Problem Formulation | C03 | LF-I / REV-I | U1 | OPT | N/A | REQ | USE | VERIFY |
| `K-U1-C04` | Uninformed Search | C04 | LF-I / REV-I | U1 | OPT | CODE-U1-01 | REQ | USE | VERIFY |
| `K-U1-C05` | Heuristics | C05 | LF-I / REV-I | U1 | OPT | N/A | REQ | REQ | VERIFY |
| `K-U1-C06` | Greedy Best-First Search | C06 | LF-I / REV-I | U1 | OPT | CODE-U1-02 | REQ | USE | VERIFY |
| `K-U1-C07` | A* Search | C07 | LF-I / REV-I | U1 | USE | CODE-U1-02 | REQ | REQ | VERIFY |
| `K-U1-C08` | Local/Evolutionary Search | C08 | LF-I / REV-I | U1 | OPT | N/A | USE | USE | VERIFY |
| `K-U1-C09` | CSP | C09 | LF-I / REV-I | U1 | OPT | CODE-U1-03 | REQ | REQ | VERIFY |
| `K-U1-C10` | Game Playing | C10 | LF-I / REV-I | U1 | OPT | N/A | REQ | USE | VERIFY |
| `K-U1-C11` | Minimax + Alpha-Beta | C11 | LF-I / REV-I | U1 | OPT | CODE-U1-04 | REQ | REQ | VERIFY |
| `K-U1-C12` | Resource-Limited Search | C12 | LF-I / REV-I | U1 | USE | CODE-U1-04 | USE | USE | VERIFY |
| `K-U1-C13` | Unit I Consolidation | C13 | LF-I / REV-I | U1 / EXAM-98 | N/A | USE | REQ | USE | VERIFY |

---

# 4. Unit II — Classical Machine Learning

| Canonical ID | Topic | Main | Rapid | Exam | Math | Code | Practice | Resource | Status |
|---|---|---|---|---|---|---|---|---|---|
| `K-U2-C14` | What Is ML? | C14 | LF-II / REV-II | U2 | OPT | CODE-U2-01 | REQ | USE | VERIFY |
| `K-U2-C15` | ML Paradigms | C15 | LF-II / REV-II | U2 | N/A | CODE-U2-01 | REQ | USE | VERIFY |
| `K-U2-C16` | Hypothesis, Bias, KNN | C16 | LF-II / REV-II | U2 | USE | CODE-U2-07 / 08 | REQ | REQ | VERIFY |
| `K-U2-C17` | Generalization + Bias-Variance | C17 | LF-II / REV-II | U2 | USE | CODE-U2-07 | REQ | REQ | VERIFY |
| `K-U2-C18` | Linear Regression | C18 | LF-II / REV-II | U2 | USE | CODE-U2-02 | REQ | REQ | VERIFY |
| `K-U2-C19` | Least Squares Mathematics | C19 | LF-II / REV-II | U2 | REQ | CODE-U2-02 | REQ | REQ | VERIFY |
| `K-U2-C20` | Logistic Regression | C20 | LF-II / REV-II | U2 | USE | CODE-U2-03 | REQ | REQ | VERIFY |
| `K-U2-C21` | Logistic Regression Mathematics | C21 | LF-II / REV-II | U2 | REQ | CODE-U2-03 | REQ | REQ | VERIFY |
| `K-U2-C22` | Decision Trees | C22 | LF-II / REV-II | U2 | USE | CODE-U2-04 | REQ | REQ | VERIFY |
| `K-U2-C23` | Decision Trees Mathematics | C23 | LF-II / REV-II | U2 | REQ | CODE-U2-04 | USE | REQ | VERIFY |
| `K-U2-C24` | Confusion Matrix | C24 | LF-II / REV-II | U2 | OPT | CODE-U2-05 | REQ | REQ | VERIFY |
| `K-U2-C25` | Precision, Recall, F1, ROC/AUC | C25 | LF-II / REV-II | U2 | USE | CODE-U2-05 | REQ | REQ | VERIFY |
| `K-U2-C26` | Regularization | C26 | LF-II / REV-II | U2 | REQ | CODE-U2-06 | REQ | REQ | VERIFY |
| `K-U2-C27` | Ridge | C27 | LF-II / REV-II | U2 | REQ | CODE-U2-06 | REQ | REQ | VERIFY |
| `K-U2-C28` | Lasso | C28 | LF-II / REV-II | U2 | REQ | CODE-U2-06 | REQ | REQ | VERIFY |
| `K-U2-C29` | Ridge vs Lasso | C29 | LF-II / REV-II | U2 | REQ | CODE-U2-06 | REQ | REQ | VERIFY |

---

# 5. Unit III — Neural Networks

| Canonical ID | Topic | Main | Rapid | Exam | Math | Code | Practice | Resource | Status |
|---|---|---|---|---|---|---|---|---|---|
| `K-U3-C30` | NN Foundations | C30 | LF-III / REV-III | U3 | USE | CODE-U3-01 | REQ | REQ | VERIFY |
| `K-U3-C31` | Perceptron | C31 | LF-III / REV-III | U3 | USE | CODE-U3-01 | REQ | REQ | VERIFY |
| `K-U3-C32` | MLP | C32 | LF-III / REV-III | U3 | USE | CODE-U3-02 | REQ | REQ | VERIFY |
| `K-U3-C33` | Activations + Losses | C33 | LF-III / REV-III | U3 | REQ | CODE-U3-02 | REQ | REQ | VERIFY |
| `K-U3-C34` | Gradient Descent | C34 | LF-III / REV-III | U3 | REQ | CODE-U3-03 | REQ | REQ | VERIFY |
| `K-U3-C35` | Backpropagation | C35 | LF-III / REV-III | U3 | REQ | CODE-U3-03 | REQ | REQ | VERIFY |
| `K-U3-C36` | CNN | C36 | LF-III / REV-III | U3 | USE | CODE-U3-04 | REQ | REQ | VERIFY |
| `K-U3-C37` | RNN | C37 | LF-III / REV-III | U3 | USE | CODE-U3-05 | REQ | REQ | VERIFY |
| `K-U3-C38` | LSTM | C38 | LF-III / REV-III | U3 | USE | CODE-U3-05 | REQ | REQ | VERIFY |
| `K-U3-C39` | Unit III Consolidation | C39 | LF-III / REV-III | U3 / EXAM-98 | USE | USE | REQ | USE | VERIFY |

---

# 6. Unit IV — Advanced AI

| Canonical ID | Topic | Main | Rapid | Exam | Math | Code | Practice | Resource | Status |
|---|---|---|---|---|---|---|---|---|---|
| `K-U4-C40` | MDP | C40 | LF-IV / REV-IV | U4 | USE | CODE-U4-01 | REQ | REQ | VERIFY |
| `K-U4-C41` | Q-Learning | C41 | LF-IV / REV-IV | U4 | USE | CODE-U4-01 | REQ | REQ | VERIFY |
| `K-U4-C42` | Policy Gradients | C42 | LF-IV / REV-IV | U4 | REQ | CODE-U4-02 | REQ | REQ | VERIFY |
| `K-U4-C43` | NLP + Text Classification | C43 | LF-IV / REV-IV | U4 | OPT | CODE-U4-03 | REQ | REQ | VERIFY |
| `K-U4-C44` | Autoencoders | C44 | LF-IV / REV-IV | U4 | USE | CODE-U4-04 | REQ | REQ | VERIFY |
| `K-U4-C45` | GANs | C45 | LF-IV / REV-IV | U4 | USE | CODE-U4-05 | REQ | REQ | VERIFY |
| `K-U4-C46` | AI Ethics / Fairness / Accountability | C46 | LF-IV / REV-IV | U4 | N/A | OPT | REQ | REQ | VERIFY |
| `K-U4-C47` | AI in Healthcare | C47 | LF-IV / REV-IV | U4 | N/A | OPT | REQ | REQ | VERIFY |
| `K-U4-C48` | Autonomous Vehicles | C48 | LF-IV / REV-IV | U4 | N/A | OPT | REQ | REQ | VERIFY |
| `K-U4-C49` | AI in Financial Systems | C49 | LF-IV / REV-IV | U4 | N/A | OPT | REQ | REQ | VERIFY |
| `K-U4-C50` | Unit IV Consolidation | C50 | LF-IV / REV-IV | U4 / EXAM-98 | OPT | USE | REQ | USE | VERIFY |

---

# 7. Math Dependency Map

Use these as **initial routes**, not as proof that every chapter already contains the correct link.

| AI/ML area | Primary math route |
|---|---|
| Search costs / heuristics | M02, M03, relevant logic/counting support |
| Vectors / feature representations | M04–M06 |
| Regression | M07–M09 |
| Probability / Bayes | M10–M17 |
| Least squares | M08–M09 |
| Logistic regression | M03, M18–M22 as needed |
| Decision-tree impurity / information | M10–M17 + supporting probability |
| Precision/Recall/ROC | M10–M17 + statistical interpretation |
| Ridge/Lasso | M22–M24 |
| Neural networks | M04–M08, M18–M23 |
| Backpropagation | M18–M22 |
| CNN/RNN/LSTM | M18–M23 + tensor/matrix foundations |
| Q-learning | M10–M17 + optimization where relevant |
| Policy gradients | M18–M23 + probability foundations |
| Generative models | M10–M17 + M18–M23 where mathematically used |

---

# 8. Coding Dependency Map

| Concept family | Canonical coding destination |
|---|---|
| BFS / DFS | `CODE-U1-01` |
| Greedy / A* | `CODE-U1-02` |
| CSP | `CODE-U1-03` |
| Minimax / Alpha-Beta | `CODE-U1-04` |
| ML preprocessing/workflow | `CODE-U2-01` |
| Linear Regression | `CODE-U2-02` |
| Logistic Regression | `CODE-U2-03` |
| Decision Trees | `CODE-U2-04` |
| Metrics / ROC-AUC | `CODE-U2-05` |
| Ridge / Lasso | `CODE-U2-06` |
| Evaluation / comparison | `CODE-U2-07` |
| KNN / SVM | `CODE-U2-08` |
| Neuron / Perceptron | `CODE-U3-01` |
| MLP | `CODE-U3-02` |
| Gradient / Backprop | `CODE-U3-03` |
| CNN | `CODE-U3-04` |
| RNN / LSTM | `CODE-U3-05` |
| MDP / Q-learning | `CODE-U4-01` |
| Policy Gradients | `CODE-U4-02` |
| NLP / Text Classification | `CODE-U4-03` |
| Autoencoders | `CODE-U4-04` |
| GANs | `CODE-U4-05` |

---

# 9. Rapid View Map

The rapid files are intentionally unit-level views:

```text
Unit I
  Learn Fast → RAPID-02
  Revision   → RAPID-03

Unit II
  Learn Fast → RAPID-04
  Revision   → RAPID-05

Unit III
  Learn Fast → RAPID-06
  Revision   → RAPID-07

Unit IV
  Learn Fast → RAPID-08
  Revision   → RAPID-09
```

`RAPID-00` owns the rapid system rules.

`RAPID-01` owns priority/content mapping.

---

# 10. Exam View Map

```text
C01–C13 → EXAM-U1
C14–C29 → EXAM-U2
C30–C39 → EXAM-U3
C40–C50 → EXAM-U4

Mixed/timed → EXAM-98
Last-day/formulas → EXAM-99
```

---

# 11. Practice and Mastery relationship

Do not make Practice or Mastery copies of every chapter.

The intended graph is:

```text
K-concept
   │
   ├── P-* practice
   ├── R-* recall
   ├── E-* exam item
   ├── CL-* coding evidence
   └── mastery record
```

Practice difficulty progresses through:

```text
L0 → Demonstration
L1 → Guided
L2 → Standard
L3 → Tricky
L4 → Transfer
L5 → Integration
```

Mastery should record demonstrated evidence rather than file-completion.

---

# 12. Priority inheritance

Priority from the rapid system should propagate to other views.

```text
P1
→ main depth + exam + recall + practice
→ math/code when needed

P2
→ solid understanding + exam awareness
→ practice as appropriate

P3
→ supporting understanding

P4
→ extension only
```

A topic marked P1 should never disappear from Revision or Exam merely because its Main explanation is complete.

---

# 13. What to verify first

Start with Unit I.

For each row:

```text
1. Locate the Main destination.
2. Locate the LF/Revision coverage.
3. Locate the Exam destination.
4. Check Math dependency.
5. Check Code destination.
6. Check Practice route in MASTER-03.
7. Check Resource route in MASTER-04.
8. Check whether the canonical concept identity is unique.
9. Record contradictions/issues.
10. Mark VERIFIED only after inspection.
```

Then repeat for Units II–IV.

---

# 14. Integration completion rule

A row moves from:

```text
VERIFY
```

to:

```text
CONNECTED
```

only when every required destination is known and relevant.

A row moves to:

```text
QA-PASSED
```

only after consistency checks are performed.

This prevents the common mistake of treating a link as integrated merely because a filename exists.
