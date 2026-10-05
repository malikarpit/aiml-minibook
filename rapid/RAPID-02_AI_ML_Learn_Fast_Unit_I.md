---
title: "RAPID-02 — AI/ML Learn Fast — Unit I"
system: "Engineering Minibooks · AI & Machine Learning"
version: "0.1"
status: "Learner-Facing Content · Pilot Unit"
mode: "Learn Fast"
unit: "Unit I — Artificial Intelligence and Search"
---

# AI & MACHINE LEARNING

# Learn Fast — Unit I
## Artificial Intelligence, Search & Game Playing

> **Goal:** Understand the important ideas of Unit I quickly enough to build a usable mental model before moving to revision.

### How to use this unit

Read in this order:

```text
AI → Agents → Problem Formulation
→ Search → Heuristics → Greedy → A*
→ CSP → Game Playing → Minimax → Alpha-Beta
```

Do not try to memorise every sentence. At the end of each topic, answer the **Recall Check** without looking back.

---

# 0. Unit at a glance

Unit I is about one central question:

> **How can an intelligent system choose actions or solve problems when it has to search through possibilities?**

The major ideas form one chain:

```text
Intelligence
   ↓
Agent
   ↓
Problem
   ↓
State Space
   ↓
Search
   ├── Uninformed
   │    ├── BFS
   │    └── DFS
   │
   └── Informed
        ├── Greedy
        └── A*
   ↓
Special structures
   ├── CSP
   └── Games
        ├── Minimax
        └── Alpha-Beta
```

---

# 1. What is Artificial Intelligence?

### Why this matters

AI is the umbrella idea behind the entire course.

### Core idea

Artificial Intelligence studies computational systems that can perform tasks requiring forms of intelligent behaviour such as:

- reasoning;
- problem solving;
- learning;
- perception;
- decision making;
- language understanding;
- acting toward goals.

### Intuition

Think of AI as:

> **Designing a system that can perceive a situation, reason about possible choices, and produce an appropriate action.**

AI does not necessarily mean that a machine thinks exactly like a human.

### Formal takeaway

An AI system can be evaluated by how well it performs a task or achieves a goal under specified conditions.

### AI, ML and DL

```text
AI
└── Machine Learning
    └── Deep Learning
```

**AI** = broad field.

**ML** = systems improve behaviour from data/experience.

**DL** = ML using multi-layer neural networks.

### Examples

- route planning;
- spam detection;
- game playing;
- speech recognition;
- recommendation systems;
- medical decision support.

### Exam lens

Know:

- definition of AI;
- major goals/capabilities;
- difference between AI, ML and DL;
- examples of AI applications.

### Recall Check

1. What is the broad goal of AI?
2. Is every AI system necessarily a deep-learning system?
3. Where does ML fit relative to AI?

---

# 2. Intelligent Agents

## The central idea

An **agent** perceives its environment and acts upon it.

```text
Environment
    ↓ percepts
  Sensors
    ↓
  AGENT
    ↓
 Actuators
    ↓ actions
Environment
```

### Four words to remember

**Sensors → Percepts → Agent → Actions → Actuators**

### Agent

A system that:

1. receives percepts from its environment;
2. chooses actions;
3. acts through actuators.

### Rational agent

A rational agent chooses an action expected to maximize its performance measure, given what it has perceived and what it knows.

### Example: robot vacuum

```text
Sensors:
dirt, position, obstacles

Agent:
decides what to do

Actuators:
movement, suction

Environment:
rooms, furniture, floor
```

### Important distinction

A rational agent does **not** mean an all-knowing agent.

It makes the best decision available from the information and assumptions it has.

### Environment properties to recognise

Some common dimensions are:

- fully observable / partially observable;
- deterministic / stochastic;
- static / dynamic;
- discrete / continuous;
- single-agent / multi-agent.

You do not need to memorise the list without understanding it. Each property describes **what kind of uncertainty or interaction the agent faces**.

### Exam lens

A standard answer should mention:

**perception + decision + action + performance measure/rationality.**

### Recall Check

Draw the agent–environment loop from memory.

---

# 3. Problem Formulation

Search cannot start until the problem is represented properly.

A search problem is usually specified using:

```text
Initial state
+
Actions
+
Transition model
+
Goal test
+
Path cost
```

### Example: finding a route

```text
Initial state → Delhi
Actions → travel to connected city
Transition → city reached after taking road
Goal → reach Jaipur
Path cost → distance / time / other cost
```

### State space

The **state space** is the collection of states reachable through the available actions.

Search then becomes:

> Find a path from the initial state to a goal state.

### Why formulation matters

A poor formulation can make an easy real-world problem computationally difficult.

The same real-world task can often be represented at different levels of detail.

### Key terms

| Term | Meaning |
|---|---|
| State | Current situation |
| Initial state | Starting point |
| Action | Available operation |
| Transition model | Result of taking an action |
| Goal test | Checks whether goal is reached |
| Path cost | Cost accumulated along a path |

### Recall Check

For a route-planning problem, identify all five components.

---

# 4. Search: the core problem-solving mechanism

### Core idea

A search algorithm explores possible states until it finds a goal.

```text
Initial State
     ↓
Frontier
     ↓
Choose a node
     ↓
Expand node
     ↓
Generate successors
     ↓
Goal?
 ┌───┴───┐
Yes     No
 ↓       ↓
Return   Continue
```

### Frontier

The frontier is the set of currently generated but not yet expanded nodes.

The main difference between many search algorithms is:

> **Which frontier node should be expanded next?**

That one question explains much of Unit I.

---

# 5. Uninformed Search

Uninformed or blind search does not use domain-specific knowledge about how close a state is to the goal.

Two essential methods:

```text
BFS
DFS
```

---

# 6. Breadth-First Search (BFS)

### Intuition

BFS explores **level by level**.

```text
Level 0
   A

Level 1
 B   C

Level 2
D E F G
```

It finishes all nodes at one depth before moving deeper.

### Data structure

**Queue — FIFO**

```text
First in → First out
```

### Simplified process

1. Put the start node into the queue.
2. Remove the front node.
3. Test for goal.
4. Add its unvisited successors to the back.
5. Repeat.

### When it is useful

BFS is strong when:

- solutions tend to be shallow;
- step costs are equal and shortest number of steps matters;
- you need systematic level-order exploration.

### Important property

BFS is complete under standard finite-branching assumptions.

BFS is optimal when path cost increases with depth under the relevant equal/unit-cost assumptions.

### Complexity intuition

BFS can consume a lot of memory because it stores an entire frontier level.

For branching factor \(b\) and shallowest goal depth \(d\), the familiar time and space growth is approximately:

\[
O(b^{d+1})
\]

Exact bounds vary with conventions and goal placement, so remember the practical lesson:

> **BFS can be expensive mainly because the frontier grows rapidly.**

### Common confusion

BFS is not automatically optimal for arbitrary non-uniform path costs.

### Recall Check

- What data structure does BFS use?
- Why can BFS consume a lot of memory?
- Under what cost assumption is BFS optimal?

---

# 7. Depth-First Search (DFS)

### Intuition

DFS follows one branch **as deep as possible** before backtracking.

```text
A
↓
B
↓
D
↓
...
```

### Data structure

**Stack — LIFO**

This can be implemented explicitly with a stack or implicitly using recursion.

### Simplified process

1. Start at the root.
2. Choose a child and go deeper.
3. Continue until goal, dead end, or depth condition.
4. Backtrack and explore another branch.

### Strength

DFS usually uses much less memory than BFS when the search tree is broad.

### Weaknesses

DFS can go down a very deep or unproductive branch before reaching a nearby solution.

Therefore, under general conditions:

- it is not complete in infinite-depth spaces;
- it is not generally optimal.

### Complexity intuition

With branching factor \(b\) and maximum depth \(m\):

\[
O(b^m)
\]

for both time and worst-case space, with the practical distinction that DFS stores a much smaller active path/frontier structure than BFS in many settings.

### Recall Check

Explain why DFS can use less memory than BFS.

---

# 8. BFS vs DFS — the high-value comparison

| Criterion | BFS | DFS |
|---|---|---|
| Expansion style | Level by level | Deep first |
| Data structure | Queue | Stack / recursion |
| Complete? | Yes under standard finite-branching assumptions | Not in general for infinite-depth spaces |
| Optimal? | Yes for equal/unit step costs under standard assumptions | No, in general |
| Memory | High | Usually lower |
| Good for | Shallow solutions | Deep exploration / memory-limited settings |

### Memory hook

> **BFS = Broad but memory-hungry.**  
> **DFS = Deep but can get lost.**

---

# 9. Heuristics

Uninformed search knows little beyond the formal problem.

A **heuristic** adds an estimate of how promising a state is.

### Core idea

\[
h(n)
\]

means:

> **Estimated cost from node \(n\) to a goal.**

The heuristic does not have to know the exact remaining cost.

### Example

For route finding:

```text
h(n) = straight-line distance to destination
```

This is an estimate, not necessarily the actual road distance.

### Why heuristics matter

Instead of asking only:

> "What can I expand next?"

the algorithm can ask:

> "Which option appears to take me closer to the goal?"

### Admissible heuristic

A heuristic is **admissible** if it never overestimates the true remaining cost:

\[
h(n) \leq h^*(n)
\]

where \(h^*(n)\) is the actual optimal cost from \(n\) to a goal.

### Important distinction

A heuristic is not automatically admissible merely because it "looks reasonable."

### Recall Check

What does \(h(n)\) estimate?

---

# 10. Greedy Best-First Search

Greedy search uses only the heuristic estimate:

\[
f(n)=h(n)
\]

### Intuition

> **Go toward what looks closest to the goal.**

It ignores the cost already spent.

### Example

If two frontier nodes have:

```text
A → h(A)=8
B → h(B)=3
```

Greedy prefers **B**.

### Strength

It can reach a goal quickly when the heuristic is useful.

### Weakness

Because it ignores \(g(n)\), it can make poor choices.

It is not generally optimal.

### Memory hook

```text
Greedy
= "What looks closest?"
= h(n)
```

### Recall Check

What information does Greedy use that BFS/DFS do not?

---

# 11. A* Search

A* combines:

- cost already paid;
- estimated cost remaining.

Its evaluation function is:

\[
f(n)=g(n)+h(n)
\]

where:

\[
g(n)=\text{cost from start to }n
\]

\[
h(n)=\text{estimated cost from }n\text{ to goal}
\]

### Intuition

A* asks:

> **"What path looks cheapest overall?"**

### Compare directly

```text
Greedy:
f(n)=h(n)

A*:
f(n)=g(n)+h(n)
```

### Why this matters

A node might look close to the goal but require a very expensive route to reach.

A* accounts for both parts.

### Example

```text
Node A:
g=3, h=7 → f=10

Node B:
g=8, h=2 → f=10
```

Both have the same current estimate, so another tie-breaking rule may be used.

### Optimality idea

A* has strong optimality guarantees when the heuristic satisfies the required conditions, especially admissibility under the standard tree-search setting; implementation details such as graph search and consistency matter.

For rapid learning, remember:

> **Admissible heuristic → never overestimates.**

### Recall Check

Explain the meaning of all three of \(f\), \(g\), and \(h\).

---

# 12. Search family in one picture

```text
SEARCH
│
├── UNINFORMED
│   ├── BFS → queue → level
│   └── DFS → stack → depth
│
└── INFORMED
    ├── Greedy → h(n)
    └── A* → g(n)+h(n)
```

### The four formulas/keywords to remember

```text
BFS → FIFO
DFS → LIFO
Greedy → h(n)
A* → g(n)+h(n)
```

This is one of the most important Unit I recall structures.

---

# 13. Local and Evolutionary Search

These methods do not necessarily maintain a complete route from start to goal.

They often focus on improving a current candidate.

### Local search

Start with a candidate and repeatedly move toward a better candidate.

Example idea:

```text
current solution
      ↓
neighboring solution
      ↓
better?
      ↓
move
```

### Hill Climbing intuition

Always move to a better neighbouring state.

### Main danger

A local improvement may lead to:

- local maximum/minimum;
- plateau;
- ridge-like search difficulty.

Therefore:

> A locally best state is not necessarily globally best.

### Evolutionary search

Population-based methods maintain multiple candidate solutions and improve them using ideas such as:

- selection;
- variation;
- recombination;
- mutation.

For rapid study, remember the family idea rather than implementation details.

### Priority

**P2 — Important**, unless your teacher places unusual emphasis on it.

---

# 14. Constraint Satisfaction Problems (CSP)

A CSP is a problem where a solution assigns values to variables while satisfying constraints.

### Three core components

```text
Variables
Domains
Constraints
```

### Example: map colouring

Variables:

```text
A, B, C, D
```

Domains:

```text
{Red, Green, Blue}
```

Constraint:

> Adjacent regions cannot have the same colour.

### Another example

Sudoku can be formulated as a CSP:

- variables = cells;
- domains = allowed digits;
- constraints = row/column/subgrid rules.

### Why CSP is special

Instead of searching arbitrary paths, we search through **assignments** while pruning assignments that violate constraints.

### Core mental model

```text
Choose variable
→ assign value
→ check constraints
→ reject inconsistent assignment
→ continue
```

### High-value vocabulary

**consistent assignment** = does not violate the constraints considered so far.

### Recall Check

State the three parts of every basic CSP.

---

# 15. Game Playing and Adversarial Search

Normal search often assumes the environment does not actively try to defeat you.

Games are different.

There is an opponent.

Therefore, the system must reason about:

> **"What will the other player do?"**

### Adversarial search

Search in a competitive environment where one agent's success may reduce another's.

### Game tree

```text
Current position
      ↓
Your possible moves
      ↓
Opponent's possible moves
      ↓
Your responses
      ↓
...
```

### Utility

Terminal outcomes can be assigned values such as:

```text
Win  → +1
Draw →  0
Loss → -1
```

The exact scale can vary.

### Core transition

```text
Single-agent search
        ↓
Adversarial search
        ↓
MINIMAX
```

---

# 16. Minimax

Minimax models two opponents:

- **MAX** wants the highest utility;
- **MIN** wants the lowest utility for MAX.

### Game tree idea

```text
             MAX
          /       \
        MIN       MIN
       /  \       /  \
      3    5     2    9
```

Left MIN chooses:

\[
\min(3,5)=3
\]

Right MIN chooses:

\[
\min(2,9)=2
\]

MAX then chooses:

\[
\max(3,2)=3
\]

So MAX selects the left branch.

### Mental model

> **MAX assumes MIN will respond in the most harmful way for MAX.**

### Important distinction

Minimax is not "choose the branch with the highest visible leaf."

It evaluates the opponent's best response.

### Recall Check

What does MAX do? What does MIN do?

---

# 17. Alpha-Beta Pruning

Minimax may evaluate many branches that cannot affect the final decision.

**Alpha-beta pruning** removes such branches.

### Core idea

Keep two bounds:

\[
\alpha = \text{best value MAX can guarantee so far}
\]

\[
\beta = \text{best value MIN can guarantee so far}
\]

When the remaining branch cannot improve the final decision:

> **Stop exploring it.**

### The key condition

Pruning occurs when:

\[
\alpha \geq \beta
\]

### What alpha-beta does NOT do

It does not change the minimax result when applied correctly.

It changes:

> **How much of the tree must be evaluated.**

### Why it matters

Good move ordering can make pruning much more effective.

### Memory hook

```text
Minimax → decide
Alpha-Beta → decide faster by pruning
```

### Recall Check

Does alpha-beta change the final minimax answer?

**No.**

---

# 18. Resource-Limited Search

Real systems cannot search forever.

Common controls include:

- depth limits;
- cutoff tests;
- evaluation functions;
- iterative deepening in appropriate settings.

### Core idea

Instead of reaching a terminal game state, the system may stop at a cutoff depth and estimate the position.

```text
search
  ↓
depth limit reached
  ↓
evaluation function
  ↓
estimated value
```

### Priority

**P2 — Important.**

Know the reason:

> **Limited time/memory forces search to stop before a terminal solution is available.**

---

# 19. Unit I comparison matrix

| Concept | Main idea | Key structure | Important property |
|---|---|---|---|
| BFS | Explore shallow levels first | Queue | Good for shallow/equal-cost paths |
| DFS | Explore deeply first | Stack | Low memory, not generally optimal |
| Greedy | Move toward estimated goal | \(h(n)\) | Fast sometimes, not generally optimal |
| A* | Combine cost + estimate | \(g+h\) | Strong optimality under conditions |
| CSP | Satisfy constraints | Variables/domains/constraints | Reject inconsistent assignments |
| Minimax | Anticipate opponent | MAX/MIN tree | Rational adversarial choice |
| Alpha-Beta | Skip irrelevant branches | \(\alpha,\beta\) | Same minimax result, less search |

---

# 20. Learn Fast — Unit I "must actually understand"

Before leaving this unit, you should be able to explain these without reading:

### AI

What is AI and how does it relate to ML and DL?

### Agents

How do sensors, percepts, decisions, actuators and environment fit together?

### Problem formulation

How do you convert a real problem into an initial state, actions, transition model, goal and path cost?

### Search

What is a frontier and why does node-selection order matter?

### BFS / DFS

Why does queue vs stack change the search behaviour?

### Heuristics

What is \(h(n)\), and why is admissibility useful?

### Greedy / A*

Why is:

\[
h(n)
\]

different from:

\[
g(n)+h(n)
\]

?

### CSP

Why are variables, domains and constraints enough to define the core problem?

### Games

Why does an opponent require adversarial search?

### Minimax

Why does MAX consider MIN's best counter-move?

### Alpha-Beta

Why can branches be discarded without changing the minimax answer?

---

# 21. 10-minute end-of-unit check

Without opening the page, try to reproduce:

```text
1. Agent–environment loop

2. Problem formulation:
   Initial state
   Actions
   Transition model
   Goal test
   Path cost

3. Search family:
   BFS / DFS / Greedy / A*

4. Four memory triggers:
   BFS → FIFO
   DFS → LIFO
   Greedy → h
   A* → g+h

5. CSP:
   Variables / Domains / Constraints

6. Minimax:
   MAX / MIN

7. Alpha-Beta:
   α / β / α≥β
```

If you cannot reproduce these, go back to the relevant topic instead of rereading the entire unit.

---

# 22. Next step

When this unit feels understandable but not yet memorised, move directly to:

**Last-Minute Revision — Unit I**

There you will see the same knowledge compressed into definitions, formulas, algorithms, comparisons, conditions, traps and active-recall prompts.

**Main Book bridges**

- AI → What is AI?
- Agents → Intelligent Agents
- Search → Uninformed / Informed Search
- CSP → Constraint Satisfaction Problems
- Games → Game Playing / Minimax / Alpha-Beta

The Main Book remains the place for full mathematical and conceptual depth.
