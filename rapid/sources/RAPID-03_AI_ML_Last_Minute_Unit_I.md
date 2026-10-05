---
title: "RAPID-03 — AI/ML Last-Minute Revision — Unit I"
system: "Engineering Minibooks · AI & Machine Learning"
version: "0.1"
status: "Learner-Facing Content · Pilot Unit"
mode: "Last-Minute Revision"
unit: "Unit I — Artificial Intelligence and Search"
---

# AI & MACHINE LEARNING

# Last-Minute Revision — Unit I

## Artificial Intelligence, Search & Game Playing

> Use this file when the concepts have already been studied once. Read, recall, verify, and move on.

---

# 0. UNIT I IN 60 SECONDS

```text
AI
→ intelligent systems for reasoning, problem solving, learning, perception and decision making

AGENT
→ perceives environment → chooses action → acts

PROBLEM
→ initial state + actions + transition model + goal test + path cost

SEARCH
→ explore a state space until a goal is reached

BFS
→ FIFO queue → shallowest first

DFS
→ LIFO stack → deepest first

HEURISTIC
→ h(n) = estimated remaining cost

GREEDY
→ f(n) = h(n)

A*
→ f(n) = g(n) + h(n)

CSP
→ variables + domains + constraints

GAME
→ opponent matters

MINIMAX
→ MAX maximizes, MIN minimizes for MAX

ALPHA-BETA
→ prune when α ≥ β
→ same correct minimax result
```

---

# 1. MUST-KNOW DEFINITIONS

## Artificial Intelligence

> The study and design of computational systems capable of performing tasks associated with intelligent behaviour, such as reasoning, learning, problem solving, perception and decision making.

### Trigger words

`reasoning` · `learning` · `problem solving` · `perception` · `decision making`

---

## Intelligent Agent

> A system that perceives its environment through sensors and acts upon it through actuators.

### Trigger

```text
Sensors → Percepts → Agent → Actions → Actuators
```

---

## Rational Agent

> An agent that chooses an action expected to maximize its performance measure given its percepts, knowledge and available actions.

### Trap

Rational ≠ all-knowing.

---

## State

The current representation of a situation in a search or problem-solving task.

---

## State Space

The set of states that can be reached through available actions.

---

## Heuristic

\[
h(n)
\]

> An estimate of the remaining cost from node \(n\) to a goal.

---

## Admissible Heuristic

\[
h(n)\leq h^*(n)
\]

> A heuristic that never overestimates the true optimal remaining cost.

---

## Constraint Satisfaction Problem (CSP)

> A problem defined by variables, their domains, and constraints restricting allowed assignments.

### Trigger

```text
Variables + Domains + Constraints
```

---

## Adversarial Search

> Search in an environment where another agent actively acts against the goals of the current agent.

---

## Minimax

> A game-search method in which MAX chooses the highest utility while MIN chooses the lowest utility for MAX.

---

## Alpha-Beta Pruning

> A minimax optimization that prunes branches that cannot affect the final decision.

---

# 2. THE AGENT LOOP

Memorise:

```text
Environment
    ↓
Sensors
    ↓
Percepts
    ↓
AGENT
    ↓
Actions
    ↓
Actuators
    ↓
Environment
```

### Three questions

**How does it know?** → Sensors / percepts

**How does it decide?** → Agent program / reasoning

**How does it act?** → Actuators

---

# 3. PROBLEM FORMULATION

Memorise exactly:

```text
Initial State
Actions
Transition Model
Goal Test
Path Cost
```

### Fast example

Route planning:

```text
Start → Delhi
Action → take a road
Transition → arrive at another city
Goal → Jaipur
Cost → distance / time
```

### Exam trigger

When asked to **formulate a problem**, write all five components.

---

# 4. SEARCH BASICS

### Frontier

The set of generated nodes waiting for expansion.

### Expansion

Generating the successors of a selected node.

### Goal test

Checks whether the current state satisfies the goal.

### Master flow

```text
Initial
↓
Frontier
↓
Select
↓
Expand
↓
Goal?
├─ Yes → solution
└─ No → continue
```

---

# 5. BREADTH-FIRST SEARCH (BFS)

### One-line memory

> BFS expands the shallowest nodes first.

### Structure

```text
Queue
FIFO
```

### Steps

```text
enqueue start
→ dequeue front
→ goal test
→ enqueue successors
→ repeat
```

### Properties

- Complete under standard finite-branching assumptions.
- Optimal for equal/unit step costs under the standard assumptions.
- Can require high memory.

### Complexity reminder

A common tree-search expression is approximately:

\[
O(b^{d+1})
\]

for branching factor \(b\) and shallowest goal depth \(d\), depending on the exact counting convention.

### Trap

BFS is not generally optimal for arbitrary unequal path costs.

### Recall

**BFS → ?**

`FIFO`

---

# 6. DEPTH-FIRST SEARCH (DFS)

### One-line memory

> DFS expands the deepest available path first.

### Structure

```text
Stack
LIFO
```

It can be implemented with an explicit stack or recursion.

### Properties

- Often much lower memory than BFS.
- Not generally complete in infinite-depth spaces.
- Not generally optimal.

### Complexity reminder

With branching factor \(b\) and maximum depth \(m\):

\[
O(b^m)
\]

for the familiar worst-case tree-search time and space notation.

### Trap

Deep first ≠ shortest path.

### Recall

**DFS → ?**

`LIFO`

---

# 7. BFS VS DFS

| Criterion | BFS | DFS |
|---|---|---|
| Order | Shallow first | Deep first |
| Data structure | Queue | Stack / recursion |
| Memory | High | Usually lower |
| Complete | Under standard finite-branching assumptions | Not in general |
| Optimal | Equal/unit step costs | No, in general |
| Main danger | Frontier memory growth | Deep/unproductive branch |

### 5-second recall

> **BFS = broad. DFS = deep.**

---

# 8. HEURISTICS

### Core symbol

\[
h(n)
\]

### Meaning

Estimated cost from node \(n\) to a goal.

### Admissibility

\[
h(n)\leq h^*(n)
\]

### One-line memory

> A heuristic guides search toward promising states.

### Trap

A heuristic is not automatically admissible.

---

# 9. GREEDY BEST-FIRST SEARCH

### Formula

\[
f(n)=h(n)
\]

### Meaning

Choose the node that appears closest to the goal.

### Information used

Estimated remaining cost only.

### Strength

Can reach a goal quickly when the heuristic is useful.

### Weakness

Ignores the cost already spent.

### Property

Not generally optimal.

### Recall card

```text
GREEDY
h only
"Which node looks closest?"
```

---

# 10. A* SEARCH

### Formula

\[
f(n)=g(n)+h(n)
\]

### Meanings

\[
g(n)=\text{cost from start to }n
\]

\[
h(n)=\text{estimated cost from }n\text{ to goal}
\]

\[
f(n)=\text{estimated total path cost}
\]

### Memory

```text
Greedy → h
A* → g+h
```

### Optimality

A* has strong optimality guarantees when the required heuristic and search assumptions are satisfied. For last-minute revision, remember the role of an admissible heuristic:

\[
h(n)\leq h^*(n)
\]

### Trap

A* is not just Greedy.

A* considers:

**cost already spent + estimated cost remaining.**

---

# 11. SEARCH ALGORITHM MASTER TABLE

| Algorithm | Evaluation / selection rule | Data structure | Main idea |
|---|---|---|---|
| BFS | Shallowest first | Queue | Broad exploration |
| DFS | Deepest first | Stack | Deep exploration |
| Greedy | \(h(n)\) | Priority queue | Closest-looking |
| A* | \(g(n)+h(n)\) | Priority queue | Estimated total cost |

### Memorise this block.

---

# 12. LOCAL SEARCH

### Core idea

Improve a current candidate rather than necessarily maintaining a complete path.

### Hill climbing

```text
Current state
↓
Neighbour
↓
Better?
↓
Move
```

### Problems

- local optimum;
- plateau;
- ridge.

### One-line memory

> Local best ≠ global best.

### Priority

P2 — Important.

---

# 13. EVOLUTIONARY SEARCH

Population-based search.

Core ideas:

```text
population
→ selection
→ variation
→ new candidates
→ repeat
```

Typical mechanisms include:

- selection;
- crossover / recombination;
- mutation.

### Priority

P2 — Important.

---

# 14. CONSTRAINT SATISFACTION PROBLEMS (CSP)

## The three words

```text
VARIABLES
DOMAINS
CONSTRAINTS
```

### Example

Map colouring:

```text
Variables → regions
Domains → colours
Constraints → adjacent regions must differ
```

### Core process

```text
choose variable
→ assign value
→ test constraints
→ reject inconsistent assignment
→ continue
```

### Recall

**CSP = ?**

`Variables + Domains + Constraints`

---

# 15. GAME PLAYING

### Why is a game different?

Because the environment includes an opponent who acts strategically.

### Core vocabulary

```text
Game state
Actions / moves
Successor states
Terminal state
Utility
MAX
MIN
```

### Utility example

```text
Win  = +1
Draw =  0
Loss = -1
```

The exact utility scale can vary.

### Main transition

```text
Single-agent search
        ↓
Adversarial search
        ↓
Minimax
```

---

# 16. MINIMAX

### Roles

```text
MAX → maximize utility
MIN → minimize utility for MAX
```

### Core rule

At a MAX node:

\[
\max(\text{children})
\]

At a MIN node:

\[
\min(\text{children})
\]

### Tiny example

```text
        MAX
       /   \
     MIN   MIN
    / \    / \
   3   5  2   9

left  → min(3,5)=3
right → min(2,9)=2

MAX → max(3,2)=3
```

### Exam sentence

> MAX selects the move with the highest value assuming MIN will choose the response least favourable to MAX.

---

# 17. ALPHA-BETA PRUNING

### Purpose

Make minimax more efficient by avoiding branches that cannot change the final decision.

### Bounds

\[
\alpha=\text{best value MAX can guarantee so far}
\]

\[
\beta=\text{best value MIN can guarantee so far}
\]

### Pruning condition

\[
\boxed{\alpha\geq\beta}
\]

### Critical fact

> **Correct alpha-beta pruning does not change the minimax result.**

It changes:

> **How much of the tree must be evaluated.**

### What improves pruning?

**Good move ordering.**

### Recall

```text
Minimax → decide
Alpha-Beta → decide faster by pruning
```

---

# 18. RESOURCE-LIMITED SEARCH

Real systems may not be able to search until a terminal state.

Common controls include:

- depth limits;
- cutoff tests;
- evaluation functions;
- iterative deepening where appropriate.

### Core idea

```text
search
↓
depth/cutoff reached
↓
evaluation function
↓
estimated value
```

### Memory

> Stop searching → estimate the position.

### Priority

P2 — Important.

---

# 19. HIGH-VALUE COMPARISONS

## Uninformed vs Informed Search

| Uninformed | Informed |
|---|---|
| Little/no domain-specific heuristic | Uses heuristic information |
| BFS / DFS | Greedy / A* |
| Less guidance | More guidance toward promising states |

---

## Greedy vs A*

| Greedy | A* |
|---|---|
| \(h(n)\) | \(g(n)+h(n)\) |
| Ignores path cost so far | Includes path cost so far |
| Can be fast | More balanced |
| Not generally optimal | Strong optimality under appropriate conditions |

---

## Minimax vs Alpha-Beta

| Minimax | Alpha-Beta |
|---|---|
| Game decision method | Minimax optimization |
| Searches game tree | Prunes irrelevant branches |
| Baseline | Can evaluate fewer nodes |
| Correct result | Same minimax result |

---

## BFS vs DFS

```text
BFS → queue → shallow → memory heavy
DFS → stack → deep → memory light
```

---

# 20. EXAM TRAPS

### Trap 1

**“A* always guarantees an optimal answer.”**

Not without the required assumptions.

---

### Trap 2

**“A heuristic is exact cost.”**

No.

\[
h(n)
\]

is an estimate.

---

### Trap 3

**“Greedy is A* without \(g\), so it is also optimal.”**

No.

Greedy ignores cost already spent and is not generally optimal.

---

### Trap 4

**“DFS finds the shortest path.”**

No, not in general.

---

### Trap 5

**“BFS is optimal for every weighted graph.”**

No. Standard BFS optimality relies on equal/unit step-cost assumptions.

---

### Trap 6

**“Alpha-beta gives a different answer from minimax.”**

No.

Correct alpha-beta gives the same minimax result while potentially evaluating fewer branches.

---

### Trap 7

**“Rational agent = perfect agent.”**

No.

Rationality is relative to available information, knowledge, actions and the performance measure.

---

# 21. FORMULA / SYMBOL CARD

### A*

\[
f(n)=g(n)+h(n)
\]

`g(n)` = cost from start

`h(n)` = estimated remaining cost

---

### Admissibility

\[
h(n)\leq h^*(n)
\]

---

### Greedy

\[
f(n)=h(n)
\]

---

### Alpha-Beta pruning

\[
\alpha\geq\beta
\]

---

# 22. RAPID RECALL — COVER THE RIGHT SIDE

| Prompt | Answer |
|---|---|
| BFS data structure? | Queue |
| DFS data structure? | Stack |
| BFS expansion? | Shallowest first |
| DFS expansion? | Deepest first |
| Greedy function? | \(h(n)\) |
| A* function? | \(g(n)+h(n)\) |
| \(g(n)\)? | Cost from start |
| \(h(n)\)? | Estimated remaining cost |
| Admissible means? | Never overestimates |
| CSP components? | Variables, domains, constraints |
| MAX in minimax? | Maximizes |
| MIN in minimax? | Minimizes for MAX |
| Alpha-beta purpose? | Prune irrelevant branches |
| Pruning condition? | \(\alpha\geq\beta\) |
| Does alpha-beta change minimax result? | No |

---

# 23. DRAW FROM MEMORY

Before the exam, draw these without looking.

### 1. Agent-environment loop

```text
Environment ↔ Agent

Sensors / percepts
Actions / actuators
```

### 2. Search family

```text
Search
├── Uninformed
│   ├── BFS
│   └── DFS
└── Informed
    ├── Greedy
    └── A*
```

### 3. CSP

```text
Variables
Domains
Constraints
```

### 4. Minimax

```text
MAX
 ↓
MIN
 ↓
utility
```

### 5. Alpha-beta

```text
α = MAX bound
β = MIN bound

prune when α ≥ β
```

---

# 24. 15-MINUTE UNIT I REVISION ORDER

## Pass 1 — 3 minutes

Read:

```text
AI
Agent
Problem Formulation
BFS
DFS
Greedy
A*
CSP
Minimax
Alpha-Beta
```

## Pass 2 — 4 minutes

Memorise:

```text
BFS → FIFO
DFS → LIFO
Greedy → h
A* → g+h
CSP → Variables / Domains / Constraints
Minimax → MAX / MIN
Alpha-Beta → α≥β
```

## Pass 3 — 4 minutes

Read:

- BFS vs DFS;
- Greedy vs A*;
- Minimax vs Alpha-Beta;
- exam traps.

## Pass 4 — 4 minutes

Close the page and reproduce:

- agent loop;
- problem formulation;
- search family;
- A* formula;
- CSP components;
- minimax idea;
- alpha-beta condition.

---

# 25. FINAL UNIT I CHECKLIST

```text
[ ] AI definition
[ ] AI vs ML vs DL
[ ] Intelligent agents
[ ] Rationality
[ ] Agent-environment loop
[ ] Problem formulation
[ ] State space
[ ] Frontier / expansion
[ ] BFS
[ ] DFS
[ ] BFS vs DFS
[ ] Heuristic
[ ] Admissibility
[ ] Greedy
[ ] A*
[ ] Greedy vs A*
[ ] Local search
[ ] Evolutionary search
[ ] CSP
[ ] Variables / domains / constraints
[ ] Adversarial search
[ ] Game tree
[ ] Utility
[ ] Minimax
[ ] Alpha-beta
[ ] α / β
[ ] α≥β
[ ] Resource-limited search
```

---

# 26. FINAL MEMORY MAP

```text
PROBLEM
   ↓
STATE SPACE
   ↓
SEARCH
   │
   ├── BFS → broad
   ├── DFS → deep
   │
   └── heuristic-guided
        ├── Greedy → h
        └── A* → g+h

SPECIAL CASES
   ├── CSP → constraints
   └── Games → opponent
             ├── Minimax
             └── Alpha-Beta
```

> **Done = you can explain every major box in one or two sentences and reproduce the key formulas and conditions from memory.**

**Next bridge:** Unit I Exam Book for full answer patterns.
