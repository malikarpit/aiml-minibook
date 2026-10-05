---
title: "RAPID-00 — AI/ML Rapid Study System"
system: "Engineering Minibooks · AI & Machine Learning"
version: "0.1"
status: "Design Specification · Ready for Content Production"
purpose: "Define the Learn Fast and Last-Minute Revision learning modes"
---

# AI & MACHINE LEARNING

# RAPID-00 — Rapid Study System

**Engineering Minibooks · AI/ML**  
**Version 0.1 · 05 October 2026**  
**Scope:** Learn Fast + Last-Minute Revision

> **Design decision:** The AIML MiniBook will expose two dedicated rapid-study experiences over the same knowledge graph: **Learn Fast** for compressed understanding and **Last-Minute Revision** for high-speed recall. Neither replaces the Main Book or Exam Book.

---

# 0. Why these two modes exist

The Main Book is intentionally deep. It is a self-learning textbook with intuition, formal treatment, mathematics, visuals, examples, retrieval, and bridges to code/exams/math.

That is correct for normal study, but it creates a predictable problem close to an examination:

> A student may have only 1–4 days left and cannot afford to read the full learning path.

The rapid-study layer solves this without weakening the Main Book.

The intended progression is:

```text
MAIN BOOK
full understanding
      ↓
LEARN FAST
important concepts, taught quickly
      ↓
LAST-MINUTE REVISION
important facts, formulas, algorithms and contrasts
      ↓
EXAM BOOK
answer production
```

The two rapid modes are therefore **views of the same concepts**, not competing textbooks.

---

# 1. Product architecture

```text
AI/ML SELF-LEARNING SYSTEM
│
├── MAIN BOOK
│   └── Deep conceptual + mathematical learning
│
├── RAPID STUDY LAYER
│   ├── LEARN FAST
│   │   └── Rapid Concept Learning
│   │
│   └── LAST-MINUTE REVISION
│       └── Rapid Recall
│
├── EXAM BOOK
│   └── Answer construction
│
├── MATH COMPANION
│   └── Mathematical foundations
│
├── CODING BOOK
│   └── Implementation
│
└── PRACTICE / RESOURCE / MASTERY
    └── Transfer and further learning
```

### Core rule

**One concept → one stable identity → many views.**

A concept must not be rewritten independently in every book.

Instead:

```text
AIML-U2-C18
Linear Regression
      │
      ├── MAIN view
      ├── LEARN-FAST view
      ├── REVISION view
      ├── EXAM view
      ├── MATH view
      └── CODE / PRACTICE links
```

---

# 2. The two modes

## 2.1 LEARN FAST

### Purpose

Allow a student with limited time and incomplete prior knowledge to understand the **important part of the course** quickly.

### Reader state

Typical reader:

- has 3–4 days remaining;
- has not studied every chapter;
- needs understanding, not just memorisation;
- cannot read every derivation or extension;
- may return to the Main Book for difficult topics.

### Design promise

> **"Understand what matters without reading everything."**

### Target content density

Approximately **D3 — Rapid**.

A typical topic should take roughly:

- 2–5 minutes for a small concept;
- 5–10 minutes for an important algorithm/model;
- 8–15 minutes for a high-value mathematical concept.

These are design targets, not hard limits.

### What survives from the Main Book

Keep:

1. problem / motivation;
2. intuitive explanation;
3. exact definition;
4. core diagram or process;
5. essential formula;
6. one representative example;
7. key steps of the algorithm/model;
8. major advantages / limitations;
9. one or two comparisons;
10. exam relevance;
11. links to deeper content.

Remove or collapse:

- long history;
- secondary examples;
- extended derivations;
- research extensions;
- edge cases;
- lengthy proofs unless essential to the syllabus;
- full implementations;
- repeated discussion.

### Learn Fast topic anatomy

```text
TOPIC HEADER
↓
Why this matters
↓
What it is
↓
Intuition
↓
Core facts
↓
Core formula / algorithm / structure
↓
One example
↓
Common confusion
↓
Exam connection
↓
Go deeper
```

---

## 2.2 LAST-MINUTE REVISION

### Purpose

Allow a student who has already encountered the subject to **retrieve the highest-value material rapidly**.

### Reader state

Typical reader:

- has 1 day, one evening, or a few hours;
- has already studied some material;
- needs recognition and recall;
- wants formulas, definitions, comparisons, algorithm steps, traps and answer triggers.

### Design promise

> **"Recall the highest-value material before the exam."**

### Target content density

**D4 — Recall.**

The reader should normally scan a small topic in seconds, not minutes.

### What survives

Keep:

- one-line definition;
- key terms;
- formula;
- formula symbols;
- algorithm steps;
- decision rules;
- comparisons;
- common mistakes;
- must-remember conditions;
- likely question triggers;
- answer skeleton where useful.

Remove:

- introductory prose;
- extended intuition;
- long examples;
- complete derivations;
- deep implementation details;
- low-priority extensions.

---

# 3. Neither mode is a replacement for the Main Book

The system must actively prevent a dangerous failure mode:

```text
Main Book becomes too large
→ create summary
→ summary becomes another textbook
→ revision page becomes another summary
→ student still has too much to read
```

Therefore:

### Learn Fast is selective.

It does **not** contain everything.

### Last-Minute is ruthless.

It contains only what is valuable under time pressure.

The Main Book remains the authority for full understanding.

---

# 4. Relationship to the existing Exam Book

The rapid layer must not duplicate the complete Exam Book.

```text
LEARN FAST
"Can I understand this?"

LAST-MINUTE
"Can I remember this?"

EXAM BOOK
"Can I write this?"
```

### Example — A* Search

Learn Fast:

- what informed search means;
- why A* combines known and estimated cost;
- `f(n)=g(n)+h(n)`;
- small example;
- optimality intuition.

Last-Minute:

- `f=g+h`;
- `g` = cost so far;
- `h` = estimated remaining cost;
- Greedy = `h`;
- A* = `g+h`;
- key optimality condition.

Exam Book:

- complete 5/10-mark answer structure;
- pseudocode;
- worked search trace;
- complexity / completeness / optimality discussion;
- exam-oriented language.

---

# 5. Time-mode system

The rapid layer has four time presets.

## 5.1 3–4 DAYS

**Default rapid-learning route.**

Primary goal:

```text
Coverage first
→ understand Core topics
→ cover Important topics
→ light exposure to lower-priority topics
→ revise
```

Suggested allocation:

```text
Day 1 → Unit I
Day 2 → Unit II
Day 3 → Unit III
Day 4 → Unit IV + mixed revision
```

This is a default route. The interface must allow the learner to change the order.

---

## 5.2 2 DAYS

Primary goal:

```text
Core + Important topics
→ high-yield formulas
→ high-yield algorithms
→ major comparisons
→ final recall
```

Suggested route:

```text
Day 1 → Units I + II
Day 2 → Units III + IV + revision
```

---

## 5.3 1 DAY

Primary goal:

```text
Must Know
→ important formulas
→ important algorithms
→ important contrasts
→ major traps
→ answer triggers
```

Low-value detail disappears from the default view.

---

## 5.4 TONIGHT / FINAL HOURS

Primary goal:

```text
Recall only
```

Default content:

- definitions;
- formula bank;
- algorithm cards;
- model/architecture cards;
- comparisons;
- metrics;
- conditions;
- common traps;
- very short question triggers.

No long-form teaching should appear by default.

---

# 6. Priority model

Every concept receives an exam-aware priority.

## P1 — MUST KNOW

A student should not enter the exam without knowing it.

Typical reasons:

- core syllabus concept;
- central algorithm;
- major model;
- fundamental formula;
- repeatedly used concept;
- prerequisite for many other topics.

## P2 — IMPORTANT

High-value and likely to matter, but slightly below P1.

## P3 — SUPPORTING

Useful for completeness and understanding; not normally part of the final-hours default.

## P4 — EXTENSION

Professional, historical, research, or enrichment material.

The rapid pages default to:

```text
LEARN FAST
P1 + P2
```

and:

```text
LAST-MINUTE
P1 + selected P2
```

P3/P4 are hidden from the emergency default but remain reachable.

---

# 7. Content status tags

Each rapid-study topic may also carry:

`CORE` — syllabus-essential

`EXAM` — high-yield exam relevance

`FORMULA` — contains an essential equation/metric

`ALGORITHM` — contains a procedure or search/learning algorithm

`MODEL` — architecture or learned model

`COMPARE` — benefits from contrast with another concept

`TRAP` — common misconception or exam mistake

`MATH` — mathematics-heavy

`CODE` — direct practical implementation connection

These tags are semantic metadata. They must never be communicated by colour alone.

---

# 8. Learn Fast card types

The UI may reuse the existing Engineering Minibooks technical components.

### Concept Card

Definition + intuition + core facts.

### Formula Card

Formula + symbols + what it means + when to use.

### Algorithm Card

Problem + intuition + steps + important property.

### Model Card

Input → architecture → transformation → output.

### Comparison Card

A vs B on fixed criteria.

### Example Card

One tiny representative example.

### Trap Card

Wrong intuition → correct understanding.

### Recall Bridge

A short prompt that sends the reader to Last-Minute Revision.

### Depth Bridge

A link to the corresponding Main Book chapter.

---

# 9. Last-Minute card types

Last-Minute should use smaller, highly scannable units.

### Definition Strip

```text
TERM
→ one precise sentence
```

### Formula Strip

```text
MSE = ...
```

### Algorithm Strip

```text
1 → 2 → 3 → 4
```

### Compare Strip

```text
BFS → queue → unweighted
DFS → stack → memory efficient
```

### Condition Strip

```text
A* optimality → heuristic must satisfy required condition
```

### Trap Strip

```text
Precision ≠ Recall
Precision → predicted-positive correctness
Recall → actual-positive coverage
```

### Question Trigger

```text
"Explain overfitting."
→ definition + cause + train/test behaviour + remedies
```

---

# 10. Recall interaction

Last-Minute must support three reading states.

## Read

Everything is visible.

Best for a final skim.

## Recall

The answer is initially hidden.

Example:

> What is the evaluation function of A*?

`Reveal`

→ `f(n)=g(n)+h(n)`

Then:

> What do g(n) and h(n) mean?

`Reveal`

Then:

> When can A* be optimal?

`Reveal`

## Question

Prompt first, answer structure second.

Example:

> Differentiate Ridge and Lasso.

Reveal:

```text
Ridge → L2 → shrinks coefficients
Lasso → L1 → can drive coefficients to zero
```

The interaction must work on keyboard, touch and print.

A printed PDF may show the answers directly or use a clearly marked prompt/answer layout; essential content must not exist only behind interaction.

---

# 11. Navigation model

The rapid layer should be reachable from the global study navigation:

```text
STUDY
├── Main Book
├── Learn Fast
├── Last-Minute Revision
├── Exam Book
├── Math
├── Coding
└── Practice
```

Within Learn Fast:

```text
All
Unit I
Unit II
Unit III
Unit IV

3–4 Days
2 Days
1 Day
Tonight
```

Within Last-Minute:

```text
All
Unit I
Unit II
Unit III
Unit IV

Definitions
Formulas
Algorithms
Models
Comparisons
Traps
Questions
```

---

# 12. Topic identity and deep links

Every rapid topic must point back to the stable Main Book identity.

Example:

```yaml
topic_id: AIML-U2-C18
title: Linear Regression

main: MAIN-U2-C18
learn_fast: RAPID-U2-LF-018
revision: RAPID-U2-REV-018
exam: EXAM-U2-...
math: MATH-...
code: CODE-...
```

The exact target ID may vary when the existing companion books use a different naming scheme, but the identity relationship must remain stable.

---

# 13. Responsive behaviour

## Desktop

Use the full editorial composition:

```text
LEFT
unit / progress rail

CENTER
reading content

RIGHT
topic status / bridges / time estimate
```

The right rail is optional and collapses before content becomes cramped.

## Tablet

Use:

```text
top navigation
↓
main reading column
↓
inline bridges
```

## Phone

Priorities are:

1. topic;
2. content;
3. action;
4. navigation.

Filters become a horizontally scrollable control or compact filter drawer.

No multi-column layout should be retained merely for visual symmetry.

---

# 14. Density rules

### D3 — Learn Fast

- short paragraphs;
- compact but readable cards;
- controlled list length;
- one major visual at a time;
- formulas remain readable;
- whitespace preserved.

### D4 — Last-Minute

- short lines;
- dense information grouping;
- tables where comparison is genuinely faster;
- high scannability;
- minimal narrative;
- strong typographic hierarchy.

D4 is **not** permission to create a visually cramped dashboard.

---

# 15. Themes

The rapid layer inherits:

- Light;
- Dark;
- Paper.

No separate rapid-study visual language is allowed.

The semantic meaning of a component is unchanged across themes.

---

# 16. Accessibility

Required:

- semantic headings;
- keyboard navigation;
- visible focus;
- accessible interactive labels;
- no colour-only priority encoding;
- formulas that remain legible at zoom;
- diagrams with meaningful alternative descriptions;
- reduced-motion support;
- print-safe hierarchy.

The emergency modes must remain usable when a student is tired, stressed, on a small screen, or printing pages.

---

# 17. Print/PDF behaviour

The PDF derivative should be deliberately composed rather than being a raw website screenshot.

### Learn Fast PDF

Suitable for:

- 3–4 day study;
- unit-wise printing;
- annotation.

### Last-Minute PDF

Suitable for:

- final-night revision;
- formula/algorithm sheets;
- compact unit packets.

Interactive recall states are flattened into prompt + answer sections in print.

---

# 18. Quality gates

A Learn Fast topic is done when:

- [ ] A student can understand the core idea without opening the Main Book.
- [ ] The exact definition remains correct.
- [ ] Essential formula/algorithm steps are present.
- [ ] No high-value concept was removed solely to make it shorter.
- [ ] At least one example or concrete mental model remains where needed.
- [ ] Common confusion is addressed where relevant.
- [ ] Main Book and companion links are stable.
- [ ] Priority is assigned.

A Last-Minute topic is done when:

- [ ] A learner can recall the concept from the visible trigger.
- [ ] Essential formula/condition is present.
- [ ] Terminology is precise.
- [ ] Comparison can be scanned quickly.
- [ ] No unnecessary narrative remains.
- [ ] Question triggers are useful.
- [ ] It can be printed without losing meaning.

---

# 19. Anti-patterns

Never:

- turn Learn Fast into bullet-point lecture notes;
- turn Last-Minute into a compressed textbook;
- introduce neon/dashboard aesthetics;
- create dozens of filters;
- hide essential exam information behind interaction;
- duplicate full Main Book prose;
- change terminology between modes;
- use priority colour as the sole signal;
- remove a mathematically important condition just to save space.

---

# 20. Production sequence

The rapid layer will now be produced in ten files:

| # | File | Purpose |
|---|---|---|
| 01 | `RAPID-00_AI_ML_Rapid_Study_System.md` | Master architecture and rules |
| 02 | `RAPID-01_AI_ML_Priority_and_Content_Mapping.md` | Topic priority, survival rules and metadata |
| 03 | `RAPID-02_AI_ML_Learn_Fast_Unit_I.md` | Unit I rapid learning |
| 04 | `RAPID-03_AI_ML_Last_Minute_Unit_I.md` | Unit I rapid revision |
| 05 | `RAPID-04_AI_ML_Learn_Fast_Unit_II.md` | Unit II rapid learning |
| 06 | `RAPID-05_AI_ML_Last_Minute_Unit_II.md` | Unit II rapid revision |
| 07 | `RAPID-06_AI_ML_Learn_Fast_Unit_III.md` | Unit III rapid learning |
| 08 | `RAPID-07_AI_ML_Last_Minute_Unit_III.md` | Unit III rapid revision |
| 09 | `RAPID-08_AI_ML_Learn_Fast_Unit_IV.md` | Unit IV rapid learning |
| 10 | `RAPID-09_AI_ML_Last_Minute_Unit_IV.md` | Unit IV rapid revision |

### Production batches

```text
SET 1 → RAPID-00 + RAPID-01
SET 2 → Unit I Learn Fast + Unit I Revision
SET 3 → Unit II Learn Fast + Unit II Revision
SET 4 → Unit III Learn Fast + Unit III Revision
SET 5 → Unit IV Learn Fast + Unit IV Revision
```

This gives the rapid-study system a **single architectural authority**, followed by one Learn Fast and one Revision file for each syllabus unit.

---

# 21. Definition of success

The rapid layer is successful when:

```text
3–4 DAYS
→ student can move through the important syllabus
→ understands the major ideas
→ knows which topics deserve deeper reading

1 DAY
→ student can refresh the whole course
→ formulas and algorithms are retrievable
→ major comparisons are visible

FINAL HOURS
→ student can scan the highest-value material
→ actively test recall
→ jump directly to exam-answer structures
```

The goal is not to make the book shorter.

The goal is to make **time-to-understanding and time-to-recall much smaller** without sacrificing correctness.
