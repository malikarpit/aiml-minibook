---
title: "RAPID-09 — AI/ML Last-Minute Revision — Unit IV"
system: "Engineering Minibooks · AI & Machine Learning"
version: "0.1"
status: "Learner-Facing Content · Final Rapid Unit"
mode: "Last-Minute Revision"
unit: "Unit IV — Advanced AI"
---

# AI & MACHINE LEARNING

# Last-Minute Revision — Unit IV
## Reinforcement Learning, NLP, Generative Models, Ethics & Applications

> **Use this for final recall. Read the trigger, answer from memory, then verify.**

---

# 0. UNIT IV IN 60 SECONDS

```text
RL
→ state → action → reward → next state

MDP
→ (S, A, P, R, γ)

POLICY
→ what action to take

VALUE
→ expected future return

Q-LEARNING
→ learn Q(s,a)
→ reward + discounted best next Q

POLICY GRADIENT
→ directly optimize policy

NLP
→ text → tokens → representation → model

TOKENIZATION
→ text → tokens

STEMMING
→ crude reduction

LEMMATIZATION
→ linguistic base form

AUTOENCODER
→ encode → latent → decode

GAN
→ generator vs discriminator

BIAS
→ unwanted systematic pattern

FAIRNESS
→ acceptable/equitable outcome criterion

ACCOUNTABILITY
→ responsibility + governance

APPLICATIONS
→ problem → method → benefit → risk
```

---

# 1. MUST-KNOW DEFINITIONS

## Reinforcement Learning

> A learning framework in which an agent learns to make sequential decisions through interaction with an environment and feedback such as rewards.

### Trigger

`state → action → reward`

---

## Markov Decision Process

> A mathematical framework for sequential decision making defined by states, actions, transition dynamics, rewards and a discount factor.

### Trigger

\[
\boxed{(S,A,P,R,\gamma)}
\]

---

## Policy

> A rule or probability distribution specifying how actions are selected from states.

### Trigger

\[
\pi(a|s)
\]

---

## Value Function

> Expected future return associated with a state or state-action pair under a policy.

### Trigger

```text
V(s)
Q(s,a)
```

---

## Q-Learning

> A model-free, value-based reinforcement-learning algorithm that learns action values and updates them toward reward plus discounted future value.

---

## Policy Gradient

> A family of reinforcement-learning methods that directly optimizes the parameters of a policy using gradient-based updates.

---

## NLP

> The field concerned with computational processing and understanding/generation of human language.

---

## Tokenization

> Splitting text into model-readable units called tokens.

---

## Stemming

> Reducing words to a rough root-like form, often with simple rules.

---

## Lemmatization

> Reducing a word to an intended dictionary/base form using linguistic information.

---

## Autoencoder

> A neural architecture that encodes an input into a latent representation and then decodes it to reconstruct the input.

---

## GAN

> A generative architecture in which a generator and discriminator are trained in competition.

---

## Bias

> A systematic tendency or distortion that can produce unfair or undesirable outcomes in an AI system.

---

## Fairness

> A concern with whether outcomes or error patterns are acceptably equitable across relevant groups under a chosen criterion and context.

---

## Accountability

> Clear responsibility and governance for an AI system and its consequences.

---

# 2. RL CORE LOOP

Memorise:

```text
State
↓
Action
↓
Environment
↓
Reward + Next State
↓
repeat
```

### Five vocabulary words

```text
State
Action
Reward
Policy
Value
```

---

# 3. MDP

### Representation

\[
\boxed{(S,A,P,R,\gamma)}
\]

### Meanings

`S` → states

`A` → actions

`P` → transition dynamics/probabilities

`R` → reward

`\gamma` → discount factor

### Markov property

> The current state contains the relevant information needed to model the future transition/reward process under the MDP assumption.

### Discount

\[
\boxed{0\leq\gamma\leq1}
\]

Higher \(\gamma\) generally gives relatively more importance to future rewards.

---

# 4. RETURN

### Discounted return

\[
\boxed{
G_t=r_{t+1}+\gamma r_{t+2}+\gamma^2r_{t+3}+\cdots
}
\]

### Memory

> **Reward now + discounted rewards later.**

---

# 5. POLICY

### Deterministic

\[
\pi(s)=a
\]

### Stochastic

\[
\pi(a|s)
\]

### Memory

> **Policy = action strategy.**

---

# 6. VALUE FUNCTIONS

### State value

\[
V^\pi(s)
\]

Expected return from state \(s\) under policy \(\pi\).

### Action value

\[
Q^\pi(s,a)
\]

Expected return from state \(s\), taking action \(a\), then following policy \(\pi\).

### Memory

```text
V(s) → state
Q(s,a) → state + action
```

---

# 7. Q-LEARNING

### Core formula

\[
\boxed{
Q(s,a)\leftarrow Q(s,a)+
\alpha[
r+\gamma\max_{a'}Q(s',a')-Q(s,a)
]
}
\]

### Symbols

`\alpha` → learning rate

`r` → reward

`\gamma` → discount

`s'` → next state

`a'` → possible next action

### Update intuition

```text
old Q
↓
target = reward + discounted best next Q
↓
move old Q toward target
```

### Core classification

```text
Q-learning
→ value-based
→ model-free
```

---

# 8. EXPLORATION VS EXPLOITATION

### Exploration

Try actions to gain information.

### Exploitation

Choose the action currently believed to be best.

### ε-greedy idea

```text
ε → explore
1−ε → exploit
```

### Memory

> **Explore to learn, exploit to use.**

---

# 9. POLICY GRADIENT

### Core idea

```text
policy parameters
↓
action distribution
↓
reward
↓
gradient
↓
policy update
```

### Classification

```text
Q-learning
→ value-based

Policy Gradient
→ policy-based
```

### Memory

> **Q learns values; Policy Gradient learns the policy.**

---

# 10. Q-LEARNING VS POLICY GRADIENT

| Q-Learning | Policy Gradient |
|---|---|
| Value-based | Policy-based |
| Learns \(Q(s,a)\) | Learns policy parameters |
| Uses value estimates to choose actions | Directly optimizes action-selection policy |
| Basic forms fit discrete action settings naturally | Particularly useful for stochastic/continuous policies |

---

# 11. NLP PIPELINE

### Core pipeline

```text
Raw Text
↓
Cleaning / normalization
↓
Tokenization
↓
Optional preprocessing
↓
Representation
↓
Model
↓
Output
```

### Important

Not every NLP system uses every preprocessing step.

---

# 12. TOKENIZATION

### Definition

Convert text to tokens.

Example:

```text
"AI learns"
↓
["AI", "learns"]
```

Modern tokenizers may use:

- words;
- subwords;
- characters;
- other units.

### Memory

> **Tokenization = text → tokens.**

---

# 13. STEMMING VS LEMMATIZATION

## Stemming

```text
rough reduction
→ may produce non-word
```

## Lemmatization

```text
linguistically informed reduction
→ intended base/dictionary form
```

### 5-second memory

> **Stem = chop.**  
> **Lemma = meaningful base.**

---

# 14. TEXT REPRESENTATION

Text needs numerical representation.

### Traditional methods

```text
Bag of Words
TF-IDF
n-grams
```

### Modern direction

```text
embeddings
contextual representations
```

### Memory

> **Text must become numbers/vectors before a numerical model can operate on it.**

---

# 15. TF-IDF

### Formula

\[
\boxed{
TFIDF(t,d)=TF(t,d)\times IDF(t)
}
\]

A common:

\[
\boxed{
IDF(t)=\log\frac{N}{df(t)}
}
\]

### Memory

> Important in a document, less common across documents → higher weight.

Different smoothing/normalization conventions may be used in implementations.

---

# 16. TEXT CLASSIFICATION

### Pipeline

```text
Text
↓
Preprocess/tokenize
↓
Represent
↓
Classifier
↓
Label
```

### Examples

```text
email → spam / not spam

review → positive / negative

ticket → category
```

### Memory

> **Text → representation → classifier → class.**

---

# 17. AUTOENCODER

### Structure

```text
Input
↓
Encoder
↓
Latent representation
↓
Decoder
↓
Reconstruction
```

### Parts

`Encoder` → compress/transform

`Latent` → internal representation

`Decoder` → reconstruct

### Core objective

Make reconstruction close to the input according to a chosen loss.

### Uses

- representation learning;
- dimensionality reduction;
- denoising;
- anomaly detection in suitable settings.

### Memory

> **AE = encode → latent → decode.**

---

# 18. GAN

### Full form

**Generative Adversarial Network**

### Two models

```text
Generator
→ creates synthetic samples

Discriminator
→ distinguishes real from generated
```

### Diagram

```text
Noise
 ↓
Generator
 ↓
Fake ──────┐
           ↓
       Discriminator
           ↑
Real ──────┘
```

### Memory

> **Generator creates; discriminator judges.**

---

# 19. GAN TRAINING

```text
Generator creates fake
↓
Discriminator compares real/fake
↓
feedback
↓
both improve through adversarial training
```

### Known problem

**Mode collapse**

The generator may produce insufficiently diverse outputs.

### Another issue

GAN optimisation can be unstable.

---

# 20. AUTOENCODER VS GAN

| Autoencoder | GAN |
|---|---|
| Encode + decode | Generator + discriminator |
| Reconstruction | Adversarial generation |
| Latent representation central | Competition central |
| Learns to reproduce input | Learns to generate realistic samples |

### Memory

> **Autoencoder reconstructs. GAN generates.**

---

# 21. RESPONSIBLE AI

### Main concerns

```text
Bias
Fairness
Accountability
Privacy
Transparency
Safety
Robustness
Misuse
```

For rapid examination recall, focus on:

**Bias + Fairness + Accountability**

---

# 22. BIAS

### Sources

```text
Data
Labels
Sampling
Features
Model
Deployment
```

### Core idea

Bias can enter at many stages, not only during model training.

### Memory

> **Bias = systematic unwanted pattern.**

---

# 23. FAIRNESS

### Core question

> Are outcomes/errors acceptably equitable for relevant groups under the chosen criterion?

### Important

Different fairness goals may conflict.

### Trap

There is no single fairness definition that solves every application.

---

# 24. ACCOUNTABILITY

### Core question

> Who is responsible for the system and its consequences?

### Useful mechanisms

```text
Documentation
Auditing
Monitoring
Human oversight
Ownership
Incident response
```

### Memory

> **Accountability = responsibility + governance.**

---

# 25. APPLICATION: HEALTHCARE

### Examples

```text
medical imaging
risk prediction
clinical support
patient monitoring
drug discovery
```

### Benefits

```text
pattern detection
efficiency
decision support
```

### Risks

```text
bias
false predictions
privacy
safety
explainability
over-reliance
```

### Answer skeleton

```text
Problem
→ AI method
→ benefit
→ limitation
→ ethical/safety issue
```

---

# 26. APPLICATION: AUTONOMOUS VEHICLES

### Core pipeline

\[
\boxed{
Sensors
\rightarrow Perception
\rightarrow Prediction
\rightarrow Planning
\rightarrow Control
}
\]

### AI roles

- object detection;
- road/lane understanding;
- prediction;
- planning;
- control.

### Risks

- sensor failure;
- perception errors;
- edge cases;
- safety;
- human interactions;
- accountability.

### Memory

> **Perceive → predict → plan → control.**

---

# 27. APPLICATION: FINANCE

### Examples

```text
Fraud detection
Risk assessment
Forecasting
Decision support
Customer service
```

### Benefits

```text
speed
scale
pattern detection
automation
```

### Risks

```text
bias
security
feedback loops
market/systemic risk
explainability
```

---

# 28. HIGH-VALUE COMPARISONS

## Stemming vs Lemmatization

```text
Stemming → crude / fast
Lemmatization → linguistic / meaningful base
```

## Q-Learning vs Policy Gradient

```text
Q-learning → Q(s,a) → value-based
Policy Gradient → policy parameters → policy-based
```

## Autoencoder vs GAN

```text
Autoencoder → reconstruct
GAN → generate
```

## Bias vs Fairness vs Accountability

```text
Bias → systematic pattern
Fairness → equitable outcomes/errors
Accountability → responsibility
```

---

# 29. EXAM TRAPS

### Trap 1

**"RL is just supervised learning with rewards."**

No. RL has sequential interaction, delayed consequences and a different feedback structure.

### Trap 2

**"Q-learning needs the transition model."**

No. Basic Q-learning is model-free.

### Trap 3

**"Q-learning directly learns the policy."**

Not in the same direct sense as policy-gradient methods. Q-learning primarily learns action values from which a policy can be derived.

### Trap 4

**"Stemming gives the dictionary root."**

Not necessarily.

### Trap 5

**"Lemmatization is always required in modern NLP."**

No.

### Trap 6

**"All NLP pipelines must remove stop words."**

No.

### Trap 7

**"Autoencoders are always generative models that create realistic arbitrary samples."**

No. Basic autoencoders are primarily reconstruction/representation models.

### Trap 8

**"GAN training is always stable."**

No.

### Trap 9

**"Fair AI means the model has high accuracy."**

No. Accuracy and fairness address different properties.

### Trap 10

**"A high-performing medical AI can replace human oversight by default."**

No. Safety, context, governance and appropriate human oversight matter.

---

# 30. FORMULA CARD

### MDP

\[
\boxed{(S,A,P,R,\gamma)}
\]

### Return

\[
\boxed{
G_t=r_{t+1}+\gamma r_{t+2}+\gamma^2r_{t+3}+\cdots
}
\]

### Q-Learning

\[
\boxed{
Q(s,a)\leftarrow Q(s,a)+
\alpha[
r+\gamma\max_{a'}Q(s',a')-Q(s,a)
]
}
\]

### Discount

\[
\boxed{0\leq\gamma\leq1}
\]

### TF-IDF

\[
\boxed{
TFIDF(t,d)=TF(t,d)\times IDF(t)
}
\]

\[
\boxed{
IDF(t)=\log\frac{N}{df(t)}
}
\]

---

# 31. RAPID RECALL TABLE

| Prompt | Answer |
|---|---|
| RL feedback? | Reward |
| MDP tuple? | \(S,A,P,R,\gamma\) |
| Policy? | Action strategy |
| \(V(s)\)? | State value |
| \(Q(s,a)\)? | State-action value |
| Q-learning type? | Model-free, value-based |
| Q-learning target? | Reward + discounted best next Q |
| Exploration? | Try to learn |
| Exploitation? | Use current best estimate |
| Policy gradient? | Direct policy optimisation |
| Tokenization? | Text → tokens |
| Stemming? | Crude reduction |
| Lemmatization? | Base/dictionary form |
| TF-IDF? | Term/document weighting |
| Text classification? | Text → class |
| Autoencoder? | Encode → latent → decode |
| GAN parts? | Generator + discriminator |
| Generator? | Creates synthetic samples |
| Discriminator? | Distinguishes real/fake |
| Mode collapse? | Insufficient output diversity |
| Bias? | Systematic unwanted pattern |
| Fairness? | Equitable outcome/error concern |
| Accountability? | Responsibility/governance |
| AV pipeline? | Perception → prediction → planning → control |

---

# 32. DRAW FROM MEMORY

### RL

```text
State
↓
Action
↓
Reward
↓
Next State
```

### MDP

```text
S A P R γ
```

### Q-learning

```text
Q(s,a)
→ reward
→ discounted best future Q
→ update
```

### NLP

```text
Text
→ tokens
→ vectors/representation
→ classifier
```

### Autoencoder

```text
Input
→ Encoder
→ Latent
→ Decoder
→ Reconstruction
```

### GAN

```text
Noise → Generator → Fake
                    ↓
Real ─────────→ Discriminator
```

### Autonomous vehicle

```text
Sensors
→ Perception
→ Prediction
→ Planning
→ Control
```

---

# 33. 15-MINUTE UNIT IV REVISION ORDER

## Pass 1 — 4 minutes

Read:

```text
RL
MDP
Q-learning
Policy Gradient
NLP
Tokenization
Stemming
Lemmatization
Autoencoder
GAN
Bias
Fairness
Accountability
Applications
```

## Pass 2 — 4 minutes

Memorise:

```text
MDP → S A P R γ

Q → value-based
Policy Gradient → policy-based

Stem → crude
Lemma → base form

AE → reconstruct
GAN → generate

Bias → pattern
Fairness → equity
Accountability → responsibility
```

## Pass 3 — 3 minutes

Review:

- Q-learning vs Policy Gradient;
- Stemming vs Lemmatization;
- Autoencoder vs GAN;
- Bias vs Fairness vs Accountability.

## Pass 4 — 4 minutes

Close the page and reproduce:

\[
Q(s,a)\leftarrow Q(s,a)+
\alpha[
r+\gamma\max_{a'}Q(s',a')-Q(s,a)
]
\]

\[
G_t=r_{t+1}+\gamma r_{t+2}+\cdots
\]

the NLP pipeline,

the autoencoder,

the GAN,

and the autonomous-vehicle pipeline.

---

# 34. FINAL UNIT IV CHECKLIST

```text
[ ] Reinforcement Learning
[ ] State
[ ] Action
[ ] Reward
[ ] Policy
[ ] Value
[ ] MDP
[ ] Markov property
[ ] Discount factor
[ ] Return
[ ] Q-value
[ ] Q-learning
[ ] Q-learning update
[ ] Exploration / exploitation
[ ] Policy gradients
[ ] NLP
[ ] Tokenization
[ ] Stemming
[ ] Lemmatization
[ ] Text representation
[ ] Bag of Words
[ ] TF-IDF
[ ] Text classification
[ ] Autoencoder
[ ] Encoder
[ ] Latent representation
[ ] Decoder
[ ] GAN
[ ] Generator
[ ] Discriminator
[ ] Mode collapse
[ ] Bias
[ ] Fairness
[ ] Accountability
[ ] Healthcare
[ ] Autonomous vehicles
[ ] Finance
```

---

# 35. FINAL MEMORY MAP

```text
RL
→ MDP
→ Q-Learning / Policy Gradient

NLP
→ tokenize
→ represent
→ classify

GENERATIVE
→ Autoencoder = reconstruct
→ GAN = adversarial generation

RESPONSIBLE AI
→ Bias
→ Fairness
→ Accountability

APPLICATIONS
→ problem
→ method
→ benefit
→ risk
→ governance
```

> **Done = you can reproduce the MDP tuple, Q-learning update, NLP pipeline, autoencoder/GAN distinction, and responsible-AI framework without opening the Main Book.**

**Rapid-study package complete.**
