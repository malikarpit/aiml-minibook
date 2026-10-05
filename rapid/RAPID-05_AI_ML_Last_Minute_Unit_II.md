---
title: "RAPID-05 — AI/ML Last-Minute Revision — Unit II"
system: "Engineering Minibooks · AI & Machine Learning"
version: "0.1"
status: "Learner-Facing Content · Pilot Unit"
mode: "Last-Minute Revision"
unit: "Unit II — Machine Learning"
---

# AI & MACHINE LEARNING

# Last-Minute Revision — Unit II
## Machine Learning, Evaluation & Regularization

> **Use this when you have limited time. Read the trigger, recall the idea, then verify.**

---

# 0. UNIT II IN 60 SECONDS

```text
ML
→ learn useful patterns/relationships from data

TYPES
→ Supervised / Unsupervised / Reinforcement

GENERALIZATION
→ good performance on unseen data

UNDERFITTING
→ too simple / insufficient learning
→ high train + high test error

OVERFITTING
→ fits training data too closely
→ low train + high test error

BIAS
→ restrictive assumptions
→ underfit tendency

VARIANCE
→ sensitivity to training data
→ overfit tendency

LINEAR REGRESSION
→ continuous prediction
→ y=wᵀx+b

LOGISTIC REGRESSION
→ classification
→ sigmoid

TREE
→ recursive splits

CONFUSION MATRIX
→ TP / TN / FP / FN

PRECISION
→ TP/(TP+FP)

RECALL
→ TP/(TP+FN)

F1
→ harmonic mean of P and R

ROC
→ TPR vs FPR across thresholds

AUC
→ area under ROC

REGULARIZATION
→ penalize complexity

RIDGE
→ L2 → shrink coefficients

LASSO
→ L1 → can force coefficients to zero
```

---

# 1. MUST-KNOW DEFINITIONS

## Machine Learning

> Learning patterns or relationships from data to make predictions or decisions.

### Trigger

`data → learning → model → prediction`

---

## Supervised Learning

> Learning from examples with target/output information.

`regression + classification`

---

## Unsupervised Learning

> Learning structure from data without target labels supplied for the learning task.

---

## Reinforcement Learning

> Learning through interaction with an environment using rewards/penalties as feedback.

---

## Hypothesis

A candidate function/model considered by the learner.

---

## Generalization

> Ability of a learned model to perform well on unseen data.

---

## Overfitting

> Model fits training data too closely and performs poorly on unseen data.

### Trigger

`low train error + high test error`

---

## Underfitting

> Model is too limited or insufficiently trained to capture the relevant pattern.

### Trigger

`high train error + high test error`

---

## Regularization

> Adding a penalty or constraint that discourages overly complex parameter values/model behaviour.

---

# 2. LEARNING TYPES

| Type | Main signal | Typical task |
|---|---|---|
| Supervised | Target labels | Regression / classification |
| Unsupervised | Structure in data | Clustering |
| Reinforcement | Reward | Sequential decision |

### Memory

> **Label → Supervised**  
> **Structure → Unsupervised**  
> **Reward → RL**

---

# 3. GENERALIZATION / BIAS / VARIANCE

## Bias

`restrictive assumptions → systematic error → underfit tendency`

## Variance

`high sensitivity to training sample → overfit tendency`

## Underfit

```text
train error ↑
test error ↑
```

## Overfit

```text
train error ↓
test error ↑
```

### Core goal

```text
Good training performance
+
Good unseen-data performance
```

---

# 4. LINEAR REGRESSION

### Model

\[
\boxed{y=\mathbf{w}^{T}\mathbf{x}+b}
\]

Single feature:

\[
\boxed{y=wx+b}
\]

### Task

**Continuous prediction**

### Example

`area → price`

### Memory

> **Linear Regression = continuous output**

---

# 5. MSE

\[
\boxed{
MSE=\frac{1}{n}\sum_{i=1}^{n}(y_i-\hat y_i)^2
}
\]

### Symbols

`y` → actual

`\hat y` → prediction

`n` → number of examples

### Meaning

Average squared prediction error.

### Trap

Lower MSE means lower squared error on the evaluated data; it does not automatically imply the model is globally better in every sense.

---

# 6. LEAST SQUARES

### Trigger

```text
Choose parameters
→ predictions
→ residuals
→ square residuals
→ minimize
```

### One line

> Fit parameters by minimizing squared residual error.

---

# 7. LOGISTIC REGRESSION

### Linear score

\[
z=\mathbf{w}^{T}\mathbf{x}+b
\]

### Sigmoid

\[
\boxed{
\sigma(z)=\frac{1}{1+e^{-z}}
}
\]

### Pipeline

```text
Features
↓
linear score
↓
sigmoid
↓
probability-like output
↓
threshold
↓
class
```

### Task

**Classification**

### Memory

> **Linear → continuous**  
> **Logistic → class probability/decision**

---

# 8. SIGMOID FACTS

\[
z\to-\infty\Rightarrow\sigma(z)\to0
\]

\[
z=0\Rightarrow\sigma(z)=0.5
\]

\[
z\to+\infty\Rightarrow\sigma(z)\to1
\]

### Trigger

`linear score → [0,1]`

---

# 9. DECISION TREES

### Structure

```text
Root
 ↓
Split
├── branch
│   └── leaf
└── branch
    └── leaf
```

### Vocabulary

- root;
- internal node;
- branch;
- leaf.

### Core idea

> Repeatedly split the data using informative conditions.

### Common criteria

```text
Entropy
Information Gain
Gini Impurity
```

---

# 10. TREE FORMULAS

## Entropy

\[
\boxed{
H(S)=-\sum_i p_i\log_2p_i
}
\]

## Information Gain

\[
\boxed{
IG=H(parent)-\sum_j\frac{|S_j|}{|S|}H(S_j)
}
\]

## Gini

\[
\boxed{
Gini=1-\sum_i p_i^2
}
\]

### Memory

> **Entropy = uncertainty**  
> **Information Gain = uncertainty reduction**  
> **Gini = impurity**

---

# 11. CONFUSION MATRIX

| | Actual + | Actual - |
|---|---:|---:|
| Predicted + | **TP** | **FP** |
| Predicted - | **FN** | **TN** |

### Four meanings

```text
TP → predicted +, actually +
TN → predicted -, actually -
FP → predicted +, actually -
FN → predicted -, actually +
```

### Memory

```text
FP → false alarm
FN → missed positive
```

---

# 12. ACCURACY

\[
\boxed{
Accuracy=\frac{TP+TN}{TP+TN+FP+FN}
}
\]

### Question

> "How many of all predictions were correct?"

### Trap

Accuracy may be misleading for highly imbalanced classes.

---

# 13. PRECISION

\[
\boxed{
Precision=\frac{TP}{TP+FP}
}
\]

### Question

> **Of predicted positives, how many are actually positive?**

### Trigger

```text
Predicted +
→ how many correct?
```

### Error sensitivity

High FP hurts precision.

---

# 14. RECALL

\[
\boxed{
Recall=\frac{TP}{TP+FN}
}
\]

Also:

\[
\boxed{TPR=Recall}
\]

### Question

> **Of actual positives, how many were found?**

### Trigger

```text
Actual +
→ how many found?
```

### Error sensitivity

High FN hurts recall.

---

# 15. F1 SCORE

\[
\boxed{
F1=2\frac{Precision\cdot Recall}
{Precision+Recall}
}
\]

### Meaning

Harmonic mean of precision and recall.

### Trap

Not:

\[
\frac{P+R}{2}
\]

### Memory

> **F1 = balance of precision + recall**

---

# 16. PRECISION VS RECALL

| | Precision | Recall |
|---|---|---|
| Starts from | Predicted positive | Actual positive |
| Core question | How many predicted positives are correct? | How many actual positives were found? |
| Sensitive to | FP | FN |
| Formula | \(TP/(TP+FP)\) | \(TP/(TP+FN)\) |

### 5-second memory

> **Precision = purity.**  
> **Recall = coverage.**

---

# 17. ROC

### Axes

\[
TPR=\frac{TP}{TP+FN}
\]

\[
FPR=\frac{FP}{FP+TN}
\]

### Meaning

ROC studies the trade-off between:

```text
True Positive Rate
vs
False Positive Rate
```

as the classification threshold changes.

### Memory

> **ROC = threshold trade-off curve.**

---

# 18. AUC

> **Area Under the ROC Curve.**

### Memory

```text
ROC → curve
AUC → area
```

A larger AUC generally indicates better discrimination/ranking performance for the evaluated task.

### Trap

AUC is not the same as accuracy.

---

# 19. REGULARIZATION

### Goal

Reduce overfitting by penalizing undesirable complexity.

### Concept

\[
\boxed{
J = \text{data loss}+\text{complexity penalty}
}
\]

### Memory

> **Fit the data, but discourage unnecessarily complex solutions.**

### Trap

Regularization does not mean deleting training examples.

---

# 20. RIDGE

### Penalty

\[
\boxed{
\lambda\sum_j w_j^2
}
\]

### Type

**L2**

### Effect

Shrinks coefficients toward zero.

### Memory

> **Ridge → L2 → shrink**

---

# 21. LASSO

### Penalty

\[
\boxed{
\lambda\sum_j |w_j|
}
\]

### Type

**L1**

### Effect

Can make some coefficients exactly zero.

### Memory

> **Lasso → L1 → sparse**

---

# 22. RIDGE VS LASSO

| Ridge | Lasso |
|---|---|
| L2 | L1 |
| \(w^2\) | \(|w|\) |
| Shrinks coefficients | Can set coefficients to zero |
| Usually keeps features | Can perform feature selection |
| Dense tendency | Sparse tendency |

### Final memory

\[
\boxed{\text{Ridge = shrink}}
\]

\[
\boxed{\text{Lasso = sparse/select}}
\]

---

# 23. HIGH-VALUE COMPARISONS

## Linear vs Logistic Regression

```text
Linear
→ continuous value
→ y=wᵀx+b

Logistic
→ classification
→ sigmoid
```

---

## Precision vs Recall

```text
Precision
→ predicted positives
→ FP matters

Recall
→ actual positives
→ FN matters
```

---

## Overfitting vs Underfitting

```text
Overfitting
→ model too flexible
→ train very good
→ test poor

Underfitting
→ model too limited
→ train poor
→ test poor
```

---

## Ridge vs Lasso

```text
Ridge → L2 → shrink
Lasso → L1 → zero some coefficients
```

---

# 24. EXAM TRAPS

### Trap 1

**"Logistic regression predicts a continuous target because its name contains regression."**

No. It is commonly used for classification.

---

### Trap 2

**"High accuracy always means a good classifier."**

No. Class imbalance can make accuracy misleading.

---

### Trap 3

**"Precision and recall are interchangeable."**

No.

Precision is based on predicted positives.

Recall is based on actual positives.

---

### Trap 4

**"F1 is the arithmetic average of precision and recall."**

No.

It is the harmonic mean.

---

### Trap 5

**"ROC and AUC are the same thing."**

No.

ROC is a curve; AUC is its area summary.

---

### Trap 6

**"Regularization reduces the amount of data."**

No.

It changes the objective/preferences during learning.

---

### Trap 7

**"Ridge performs feature selection like Lasso."**

Not in the same way. Ridge generally shrinks coefficients; Lasso can make coefficients exactly zero.

---

### Trap 8

**"Overfitting means training error is high."**

Usually the opposite: overfitting is commonly associated with very low training error and higher unseen-data error.

---

### Trap 9

**"Low training error proves generalization."**

No.

Generalization requires performance on unseen data.

---

# 25. FORMULA CARD

### Linear Regression

\[
\boxed{y=\mathbf{w}^{T}\mathbf{x}+b}
\]

### MSE

\[
\boxed{
MSE=\frac{1}{n}\sum(y_i-\hat y_i)^2
}
\]

### Sigmoid

\[
\boxed{
\sigma(z)=\frac{1}{1+e^{-z}}
}
\]

### Accuracy

\[
\boxed{
\frac{TP+TN}{TP+TN+FP+FN}
}
\]

### Precision

\[
\boxed{
\frac{TP}{TP+FP}
}
\]

### Recall

\[
\boxed{
\frac{TP}{TP+FN}
}
\]

### F1

\[
\boxed{
2\frac{PR}{P+R}
}
\]

### TPR

\[
\boxed{
\frac{TP}{TP+FN}
}
\]

### FPR

\[
\boxed{
\frac{FP}{FP+TN}
}
\]

### Entropy

\[
\boxed{
-\sum_i p_i\log_2p_i
}
\]

### Gini

\[
\boxed{
1-\sum_i p_i^2
}
\]

### Ridge

\[
\boxed{
L2\propto\sum_j w_j^2
}
\]

### Lasso

\[
\boxed{
L1\propto\sum_j|w_j|
}
\]

---

# 26. RAPID RECALL TABLE

| Prompt | Answer |
|---|---|
| Supervised learning? | Learning with target/output information |
| Unsupervised? | Discover structure without supplied target labels |
| RL? | Reward-based interaction |
| Generalization? | Good unseen-data performance |
| Underfitting? | Too limited; high train/test error tendency |
| Overfitting? | Fits train too closely; test error high |
| Linear regression output? | Continuous |
| Logistic regression? | Classification |
| Sigmoid range? | 0 to 1 |
| TP? | Correct positive |
| TN? | Correct negative |
| FP? | False positive |
| FN? | False negative |
| Precision? | TP/(TP+FP) |
| Recall? | TP/(TP+FN) |
| F1? | Harmonic mean of P/R |
| TPR? | Recall |
| FPR? | FP/(FP+TN) |
| ROC? | TPR vs FPR across thresholds |
| AUC? | Area under ROC |
| Ridge? | L2 |
| Lasso? | L1 |
| Ridge effect? | Shrink coefficients |
| Lasso effect? | Can make coefficients zero |
| Entropy? | Uncertainty measure |
| Information Gain? | Reduction in uncertainty |
| Gini? | Impurity measure |

---

# 27. 15-MINUTE UNIT II REVISION ORDER

## Pass 1 — 4 minutes

Read:

```text
ML types
generalization
over/underfitting
linear regression
logistic regression
decision trees
confusion matrix
precision/recall/F1
ROC/AUC
regularization
Ridge/Lasso
```

## Pass 2 — 4 minutes

Memorise:

```text
Linear → continuous
Logistic → sigmoid → classification

Precision → TP/(TP+FP)
Recall → TP/(TP+FN)
F1 → harmonic mean

Ridge → L2 → shrink
Lasso → L1 → sparse
```

## Pass 3 — 3 minutes

Read:

- Precision vs Recall
- Overfitting vs Underfitting
- Linear vs Logistic
- Ridge vs Lasso

## Pass 4 — 4 minutes

Close the page and reproduce:

- confusion matrix;
- all metric formulas;
- sigmoid;
- linear model;
- tree criteria;
- Ridge/Lasso penalties.

---

# 28. DRAW FROM MEMORY

### 1. Confusion matrix

```text
             Actual
          +         -
Pred +    TP        FP
Pred -    FN        TN
```

### 2. Logistic pipeline

```text
x
↓
wᵀx+b
↓
sigmoid
↓
probability-like output
↓
threshold
↓
class
```

### 3. Decision tree

```text
Root
 ↓
Split
├── ...
└── ...
    ↓
  Leaf
```

### 4. Regularization

```text
data loss + penalty
```

### 5. Metric relationship

```text
Confusion Matrix
      ↓
  TP TN FP FN
      ↓
Accuracy
Precision
Recall
F1
      ↓
ROC / AUC
```

---

# 29. FINAL UNIT II CHECKLIST

```text
[ ] ML
[ ] Supervised
[ ] Unsupervised
[ ] Reinforcement
[ ] Hypothesis
[ ] Generalization
[ ] Bias
[ ] Variance
[ ] Overfitting
[ ] Underfitting
[ ] Linear Regression
[ ] MSE
[ ] Least Squares
[ ] Logistic Regression
[ ] Sigmoid
[ ] Decision Trees
[ ] Entropy
[ ] Information Gain
[ ] Gini
[ ] Confusion Matrix
[ ] TP/TN/FP/FN
[ ] Accuracy
[ ] Precision
[ ] Recall
[ ] F1
[ ] ROC
[ ] AUC
[ ] Regularization
[ ] Ridge
[ ] Lasso
[ ] Ridge vs Lasso
```

---

# 30. FINAL MEMORY MAP

```text
ML
│
├── TYPES
│   ├── Supervised
│   ├── Unsupervised
│   └── RL
│
├── GENERALIZATION
│   ├── Bias
│   ├── Variance
│   ├── Underfit
│   └── Overfit
│
├── MODELS
│   ├── Linear → continuous
│   ├── Logistic → sigmoid
│   └── Tree → splits
│
├── METRICS
│   └── Confusion Matrix
│       ├── Accuracy
│       ├── Precision
│       ├── Recall
│       ├── F1
│       ├── ROC
│       └── AUC
│
└── REGULARIZATION
    ├── Ridge → L2 → shrink
    └── Lasso → L1 → sparse
```

**Done = you can reproduce the matrix, formulas, model distinctions and four major comparisons without looking.**

**Next bridge:** Unit II Exam Book for complete answer structures.
