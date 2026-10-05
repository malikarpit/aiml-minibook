---
title: "MASTER-02 — AI/ML Mastery and Progress Tracker"
system: "AI & Machine Learning Self-Learning System"
scope: "Concept + Rapid + Math + Practice + Code + Exam mastery"
version: "2.0"
status: "LEARNER MASTERY SYSTEM"
updated: "05 October 2026"
---

# MASTER-02 — AI/ML Mastery and Progress Tracker

> **Role:** Track demonstrated competence, not reading completion. The learner can be highly familiar with a chapter while still being unable to calculate, implement, transfer, or answer it under time pressure.

---

# 1. Mastery philosophy

The system deliberately separates six dimensions:

```text
CONCEPT
→ Can I explain it?

RAPID
→ Can I retrieve the important version quickly?

MATH
→ Can I calculate / derive it?

PRACTICE
→ Can I solve it independently and transfer it?

CODE
→ Can I implement, test and debug it?

EXAM
→ Can I produce a correct answer under time pressure?
```

`RAPID` is not a seventh academic skill. It is an **efficiency/readiness layer** built over Concept mastery.

```text
Learn
↓
Understand
↓
Retrieve
↓
Apply
↓
Demonstrate
```

---

# 2. Relationship to MASTER-01

`MASTER-01` answers:

> **Where does the evidence live?**

`MASTER-02` answers:

> **What has the learner actually demonstrated?**

```text
MASTER-01
   ↓
find concept + learning objects
   ↓
perform evidence task
   ↓
MASTER-02
record level
```

---

# 3. Mastery scales

## 3.1 Concept — 0 to 4

| Score | Level | Evidence |
|---:|---|---|
| 0 | Not assessed | No reliable evidence |
| 1 | Recognition | Identifies terminology/idea |
| 2 | Assisted | Explains with notes/prompts |
| 3 | Independent | Explains accurately without notes + handles a standard example |
| 4 | Transfer | Explains, compares, diagnoses misconceptions, and applies to a changed context |

## 3.2 Rapid Recall — 0 to 3

| Score | Level | Evidence |
|---:|---|---|
| 0 | Not assessed | Has not attempted recall |
| 1 | Prompted | Can retrieve with visible cues |
| 2 | Independent | Can retrieve definitions/formulas/key steps without notes |
| 3 | Fast reliable | Can retrieve under a realistic short time limit with low error |

### Important

Rapid recall does **not** override Concept mastery.

A learner may recall a formula perfectly while not understanding what it means.

---

## 3.3 Math — 0 to 4

| Score | Level | Evidence |
|---:|---|---|
| 0 | Not assessed | No attempt |
| 1 | Recognition | Recognizes symbols/formulas |
| 2 | Guided | Solves with a worked example or hints |
| 3 | Independent | Solves a standard calculation/derivation unaided |
| 4 | Transfer | Solves a changed setup and checks the result |

## 3.4 Practice — 0 to 4

| Score | Level | Evidence |
|---:|---|---|
| 0 | Not assessed | No practice evidence |
| 1 | Guided | Follows scaffolded solution |
| 2 | Standard | Solves routine problems |
| 3 | Independent | Solves mixed problems with low support |
| 4 | Transfer / Debug | Solves unfamiliar variants or diagnoses flawed reasoning |

## 3.5 Code — 0 to 5

| Score | Level | Evidence |
|---:|---|---|
| 0 | Not assessed | No evidence |
| 1 | Read | Can explain existing code |
| 2 | Trace | Can predict or trace behaviour |
| 3 | Implement | Can reproduce core implementation |
| 4 | Test / Debug | Can test, diagnose and correct failures |
| 5 | Engineer / Transfer | Can adapt to a changed task and explain trade-offs |

## 3.6 Exam — 0 to 5

| Score | Level | Evidence |
|---:|---|---|
| 0 | Not assessed | No evidence |
| 1 | Recognize | Recognizes question/topic |
| 2 | Recall | Can reproduce core facts/formulas |
| 3 | Answer | Can produce a correct untimed answer |
| 4 | Timed | Can answer accurately under time pressure |
| 5 | Mixed | Performs correctly in a mixed timed set |

---

# 4. Topic readiness badges

A single "completed" badge is too weak.

Use these instead:

### LEARNED

Concept ≥ 3

### RAPID READY

Concept ≥ 3  
Rapid ≥ 2

### MATH READY

Math ≥ 3

### PRACTICE READY

Practice ≥ 3

### CODE READY

Code ≥ 3 when code is required/relevant

### EXAM READY

Concept ≥ 3  
Rapid ≥ 2  
Exam ≥ 4

and, where applicable:

- key formula/algorithm is usable;
- one representative problem has been solved;
- major misconception is recognised.

### MASTERED

Concept = 4  
and the relevant secondary dimensions meet their own readiness threshold.

Mastery is **concept-dependent**. A conceptual ethics topic does not require a coding score.

---

# 5. The learner evidence rule

A status should only be raised when evidence exists.

Good evidence:

```text
closed-book explanation
drawn diagram
solved numerical
independent problem
working implementation
debugged implementation
timed exam answer
active recall result
transfer problem
```

Weak evidence:

```text
opened chapter
highlighted text
watched a video
read the summary once
```

Reading can create exposure, but not mastery.

---

# 6. Progress record format

A simple topic record:

```yaml
concept_id: K-U2-C18
title: Linear Regression

concept: 3
rapid: 2
math: 2
practice: 2
code: 1
exam: 3

last_assessed: 2026-10-05

evidence:
  concept:
    - explained_without_notes
  rapid:
    - formula_recall
  math:
    - guided_MSE_problem
  practice:
    - standard_problem
  code:
    - read_reference
  exam:
    - untimed_short_answer

weaknesses:
  - least_squares_derivation
  - interpretation_of_coefficients

next_action:
  - solve_independent_regression_problem
```

The exact storage implementation may be JSON/database/local state later. The Markdown specification remains the semantic contract.

---

# 7. Course-wide dashboard

The eventual interface should show:

```text
AI/ML MASTERY

Concept        ████████████░░
Rapid Recall   ██████████░░░░
Math           ███████░░░░░░░
Practice       ██████░░░░░░░░
Code           █████░░░░░░░░░
Exam           ████████░░░░░░
```

But the dashboard must not fake precision.

For example, "72%" should not appear unless it is calculated from a defined dataset and aggregation rule.

Prefer:

```text
Strong
Developing
Needs work
Not assessed
```

or a transparent count such as:

```text
P1 concepts:
23 strong · 8 developing · 4 not assessed
```

---

# 8. Unit tracker

A learner may see:

| Unit | P1 Concepts | Concept Ready | Rapid Ready | Exam Ready |
|---|---:|---:|---:|---:|
| Unit I | — | — | — | — |
| Unit II | — | — | — | — |
| Unit III | — | — | — | — |
| Unit IV | — | — | — | — |

Dashes mean "not yet assessed," not zero.

---

# 9. Suggested high-value concept rows

Initial dashboard anchors:

### Unit I

```text
BFS
DFS
Heuristics
Greedy
A*
CSP
Minimax
Alpha-Beta
```

### Unit II

```text
Linear Regression
Logistic Regression
Decision Trees
Confusion Matrix
Precision
Recall
F1
ROC/AUC
Overfitting
Regularization
Ridge
Lasso
```

### Unit III

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

### Unit IV

```text
MDP
Q-Learning
Policy Gradient
Tokenization
Text Classification
Autoencoder
GAN
Bias/Fairness/Accountability
```

These are dashboard anchors, not a complete replacement for the canonical concept registry.

---

# 10. Rapid-study feedback loop

The rapid layer should produce useful diagnostic information.

Example:

```text
You recalled:
9 / 12 P1 concepts

Weak:
A*
Minimax
Admissibility

Recommended action:
→ open REV-U1
→ use Recall mode
→ then answer 3 short exam prompts
```

For Learn Fast:

```text
Low Concept score
→ recommend Main Book

Concept high, Rapid low
→ recommend Revision

Concept high, Exam low
→ recommend Exam Book

Concept high, Math low
→ recommend Math Companion

Concept high, Code low
→ recommend Coding Book
```

This makes the integration system adaptive without pretending to be an autonomous tutor.

---

# 11. Recommended mastery loop

```text
MAIN
↓
Concept evidence
↓
LEARN FAST
↓
Rapid recall
↓
PRACTICE
↓
Math / Code as relevant
↓
EXAM
↓
Timed mixed set
↓
MASTER-02 update
```

Weaknesses create the return path:

```text
Weak concept
→ Main

Weak recall
→ Revision

Weak mathematics
→ Math

Weak implementation
→ Code

Weak exam performance
→ Exam + Practice
```

---

# 12. Time-pressure mode

When the learner selects an exam horizon:

## 3–4 days

Prioritize:

```text
P1 concept gaps
P1 rapid recall
major P2 concepts
high-value formulas
high-value algorithms
```

## 2 days

Prioritize:

```text
P1
critical P2
exam comparisons
formula recall
```

## 1 day

Prioritize:

```text
P1 recall
formulas
algorithms
definitions
traps
answer triggers
```

## Final hours

Prioritize:

```text
weak P1 concepts
formula recall
algorithm recall
common comparisons
exam traps
timed short answers
```

The system should use the learner's actual mastery data when available. It must not repeatedly drill concepts already demonstrated reliably just because they are marked high priority.

---

# 13. Spaced reassessment

Mastery should decay in **confidence**, not in factual truth.

Do not silently change a score because time passed.

Instead:

```text
last assessed → due for reassessment
```

A concept can be flagged:

```text
Needs refresh
```

without pretending its underlying score became zero.

---

# 14. Reassessment triggers

Recommend reassessment when:

- a P1 concept has not been tested recently;
- a previous exam/practice failure occurred;
- a related prerequisite changed;
- a learner repeatedly makes the same error;
- a revision session produces recall failures.

The recommended next action should be the **smallest useful test**, not an automatic return to the entire chapter.

---

# 15. Mastery dependencies

Some evidence should unlock later evidence.

Examples:

```text
Perceptron concept ≥ 3
→ MLP practice becomes easier to assess

Confusion Matrix concept ≥ 3
→ Precision/Recall/F1 practice

Gradient Descent concept ≥ 3
→ Backpropagation math/practice

MDP concept ≥ 3
→ Q-learning practice
```

This is a dependency, not a rigid ban.

A learner may preview a later topic without already mastering every prerequisite.

---

# 16. Mastery status is learner data

The content files should define:

```text
what counts as evidence
what the scores mean
what routes are recommended
```

They should not fabricate the user's score.

Actual progress should be written only from observed study activity or an explicit learner update.

---

# 17. Mastery QA

Before the system is released:

- [ ] Every score has a defined meaning.
- [ ] No status is derived from reading alone.
- [ ] Rapid readiness is distinct from Concept mastery.
- [ ] Exam readiness has explicit evidence.
- [ ] Code is only required where relevant.
- [ ] Math is only required where relevant.
- [ ] Not-assessed is distinct from weak.
- [ ] Reassessment does not silently erase previous evidence.
- [ ] Recommendations route to existing files.
- [ ] No mastery badge depends on colour alone.

---

# 18. Final mastery model

```text
                 COMPETENCE
                     │
       ┌─────────────┼─────────────┐
       ↓             ↓             ↓
    UNDERSTAND     APPLY        PERFORM
       │             │             │
    Concept        Practice       Exam
       │
     Rapid
     Recall
       │
   ┌───┴────┐
  Math     Code
```

The final principle:

> **Readiness is demonstrated capability, not accumulated reading time.**
