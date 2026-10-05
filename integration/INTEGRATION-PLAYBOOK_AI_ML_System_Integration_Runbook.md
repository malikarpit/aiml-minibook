---
title: "AI/ML MiniBook System Integration Playbook"
system: "AI & Machine Learning Self-Learning System"
version: "1.0"
status: "Operational Runbook"
updated: "05 October 2026"
parent_controls:
  - MASTER-00
  - MASTER-01
  - MASTER-02
  - MASTER-03
  - MASTER-04
  - MASTER-05
---

# AI/ML MiniBook System Integration Playbook

> **Purpose:** This is the practical procedure for turning the existing collection of AI/ML files into one connected learning system.
>
> **Important:** This is an integration runbook, not another teaching book.

---

# 1. What "integration" actually means

Integration does **not** mean rewriting every file.

It means checking that the files agree, know where each other belongs, and send the learner to the correct next action.

For one concept, the target is:

```text
Canonical Concept
      │
      ├── MAIN       → understand
      ├── LEARN FAST → understand quickly
      ├── REVISION   → recall quickly
      ├── EXAM       → answer
      ├── MATH       → calculate / derive
      ├── CODE       → implement
      ├── PRACTICE   → solve / transfer
      └── RESOURCE   → deepen / verify
                  ↓
               MASTERY
```

Example:

```text
A*
│
├── Main C07
├── Learn Fast Unit I
├── Last-Minute Revision Unit I
├── Exam Unit I
├── Math dependency only where useful
├── Code-U1-02
├── Practice items
├── Recall items
└── selected resources
```

The goal is that these are **different views of the same A*** identity, not eight competing explanations.

---

# 2. The five jobs you actually have to perform

The integration pass can be reduced to five jobs:

```text
1. INVENTORY
2. NORMALIZE
3. CONNECT
4. VERIFY
5. FREEZE
```

## 2.1 Inventory

Find what files actually exist.

Record:

- filename;
- layer;
- unit;
- topic/chapter;
- status;
- obvious dependencies;
- obvious duplicates;
- obvious outdated references.

Do not edit yet.

---

## 2.2 Normalize

Choose one canonical identity for each important concept.

For example:

```text
K-U1-ASTAR
```

Then record older aliases such as:

```text
A*
C07
EXAM-ML-U1-ASTAR
Practice Bank A*
RES-ML-ASTAR
```

The old names do not all need to be renamed.

They become aliases pointing toward one canonical identity.

---

## 2.3 Connect

For every major concept, define its available views:

```text
MAIN
LF
REV
EXAM
MATH
CODE
PRACTICE
RESOURCE
MASTERY
```

Not every concept needs every view.

Use:

```text
✓ = required
○ = useful/optional
— = intentionally not needed
```

Example:

| Concept | Main | LF | Rev | Exam | Math | Code | Practice | Resource |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| A* | ✓ | ✓ | ✓ | ✓ | ○ | ✓ | ✓ | ✓ |
| Precision | ✓ | ✓ | ✓ | ✓ | ○ | ✓ | ✓ | ✓ |
| Backpropagation | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Ethics | ✓ | ✓ | ✓ | ✓ | — | ○ | ✓ | ✓ |

A dash is acceptable. It is better than inventing unnecessary content.

---

# 3. The master integration table

Create one working table outside the learner-facing books.

Recommended columns:

| Field | Meaning |
|---|---|
| Canonical ID | Stable identity |
| Unit | U1/U2/U3/U4 |
| Concept | Human-readable name |
| Main | Chapter/file |
| Learn Fast | LF destination |
| Revision | REV destination |
| Exam | Exam destination |
| Math | Math destination |
| Code | Coding destination |
| Practice | Practice destination |
| Resource | Resource ID |
| Recall | Recall ID |
| Priority | P1/P2/P3/P4 |
| Prerequisites | Required earlier concepts |
| Status | Missing/Partial/Connected/Verified |

This table is the **heart of the integration pass**.

Do not try to remember the graph in your head.

---

# 4. Recommended order of work

Do the integration in passes.

Do **not** open 150 files randomly.

## Pass 1 — Build the inventory

Start with the highest-level files:

```text
MASTER-00
MASTER-01
MASTER-02
MASTER-03
MASTER-04
MASTER-05
```

Then collect the current file lists for:

```text
MAIN
LEARN FAST
REVISION
EXAM
MATH
CODE
PRACTICE
RESOURCE
```

Output:

```text
one inventory
one canonical map
```

Do not rewrite chapters yet.

---

# 5. Pass 2 — Integrate one unit at a time

Recommended order:

```text
UNIT I
↓
UNIT II
↓
UNIT III
↓
UNIT IV
```

For each unit:

```text
Main
  ↓
Learn Fast
  ↓
Revision
  ↓
Exam
  ↓
Math
  ↓
Code
  ↓
Practice
  ↓
Resource
  ↓
Mastery
```

Why this order?

Because the Main Book establishes the canonical concept structure. Everything else should attach to it.

---

# 6. Unit integration procedure

For every major topic, run this exact procedure.

## Step A — Find the Main concept

Record:

```text
Main chapter:
Concept:
Prerequisites:
Important formulas:
Important diagrams:
```

## Step B — Find the rapid views

Check:

```text
Learn Fast present?
Revision present?
```

Ask:

> Does the rapid version compress the Main Book, or does it accidentally teach something different?

## Step C — Find the Exam path

Check:

```text
definition
algorithm/formula
comparison
diagram
numerical
short answer
long answer
MCQ/timed practice
```

Not every category must exist for every topic, but examinable topics need an appropriate answer path.

## Step D — Find Math dependencies

Ask:

```text
Does the learner need mathematics to understand/solve this?
```

If yes:

```text
Main concept → Math module
```

If not:

```text
Math = intentionally none
```

## Step E — Find Code

Ask:

```text
Is implementation expected?
Is there a practical?
Would coding materially strengthen understanding?
```

Then connect to the appropriate coding file.

## Step F — Find Practice

At minimum, important concepts should have an appropriate practice route.

Example:

```text
A*
→ guided dry run
→ standard search problem
→ tricky heuristic problem
→ exam question
→ transfer problem
```

## Step G — Find Resource

Use `MASTER-04`.

Prefer:

```text
supplied lecture
→ official/university course
→ textbook
→ implementation documentation
→ supplementary material
```

Do not attach a long list of resources.

## Step H — Connect mastery

The learner should be able to demonstrate evidence.

Example:

```text
Explain A*       ✓
Recall formula   ✓
Dry run A*       ✓
Solve variation  ✓
Code A*          ✓
Exam answer      ✓
```

---

# 7. Use a "single source of truth" rule

Never correct the same concept separately in five books when the problem is conceptual.

Use this rule:

```text
MAIN = canonical teaching truth
MATH = canonical mathematical derivation
CODE = canonical implementation
EXAM = canonical exam compression
LF/REV = canonical rapid views
```

Then propagate only the necessary change.

Example:

If the A* notation is wrong:

```text
Fix canonical Main/identity
      ↓
check Math
      ↓
check Exam
      ↓
check Code
      ↓
check Learn Fast
      ↓
check Revision
```

Do not simply edit the first file in which you notice the mistake and assume the graph is fixed.

---

# 8. Do not over-integrate

Integration can become harmful when every file starts linking to everything.

Use the **next-action rule**:

A link should exist because it answers:

> "What should I do next?"

Good:

```text
A* explanation
→ See A* dry run
→ Try A* practice
→ Review heuristic admissibility
→ Implement A*
```

Bad:

```text
A*
→ 17 unrelated chapters
→ 12 videos
→ 8 PDFs
→ 5 random code files
```

The system should feel guided, not tangled.

---

# 9. The Rapid Study integration rule

The new rapid layer has two different purposes.

## Learn Fast

Use when:

```text
I have days left
but I still need understanding.
```

Flow:

```text
Main gap
→ Learn Fast
→ practice
→ exam
```

## Revision

Use when:

```text
I already studied this
and need recall.
```

Flow:

```text
Revision
→ active recall
→ timed question
→ weak concept
→ Main/Learn Fast
```

Never treat Revision as a shorter Main Book.

Revision is a **recall interface**.

---

# 10. The most useful practical workflow

Use a spreadsheet/table or Markdown table while integrating.

For each row, mark:

```text
M  = missing
P  = partial
C  = connected
V  = verified
```

Example:

| Concept | Main | LF | REV | Exam | Math | Code | Practice | Resource | Overall |
|---|---|---|---|---|---|---|---|---|---|
| A* | V | V | C | V | P | V | C | V | C |
| Logistic Regression | V | V | V | V | V | V | C | V | C |
| Backprop | V | V | C | V | V | V | P | V | C |

This immediately tells you where work remains.

---

# 11. How to handle missing content

Use this decision tree.

```text
Is this a syllabus/core concept?
        │
       YES
        │
Is teaching present?
        │
      NO ──→ repair Main
        │
       YES
        ↓
Is exam path present?
        │
      NO ──→ repair Exam
        │
       YES
        ↓
Is required math missing?
        │
      YES ──→ connect/create only the needed Math dependency
        │
       NO
        ↓
Is required practical missing?
        │
      YES ──→ connect/create only the needed Code/Practice route
        │
       NO
        ↓
Is rapid view useful/missing?
        │
      YES ──→ repair LF/REV
```

Do not create a new book merely because one connection is missing.

---

# 12. How to handle contradictions

Create an issue, not an immediate rewrite.

Use:

```text
ISSUE ID:
Topic:
Files involved:
Conflict:
Canonical source:
Decision:
Files changed:
Verification:
Status:
```

Example:

```text
ISSUE-017
Topic: A* admissibility
Files: C07, EXAM-U1, RAPID-03
Conflict: wording differs
Canonical source: Main C07
Decision: use one definition and state the required assumptions
Files changed: EXAM-U1, RAPID-03
Verification: passed
Status: CLOSED
```

This gives you an audit trail.

---

# 13. How to handle duplicate content

Ask three questions:

```text
Is it the same fact?
Is it serving the same learner task?
Could one view reference another instead?
```

If all three suggest duplication:

```text
remove / shorten / link
```

Keep duplication when the learner's task is genuinely different.

For example:

```text
Main:
Why A* works.

Exam:
How to write A* in 5 marks.

Revision:
Remember f = g + h.

Code:
Implement A*.

Practice:
Solve A*.
```

That is good duplication.

---

# 14. Practical file-editing strategy

Do not edit every file in one giant operation.

Use this cycle:

```text
SEARCH
  ↓
IDENTIFY
  ↓
EDIT
  ↓
RECHECK
  ↓
MARK VERIFIED
```

For a topic such as Logistic Regression:

```text
1. Find all references to Logistic Regression.
2. Identify the canonical Main chapter.
3. Compare Exam explanation.
4. Compare Math formula.
5. Compare Coding implementation.
6. Compare LF.
7. Compare REV.
8. Compare Practice.
9. Compare Resource mapping.
10. Record the result.
```

Only after this should you move to the next concept.

---

# 15. Recommended batch size

Do integration in batches small enough to review.

Best:

```text
5–10 concepts at a time
```

For a unit:

```text
Batch 1 → foundational concepts
Batch 2 → algorithms/models
Batch 3 → formulas/metrics
Batch 4 → integration + QA
```

Avoid trying to reconcile the entire repository in one pass.

---

# 16. What you should actually edit

Most of the work should be one of these:

### Type A — Link correction

```text
wrong destination
→ correct destination
```

### Type B — Alias correction

```text
old ID
→ canonical ID
```

### Type C — Compression correction

```text
Learn Fast / Revision
→ remove unnecessary theory
```

### Type D — Consistency correction

```text
Main definition
↔ Exam definition
↔ Code interpretation
```

### Type E — Metadata correction

```text
unit
topic
priority
resource
prerequisite
status
```

### Type F — Actual content repair

Only when a real knowledge gap exists.

---

# 17. The final verification pass

After all four units are integrated, perform the global sequence from `MASTER-05`:

```text
Syllabus
→ Canonical IDs
→ Navigation
→ Main
→ Exam
→ Math
→ Code
→ Practice
→ Resource
→ Rapid
→ Mastery
→ Formula consistency
→ Algorithm/complexity claims
→ Markdown
→ Visual
→ Print
→ iPad
```

Important:

> **Passing integration does not mean the learner has mastered the material.**

Production state and learner mastery remain separate.

---

# 18. Release states

Use three major states:

```text
DRAFT
```

Still being integrated.

```text
RC
```

Release candidate. High-risk defects fixed; final review remains.

```text
RELEASED
```

MASTER-05 gates passed.

For learner mastery, use `MASTER-02` separately.

---

# 19. Recommended working folder

Keep a temporary integration workspace separate from learner-facing books:

```text
AI_ML_INTEGRATION_WORKSPACE/
│
├── 00_INVENTORY/
│   ├── FILE_INVENTORY.md
│   └── CANONICAL_TOPIC_MAP.md
│
├── 01_ISSUES/
│   └── INTEGRATION_ISSUES.md
│
├── 02_ALIAS/
│   └── CANONICAL_ALIAS_TABLE.md
│
├── 03_UNIT_CHECKS/
│   ├── UNIT_I.md
│   ├── UNIT_II.md
│   ├── UNIT_III.md
│   └── UNIT_IV.md
│
└── 04_RELEASE/
    ├── PRE_RELEASE_CHECK.md
    └── RELEASE_NOTES.md
```

These are **working documents**, not additional learner books.

---

# 20. Minimum set of supporting documents

You do not need 20 more files.

I recommend only these four:

### A. FILE_INVENTORY.md

"What exists?"

### B. CANONICAL_TOPIC_MAP.md

"Which file represents each concept?"

### C. INTEGRATION_ISSUES.md

"What is broken or inconsistent?"

### D. RELEASE_NOTES.md

"What changed in this integration pass?"

Everything else can stay inside MASTER-00 → MASTER-05.

---

# 21. The exact workflow I recommend for your project

Because your AI/ML system already has the major books and the rapid layer, use this production sequence:

```text
PHASE 1
Inventory current files
        ↓
PHASE 2
Build canonical topic map
        ↓
PHASE 3
Integrate Unit I
        ↓
PHASE 4
Integrate Unit II
        ↓
PHASE 5
Integrate Unit III
        ↓
PHASE 6
Integrate Unit IV
        ↓
PHASE 7
Global formula + algorithm consistency
        ↓
PHASE 8
Rapid layer audit
        ↓
PHASE 9
Practice + Mastery audit
        ↓
PHASE 10
MASTER-04 resource verification
        ↓
PHASE 11
MASTER-05 final QA
        ↓
PHASE 12
Release Candidate
        ↓
FINAL RELEASE
```

---

# 22. What I would do next

The most efficient next deliverable is **not another chapter**.

It should be the first working integration artifact:

```text
FILE_INVENTORY
+
CANONICAL_TOPIC_MAP
```

Once those exist, integration becomes mechanical rather than confusing.

For the first real pass, start with **Unit I** and reconcile approximately 13 Main concepts against:

```text
Main
Learn Fast
Revision
Exam
Math
Code
Practice
Resource
Mastery
```

After Unit I is clean, repeat the same procedure for Units II–IV.

---

# 23. Definition of "done"

A topic is considered integrated when:

```text
[✓] Canonical identity exists
[✓] Main destination known
[✓] Prerequisites known
[✓] Rapid view known
[✓] Revision view known
[✓] Exam route known
[✓] Math dependency decided
[✓] Code route decided
[✓] Practice route known
[✓] Resource route known
[✓] Recall/mastery route known
[✓] No contradiction found
[✓] No important orphan reference
[✓] Status = VERIFIED
```

A unit is integrated when every important topic reaches that state.

The system is integrated when all four units reach it and MASTER-05 passes.

---

# 24. Final mental model

Think of the project as a database, not a pile of books.

```text
                 CANONICAL KNOWLEDGE
                        │
        ┌───────────────┼───────────────┐
        ↓               ↓               ↓
      TOPICS        RELATIONSHIPS     EVIDENCE
        │               │               │
   ┌────┼────┐          │          ┌────┼────┐
   ↓    ↓    ↓          ↓          ↓    ↓    ↓
 Main  Exam  Code     Prereqs    Practice Math Mastery
   │
   ├── Learn Fast
   ├── Revision
   └── Resource
```

The individual files are just interfaces over this underlying graph.

That is what you are building.
