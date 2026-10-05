---
title: "RAPID-04 — AI/ML Learn Fast — Unit II"
system: "Engineering Minibooks · AI & Machine Learning"
version: "0.1"
status: "Learner-Facing Content · Pilot Unit"
mode: "Learn Fast"
unit: "Unit II — Machine Learning"
---

# AI & MACHINE LEARNING

# Learn Fast — Unit II
## Machine Learning, Generalization, Regression, Classification & Regularization

> **Goal:** Build a working understanding of the core Machine Learning topics quickly, without going through the full mathematical depth of the Main Book.

---

# 0. Unit at a glance

Unit II asks one central question:

> **How does a machine learn a useful relationship from data and how do we know whether the learned model is actually good?**

The conceptual chain is:

```text
Machine Learning
      ↓
Learning Paradigms
      ↓
Hypothesis / Generalization
      ↓
Model
      ↓
Prediction
      ↓
Evaluation
      ↓
Overfitting / Underfitting
      ↓
Regularization
```

The main model families in this unit are:

```text
Regression
├── Linear Regression
└── Logistic Regression

Tree-based
└── Decision Trees
```

and the main evaluation family is:

```text
Confusion Matrix
      ↓
Accuracy
Precision
Recall
F1
      ↓
ROC
AUC
```

---

# 1. What is Machine Learning?

### Why this matters

Machine Learning (ML) is a major part of AI and the foundation of Units II–IV.

### Core idea

Machine learning enables a system to learn patterns or relationships from data so that it can make predictions or decisions without having every rule manually specified.

### Traditional programming vs ML

```text
Traditional:
Rules + Data → Program Output

ML:
Data + Desired outcomes/structure
          ↓
        Learning
          ↓
        Model
          ↓
       Prediction
```

### Important distinction

ML does not mean:

> “The computer magically understands the data.”

It means a defined learning procedure adjusts a model according to data and an objective.

### Typical pipeline

```text
Data
↓
Preprocessing
↓
Model
↓
Training
↓
Validation / testing
↓
Prediction
↓
Evaluation
```

### Examples

- house-price prediction;
- spam classification;
- image classification;
- recommendation;
- fraud detection.

### Exam lens

Know:

- definition of ML;
- why learning from data is useful;
- training vs inference;
- basic ML pipeline.

### Recall Check

What is the difference between specifying every rule and learning a relationship from examples?

---

# 2. Learning Paradigms

The most important classification is:

```text
Machine Learning
├── Supervised
├── Unsupervised
└── Reinforcement Learning
```

## Supervised Learning

Data has an input and a target/output.

```text
Input X + target y
        ↓
      learn
        ↓
      model
```

Tasks:

- regression;
- classification.

### Regression

Predict a continuous quantity.

Example:

> house area → price

### Classification

Predict a class/category.

Example:

> email → spam / not spam

---

## Unsupervised Learning

There is no target label supplied for the learning task.

The model tries to discover structure in the data.

Common examples include:

- clustering;
- dimensionality reduction.

---

## Reinforcement Learning

An agent interacts with an environment and learns from rewards/penalties.

```text
State
 ↓
Action
 ↓
Reward
 ↓
New state
```

### Memory hook

```text
Supervised → labelled outcome
Unsupervised → discover structure
RL → learn from reward
```

---

# 3. Hypothesis and Model

A learning algorithm needs a space of possible functions/models.

### Hypothesis

A hypothesis is a candidate function/model that maps inputs to outputs.

Example:

\[
h(x)=wx+b
\]

is a hypothesis for a simple regression model.

### Hypothesis class

A **hypothesis class** is the collection of functions the learner is allowed to consider.

For example:

```text
all straight lines
```

is a simpler hypothesis class than:

```text
all sufficiently flexible nonlinear functions
```

### Why it matters

A model can fail because:

1. the hypothesis class is too limited;
2. the model is too flexible and overfits;
3. the training process finds a poor solution.

### Inductive bias

Every learning method makes assumptions about which solutions are preferred or plausible.

Think:

> **Bias = assumptions that guide generalization.**

You do not need all theory here; understand why a learner needs some preference/assumption.

---

# 4. Generalization

The real objective is not merely:

> “Perform well on the training examples.”

It is:

> **Perform well on unseen data drawn from the relevant distribution.**

### Training error

Performance on data used during learning.

### Test/generalization error

Performance on unseen data.

### The key idea

```text
Training performance ≠ enough
```

A model that memorizes training examples may still fail on new examples.

### Generalization

> Ability of a learned model to perform well on unseen examples.

### Exam trigger

Whenever a question asks:

> “Why split into training and testing data?”

The answer is fundamentally about **estimating generalization**.

---

# 5. Overfitting and Underfitting

These are among the highest-value Unit II concepts.

## Underfitting

Model is too simple or insufficiently trained to capture the relevant structure.

Typical pattern:

```text
Training error → high
Test error → high
```

### Mental model

> **Model has not learned enough.**

---

## Overfitting

Model fits training data too closely, including noise or accidental details.

Typical pattern:

```text
Training error → very low
Test error → high
```

### Mental model

> **Model learned the training set, not the underlying general pattern.**

---

## Good fit / appropriate complexity

Goal:

```text
Low enough training error
+
good unseen-data performance
```

### Causes of overfitting

- overly flexible model;
- insufficient data;
- noisy data;
- excessive training in some settings.

### Remedies

- regularization;
- more representative data;
- simpler model;
- appropriate validation;
- early stopping in applicable model families;
- feature selection / dimensionality control where appropriate.

---

# 6. Bias–Variance

The useful rapid-learning intuition is:

```text
High Bias
→ model too restrictive
→ underfitting tendency

High Variance
→ model too sensitive to training data
→ overfitting tendency
```

### Bias

Systematic error caused by restrictive assumptions.

### Variance

Sensitivity of the learned model to changes in the training sample.

### Trade-off

A useful model needs a reasonable balance between:

```text
too rigid
        ↕
too sensitive
```

### Important

Do not reduce this to:

> bias = bad, variance = bad.

Both describe different error tendencies.

### Recall Check

Which problem is usually associated with very high bias?

**Underfitting.**

Which is usually associated with very high variance?

**Overfitting.**

---

# 7. Linear Regression

### Purpose

Predict a continuous numerical target.

### Simplest model

\[
y=\mathbf{w}^{T}\mathbf{x}+b
\]

For one feature:

\[
y=wx+b
\]

### Meaning

- \(x\) = input feature;
- \(w\) = learned weight/coefficient;
- \(b\) = intercept;
- \(y\) = predicted value.

### Intuition

The model tries to find a line/linear relationship that fits the data as well as possible.

```text
Features
   ↓
weighted combination
   ↓
predicted continuous value
```

### Example

```text
House area
   ↓
Linear Regression
   ↓
Predicted price
```

### Important assumption

Linear regression models a linear relationship in the chosen feature representation.

---

# 8. Mean Squared Error (MSE)

A common loss/objective is:

\[
MSE=\frac{1}{n}\sum_{i=1}^{n}(y_i-\hat y_i)^2
\]

where:

- \(y_i\) = actual target;
- \(\hat y_i\) = prediction;
- \(n\) = number of examples.

### Why square the errors?

Squaring:

- makes errors non-negative;
- penalizes larger errors more strongly.

### Intuition

```text
prediction
   ↓
difference from actual
   ↓
square
   ↓
average
```

### Rapid exam point

Lower MSE generally means smaller squared prediction error on the evaluated dataset.

---

# 9. Least Squares — core idea

Linear regression commonly fits parameters by minimizing the total squared residual error.

### Objective intuition

```text
Choose parameters
      ↓
Calculate predictions
      ↓
Calculate residuals
      ↓
Square residuals
      ↓
Sum / average
      ↓
Minimize
```

### The important concept

> **Least squares chooses the parameters that give the smallest squared-error objective under the model.**

Detailed derivations belong in the Main Book / Math Companion.

---

# 10. Linear Regression — advantages and limits

### Advantages

- simple;
- fast;
- interpretable;
- useful baseline.

### Limitations

- limited when the true relationship is strongly nonlinear unless features are transformed/expanded;
- can be affected by outliers;
- performance depends on feature representation and assumptions.

### Exam lens

Be able to answer:

- define linear regression;
- write the model equation;
- explain MSE;
- explain least squares;
- give advantages/disadvantages.

---

# 11. Logistic Regression

Despite its name, logistic regression is primarily used for **classification**.

### Core idea

Start from a linear score:

\[
z=\mathbf{w}^{T}\mathbf{x}+b
\]

Then map it to a probability using the sigmoid:

\[
\sigma(z)=\frac{1}{1+e^{-z}}
\]

The result lies between 0 and 1.

### Intuition

```text
Features
 ↓
linear score z
 ↓
sigmoid
 ↓
probability-like output
 ↓
decision threshold
 ↓
class
```

### Example

```text
transaction features
      ↓
logistic model
      ↓
P(fraud)
      ↓
threshold
      ↓
fraud / not fraud
```

### Important distinction

Linear Regression:

> numerical/continuous output

Logistic Regression:

> classification probability / class decision

---

# 12. Sigmoid function

\[
\sigma(z)=\frac{1}{1+e^{-z}}
\]

### Behaviour

```text
z → -∞  → σ(z) → 0
z = 0   → σ(z) = 0.5
z → +∞  → σ(z) → 1
```

### Why it is useful

It converts an unrestricted linear score into a bounded value suitable for probability-style classification interpretation.

### Exam lens

Remember:

> **Linear score → sigmoid → probability-like output.**

---

# 13. Decision Trees

A decision tree repeatedly splits data using questions/conditions.

```text
              Root
             /    \
        condition  condition
          /           \
       node           node
      /   \          /   \
   leaf  leaf      leaf  leaf
```

### Main components

- root;
- internal node;
- branch;
- leaf.

### Example

```text
Income > threshold?
      /       \
    yes        no
    ↓          ↓
Credit?       reject
```

### Learning idea

Select useful splits so that resulting groups become more useful for prediction.

### Common split criteria

For classification, you may encounter measures such as:

- entropy / information gain;
- Gini impurity.

For rapid learning, understand the purpose:

> **Choose a split that improves class separation / reduces impurity according to the selected criterion.**

---

# 14. Decision-tree mathematics — what you really need

## Entropy

A common entropy expression is:

\[
H(S)=-\sum_i p_i\log_2 p_i
\]

Higher entropy generally means greater class uncertainty.

### Information Gain

\[
IG = H(parent)-\sum_j \frac{|S_j|}{|S|}H(S_j)
\]

Interpretation:

> How much uncertainty is reduced by the split.

## Gini impurity

\[
Gini=1-\sum_i p_i^2
\]

Lower impurity indicates purer class composition.

### Important

Different criteria can be used by different tree implementations. Do not assume entropy is the only split measure.

---

# 15. Confusion Matrix

This is the basis for several classification metrics.

| | Actual Positive | Actual Negative |
|---|---:|---:|
| **Predicted Positive** | TP | FP |
| **Predicted Negative** | FN | TN |

### Four terms

**TP** — correctly predicted positive.

**TN** — correctly predicted negative.

**FP** — predicted positive, actually negative.

**FN** — predicted negative, actually positive.

### Memory

```text
TP → correct + 
TN → correct -
FP → false alarm
FN → missed positive
```

This matrix must be memorised before learning Precision, Recall and F1.

---

# 16. Accuracy

\[
Accuracy=\frac{TP+TN}{TP+TN+FP+FN}
\]

### Meaning

> Fraction of all predictions that are correct.

### Trap

Accuracy can be misleading when classes are highly imbalanced.

### Example intuition

If 99% of examples are negative, always predicting negative gives 99% accuracy but may be useless for detecting positives.

---

# 17. Precision

\[
Precision=\frac{TP}{TP+FP}
\]

### Question it answers

> **Of the examples predicted positive, how many were actually positive?**

### Memory

```text
Precision
= predicted positives
  → how many correct?
```

### High-precision scenario

When false positives are especially costly.

---

# 18. Recall

\[
Recall=\frac{TP}{TP+FN}
\]

Also called **True Positive Rate (TPR)**.

### Question it answers

> **Of all actual positives, how many did the model find?**

### Memory

```text
Recall
= actual positives
  → how many found?
```

### High-recall scenario

When missing positives is particularly costly.

---

# 19. F1 Score

\[
F1=
2\frac{Precision\cdot Recall}
{Precision+Recall}
\]

### Core idea

F1 combines precision and recall using their harmonic mean.

It is useful when you want a single score that rewards a balance between the two.

### Trap

F1 is not the arithmetic average:

\[
\frac{P+R}{2}
\]

It uses the harmonic mean.

---

# 20. Precision vs Recall

This is one of the most important comparisons in Unit II.

| Precision | Recall |
|---|---|
| Starts from predicted positives | Starts from actual positives |
| “How many predicted positives were correct?” | “How many actual positives did we find?” |
| Sensitive to FP | Sensitive to FN |
| Formula \(TP/(TP+FP)\) | Formula \(TP/(TP+FN)\) |

### Memory hook

> **Precision = purity of positive predictions.**  
> **Recall = coverage of actual positives.**

---

# 21. ROC Curve

ROC means **Receiver Operating Characteristic**.

It examines classifier behaviour across decision thresholds.

Axes:

\[
TPR=\frac{TP}{TP+FN}
\]

\[
FPR=\frac{FP}{FP+TN}
\]

### Intuition

Change the classification threshold:

```text
Threshold
   ↓
TPR changes
FPR changes
   ↓
plot pair
```

### Why useful?

It helps study the trade-off between catching positives and raising false alarms across thresholds.

---

# 22. AUC

**AUC = Area Under the ROC Curve.**

### Core idea

AUC compresses ROC-curve performance into a scalar summary.

A larger AUC generally indicates stronger ranking/discrimination performance under the corresponding interpretation.

### Rapid memory

```text
ROC → curve
AUC → area under curve
```

Do not confuse AUC with accuracy.

---

# 23. Regularization

### Problem

A model may become too flexible and fit noise.

### Goal

> **Discourage unnecessarily complex parameter values/model behaviour so generalization can improve.**

Conceptually:

```text
Original objective
+
complexity penalty
=
regularized objective
```

### Important

Regularization does not "remove the data."

It changes what solutions the learning process prefers.

---

# 24. Ridge Regression

Ridge applies an **L2 penalty**.

A simplified objective can be written as:

\[
J(\mathbf{w})=
\text{data loss}
+\lambda\sum_j w_j^2
\]

### Effect

It tends to shrink coefficients toward zero.

### Memory

```text
Ridge → L2 → squared coefficients → shrink
```

### Use

Helpful when you want to reduce overfitting and manage correlated features while retaining all features in the model.

---

# 25. Lasso Regression

Lasso applies an **L1 penalty**.

\[
J(\mathbf{w})=
\text{data loss}
+\lambda\sum_j |w_j|
\]

### Effect

It can drive some coefficients exactly to zero.

This can produce a sparse model.

### Memory

```text
Lasso → L1 → absolute coefficients → sparsity
```

### Use

Useful when feature selection/sparsity is desirable.

---

# 26. Ridge vs Lasso

| Ridge | Lasso |
|---|---|
| L2 penalty | L1 penalty |
| \( \sum w_j^2 \) | \( \sum |w_j| \) |
| Shrinks coefficients | Can make coefficients exactly zero |
| Usually retains all features | Can produce sparse solutions |
| Good when many features contribute | Useful when feature selection is desired |

### 5-second memory

> **Ridge shrinks. Lasso can select.**

---

# 27. Regularization intuition

Without regularization:

```text
Fit training data
        ↓
possibly very flexible solution
        ↓
overfit
```

With regularization:

```text
Fit data
+
penalize complexity
        ↓
prefer controlled solution
```

### Trade-off

Larger regularization generally increases the penalty on complexity and can reduce variance, but excessive regularization can increase bias and cause underfitting.

---

# 28. Unit II master map

```text
ML
│
├── Learning
│   ├── Supervised
│   │   ├── Regression
│   │   └── Classification
│   ├── Unsupervised
│   └── Reinforcement
│
├── Generalization
│   ├── Bias
│   ├── Variance
│   ├── Overfitting
│   └── Underfitting
│
├── Models
│   ├── Linear Regression
│   ├── Logistic Regression
│   └── Decision Trees
│
├── Evaluation
│   └── Confusion Matrix
│       ├── Accuracy
│       ├── Precision
│       ├── Recall
│       ├── F1
│       ├── ROC
│       └── AUC
│
└── Regularization
    ├── Ridge → L2
    └── Lasso → L1
```

---

# 29. What you should actually understand

Before leaving Learn Fast Unit II, you should be able to explain:

### ML

What learning from data means.

### Learning types

How supervised, unsupervised and RL differ.

### Generalization

Why unseen data matters.

### Bias–variance

Why too-simple and too-flexible models fail differently.

### Regression

How linear regression predicts continuous values.

### Logistic regression

Why sigmoid converts the linear score into a probability-style output.

### Decision trees

How recursive splits form a predictive tree.

### Metrics

What each metric asks:

```text
Accuracy → all predictions
Precision → predicted positives
Recall → actual positives
F1 → balance of precision/recall
ROC → threshold trade-off
AUC → area summary
```

### Regularization

Why adding a penalty can improve generalization.

### Ridge / Lasso

Why:

```text
Ridge → L2 → shrink
Lasso → L1 → sparse
```

---

# 30. Fast worked metric example

Suppose:

```text
TP = 40
TN = 50
FP = 10
FN = 5
```

Total:

\[
40+50+10+5=105
\]

### Accuracy

\[
\frac{40+50}{105}
=\frac{90}{105}
\approx0.857
\]

### Precision

\[
\frac{40}{40+10}
=\frac{40}{50}
=0.80
\]

### Recall

\[
\frac{40}{40+5}
=\frac{40}{45}
\approx0.889
\]

### F1

\[
F1
=2\frac{0.80(0.889)}{0.80+0.889}
\approx0.842
\]

### Interpretation

The model catches most actual positives (high recall) but not every predicted positive is correct (lower precision).

---

# 31. Common confusions

### Linear vs Logistic

```text
Linear
→ continuous prediction

Logistic
→ classification
→ sigmoid
```

### Precision vs Recall

```text
Precision → predicted positive set
Recall → actual positive set
```

### Accuracy vs F1

```text
Accuracy → all predictions
F1 → precision + recall
```

### Ridge vs Lasso

```text
Ridge → L2 → shrink
Lasso → L1 → sparse
```

### Training vs Generalization

```text
Training performance
≠
unseen-data performance
```

---

# 32. Unit II 20-minute understanding test

Without looking:

### Draw

1. Basic ML pipeline.
2. Confusion matrix.
3. Linear-regression pipeline.
4. Logistic-regression pipeline.
5. Decision-tree structure.
6. Regularized objective concept.

### Explain

1. Why overfitting happens.
2. Why accuracy can fail on imbalanced data.
3. Why precision and recall answer different questions.
4. Why A* is different from Greedy (from Unit I) and Ridge is different from Lasso (Unit II).
5. Why regularization can reduce overfitting.

### Write from memory

\[
y=\mathbf{w}^T\mathbf{x}+b
\]

\[
\sigma(z)=\frac{1}{1+e^{-z}}
\]

\[
MSE=\frac{1}{n}\sum(y_i-\hat y_i)^2
\]

\[
Precision=\frac{TP}{TP+FP}
\]

\[
Recall=\frac{TP}{TP+FN}
\]

\[
F1=2\frac{PR}{P+R}
\]

\[
Accuracy=\frac{TP+TN}{TP+TN+FP+FN}
\]

\[
Ridge\rightarrow L2
\]

\[
Lasso\rightarrow L1
\]

---

# 33. Unit II completion checklist

```text
[ ] ML definition
[ ] Training vs inference
[ ] Supervised learning
[ ] Unsupervised learning
[ ] Reinforcement learning
[ ] Hypothesis
[ ] Hypothesis class
[ ] Inductive bias
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
[ ] TP
[ ] TN
[ ] FP
[ ] FN
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

# 34. Bridge to Last-Minute Revision

When you can explain the above ideas once, switch to:

**RAPID-05 — Last-Minute Revision — Unit II**

That file will strip the unit down to:

```text
definitions
formulas
metric interpretation
model distinctions
comparison tables
regularization rules
exam traps
recall prompts
```

The Main Book remains the place for complete derivations and deeper mathematical treatment.
