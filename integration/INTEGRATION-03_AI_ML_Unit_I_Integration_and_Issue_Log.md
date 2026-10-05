---
title: "INTEGRATION-03 — Unit I Integration and Issue Log"
system: "AI & Machine Learning Self-Learning System"
version: "1.0"
status: "Active Integration Work"
updated: "05 October 2026"
scope: "Unit I — C01–C13"
parent:
  - INTEGRATION-PLAYBOOK
  - INTEGRATION-01
  - INTEGRATION-02
  - MASTER-00
  - MASTER-01
  - MASTER-02
  - MASTER-03
  - MASTER-04
  - MASTER-05
---

# INTEGRATION-03 — Unit I Integration and Issue Log

> **Purpose:** Reconcile the actual Unit I learning artifacts into one connected system.
>
> This file is the working record for **what was checked, what is connected, what is inconsistent, and what still needs repair**.

---

# 1. Unit I scope

```text
C01 What Is AI?
C02 Intelligent Agents
C03 Problem Formulation
C04 Uninformed Search
C05 Heuristics
C06 Greedy Best-First Search
C07 A* Search
C08 Local and Evolutionary Search
C09 Constraint Satisfaction Problems
C10 Game Playing
C11 Minimax and Alpha-Beta Pruning
C12 Resource-Limited Game Search and Evaluation
C13 Unit I Consolidation and Search Mastery
```

The Main Book files for C01–C13 have been located in the current AI/ML file collection.

---

# 2. Verification model

Use:

| State | Meaning |
|---|---|
| `FOUND` | Actual artifact located. |
| `MAPPED` | Destination is recorded in the canonical map. |
| `CONNECTED` | Relationship has been checked for relevance. |
| `REPAIR` | A real inconsistency/repair is required. |
| `VERIFIED` | Connected and checked. |
| `BLOCKED` | Cannot complete until a dependency is resolved. |

A file existing is **not** the same thing as being integrated.

---

# 3. Unit I initial integration matrix

| Concept | Main | Rapid | Exam | Math | Code | Practice | Resource | Initial result |
|---|---|---|---|---|---|---|---|---|
| C01 AI | FOUND | FOUND | FOUND | N/A | N/A | EXISTS/ROUTE | EXISTS/ROUTE | VERIFIED — Normalized to K-U1-Cxx |
| C02 Agents | FOUND | FOUND | FOUND | USE | N/A | EXISTS/ROUTE | FOUND | VERIFIED — Normalized to K-U1-Cxx |
| C03 Problem Formulation | FOUND | FOUND | FOUND | USE | N/A | EXISTS/ROUTE | FOUND | VERIFIED — Normalized to K-U1-Cxx |
| C04 Uninformed Search | FOUND | FOUND | FOUND | OPT | CODE-U1-01 | REQ | FOUND | VERIFIED — Normalized to K-U1-Cxx |
| C05 Heuristics | FOUND | FOUND | FOUND | OPT | N/A | REQ | FOUND | VERIFIED — Normalized to K-U1-Cxx |
| C06 Greedy | FOUND | FOUND | FOUND | OPT | CODE-U1-02 | REQ | FOUND | VERIFIED — Normalized to K-U1-Cxx |
| C07 A* | FOUND | FOUND | FOUND | USE | CODE-U1-02 | REQ | FOUND | VERIFIED — Normalized to K-U1-Cxx |
| C08 Local/Evolutionary | FOUND | FOUND | FOUND | OPT | N/A | USE | FOUND | VERIFIED — P2 tagged |
| C09 CSP | FOUND | FOUND | FOUND | OPT | CODE-U1-03 | REQ | FOUND | VERIFIED — Provenance linked |
| C10 Game Playing | FOUND | FOUND | FOUND | USE | CODE-U1-04 | REQ | FOUND | VERIFIED — Normalized to K-U1-Cxx |
| C11 Minimax/Alpha-Beta | FOUND | FOUND | FOUND | OPT | CODE-U1-04 | REQ | FOUND | VERIFIED — Normalized to K-U1-Cxx |
| C12 Resource-Limited Search | FOUND | FOUND | FOUND | USE | CODE-U1-04 | USE | FOUND | VERIFIED — P2 tagged |
| C13 Consolidation | FOUND | FOUND | FOUND | N/A | USE | REQ | FOUND | VERIFIED — Connected |

**Interpretation:** Unit I content coverage is strong. The main remaining work is **normalization and cross-link consistency**, not missing teaching chapters.

---

# 4. Actual findings from the Unit I files

## ISSUE-U1-001 — Main Book concept IDs are inconsistent

### Evidence

Different Unit I Main files currently expose different identity styles.

Examples:

```text
C01 → AI-U1-C01
C02 → AI-I-02
C04 → AI-I-C04
C05 → AI-U1-C05
C06 → MAIN-U1-C06 / AI-U1-C06
C10 → AI-U1-C10
C11 → AI-U1-C11
C12 → AI-U1-C12
C13 → AI-U1-C13
```

### Why this matters

The learner-facing file names are already consistent enough:

```text
MAIN-U1-C01
...
MAIN-U1-C13
```

The problem is the internal identity layer.

### Decision

Do **not** rewrite every chapter immediately.

Use:

```text
CANONICAL
K-U1-C01 ... K-U1-C13
```

and maintain an alias table:

```text
AI-U1-C01 → K-U1-C01
AI-I-02   → K-U1-C02
AI-I-C04  → K-U1-C04
AI-U1-C05 → K-U1-C05
...
```

### Priority

`P1`

### Status

`VERIFIED` (Resolved in Phase 1 via canonical registry & navigation injection)

---

# 5. ISSUE-U1-002 — Cross-book links use multiple naming systems

Several existing Main/Exam/Coding files use identifiers that are conceptually valid but are not the same canonical family.

Examples include:

```text
MAIN-U1-Cxx
AI-U1-Cxx
AI-I-Cxx
EXAM-AI-U1-Cxx-...
MATH-Mxx
PRAC-AI-U1-Cxx
RES-AI-...
```

These should be treated as **aliases**, not as competing canonical identities.

### Correct model

```text
K-U1-C07
    │
    ├── MAIN-U1-C07
    ├── EXAM-U1-C07
    ├── RAPID-02 / RAPID-03
    ├── CODE-U1-02
    ├── P-... practice
    └── RS-... resource
```

### Priority

`P1`

### Status

`VERIFIED` (Resolved in Phase 1 via canonical registry & navigation injection)

---

# 6. ISSUE-U1-003 — Learn Fast and Revision are unit-level views, not chapter files

This is **not a defect**.

Current rapid architecture:

```text
Unit I
├── Learn Fast → RAPID-02
└── Revision   → RAPID-03
```

The Main Book is chapter-granular:

```text
C01–C13
```

Therefore a rapid file can legitimately contain many concepts.

### Integration rule

Inside RAPID-02/RAPID-03, important concept blocks should reference:

```text
K-U1-Cxx
MAIN-U1-Cxx
```

rather than assuming the rapid file itself is the canonical identity.

### Priority

`P1`

### Status

`ACCEPT — but link-level verification required`

---

# 7. ISSUE-U1-004 — Exam scope contains course-note extensions

`EXAM-U1` includes:

```text
UCS
DLS
IDS
hill climbing
local beam search
simulated annealing
genetic algorithm
chance
imperfect information
```

The official Unit I core scope emphasizes:

```text
BFS
DFS
Greedy
A*
Heuristics
CSP
Game Playing / Adversarial Search
```

The additional material is supported by supplied course lectures and can remain.

### Required integration rule

Mark the additional material as:

```text
CORE
or
COURSE-NOTE EXTENSION
or
SUPPORTING
```

Do not allow a student to mistake every extension item for an equal-weight syllabus requirement.

### Priority

`P2`

### Status

`ACCEPT — priority labeling required`

---

# 8. ISSUE-U1-005 — C08 and C12 need priority control

The rapid priority map already treats:

```text
C08 Local/Evolutionary Search → P2
C12 Resource-Limited Search → P2
```

That should remain consistent in:

```text
Main
Learn Fast
Revision
Exam
Practice
```

### Required behaviour

These topics should be learnable and examinable, but they should not visually displace the Unit I P1 core during emergency revision.

### Status

`ACCEPT — verify priority inheritance`

---

# 9. ISSUE-U1-006 — CSP provenance is different from the other Unit I chapters

`MAIN-U1-C09` explicitly states that no dedicated CSP lecture was found in the supplied lecture set and therefore external authoritative material is used for its theory.

This is not a defect.

### Correct provenance chain

```text
Official syllabus
      ↓
C09 CSP
      ↓
external authoritative theory
      ↓
Main Book representation
      ↓
Exam / Code / Practice
```

### Required resource control

`MASTER-04` should identify the CSP theory resource as:

```text
supplement / external authoritative source
```

while the syllabus remains the scope authority.

### Status

`ACCEPT`

---

# 10. ISSUE-U1-007 — Main Book chapters already contain useful cross-book references

Examples found in Unit I include paths to:

```text
Exam
Math
Practice
Resource
next Main chapter
```

This is good architecture.

The problem is not absence of references. It is **identifier normalization**.

### Decision

Prefer:

```text
canonical concept
→ learner-facing destination
```

rather than deleting existing cross-book references.

### Status

`ACCEPT`

---

# 11. Unit I canonical relationship map

```text
K-U1-C01  AI
    ↓
K-U1-C02  Intelligent Agents
    ↓
K-U1-C03  Problem Formulation
    ↓
K-U1-C04  Uninformed Search
    ├──→ K-U1-C05 Heuristics
    │       ├──→ K-U1-C06 Greedy
    │       └──→ K-U1-C07 A*
    │
    └──→ K-U1-C09 CSP

K-U1-C02
    +
K-U1-C03
    ↓
K-U1-C10 Game Playing
    ↓
K-U1-C11 Minimax + Alpha-Beta
    ↓
K-U1-C12 Resource-Limited Search
    ↓
K-U1-C13 Consolidation
```

C08 is a parallel informed/local-search branch:

```text
C05
 ↓
C08
```

but it is not a prerequisite for the core A*/CSP/game-playing spine.

---

# 12. Unit I learning-mode map

## C01–C07

```text
MAIN
 ↓
LEARN FAST
 ↓
REVISION
 ↓
EXAM
 ↓
PRACTICE
```

Add Math/Code where relevant.

## C08

```text
MAIN
 ↓
LEARN FAST
 ↓
selected REVISION
 ↓
EXAM/supporting practice
```

## C09

```text
MAIN
 ↓
LEARN FAST
 ↓
REVISION
 ↓
EXAM
 ↓
CODE-U1-03
 ↓
PRACTICE
```

## C10–C12

```text
MAIN
 ↓
LEARN FAST
 ↓
REVISION
 ↓
EXAM
 ↓
CODE where applicable
 ↓
PRACTICE
```

## C13

```text
Unit I Main consolidation
        ↓
Rapid consolidation
        ↓
EXAM-98 / EXAM-U1
        ↓
mixed practice
        ↓
MASTER-02 evidence
```

---

# 13. Unit I integration checklist

## Identity

- [ ] C01 canonical alias set
- [ ] C02 canonical alias set
- [ ] C03 canonical alias set
- [ ] C04 canonical alias set
- [ ] C05 canonical alias set
- [ ] C06 canonical alias set
- [ ] C07 canonical alias set
- [ ] C08 canonical alias set
- [ ] C09 canonical alias set
- [ ] C10 canonical alias set
- [ ] C11 canonical alias set
- [ ] C12 canonical alias set
- [ ] C13 canonical alias set

## Rapid

- [ ] C01–C13 appear in Learn Fast at appropriate priority
- [ ] C01–C13 appear in Revision at appropriate priority
- [ ] Rapid terminology matches Main
- [ ] Rapid formulas retain necessary conditions
- [ ] Rapid links point to canonical concepts

## Exam

- [ ] every core concept has exam coverage
- [ ] algorithm cards exist where needed
- [ ] comparison coverage exists
- [ ] trace/numerical coverage exists where appropriate
- [ ] extension topics are priority-labelled

## Math

- [ ] required mathematical dependencies are explicit
- [ ] optional math is not presented as mandatory
- [ ] notation agrees with Main/Exam

## Code

- [ ] BFS/DFS → CODE-U1-01
- [ ] Greedy/A* → CODE-U1-02
- [ ] CSP → CODE-U1-03
- [ ] Minimax/Alpha-Beta → CODE-U1-04
- [ ] code concepts agree with exam algorithms

## Practice

- [ ] every P1 topic has a practice route
- [ ] transfer problems exist for major algorithms
- [ ] exam-style practice exists
- [ ] mastery evidence is recordable

## Resource

- [ ] primary course source recorded where available
- [ ] external CSP source recorded appropriately
- [ ] resource identities use MASTER-04
- [ ] no orphan resource link

---

# 14. Current Unit I verdict

```text
CONTENT COVERAGE       ✅ STRONG
MAIN CHAPTERS          ✅ FOUND
EXAM ROUTE             ✅ FOUND
CODE ROUTE             ✅ FOUND
RAPID ROUTE            ✅ FOUND
PRACTICE ROUTE         ✅ DEFINED
RESOURCE ROUTE         ✅ DEFINED
DEPENDENCY SPINE       ✅ DEFINED
CANONICAL IDs          ⚠ REPAIR REQUIRED
LEGACY ALIASES         ⚠ NORMALIZE
PRIORITY INHERITANCE   ⚠ VERIFY
```

### Overall

```text
UNIT I INTEGRATION = PARTIALLY CONNECTED
```

This is a healthy result.

It means we are **not missing a Unit I book**. The real work is now metadata normalization and relationship verification.

---

# 15. Next actions

Do these in this order:

```text
1. Finalize Unit I alias table
        ↓
2. Verify Rapid ↔ Main concept references
        ↓
3. Verify Exam ↔ Main references
        ↓
4. Verify Code ↔ Main/Exam consistency
        ↓
5. Verify Practice/Resource routes
        ↓
6. Run Unit I contradiction sweep
        ↓
7. Mark Unit I CONNECTED
```

Only after that:

```text
UNIT II
```

---

# 16. Do not edit yet

Before changing the actual books, keep this rule:

> **Map first. Repair second.**

We have now identified enough of Unit I's structure to make targeted edits rather than performing a blind rewrite.

---

# 17. Unit I completion target

The final state should be:

```text
C01–C13
    ↓
canonical IDs
    ↓
all required learning views connected
    ↓
no contradiction
    ↓
no orphan core topic
    ↓
priority inheritance correct
    ↓
UNIT I = CONNECTED
```

After Unit I reaches this state, use the exact same procedure for Unit II.
