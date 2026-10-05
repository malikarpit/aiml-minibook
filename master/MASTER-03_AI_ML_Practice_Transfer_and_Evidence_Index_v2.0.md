---
title: "MASTER-03 — AI/ML Practice, Transfer and Evidence Index"
system: "AI & Machine Learning Self-Learning System"
scope: "Practice routing, transfer, debugging, exam evidence and learner feedback"
version: "2.0"
status: "PRACTICE INTEGRATION MASTER"
updated: "05 October 2026"
---

# MASTER-03 — Practice, Transfer and Evidence Index

> **Role:** Connect the concepts in the AI/ML knowledge graph to the right kind of practice. This is an index and routing system, not another textbook or question bank.

---

# 1. Purpose

The same concept needs different kinds of evidence.

```text
Can explain?
→ Concept evidence

Can recall?
→ Rapid evidence

Can calculate?
→ Math evidence

Can solve?
→ Practice evidence

Can implement?
→ Code evidence

Can answer under time?
→ Exam evidence
```

MASTER-03 routes the learner to an appropriate task.

---

# 2. Practice progression

Use the existing progression:

```text
L0 — Demonstration
L1 — Guided
L2 — Standard
L3 — Tricky
L4 — Transfer
L5 — Integration
```

### L0 — Demonstration

Author shows the complete solution and narrates the reasoning.

### L1 — Guided

Some decisions/steps are removed and the learner completes them.

### L2 — Standard

Learner solves a normal problem independently.

### L3 — Tricky

A plausible wrong path or misconception is deliberately exposed.

### L4 — Transfer

Same underlying idea, unfamiliar surface context.

### L5 — Integration

Combines two or more previously learned concepts.

The sequence is consistent with the existing AIML teaching architecture. It should be used as a progression, not as six mandatory questions for every concept. fileciteturn6file3

---

# 3. Practice families

Every practice item should have a type.

| Type | Purpose |
|---|---|
| Concept | Explain / identify |
| Recall | Retrieve formula/definition/steps |
| Numerical | Calculate |
| Trace | Follow an algorithm/model step-by-step |
| Comparison | Distinguish alternatives |
| Diagram | Draw/interpret |
| Application | Use concept in real context |
| Transfer | Apply to unfamiliar context |
| Debug | Find/correct an error |
| Coding | Implement/test |
| Exam | Produce answer under assessment conditions |

---

# 4. Evidence standards

## Concept evidence

Acceptable:

- explain without notes;
- answer conceptual prompt;
- identify misconception;
- redraw a core diagram.

## Math evidence

Acceptable:

- independent numerical;
- derivation;
- symbol interpretation;
- result sanity check.

## Practice evidence

Acceptable:

- correct independent solution;
- mixed problem;
- transfer problem;
- debugging reasoning.

## Code evidence

Acceptable:

- working implementation;
- tests;
- intermediate inspection/visualization;
- corrected bug;
- modification for a changed input/task.

## Exam evidence

Acceptable:

- timed short answer;
- timed 5-mark answer;
- 10-mark answer where relevant;
- mixed timed set.

---

# 5. Routing policy

After a learning pass:

```text
Concept < 3
→ return to Main

Concept ≥ 3, Rapid < 2
→ Revision / Recall

Concept ≥ 3, Math < 3
→ Math

Concept ≥ 3, Practice < 3
→ Standard Practice

Practice ≥ 3
→ Transfer

Code relevant and Code < 3
→ Coding

Exam < 4
→ Exam practice
```

The system should prefer the **smallest intervention likely to close the gap**.

---

# 6. Unit I — Practice routes

## AI

Practice:

```text
identify AI task
classify AI/ML/DL relationship
justify whether a scenario requires AI
```

Transfer:

> Explain how the same application could use more than one AI method.

## Intelligent Agents

Practice:

```text
identify sensors/actions
construct PEAS
evaluate rationality
classify environment properties
```

Transfer:

> Design an agent for a new environment.

## Problem Formulation

Practice:

```text
initial state
actions
transition model
goal test
path cost
```

Transfer:

> Formulate a previously unseen real-world task as a search problem.

## BFS / DFS

Practice:

```text
trace queue/stack
determine visitation order
compare completeness/optimality
```

Transfer:

> Choose an algorithm after changing memory, depth and cost constraints.

## Heuristics / A*

Practice:

```text
calculate h
calculate g+h
trace frontier ordering
check admissibility
```

Transfer:

> Construct a case where Greedy chooses a worse path than A*.

## CSP

Practice:

```text
identify variables/domains/constraints
complete partial assignment
detect inconsistency
```

Transfer:

> Convert a new scheduling or assignment scenario into a CSP.

## Minimax / Alpha-Beta

Practice:

```text
evaluate game tree
back up MAX/MIN values
mark pruned branches
```

Transfer:

> Explain why a branch can be pruned without changing the decision.

---

# 7. Unit II — Practice routes

## Learning paradigms

Practice:

```text
classify a task
select supervised / unsupervised / RL
```

## Generalization

Practice:

```text
interpret train/test performance
diagnose overfit/underfit
identify bias/variance tendency
```

Transfer:

> Recommend a remedy given a changed failure pattern.

## Linear Regression

Practice:

```text
calculate prediction
calculate residual
calculate MSE
interpret coefficient
```

Math:

```text
least-squares objective
```

Code:

```text
fit → predict → evaluate
```

## Logistic Regression

Practice:

```text
compute z
apply sigmoid
interpret probability-like output
apply threshold
```

Transfer:

> Explain how changing the threshold changes classification behaviour.

## Decision Trees

Practice:

```text
calculate entropy
calculate Gini
compare candidate splits
```

Transfer:

> Explain why two split criteria may prefer different splits.

## Classification Metrics

Practice:

```text
build confusion matrix
calculate accuracy
precision
recall
F1
TPR
FPR
```

Transfer:

> Recommend an appropriate metric for a changed cost of FP vs FN.

## ROC / AUC

Practice:

```text
calculate TPR/FPR from confusion entries
interpret threshold movement
interpret ROC curve
```

## Regularization

Practice:

```text
identify why regularization helps
compare penalty forms
predict coefficient behaviour
```

## Ridge / Lasso

Practice:

```text
identify L1 vs L2
compare coefficient effects
interpret sparsity
```

Transfer:

> Choose between Ridge and Lasso for a changed feature/correlation scenario and justify the choice.

---

# 8. Unit III — Practice routes

## Neuron

```text
calculate weighted sum
calculate activation
```

## Perceptron

```text
compute prediction
apply update
identify linearly separable boundary
```

## MLP

```text
trace forward pass
calculate layer output
```

## Activations / Loss

```text
calculate ReLU
calculate sigmoid
interpret loss
choose loss family for a task
```

## Gradient Descent

```text
calculate gradient update
interpret learning rate
trace one optimization step
```

## Backpropagation

```text
trace computation graph
apply chain-rule pieces
identify gradient path
```

## CNN

```text
trace convolution
identify feature-map dimensions
interpret pooling
```

## RNN / LSTM

```text
trace hidden-state flow
explain long-term dependency issue
identify gate roles
```

Transfer:

> Choose an architecture for a new spatial or sequential task and justify the structure.

---

# 9. Unit IV — Practice routes

## MDP

```text
identify S/A/P/R/γ
calculate discounted return
interpret state/action/reward
```

## Q-Learning

```text
calculate one Q update
identify target
trace exploration/exploitation
```

## Policy Gradient

```text
identify policy parameters
compare policy-based and value-based learning
interpret update direction conceptually
```

## NLP

```text
tokenize text
compare stemming/lemmatization
build simple text representation
classify text through a pipeline
```

## Autoencoders

```text
identify encoder/latent/decoder
interpret reconstruction
```

## GANs

```text
identify generator/discriminator
trace adversarial flow
diagnose mode-collapse intuition
```

## Ethics

```text
identify bias source
compare fairness concerns
assign accountability
```

## Applications

```text
problem
→ method
→ benefit
→ limitation
→ ethical/system risk
```

Transfer:

> Evaluate a new AI deployment using the same framework.

---

# 10. Practice ID structure

Recommended:

```text
P-K-U2-C18-01
```

Meaning:

```text
P
→ Practice

K-U2-C18
→ parent concept

01
→ item
```

Optional suffix:

```text
G  Guided
S  Standard
T  Transfer
D  Debug
E  Exam
I  Integration
```

Examples:

```text
P-K-U1-C07-01-S
P-K-U2-C25-03-N
P-K-U3-C35-02-T
```

The exact suffix implementation may be simplified in the final database.

---

# 11. Recall IDs

Rapid recall objects may use:

```text
R-K-U2-C25-01
```

They should remain distinct from full practice.

Example:

```text
R-K-U2-C25-01
"What is Precision?"

P-K-U2-C25-01-S
"Given TP/FP/FN/TN, calculate Precision."
```

Recall asks:

> **Can you retrieve it?**

Practice asks:

> **Can you use it?**

---

# 12. Exam evidence

Exam tasks should be mapped separately:

```text
E-K-...
```

A practice item can feed exam readiness:

```text
Practice ≥ 3
+
Exam ≥ 4
→ strong assessment readiness
```

But solving a practice question does not automatically award an Exam score.

---

# 13. Coding evidence

Coding should follow:

```text
Understand
→ pseudocode
→ implementation
→ test
→ inspect
→ debug
→ modify
→ transfer
```

A library call alone is not mastery.

The implementation should preserve:

```text
input
→ representation
→ algorithm/model
→ parameters
→ loss/reward
→ output
→ evaluation
```

---

# 14. Difficulty is not the same as mastery

Do not store:

```text
easy = mastered
hard = weak
```

A learner can master a hard concept and fail an easy question because of attention or wording.

Track separately:

```text
difficulty
+
learner performance
```

---

# 15. Error taxonomy

Practice feedback should classify errors.

```text
CONCEPTUAL
→ wrong idea

PROCEDURAL
→ wrong sequence

MATHEMATICAL
→ incorrect calculation/derivation

INTERPRETATION
→ formula correct, meaning wrong

TERMINOLOGY
→ wrong technical term

IMPLEMENTATION
→ code/logic bug

EXAM
→ correct knowledge, poor answer structure/time
```

This lets MASTER-02 make better routing decisions.

---

# 16. Example feedback loop

Suppose a learner gets:

```text
Precision formula → correct
Recall formula → correct
Numerical → incorrect
```

Do not send them back to the full chapter.

Instead:

```text
Error = denominator selection
↓
targeted practice
↓
new numerical
↓
reassess
```

This is the intended diagnostic behaviour.

---

# 17. Practice session templates

## 10-minute session

```text
2 recall
3 standard
2 comparison
2 application
1 transfer
```

## 30-minute session

```text
5 recall
5 standard
5 numerical
5 mixed
5 transfer
5 review/errors
```

These are default templates and should be adjustable.

---

# 18. Exam-near practice

### 3–4 days

```text
P1 concepts
+ standard questions
+ key numericals
+ comparisons
```

### 1–2 days

```text
P1 mixed set
+ formulas
+ exam questions
+ weak-topic drills
```

### Final day

```text
timed mixed set
→ error log
→ targeted correction
→ revision
```

### Final hours

Practice should shrink.

Prioritize:

```text
short recall
short numericals
algorithm traces
answer outlines
```

Avoid starting a large new problem set when revision would produce higher value.

---

# 19. Practice index record

Example:

```yaml
practice_id: P-K-U2-C25-03-S
concept_id: K-U2-C25

type: numerical
level: standard
skills:
  - calculate
  - interpret

dependencies:
  - K-U2-C24

routes:
  learn_fast: RAPID-04
  revision: RAPID-05
  exam: EXAM-U2

evidence:
  expected:
    - correct formula
    - correct substitution
    - correct interpretation

error_types:
  - mathematical
  - interpretation
```

---

# 20. Transfer principle

A transfer task changes the surface but preserves the underlying reasoning.

Bad transfer:

```text
same exact numbers
```

Good transfer:

```text
new domain
new input values
same mathematical/model structure
```

Example:

```text
Precision
training example → spam detection
transfer example → medical screening
```

The learner must identify the same FP/FN reasoning in a new setting.

---

# 21. Debugging principle

Debugging should ask:

```text
What should happen?
What actually happened?
Where did they diverge?
Which concept does the divergence represent?
```

This is especially important for:

- search traces;
- metric calculations;
- neural-network code;
- Q-learning updates;
- NLP preprocessing.

---

# 22. Practice completion rule

A concept is not "practice mastered" because one question was solved.

Suggested minimum for Practice ≥ 3:

```text
at least one standard problem
+
one different standard/variant
+
no major conceptual error
```

Practice = 4 requires transfer/debug evidence.

The exact number can be adjusted for topic type.

---

# 23. Integration with MASTER-02

```text
Practice result
      ↓
error classification
      ↓
MASTER-02 practice score
      ↓
next route
```

Example:

```text
Practice = 1
→ more guided examples

Practice = 2
→ standard questions

Practice = 3
→ transfer

Practice = 4
→ maintain / reassess later
```

---

# 24. Integration with Rapid

Rapid pages should expose practice links at the correct compression level.

Learn Fast:

```text
"Try one"
→ standard practice
```

Revision:

```text
"Test yourself"
→ recall
→ short numerical
```

Exam:

```text
"Write it"
→ timed answer
```

This prevents the revision layer from becoming a passive summary.

---

# 25. Practice QA

Before release:

- [ ] Every major P1 concept has at least one meaningful practice route.
- [ ] Numerical topics have numerical evidence where relevant.
- [ ] Algorithm topics have trace/ordering evidence.
- [ ] Comparison topics have comparison practice.
- [ ] Code topics have implementation evidence.
- [ ] Transfer tasks genuinely change the surface context.
- [ ] Error categories are defined.
- [ ] Practice IDs point to canonical concepts.
- [ ] Difficulty and mastery are separate.
- [ ] Practice results can update MASTER-02.

---

# 26. Final practice architecture

```text
CONCEPT
   ↓
RECALL
   ↓
GUIDED
   ↓
STANDARD
   ↓
TRICKY
   ↓
TRANSFER
   ↓
INTEGRATION

alongside:

MATH
CODE
EXAM
```

> **Practice is where knowledge becomes evidence.**
