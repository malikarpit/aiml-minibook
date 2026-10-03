// AI & Machine Learning MiniBook - Master 100-Question University Examination Bank
// Units I, II, III, IV · Official Delhi University Syllabus Mapped
const AIML_QUIZ_DATA = [
  {
    "id": 1,
    "part": 1,
    "chapter": 1,
    "diff": "Easy",
    "q": "Which of the following best defines a 'Rational Agent' in Artificial Intelligence?",
    "options": [
      "An agent that possesses human-like consciousness and emotions",
      "An agent that always selects an action that maximizes its actual historical performance",
      "An agent that acts so as to maximize its expected performance measure given its percept history",
      "An agent that is omniscient and never makes mistakes"
    ],
    "ans": 2,
    "exp": "Rationality depends on expected performance given the percept sequence and built-in knowledge. Rationality is not omniscience (which knows the actual future outcome).",
    "uni": true,
    "unit": "Unit I",
    "topic": "Intelligent Agents & Rationality",
    "syllabus": "University Core"
  },
  {
    "id": 2,
    "part": 1,
    "chapter": 1,
    "diff": "Medium",
    "q": "What does John Searle's famous 'Chinese Room' thought experiment primarily demonstrate?",
    "options": [
      "Computers will soon achieve human-level general intelligence",
      "Syntactic symbol manipulation alone does not constitute semantic understanding or consciousness",
      "Turing machines cannot simulate natural language processing",
      "Rule-based expert systems are mathematically incomplete"
    ],
    "ans": 1,
    "exp": "Searle argued that a person inside a room following syntactic rules to translate Chinese symbols produces correct output without understanding Chinese. Thus, syntax does not equal semantics.",
    "uni": true,
    "unit": "Unit I",
    "topic": "Chinese Room Argument & Strong AI",
    "syllabus": "University Core"
  },
  {
    "id": 3,
    "part": 1,
    "chapter": 1,
    "diff": "Easy",
    "q": "In which year and conference was the term 'Artificial Intelligence' officially coined?",
    "options": [
      "1943 at the McCulloch-Pitts seminar",
      "1950 in Alan Turing's Computing Machinery and Intelligence paper",
      "1956 at the Dartmouth Summer Research Project on Artificial Intelligence",
      "1969 at the Stanford Research Institute Shakey rollout"
    ],
    "ans": 2,
    "exp": "John McCarthy coined the term 'Artificial Intelligence' in his 1955 proposal for the 1956 Dartmouth Summer Research Project.",
    "uni": true,
    "unit": "Unit I",
    "topic": "History of AI & Dartmouth Conference",
    "syllabus": "University Core"
  },
  {
    "id": 4,
    "part": 1,
    "chapter": 1,
    "diff": "Hard",
    "q": "Which philosophical stance asserts that appropriately programmed computers are capable of genuine cognitive mental states and minds?",
    "options": [
      "Weak AI",
      "Strong AI / AGI",
      "Connectionism",
      "Behaviorism"
    ],
    "ans": 1,
    "exp": "Strong AI (or Artificial General Intelligence) claims that an appropriately programmed computer possesses a real mind with understanding, whereas Weak AI views computers merely as useful tools for simulating human cognition.",
    "uni": true,
    "unit": "Unit I",
    "topic": "Weak AI vs Strong AI",
    "syllabus": "University Core"
  },
  {
    "id": 5,
    "part": 1,
    "chapter": 2,
    "diff": "Easy",
    "q": "In the PEAS classification of an automated taxi driver agent, which of the following represents the 'Sensors' component?",
    "options": [
      "Steering wheel, accelerator, and brake pedals",
      "Cameras, sonar, speedometer, GPS, and engine sensors",
      "Safe, fast, legal, and comfortable trip",
      "Roads, other traffic, pedestrians, and weather conditions"
    ],
    "ans": 1,
    "exp": "PEAS stands for Performance measure (safe trip), Environment (roads/traffic), Actuators (steering/pedals), and Sensors (cameras/sonar/GPS).",
    "uni": true,
    "unit": "Unit I",
    "topic": "PEAS Specification",
    "syllabus": "University Core"
  },
  {
    "id": 6,
    "part": 1,
    "chapter": 2,
    "diff": "Medium",
    "q": "An environment where the agent's current state and action uniquely determine the next state, without randomness or probabilities, is termed:",
    "options": [
      "Episodic",
      "Deterministic",
      "Static",
      "Discrete"
    ],
    "ans": 1,
    "exp": "In a deterministic environment, the next state is completely determined by the current state and the executed action. If randomness is involved, it is stochastic.",
    "uni": true,
    "unit": "Unit I",
    "topic": "Environment Types",
    "syllabus": "University Core"
  },
  {
    "id": 7,
    "part": 1,
    "chapter": 2,
    "diff": "Medium",
    "q": "Which agent architecture maintains an internal state to track aspects of the environment that cannot be seen right now?",
    "options": [
      "Simple Reflex Agent",
      "Model-Based Reflex Agent",
      "Goal-Based Agent",
      "Utility-Based Agent"
    ],
    "ans": 1,
    "exp": "Model-based reflex agents use an internal model of the world (how the world evolves and how the agent's actions affect it) to handle partial observability.",
    "uni": true,
    "unit": "Unit I",
    "topic": "Agent Architectures",
    "syllabus": "University Core"
  },
  {
    "id": 8,
    "part": 1,
    "chapter": 2,
    "diff": "Hard",
    "q": "A game of Poker is best classified along environment dimensions as:",
    "options": [
      "Fully Observable, Deterministic, Static, Discrete",
      "Partially Observable, Stochastic, Sequential, Dynamic",
      "Fully Observable, Stochastic, Episodic, Continuous",
      "Partially Observable, Deterministic, Static, Discrete"
    ],
    "ans": 1,
    "exp": "Poker has hidden opponent cards (partially observable), deck card dealing randomness (stochastic), actions affect future hands (sequential), and clock timers/opponent tells create dynamic pressure.",
    "uni": true,
    "unit": "Unit I",
    "topic": "Environment Characteristics",
    "syllabus": "University Core"
  },
  {
    "id": 9,
    "part": 2,
    "chapter": 3,
    "diff": "Easy",
    "q": "Which of the following is NOT one of the 5 formal components of a standard search problem formulation?",
    "options": [
      "Initial State",
      "Action set / Successor Function",
      "Transition Model",
      "Heuristic Evaluation Function"
    ],
    "ans": 3,
    "exp": "A formal search problem 5-tuple consists of: Initial State, Actions, Transition Model, Goal Test, and Path Cost. The heuristic function h(n) is an external problem-solving aid used in informed search, not part of the problem specification.",
    "uni": true,
    "unit": "Unit I",
    "topic": "Search Problem Formulation",
    "syllabus": "University Core"
  },
  {
    "id": 10,
    "part": 2,
    "chapter": 3,
    "diff": "Medium",
    "q": "What is the key technical difference between a 'State Space' and a 'Search Tree'?",
    "options": [
      "The state space is always a tree, while the search tree is always a directed cyclic graph",
      "The state space represents the set of all valid world configurations; the search tree represents the paths explored by the search algorithm",
      "A search tree has a finite number of nodes, while a state space is always infinite",
      "There is no difference; the terms are synonymous in classical AI"
    ],
    "ans": 1,
    "exp": "State space defines the graph of all physical states and valid transitions. A search tree represents explicit paths explored from the initial state, where identical states can appear at multiple distinct tree nodes.",
    "uni": true,
    "unit": "Unit I",
    "topic": "State Space vs Search Tree",
    "syllabus": "University Core"
  },
  {
    "id": 11,
    "part": 2,
    "chapter": 4,
    "diff": "Medium",
    "q": "Under which condition is Breadth-First Search (BFS) guaranteed to be optimal?",
    "options": [
      "When the heuristic function h(n) is admissible",
      "When all step costs are identical and positive",
      "When the search graph contains no cycles",
      "When the branching factor is infinite"
    ],
    "ans": 1,
    "exp": "BFS expands nodes in order of shallowest depth. If all edge costs are identical (constant c > 0), the shallowest goal is also the cheapest, guaranteeing optimality. When edge costs vary, Uniform-Cost Search must be used.",
    "uni": true,
    "unit": "Unit I",
    "topic": "Uninformed Search (BFS)",
    "syllabus": "University Core"
  },
  {
    "id": 12,
    "part": 2,
    "chapter": 4,
    "diff": "Hard",
    "q": "What is the space complexity of Depth-First Search (DFS) on a tree with branching factor b and maximum depth m?",
    "options": [
      "O(b^m)",
      "O(b * m)",
      "O(m^b)",
      "O(b^(m/2))"
    ],
    "ans": 1,
    "exp": "DFS needs to store only the path from the root to the current node along with unexpanded sibling nodes at each depth level, yielding a linear space complexity of O(b * m).",
    "uni": true,
    "unit": "Unit I",
    "topic": "Search Space Complexity",
    "syllabus": "University Core"
  },
  {
    "id": 13,
    "part": 2,
    "chapter": 4,
    "diff": "Medium",
    "q": "Uniform Cost Search (UCS) expands nodes in order of increasing:",
    "options": [
      "Depth d(n)",
      "Heuristic value h(n)",
      "Path cost g(n) from start",
      "Total estimated cost g(n) + h(n)"
    ],
    "ans": 2,
    "exp": "UCS uses a priority queue ordered by cumulative path cost g(n) from the root. It is essentially Dijkstra's algorithm generalized for infinite search spaces.",
    "uni": true,
    "unit": "Unit I",
    "topic": "Uniform Cost Search",
    "syllabus": "University Core"
  },
  {
    "id": 14,
    "part": 2,
    "chapter": 4,
    "diff": "Medium",
    "q": "Why is Iterative Deepening Search (IDS) preferred over standard BFS when the search tree is deep and memory is constrained?",
    "options": [
      "IDS has O(b^d) time complexity and O(b * d) space complexity while retaining optimality for unit step costs",
      "IDS always expands fewer nodes than BFS in every scenario",
      "IDS operates without needing a goal test function",
      "IDS maintains the entire frontier in RAM simultaneously"
    ],
    "ans": 0,
    "exp": "IDS combines the linear memory advantage of DFS (O(b*d)) with the completeness and shallowest-goal optimality of BFS, at the cost of only modest overhead (typically < 33% extra node expansions).",
    "uni": true,
    "unit": "Unit I",
    "topic": "Iterative Deepening Search",
    "syllabus": "University Core"
  },
  {
    "id": 15,
    "part": 2,
    "chapter": 5,
    "diff": "Hard",
    "q": "A heuristic function h(n) is said to be 'admissible' if:",
    "options": [
      "It never underestimates the true cost to reach the goal from node n",
      "It never overestimates the true cost to reach the goal from node n: h(n) <= h*(n)",
      "It satisfies the triangle inequality for all adjacent nodes",
      "It is strictly equal to the true cost: h(n) = h*(n)"
    ],
    "ans": 1,
    "exp": "Admissibility requires that h(n) never overestimates the true remaining cost h*(n), meaning h(n) <= h*(n) for all nodes n, and h(goal) = 0.",
    "uni": true,
    "unit": "Unit I",
    "topic": "Admissible Heuristics",
    "syllabus": "University Core"
  },
  {
    "id": 16,
    "part": 2,
    "chapter": 5,
    "diff": "Hard",
    "q": "What condition guarantees that Graph-Search A* will never reopen a closed node?",
    "options": [
      "Admissibility: h(n) <= h*(n)",
      "Consistency (Monotonicity): h(n) <= c(n, a, n') + h(n')",
      "Completeness: b is finite",
      "Non-negativity: h(n) >= 0"
    ],
    "ans": 1,
    "exp": "Consistency (monotonicity) requires h(n) <= c(n, a, n') + h(n'). This ensures f(n) values are non-decreasing along any path, guaranteeing the first expansion of a node is via the optimal path, eliminating node reopenings.",
    "uni": true,
    "unit": "Unit I",
    "topic": "Consistent Heuristics & Triangle Inequality",
    "syllabus": "University Core"
  },
  {
    "id": 17,
    "part": 2,
    "chapter": 5,
    "diff": "Medium",
    "q": "If heuristic h2 dominates heuristic h1 (i.e., h2(n) >= h1(n) for all non-goal nodes, and both are admissible), which of the following is true?",
    "options": [
      "A* using h1 expands fewer or equal nodes than A* using h2",
      "A* using h2 expands fewer or equal nodes than A* using h1",
      "h1 is consistent but h2 is inconsistent",
      "Both heuristics will expand identical sets of nodes"
    ],
    "ans": 1,
    "exp": "A more informed heuristic (higher value while remaining admissible) prunes more search space. Therefore, A* with h2 will expand a subset of the nodes expanded by A* with h1.",
    "uni": true,
    "unit": "Unit I",
    "topic": "Heuristic Dominance",
    "syllabus": "University Core"
  },
  {
    "id": 18,
    "part": 2,
    "chapter": 6,
    "diff": "Medium",
    "q": "Greedy Best-First Search evaluates nodes based purely on:",
    "options": [
      "f(n) = g(n)",
      "f(n) = h(n)",
      "f(n) = g(n) + h(n)",
      "f(n) = g(n) - h(n)"
    ],
    "ans": 1,
    "exp": "Greedy Best-First Search selects the node that appears closest to the goal using f(n) = h(n). It ignores the past accumulated cost g(n), rendering it incomplete and non-optimal in general graphs.",
    "uni": true,
    "unit": "Unit I",
    "topic": "Greedy Best-First Search",
    "syllabus": "University Core"
  },
  {
    "id": 19,
    "part": 2,
    "chapter": 7,
    "diff": "Hard",
    "q": "In A* search with evaluation function f(n) = g(n) + h(n), what does g(n) represent?",
    "options": [
      "The estimated cost from node n to the goal",
      "The actual known cost incurred along the path from the initial start node to node n",
      "The branching factor at node n",
      "The depth level of node n in the search tree"
    ],
    "ans": 1,
    "exp": "g(n) is the exact cost incurred from the start state to reach node n, while h(n) is the estimated cost from n to the nearest goal state.",
    "uni": true,
    "unit": "Unit I",
    "topic": "A* Search Mathematics",
    "syllabus": "University Core"
  },
  {
    "id": 20,
    "part": 3,
    "chapter": 8,
    "diff": "Hard",
    "q": "In Simulated Annealing, when a neighbor state with a higher cost (delta_E > 0 in a minimization problem) is evaluated, the probability P of accepting it is given by:",
    "options": [
      "P = 1.0 (always accepted)",
      "P = exp(-delta_E / T)",
      "P = 1 / (1 + exp(-delta_E))",
      "P = 0.0 (always rejected)"
    ],
    "ans": 1,
    "exp": "Simulated Annealing escapes local minima by accepting suboptimal moves with Boltzmann probability P = exp(-delta_E / T). At high temperature T, nearly all moves are accepted; as T cools to 0, it degenerates into pure hill climbing.",
    "uni": true,
    "unit": "Unit I",
    "topic": "Simulated Annealing & Boltzmann Schedule",
    "syllabus": "University Core"
  },
  {
    "id": 21,
    "part": 3,
    "chapter": 9,
    "diff": "Medium",
    "q": "In Constraint Satisfaction Problems (CSP), the Minimum Remaining Values (MRV) heuristic selects:",
    "options": [
      "The variable that participates in the largest number of constraints with unassigned variables",
      "The variable with the fewest legal values remaining in its domain",
      "The value that leaves the maximum number of legal choices for neighboring variables",
      "The variable with the lowest lexicographical name"
    ],
    "ans": 1,
    "exp": "MRV (also known as the 'most constrained variable' or 'fail-first' heuristic) selects the unassigned variable with the smallest domain, causing failing branches to be detected and pruned as early as possible.",
    "uni": true,
    "unit": "Unit I",
    "topic": "CSP Heuristics (MRV)",
    "syllabus": "University Core"
  },
  {
    "id": 22,
    "part": 3,
    "chapter": 9,
    "diff": "Hard",
    "q": "The AC-3 algorithm enforces Arc Consistency. An arc (Xi, Xj) is consistent if and only if:",
    "options": [
      "For every value x in Domain(Xi), there exists at least one value y in Domain(Xj) that satisfies the binary constraint between Xi and Xj",
      "All domains contain only a single unique value",
      "Xi and Xj have disjoint non-overlapping domains",
      "The sum of values across both variables equals zero"
    ],
    "ans": 0,
    "exp": "Arc consistency guarantees that every permissible assignment to variable Xi has a viable compatible partner in Xj according to the constraint relation.",
    "uni": true,
    "unit": "Unit I",
    "topic": "Arc Consistency (AC-3 Algorithm)",
    "syllabus": "University Core"
  },
  {
    "id": 23,
    "part": 4,
    "chapter": 11,
    "diff": "Medium",
    "q": "In the Minimax algorithm for two-player zero-sum games, Alpha-Beta pruning guarantees:",
    "options": [
      "Finding a suboptimal move in half the time",
      "Returning the exact same Minimax decision as standard Minimax without evaluating irrelevant subtrees",
      "Converting exponential time complexity into linear time O(b * m)",
      "Eliminating the need for a terminal evaluation function"
    ],
    "ans": 1,
    "exp": "Alpha-Beta pruning is mathematically lossless: it computes the exact same minimax value as full minimax, but prunes branches that cannot influence the final root decision when alpha >= beta.",
    "uni": true,
    "unit": "Unit I",
    "topic": "Alpha-Beta Pruning Correctness",
    "syllabus": "University Core"
  },
  {
    "id": 24,
    "part": 4,
    "chapter": 11,
    "diff": "Hard",
    "q": "Under optimal move ordering, what is the effective time complexity of Alpha-Beta search?",
    "options": [
      "O(b^m)",
      "O(b^(m/2))",
      "O(m * log b)",
      "O(b * m)"
    ],
    "ans": 1,
    "exp": "With optimal move ordering (best moves examined first), Alpha-Beta prunes roughly half the tree branches, cutting the effective branching factor from b to sqrt(b), resulting in an optimal time complexity of O(b^(m/2)).",
    "uni": true,
    "unit": "Unit I",
    "topic": "Optimal Move Ordering",
    "syllabus": "University Core"
  },
  {
    "id": 25,
    "part": 4,
    "chapter": 13,
    "diff": "Medium",
    "q": "Which combination of search algorithm and property is INCORRECT?",
    "options": [
      "Breadth-First Search: Complete on finite branching factor",
      "Depth-First Search: Optimal for graphs with unit costs",
      "A* with consistent heuristic: Optimal on graph search without reopening",
      "Iterative Deepening Search: Linear space complexity O(b*d)"
    ],
    "ans": 1,
    "exp": "Depth-First Search is NOT optimal: it explores deeply along the first available path and will return the first goal it finds, which may be significantly more expensive than a shallower goal.",
    "uni": true,
    "unit": "Unit I",
    "topic": "Search Algorithm Comparison Matrix",
    "syllabus": "University Core"
  },
  {
    "id": 26,
    "part": 5,
    "chapter": 14,
    "diff": "Easy",
    "q": "According to Tom Mitchell's well-posed learning definition, a computer program learns from Experience (E) with respect to Task (T) and Performance measure (P) if:",
    "options": [
      "Its computational speed increases as memory capacity scales",
      "Its performance at tasks in T, as measured by P, improves with experience E",
      "It never produces training set errors on unseen data",
      "It minimizes the number of trainable weight parameters"
    ],
    "ans": 1,
    "exp": "Tom Mitchell (1997): A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E.",
    "uni": true,
    "unit": "Unit II",
    "topic": "Mitchell's Learning Definition",
    "syllabus": "University Core"
  },
  {
    "id": 27,
    "part": 5,
    "chapter": 15,
    "diff": "Easy",
    "q": "Clustering customer purchasing patterns without pre-existing category labels is an example of:",
    "options": [
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
      "Imitation Learning"
    ],
    "ans": 1,
    "exp": "Unsupervised learning discovers underlying patterns, groupings, or representations in unlabeled data {x_i} without ground truth target supervisory signals {y_i}.",
    "uni": true,
    "unit": "Unit II",
    "topic": "Machine Learning Paradigms",
    "syllabus": "University Core"
  },
  {
    "id": 28,
    "part": 5,
    "chapter": 15,
    "diff": "Medium",
    "q": "Which of the following ML paradigms involves an agent interacting with an environment through trial-and-error to maximize cumulative scalar reward signals?",
    "options": [
      "Semi-supervised Learning",
      "Self-supervised Learning",
      "Reinforcement Learning",
      "Active Learning"
    ],
    "ans": 2,
    "exp": "Reinforcement learning is characterized by an agent operating in an environment, receiving state percepts, executing actions, and updating policies to maximize discounted return rewards.",
    "uni": true,
    "unit": "Unit II",
    "topic": "Reinforcement Learning Paradigm",
    "syllabus": "University Core"
  },
  {
    "id": 29,
    "part": 6,
    "chapter": 16,
    "diff": "Medium",
    "q": "What is meant by the 'Inductive Bias' of a machine learning algorithm?",
    "options": [
      "The systematic demographic prejudice present in historical training datasets",
      "The set of prior assumptions an algorithm makes to generalize from training data to unseen test instances",
      "The hardware error introduced by floating-point quantization",
      "The variance of model weights across random initialization seeds"
    ],
    "ans": 1,
    "exp": "Without inductive bias (prior assumptions about the hypothesis class, such as smoothness, linearity, or maximum margin), a learner cannot extrapolate beyond the exact observed training points.",
    "uni": true,
    "unit": "Unit II",
    "topic": "Inductive Bias Foundations",
    "syllabus": "University Core"
  },
  {
    "id": 30,
    "part": 6,
    "chapter": 16,
    "diff": "Medium",
    "q": "In the K-Nearest Neighbors (KNN) algorithm, what happens when K is chosen to be extremely small (e.g., K = 1)?",
    "options": [
      "The model exhibits high bias and underfits the data",
      "The model exhibits high variance, creating complex decision boundaries sensitive to individual noise points",
      "The decision boundary becomes a perfectly smooth hyperplane",
      "The computational training time increases exponentially"
    ],
    "ans": 1,
    "exp": "When K=1, the model memorizes each training point's exact neighborhood. Any noise or mislabeled outlier creates an isolated island in the decision space, producing high variance and overfitting.",
    "uni": true,
    "unit": "Unit II",
    "topic": "KNN Hyperparameter K",
    "syllabus": "University Core"
  },
  {
    "id": 31,
    "part": 6,
    "chapter": 16,
    "diff": "Hard",
    "q": "The 'Curse of Dimensionality' in distance-based algorithms like KNN implies that:",
    "options": [
      "Distance calculations overflow 64-bit integer registers",
      "As dimensions increase, data points become exponentially sparse, and distances between any two points converge to near equality",
      "The number of classes must equal the number of features",
      "Gradient descent fails to compute second-order Hessian matrices"
    ],
    "ans": 1,
    "exp": "In high dimensions, the volume of feature space grows exponentially, rendering sample density near zero. Distances between the nearest and farthest points become nearly identical, rendering distance metrics uninformative.",
    "uni": true,
    "unit": "Unit II",
    "topic": "Curse of Dimensionality",
    "syllabus": "University Core"
  },
  {
    "id": 32,
    "part": 6,
    "chapter": 17,
    "diff": "Hard",
    "q": "In the Bias-Variance decomposition of Mean Squared Error, irreducible error (sigma^2) represents:",
    "options": [
      "The error caused by incorrect hyperparameter choices",
      "The variance of the model's weight updates during gradient descent",
      "The intrinsic noise in the true data-generating process that cannot be eliminated by any model",
      "The difference between L1 and L2 regularization penalties"
    ],
    "ans": 2,
    "exp": "Total Expected Error = Bias^2 + Variance + sigma^2. The term sigma^2 is the inherent noise in the target y = f(x) + epsilon, which is irreducible regardless of how complex or perfect the hypothesis class is.",
    "uni": true,
    "unit": "Unit II",
    "topic": "Bias-Variance Decomposition",
    "syllabus": "University Core"
  },
  {
    "id": 33,
    "part": 6,
    "chapter": 17,
    "diff": "Medium",
    "q": "A machine learning model achieves 99.8% accuracy on the training set but only 64.2% accuracy on the test set. This model is suffering from:",
    "options": [
      "High Bias (Underfitting)",
      "High Variance (Overfitting)",
      "Data Leakage from Test to Train",
      "Vanishing Gradients"
    ],
    "ans": 1,
    "exp": "A massive performance gap between training accuracy and validation/test accuracy is the classic diagnostic signature of High Variance (Overfitting) \u2014 memorizing training noise rather than generalizable patterns.",
    "uni": true,
    "unit": "Unit II",
    "topic": "Overfitting vs Underfitting Diagnostics",
    "syllabus": "University Core"
  },
  {
    "id": 34,
    "part": 7,
    "chapter": 18,
    "diff": "Easy",
    "q": "In simple linear regression y = w*x + b, the Ordinary Least Squares (OLS) objective minimizes:",
    "options": [
      "The sum of absolute differences between predictions and true labels (L1 loss)",
      "The sum of squared residuals: sum (y_i - (w*x_i + b))^2",
      "The maximum distance from any point to the regression line",
      "The hinge loss between positive and negative margins"
    ],
    "ans": 1,
    "exp": "Ordinary Least Squares specifically minimizes the Residual Sum of Squares (RSS), which penalizes larger errors quadratically and yields an analytical closed-form solution.",
    "uni": true,
    "unit": "Unit II",
    "topic": "Ordinary Least Squares Objective",
    "syllabus": "University Core"
  },
  {
    "id": 35,
    "part": 7,
    "chapter": 19,
    "diff": "Hard",
    "q": "The closed-form analytical solution (Normal Equation) for Linear Regression weights is given by:",
    "options": [
      "w* = (X^T * X) * X^T * y",
      "w* = (X^T * X)^(-1) * X^T * y",
      "w* = (X * X^T)^(-1) * X * y",
      "w* = X^T * (X * X^T)^(-1) * y"
    ],
    "ans": 1,
    "exp": "Setting the gradient of RSS with respect to w to zero: d(RSS)/dw = -2 X^T (y - Xw) = 0 ==> X^T X w = X^T y ==> w* = (X^T X)^(-1) X^T y.",
    "uni": true,
    "unit": "Unit II",
    "topic": "Normal Equations Derivation",
    "syllabus": "University Core"
  },
  {
    "id": 36,
    "part": 7,
    "chapter": 19,
    "diff": "Medium",
    "q": "Why is Gradient Descent often preferred over the analytical Normal Equation (X^T X)^(-1) X^T y in industrial datasets?",
    "options": [
      "Gradient descent is guaranteed to find the global minimum in a single iteration",
      "Computing (X^T X)^(-1) has O(d^3) computational complexity, which is prohibitive when feature dimension d is large (e.g., d > 10,000)",
      "The Normal Equation only works when target values y are strictly binary",
      "Gradient descent does not require feature scaling"
    ],
    "ans": 1,
    "exp": "Inverting a d x d matrix requires O(d^3) floating-point operations. When d is large, matrix inversion becomes computationally intractable, whereas first-order gradient descent scales efficiently as O(k * n * d).",
    "uni": true,
    "unit": "Unit II",
    "topic": "Normal Equations vs Gradient Descent",
    "syllabus": "University Core"
  },
  {
    "id": 37,
    "part": 7,
    "chapter": 20,
    "diff": "Easy",
    "q": "The Sigmoid activation function sigma(z) maps any real-valued logit z to which output range?",
    "options": [
      "[-1, 1]",
      "[0, 1]",
      "[0, infinity)",
      "[-infinity, infinity]"
    ],
    "ans": 1,
    "exp": "sigma(z) = 1 / (1 + exp(-z)). As z -> -infinity, sigma(z) -> 0; as z -> +infinity, sigma(z) -> 1; at z = 0, sigma(z) = 0.5. Thus the output strictly lies in the open interval (0, 1).",
    "uni": true,
    "unit": "Unit II",
    "topic": "Sigmoid Function & Range",
    "syllabus": "University Core"
  },
  {
    "id": 38,
    "part": 7,
    "chapter": 20,
    "diff": "Medium",
    "q": "In Logistic Regression, the 'Log-Odds' (logit) is mathematically formulated as:",
    "options": [
      "log(p / (1 - p))",
      "log(1 - p) / log(p)",
      "p * (1 - p)",
      "exp(p / (1 - p))"
    ],
    "ans": 0,
    "exp": "The log-odds is the natural logarithm of the odds ratio: logit(p) = ln(p / (1 - p)) = w^T x + b. This linearizes the relationship between predictors and bounded probabilities.",
    "uni": true,
    "unit": "Unit II",
    "topic": "Log-Odds & Logit Transformation",
    "syllabus": "University Core"
  },
  {
    "id": 39,
    "part": 7,
    "chapter": 21,
    "diff": "Hard",
    "q": "Why is Mean Squared Error (MSE) NOT used as the loss function for training Logistic Regression models?",
    "options": [
      "MSE causes gradients to become strictly zero everywhere",
      "When combined with the non-linear Sigmoid function, the MSE loss surface becomes non-convex with numerous local minima",
      "MSE can only be evaluated on single-dimensional inputs",
      "Binary cross-entropy produces higher classification accuracy on linear data by definition"
    ],
    "ans": 1,
    "exp": "Composing the non-linear Sigmoid function with MSE yields a non-convex loss surface with multiple suboptimal local minima and plateaus. Binary Cross-Entropy (Negative Log Likelihood) is strictly convex, guaranteeing global convergence.",
    "uni": true,
    "unit": "Unit II",
    "topic": "Non-Convexity of MSE in Logistic Regression",
    "syllabus": "University Core"
  },
  {
    "id": 40,
    "part": 8,
    "chapter": 22,
    "diff": "Medium",
    "q": "Which property correctly describes Decision Trees?",
    "options": [
      "They require feature normalization and standardization before training",
      "They are non-parametric models capable of learning orthogonal axis-aligned decision boundaries",
      "They cannot be used for regression tasks",
      "They have low variance and never overfit without pruning"
    ],
    "ans": 1,
    "exp": "Decision trees make splits parallel to coordinate axes (orthogonal splits), do not require feature scaling, and are non-parametric (their depth and size grow with data complexity).",
    "uni": true,
    "unit": "Unit II",
    "topic": "Decision Tree Architecture",
    "syllabus": "University Core"
  },
  {
    "id": 41,
    "part": 8,
    "chapter": 23,
    "diff": "Hard",
    "q": "For a binary classification problem with 50 positive samples and 50 negative samples, what is the Shannon Entropy H(S)?",
    "options": [
      "0.0 bits",
      "0.5 bits",
      "1.0 bit",
      "2.0 bits"
    ],
    "ans": 2,
    "exp": "H(S) = - sum p_i log2(p_i) = - (0.5 * log2(0.5) + 0.5 * log2(0.5)) = - (0.5 * (-1) + 0.5 * (-1)) = 1.0 bit. Maximum uncertainty in binary classification yields an entropy of 1.0.",
    "uni": true,
    "unit": "Unit II",
    "topic": "Shannon Entropy Calculation",
    "syllabus": "University Core"
  },
  {
    "id": 42,
    "part": 8,
    "chapter": 23,
    "diff": "Hard",
    "q": "Which splitting criterion is utilized by the CART (Classification and Regression Trees) algorithm?",
    "options": [
      "Information Gain (Shannon Entropy)",
      "Gain Ratio",
      "Gini Impurity",
      "Chi-Square Statistic"
    ],
    "ans": 2,
    "exp": "CART uses Gini Impurity (Gini = 1 - sum p_i^2) for classification splits and Mean Squared Error reduction for regression splits. ID3 uses Information Gain, and C4.5 uses Gain Ratio.",
    "uni": true,
    "unit": "Unit II",
    "topic": "Gini Impurity & CART Algorithm",
    "syllabus": "University Core"
  },
  {
    "id": 43,
    "part": 9,
    "chapter": 24,
    "diff": "Easy",
    "q": "In medical cancer diagnosis where missing a malignant tumor has catastrophic consequences, which metric should be prioritized and maximized?",
    "options": [
      "Precision",
      "Recall (Sensitivity)",
      "Specificity",
      "Overall Accuracy"
    ],
    "ans": 1,
    "exp": "Recall = TP / (TP + FN). Maximizing recall minimizes False Negatives (FN) \u2014 cases where a patient has cancer but is incorrectly diagnosed as healthy.",
    "uni": true,
    "unit": "Unit II",
    "topic": "Recall & Critical Diagnostics",
    "syllabus": "University Core"
  },
  {
    "id": 44,
    "part": 9,
    "chapter": 24,
    "diff": "Medium",
    "q": "In a confusion matrix with TP=80, FP=20, FN=10, TN=90, what is the Precision of the classifier?",
    "options": [
      "80.0%",
      "88.9%",
      "80 / (80 + 20) = 80.0%",
      "80 / (80 + 10) = 88.9%"
    ],
    "ans": 2,
    "exp": "Precision = TP / (TP + FP) = 80 / (80 + 20) = 80 / 100 = 80.0%. Precision measures the proportion of positive identifications that were actually correct.",
    "uni": true,
    "unit": "Unit II",
    "topic": "Precision Calculation",
    "syllabus": "University Core"
  },
  {
    "id": 45,
    "part": 9,
    "chapter": 25,
    "diff": "Hard",
    "q": "Why is the F1-Score calculated as the Harmonic Mean of Precision and Recall, rather than their Arithmetic Mean?",
    "options": [
      "The harmonic mean is computationally faster to evaluate",
      "The harmonic mean penalizes extreme imbalances heavily: if either precision or recall is close to 0, F1 collapses towards 0",
      "The arithmetic mean can exceed 1.0 for probability values",
      "The harmonic mean is invariant to class label permutations"
    ],
    "ans": 1,
    "exp": "Arithmetic mean of 100% precision and 0% recall is 50%, which falsely suggests a mediocre model. The harmonic mean 2*(P*R)/(P+R) collapses to 0 whenever either metric collapses, ensuring balanced performance.",
    "uni": true,
    "unit": "Unit II",
    "topic": "Harmonic Mean & F1 Score",
    "syllabus": "University Core"
  },
  {
    "id": 46,
    "part": 9,
    "chapter": 25,
    "diff": "Medium",
    "q": "What does a Receiver Operating Characteristic (ROC) curve plot?",
    "options": [
      "Precision on Y-axis vs Recall on X-axis",
      "True Positive Rate (Sensitivity) on Y-axis vs False Positive Rate (1 - Specificity) on X-axis across all classification thresholds",
      "Training loss vs Validation loss across training epochs",
      "Accuracy on Y-axis vs Model complexity on X-axis"
    ],
    "ans": 1,
    "exp": "ROC curves plot True Positive Rate (Sensitivity) against False Positive Rate (1 - Specificity) across every possible classification threshold from 1.0 down to 0.0.",
    "uni": true,
    "unit": "Unit II",
    "topic": "ROC Curves & Threshold Dynamics",
    "syllabus": "University Core"
  },
  {
    "id": 47,
    "part": 10,
    "chapter": 26,
    "diff": "Easy",
    "q": "What is the primary objective of adding a Regularization term to a loss function?",
    "options": [
      "To minimize the training time on multi-core CPUs",
      "To penalize overly complex models with large parameter weights, thereby preventing overfitting and improving generalization",
      "To force gradient descent to take larger step sizes",
      "To eliminate the need for validation data"
    ],
    "ans": 1,
    "exp": "Regularization introduces a penalty on parameter magnitude to control model capacity, reduce variance, and prevent the model from fitting high-frequency noise in the training set.",
    "uni": true,
    "unit": "Unit II",
    "topic": "Regularization Purpose",
    "syllabus": "University Core"
  },
  {
    "id": 48,
    "part": 10,
    "chapter": 27,
    "diff": "Medium",
    "q": "Ridge Regression adds which penalty term to the Ordinary Least Squares objective?",
    "options": [
      "L1 norm: lambda * sum |w_j|",
      "L2 norm (squared): lambda * sum w_j^2",
      "Elastic Net combination: lambda1 * |w| + lambda2 * w^2",
      "Logarithmic barrier: -lambda * sum log(w_j)"
    ],
    "ans": 1,
    "exp": "Ridge regression adds the L2 penalty lambda * ||w||_2^2 = lambda * sum w_j^2. This shrinks weights smoothly towards zero without setting them exactly to zero (weight decay).",
    "uni": true,
    "unit": "Unit II",
    "topic": "Ridge Regression (L2)",
    "syllabus": "University Core"
  },
  {
    "id": 49,
    "part": 10,
    "chapter": 28,
    "diff": "Hard",
    "q": "Why does Lasso Regression (L1 regularization) produce sparse weight vectors (exact zeros for non-informative features)?",
    "options": [
      "Lasso uses a quadratic penalty that has a flat derivative near zero",
      "The L1 norm constraint boundary forms a sharp diamond (polytope) with sharp corners on the coordinate axes, where contours of the loss function frequently intersect",
      "Lasso sets the learning rate to zero for negative weights",
      "Lasso computes the exact inverse of non-diagonal elements"
    ],
    "ans": 1,
    "exp": "The L1 constraint region is a diamond with sharp vertices at axes where w_j = 0. Elliptical RSS loss contours tend to hit these corners first, driving unneeded feature weights to exactly 0 (automatic feature selection).",
    "uni": true,
    "unit": "Unit II",
    "topic": "Lasso Sparsity & Geometry",
    "syllabus": "University Core"
  },
  {
    "id": 50,
    "part": 10,
    "chapter": 29,
    "diff": "Hard",
    "q": "When multiple features are highly collinear (strongly correlated with each other), how do Ridge and Lasso behave differently?",
    "options": [
      "Ridge arbitrarily selects one feature and zeroes the others, while Lasso distributes weights equally",
      "Ridge shrinks collinear coefficients towards each other, distributing weights evenly; Lasso arbitrarily selects one feature and zeroes out the others",
      "Both models fail completely and produce NaN values",
      "Lasso retains all correlated features with amplified magnitudes"
    ],
    "ans": 1,
    "exp": "Under high multicollinearity, L2 Ridge distributes weights smoothly among all correlated features, reducing variance. L1 Lasso randomly picks one representative feature from the correlated cluster and zeros the rest.",
    "uni": true,
    "unit": "Unit II",
    "topic": "Ridge vs Lasso on Multicollinearity",
    "syllabus": "University Core"
  },
  {
    "id": 51,
    "part": 11,
    "chapter": 30,
    "diff": "Easy",
    "q": "In the biological neuron analogy, which biological structure corresponds to the input weights (w_i) in an artificial neural network?",
    "options": [
      "Soma (cell body)",
      "Synaptic junction / strength",
      "Axon hillock",
      "Myelin sheath"
    ],
    "ans": 1,
    "exp": "In biological neurons, dendrites receive signals, the soma aggregates them, and synapses modulate signal transmission strength \u2014 directly paralleled by synaptic weights (w_i) in artificial neurons.",
    "uni": true,
    "unit": "Unit III",
    "topic": "Biological vs Artificial Neuron",
    "syllabus": "University Core"
  },
  {
    "id": 52,
    "part": 11,
    "chapter": 30,
    "diff": "Medium",
    "q": "What was a key structural limitation of the original 1943 McCulloch-Pitts neuron model?",
    "options": [
      "It could only process continuous floating-point values",
      "It had fixed binary inputs and pre-determined unlearned weights without an automated training algorithm",
      "It required GPU hardware to compute matrix dot products",
      "It could not implement the logical AND operation"
    ],
    "ans": 1,
    "exp": "The McCulloch-Pitts neuron had binary inputs and fixed, hand-designed threshold weights. It lacked an automated learning rule to update weights from training data (which Frank Rosenblatt solved with the Perceptron in 1958).",
    "uni": true,
    "unit": "Unit III",
    "topic": "McCulloch-Pitts Limitations",
    "syllabus": "University Core"
  },
  {
    "id": 53,
    "part": 11,
    "chapter": 31,
    "diff": "Easy",
    "q": "The Perceptron Learning Algorithm updates weights upon an error according to which rule?",
    "options": [
      "w <- w + eta * (y - y_hat) * x",
      "w <- w - eta * (y - y_hat) * w",
      "w <- w / (1 + exp(-x))",
      "w <- (X^T X)^(-1) X^T y"
    ],
    "ans": 0,
    "exp": "Perceptron update rule: w_new = w_old + eta * (y - y_hat) * x. When the prediction is correct (y = y_hat), the error is zero and weights remain unchanged.",
    "uni": true,
    "unit": "Unit III",
    "topic": "Perceptron Learning Rule",
    "syllabus": "University Core"
  },
  {
    "id": 54,
    "part": 11,
    "chapter": 31,
    "diff": "Hard",
    "q": "The famous Perceptron Convergence Theorem guarantees that the Perceptron learning algorithm will converge in a finite number of steps provided that:",
    "options": [
      "The learning rate eta is initialized to exactly 1.0",
      "The training dataset is linearly separable",
      "The input data has been normalized using Z-score standardization",
      "The network has at least two hidden layers"
    ],
    "ans": 1,
    "exp": "Novikoff's Perceptron Convergence Theorem proves that if the training data is linearly separable with margin gamma > 0, the perceptron will find a separating hyperplane in at most (R / gamma)^2 updates.",
    "uni": true,
    "unit": "Unit III",
    "topic": "Perceptron Convergence Theorem",
    "syllabus": "University Core"
  },
  {
    "id": 55,
    "part": 11,
    "chapter": 31,
    "diff": "Medium",
    "q": "What critical limitation of single-layer Perceptrons was proven by Marvin Minsky and Seymour Papert in their 1969 book?",
    "options": [
      "Perceptrons cannot compute continuous linear regression",
      "Single-layer Perceptrons cannot learn non-linearly separable functions, such as the XOR logic gate",
      "Backpropagation cannot compute partial derivatives of non-convex functions",
      "Sigmoid activation functions suffer from exploding gradients"
    ],
    "ans": 1,
    "exp": "Minsky and Papert demonstrated mathematically that single-layer perceptrons can only form linear decision hyperplanes and therefore cannot solve non-linear problems like XOR. This triggered the first 'AI Winter'.",
    "uni": true,
    "unit": "Unit III",
    "topic": "Minsky-Papert XOR Limitation",
    "syllabus": "University Core"
  },
  {
    "id": 56,
    "part": 12,
    "chapter": 32,
    "diff": "Easy",
    "q": "How does a Multilayer Perceptron (MLP) overcome the XOR limitation of the single-layer perceptron?",
    "options": [
      "By removing all bias terms from the neurons",
      "By inserting one or more hidden layers with non-linear activation functions that transform feature space into a linearly separable representation",
      "By replacing gradient descent with the simplex algorithm",
      "By enforcing L1 regularization on the input weights"
    ],
    "ans": 1,
    "exp": "Hidden layers with non-linear activations perform non-linear coordinate transformations of the input space, warping the geometry such that previously non-separable points (like XOR) become linearly separable.",
    "uni": true,
    "unit": "Unit III",
    "topic": "Hidden Layers & XOR Resolution",
    "syllabus": "University Core"
  },
  {
    "id": 57,
    "part": 12,
    "chapter": 32,
    "diff": "Hard",
    "q": "What does the Universal Approximation Theorem (Cybenko 1989, Hornik 1991) state?",
    "options": [
      "A feedforward neural network with a single hidden layer and non-linear activations can approximate any continuous function on compact subsets of R^n to arbitrary precision, given sufficient hidden neurons",
      "Deep networks always achieve zero training error on any dataset in polynomial time",
      "Every neural network can be replaced by an equivalent linear model",
      "Gradient descent will always reach the global minimum in multilayer networks"
    ],
    "ans": 0,
    "exp": "The Universal Approximation Theorem proves that a single-hidden-layer feedforward network with non-linear activations is a universal approximator for any continuous function, though the required number of neurons may be exponential.",
    "uni": true,
    "unit": "Unit III",
    "topic": "Universal Approximation Theorem",
    "syllabus": "University Core"
  },
  {
    "id": 58,
    "part": 12,
    "chapter": 33,
    "diff": "Medium",
    "q": "Why did the Rectified Linear Unit (ReLU), f(z) = max(0, z), become the dominant activation function in deep networks over Sigmoid and Tanh?",
    "options": [
      "ReLU is bounded between 0 and 1, preventing numerical overflow",
      "ReLU has a constant derivative of 1.0 for all positive inputs, eliminating the vanishing gradient problem in deep hidden layers and computing much faster",
      "ReLU is continuously differentiable everywhere including at z = 0",
      "ReLU forces all negative weights to positive values"
    ],
    "ans": 1,
    "exp": "For Sigmoids and Tanh, saturation occurs for large inputs (|z| > 4) where derivatives approach 0. Multiplying small derivatives across many layers causes gradients to vanish. ReLU has d/dz = 1 for z > 0, sustaining backpropagation signals.",
    "uni": true,
    "unit": "Unit III",
    "topic": "ReLU vs Sigmoid & Vanishing Gradients",
    "syllabus": "University Core"
  },
  {
    "id": 59,
    "part": 12,
    "chapter": 33,
    "diff": "Hard",
    "q": "What is the 'Dying ReLU' problem and how does Leaky ReLU resolve it?",
    "options": [
      "Neurons output infinity; resolved by clipping gradients to 1.0",
      "Neurons whose inputs become negative consistently output 0 with derivative 0, permanently freezing their weights; Leaky ReLU adds a small non-zero slope (e.g. 0.01z) for z < 0",
      "Weights decay to zero due to L2 regularization; resolved by dropping hidden units",
      "Neurons oscillate between positive and negative states; resolved by batch normalization"
    ],
    "ans": 1,
    "exp": "If a neuron's activation falls into the negative regime for all training points, its gradient is 0 and it can never recover ('dead'). Leaky ReLU maintains a small positive slope alpha (e.g. 0.01) for z < 0, ensuring non-zero gradient flow.",
    "uni": true,
    "unit": "Unit III",
    "topic": "Dying ReLU & Leaky ReLU",
    "syllabus": "University Core"
  },
  {
    "id": 60,
    "part": 12,
    "chapter": 33,
    "diff": "Medium",
    "q": "For multi-class classification with K mutually exclusive classes, which output activation function and loss function pair is mathematically appropriate?",
    "options": [
      "Sigmoid activation with Mean Squared Error",
      "Softmax activation with Categorical Cross-Entropy Loss",
      "ReLU activation with Hinge Loss",
      "Tanh activation with Binary Cross-Entropy Loss"
    ],
    "ans": 1,
    "exp": "Softmax normalizes unnormalized logits into a valid probability distribution summing to 1.0 across K classes. Paired with Categorical Cross-Entropy -sum y_k log(p_k), it yields clean, stable gradients (p_k - y_k).",
    "uni": true,
    "unit": "Unit III",
    "topic": "Softmax & Categorical Cross-Entropy",
    "syllabus": "University Core"
  },
  {
    "id": 61,
    "part": 13,
    "chapter": 34,
    "diff": "Easy",
    "q": "In stochastic optimization, what is the key distinction between Batch Gradient Descent, Stochastic Gradient Descent (SGD), and Mini-Batch Gradient Descent?",
    "options": [
      "Batch uses 1 sample; SGD uses the full dataset; Mini-batch uses 32 samples",
      "Batch updates weights using the entire dataset per step; SGD uses a single sample; Mini-batch uses a small subset (e.g. 32-256 samples)",
      "Batch operates on GPUs; SGD operates on TPUs; Mini-batch operates on CPUs",
      "Batch is non-convex; SGD is convex; Mini-batch is linear"
    ],
    "ans": 1,
    "exp": "Batch evaluates the full dataset before updating; SGD updates after every individual sample (noisy but fast); Mini-batch balances computational vectorization on GPUs with gradient stability.",
    "uni": true,
    "unit": "Unit III",
    "topic": "Gradient Descent Taxonomy",
    "syllabus": "University Core"
  },
  {
    "id": 62,
    "part": 13,
    "chapter": 34,
    "diff": "Hard",
    "q": "How does the Momentum optimizer accelerate gradient descent and escape flat plateaus or saddle points?",
    "options": [
      "It dynamically computes second-order Hessian matrix inversions",
      "It accumulates an exponentially decaying moving average of past gradients (velocity) and continues moving in that direction",
      "It sets the learning rate to zero when gradients change sign",
      "It randomly perturbs weights using Gaussian noise at every iteration"
    ],
    "ans": 1,
    "exp": "Momentum adds a velocity vector v_t = gamma * v_{t-1} + eta * grad. This dampens oscillations in high-curvature ravines while accelerating progress along consistent gradient directions.",
    "uni": true,
    "unit": "Unit III",
    "topic": "Momentum Optimizer Mechanics",
    "syllabus": "University Core"
  },
  {
    "id": 63,
    "part": 13,
    "chapter": 34,
    "diff": "Hard",
    "q": "The Adam (Adaptive Moment Estimation) optimizer maintains moving averages of:",
    "options": [
      "Both the first raw moment (mean of gradients) and the second uncentered moment (variance of gradients)",
      "Only the maximum gradient encountered across all previous epochs",
      "The training loss and validation loss simultaneously",
      "The Euclidean distance between consecutive weight vectors"
    ],
    "ans": 0,
    "exp": "Adam combines Momentum (first moment m_t = beta1 * m_{t-1} + (1 - beta1) * g_t) and RMSprop (second moment v_t = beta2 * v_{t-1} + (1 - beta2) * g_t^2), applying bias corrections to adapt individual parameter learning rates.",
    "uni": true,
    "unit": "Unit III",
    "topic": "Adam Optimizer Moments",
    "syllabus": "University Core"
  },
  {
    "id": 64,
    "part": 13,
    "chapter": 35,
    "diff": "Medium",
    "q": "The Backpropagation algorithm in neural networks is fundamentally an efficient implementation of:",
    "options": [
      "The Simplex algorithm for linear inequalities",
      "The multivariate Calculus Chain Rule applied recursively on a directed acyclic computational graph",
      "Monte Carlo tree sampling across weight spaces",
      "Gauss-Jordan row elimination on activation matrices"
    ],
    "ans": 1,
    "exp": "Backpropagation calculates partial derivatives of the scalar loss with respect to all network weights by propagating error gradients backward from the output layer using the calculus chain rule.",
    "uni": true,
    "unit": "Unit III",
    "topic": "Backpropagation Chain Rule",
    "syllabus": "University Core"
  },
  {
    "id": 65,
    "part": 13,
    "chapter": 35,
    "diff": "Hard",
    "q": "In backpropagation through a dense layer with pre-activation z = W*a + b, if delta = dL/dz is the error gradient vector, what is the gradient with respect to the weight matrix dL/dW?",
    "options": [
      "delta * a^T",
      "delta^T * a",
      "W^T * delta",
      "delta / a"
    ],
    "ans": 0,
    "exp": "dL/dW = (dL/dz) * (dz/dW)^T = delta * a^T, where delta is the error signal at the current layer and a^T is the transpose of the incoming activations from the preceding layer.",
    "uni": true,
    "unit": "Unit III",
    "topic": "Weight Matrix Gradient Derivation",
    "syllabus": "University Core"
  },
  {
    "id": 66,
    "part": 14,
    "chapter": 36,
    "diff": "Medium",
    "q": "Given an input image of size 32x32, a convolutional filter of size 5x5, stride S = 1, and padding P = 0, what is the spatial size of the resulting feature map?",
    "options": [
      "32x32",
      "28x28",
      "27x27",
      "30x30"
    ],
    "ans": 1,
    "exp": "Output dimension O = floor((W - F + 2P) / S) + 1 = floor((32 - 5 + 0) / 1) + 1 = 27 + 1 = 28. Thus the output spatial shape is 28x28.",
    "uni": true,
    "unit": "Unit III",
    "topic": "CNN Output Spatial Dimension Arithmetic",
    "syllabus": "University Core"
  },
  {
    "id": 67,
    "part": 14,
    "chapter": 36,
    "diff": "Hard",
    "q": "What are the two primary structural inductive biases that make Convolutional Neural Networks (CNNs) far more parameter-efficient than Dense MLPs for images?",
    "options": [
      "Dropout and L1 Regularization",
      "Local Receptive Fields (sparse connectivity) and Weight Sharing (translation equivariance)",
      "Sigmoid activations and Batch Normalization",
      "Skip connections and Recurrent loops"
    ],
    "ans": 1,
    "exp": "CNNs exploit image structure via: (1) Local Receptive Fields (neurons only connect to local pixel patches), and (2) Shared Weights (the same convolution kernel scans across the entire image), ensuring translation equivariance with vastly fewer parameters.",
    "uni": true,
    "unit": "Unit III",
    "topic": "CNN Inductive Biases",
    "syllabus": "University Core"
  },
  {
    "id": 68,
    "part": 14,
    "chapter": 36,
    "diff": "Easy",
    "q": "What is the primary function of a Max Pooling layer in a CNN architecture?",
    "options": [
      "To increase the number of trainable weight parameters",
      "To downsample spatial dimensions, reduce computational load, and provide translation invariance",
      "To invert feature colors for contrast enhancement",
      "To compute categorical cross-entropy loss"
    ],
    "ans": 1,
    "exp": "Max pooling downsamples spatial resolution by taking the maximum value across a receptive window (e.g., 2x2 with stride 2). This reduces memory/computation and injects spatial translation invariance.",
    "uni": true,
    "unit": "Unit III",
    "topic": "Max Pooling Functionality",
    "syllabus": "University Core"
  },
  {
    "id": 69,
    "part": 15,
    "chapter": 37,
    "diff": "Medium",
    "q": "In a standard Recurrent Neural Network (RNN), the hidden state h_t at time step t is updated using:",
    "options": [
      "h_t = tanh(W_hh * h_{t-1} + W_xh * x_t + b_h)",
      "h_t = W_hh * h_{t-1} * x_t",
      "h_t = max(0, W_xh * x_t)",
      "h_t = (X^T X)^(-1) * x_t"
    ],
    "ans": 0,
    "exp": "Standard RNN hidden state formula: h_t = tanh(W_hh * h_{t-1} + W_xh * x_t + b_h), combining the previous memory h_{t-1} with current input x_t through learned transition weights.",
    "uni": true,
    "unit": "Unit III",
    "topic": "Recurrent Hidden State Equation",
    "syllabus": "University Core"
  },
  {
    "id": 70,
    "part": 15,
    "chapter": 37,
    "diff": "Hard",
    "q": "Why do vanilla RNNs struggle to learn long-range temporal dependencies in sequential data?",
    "options": [
      "They lack non-linear activation functions",
      "During Backpropagation Through Time (BPTT), repeated multiplication by the weight matrix W_hh across many time steps causes gradients to either exponentially vanish or explode",
      "They cannot process sequences of variable length",
      "They require all sequences to be strictly Markovian"
    ],
    "ans": 1,
    "exp": "BPTT involves Jacobians dh_t/dh_k = product_{j=k+1}^t (W_hh^T * diag(1 - tanh^2)). If the largest eigenvalue of W_hh is < 1, gradients decay exponentially to zero, preventing learning across distant tokens.",
    "uni": true,
    "unit": "Unit III",
    "topic": "Vanishing Gradients in BPTT",
    "syllabus": "University Core"
  },
  {
    "id": 71,
    "part": 15,
    "chapter": 38,
    "diff": "Hard",
    "q": "In an LSTM (Long Short-Term Memory) cell, which gate is responsible for deciding what fraction of the old cell state C_{t-1} should be erased?",
    "options": [
      "Input Gate (i_t)",
      "Forget Gate (f_t)",
      "Output Gate (o_t)",
      "Modulation Gate (g_t)"
    ],
    "ans": 1,
    "exp": "The Forget Gate f_t = sigma(W_f * [h_{t-1}, x_t] + b_f) produces values between 0 and 1. Multiplying f_t * C_{t-1} element-wise determines how much past context is preserved or cleared.",
    "uni": true,
    "unit": "Unit III",
    "topic": "LSTM Forget Gate Function",
    "syllabus": "University Core"
  },
  {
    "id": 72,
    "part": 15,
    "chapter": 38,
    "diff": "Hard",
    "q": "What structural innovation allows LSTMs to preserve gradients and avoid vanishing gradients across hundreds of time steps?",
    "options": [
      "The Linear Cell State highway (Constant Error Carousel) where updates are additive (C_t = f_t * C_{t-1} + i_t * C~_t) rather than purely multiplicative",
      "Replacing all Sigmoid gates with Softmax functions",
      "Removing the recurrent loop and processing all tokens in parallel",
      "Enforcing all weight matrices to be strictly symmetric"
    ],
    "ans": 0,
    "exp": "The cell state C_t serves as an uninterrupted linear highway where information and error gradients flow via additive operations (dC_t/dC_{t-1} contains f_t), bypassing the multiplicative vanishing gradient trap of vanilla RNNs.",
    "uni": true,
    "unit": "Unit III",
    "topic": "Constant Error Carousel & Cell State",
    "syllabus": "University Core"
  },
  {
    "id": 73,
    "part": 15,
    "chapter": 38,
    "diff": "Medium",
    "q": "How does the Gated Recurrent Unit (GRU) differ architecturally from an LSTM?",
    "options": [
      "GRU has 4 gates instead of 3 gates",
      "GRU merges the cell state and hidden state into a single state, and uses 2 gates (Reset and Update) instead of 3 gates, making it more computationally lightweight",
      "GRU can only be applied to audio data, not text",
      "GRU eliminates the activation function completely"
    ],
    "ans": 1,
    "exp": "Cho et al. (2014) introduced GRU, which merges cell state C_t and hidden state h_t into a single vector and uses only 2 gates (Update gate z_t and Reset gate r_t), reducing parameter count while retaining long-range memory.",
    "uni": true,
    "unit": "Unit III",
    "topic": "LSTM vs GRU Architecture",
    "syllabus": "University Core"
  },
  {
    "id": 74,
    "part": 16,
    "chapter": 39,
    "diff": "Medium",
    "q": "What is the purpose of the 'Dropout' regularization technique during neural network training?",
    "options": [
      "To drop the learning rate to zero at the end of training",
      "To randomly deactivate a fraction p of hidden neurons at each training iteration, preventing co-adaptation of features and acting as an ensemble of subnetworks",
      "To discard outliers from the input training dataset",
      "To prune weights permanently to reduce model file size"
    ],
    "ans": 1,
    "exp": "Srivastava et al. (2014): Dropout randomly sets a subset of neuron activations to 0 with probability p during training. This forces neurons to learn robust features independently without relying on specific neighboring units.",
    "uni": true,
    "unit": "Unit III",
    "topic": "Dropout Regularization",
    "syllabus": "University Core"
  },
  {
    "id": 75,
    "part": 16,
    "chapter": 39,
    "diff": "Hard",
    "q": "Batch Normalization normalizes activations across a mini-batch during training primarily to:",
    "options": [
      "Convert all activation values to binary digits",
      "Reduce internal covariate shift, stabilize layer input distributions, and allow higher learning rates",
      "Prevent weights from being stored in GPU cache",
      "Replace the need for backpropagation"
    ],
    "ans": 1,
    "exp": "Batch Normalization standardizes each layer's pre-activations to zero mean and unit variance across the mini-batch, scaling and shifting with learnable parameters gamma and beta to accelerate convergence and smooth the loss landscape.",
    "uni": true,
    "unit": "Unit III",
    "topic": "Batch Normalization Mechanics",
    "syllabus": "University Core"
  },
  {
    "id": 76,
    "part": 17,
    "chapter": 40,
    "diff": "Easy",
    "q": "A Markov Decision Process (MDP) is formally defined by which mathematical 5-tuple?",
    "options": [
      "(S, A, P, R, gamma)",
      "(V, E, W, C, delta)",
      "(X, Y, W, b, eta)",
      "(Q, Sigma, delta, q0, F)"
    ],
    "ans": 0,
    "exp": "An MDP is formally defined by (S, A, P, R, gamma): State space S, Action space A, Transition probability function P(s'|s,a), Reward function R(s,a,s'), and Discount factor gamma in [0, 1).",
    "uni": true,
    "unit": "Unit IV",
    "topic": "MDP Formal Definition",
    "syllabus": "University Core"
  },
  {
    "id": 77,
    "part": 17,
    "chapter": 40,
    "diff": "Medium",
    "q": "What does the 'Markov Property' state regarding state transitions in sequential decision processes?",
    "options": [
      "The next state depends on the entire historical sequence of past states and actions",
      "The future state is conditionally independent of all past states and actions given the current state and action: P(S_{t+1} | S_t, A_t, ..., S_0) = P(S_{t+1} | S_t, A_t)",
      "All states must yield identical reward values",
      "The policy must be stochastic and time-variant"
    ],
    "ans": 1,
    "exp": "The Markov Property asserts that 'the future is independent of the past given the present' \u2014 the current state contains all relevant historical information necessary for predicting future transitions.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "The Markov Property",
    "syllabus": "University Core"
  },
  {
    "id": 78,
    "part": 17,
    "chapter": 40,
    "diff": "Hard",
    "q": "The Bellman Optimality Equation for the optimal state-value function V*(s) is formulated as:",
    "options": [
      "V*(s) = max_a sum_{s'} P(s'|s,a) [ R(s,a,s') + gamma * V*(s') ]",
      "V*(s) = sum_a pi(a|s) [ R(s,a) + V*(s) ]",
      "V*(s) = min_a [ R(s,a) - gamma * V*(s') ]",
      "V*(s) = gamma * max_s V*(s)"
    ],
    "ans": 0,
    "exp": "The Bellman Optimality Equation states that the value of a state under an optimal policy equals the expected immediate reward plus discounted optimal future value, maximized over all possible actions.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "Bellman Optimality Equation",
    "syllabus": "University Core"
  },
  {
    "id": 79,
    "part": 17,
    "chapter": 40,
    "diff": "Medium",
    "q": "Why is a discount factor gamma in [0, 1) applied to future rewards in an MDP with infinite horizons?",
    "options": [
      "To prevent cumulative rewards from diverging to infinity and mathematically reflect preference for immediate over delayed returns",
      "To force all rewards to be strictly negative",
      "To convert continuous state spaces into discrete grids",
      "To eliminate the need for an action space"
    ],
    "ans": 0,
    "exp": "Discounting ensures the infinite geometric series sum_{k=0}^infinity gamma^k R_{t+k+1} converges to a finite value whenever rewards are bounded, while modeling economic time preference and horizon uncertainty.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "Discount Factor Role",
    "syllabus": "University Core"
  },
  {
    "id": 80,
    "part": 17,
    "chapter": 41,
    "diff": "Hard",
    "q": "What is the key update rule for Tabular Q-Learning with learning rate alpha and discount factor gamma?",
    "options": [
      "Q(s, a) <- Q(s, a) + alpha * [ R + gamma * max_{a'} Q(s', a') - Q(s, a) ]",
      "Q(s, a) <- Q(s, a) + alpha * [ R + gamma * Q(s', a_{t+1}) - Q(s, a) ]",
      "Q(s, a) <- R + gamma * Q(s, a)",
      "Q(s, a) <- alpha * max_a Q(s, a)"
    ],
    "ans": 0,
    "exp": "Q-Learning update: Q(s, a) <- Q(s, a) + alpha * TD_error, where the TD target uses max_{a'} Q(s', a') regardless of what action is actually taken next by the exploration policy.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "Q-Learning Update Rule",
    "syllabus": "University Core"
  },
  {
    "id": 81,
    "part": 17,
    "chapter": 41,
    "diff": "Hard",
    "q": "Why is Q-Learning classified as an 'Off-Policy' algorithm, whereas SARSA is classified as 'On-Policy'?",
    "options": [
      "Q-Learning learns the optimal action-value function Q* using the greedy action max_{a'} Q(s', a'), while SARSA uses the action a' actually selected by the current epsilon-greedy behavior policy",
      "Q-Learning does not use rewards, while SARSA requires reward signals",
      "Q-Learning can only be trained offline on disk, while SARSA trains in RAM",
      "SARSA uses neural networks, while Q-learning is purely tabular"
    ],
    "ans": 0,
    "exp": "Off-policy means the target policy being evaluated and improved (greedy policy max_{a'} Q(s', a')) differs from the behavior policy generating the experience (e.g., epsilon-greedy). SARSA evaluates the actual behavior policy (s, a, r, s', a').",
    "uni": true,
    "unit": "Unit IV",
    "topic": "On-Policy vs Off-Policy RL",
    "syllabus": "University Core"
  },
  {
    "id": 82,
    "part": 17,
    "chapter": 41,
    "diff": "Medium",
    "q": "In reinforcement learning exploration strategies, what does an epsilon-greedy policy do?",
    "options": [
      "Always selects the action with the lowest expected reward",
      "With probability (1 - epsilon) selects the greedy action with highest Q(s,a), and with probability epsilon selects an action uniformly at random",
      "Stops training whenever an obstacle is encountered",
      "Calculates the exact gradient of the value function"
    ],
    "ans": 1,
    "exp": "Epsilon-greedy balances exploration and exploitation: it exploits current knowledge by picking argmax_a Q(s,a) with probability 1 - epsilon, while exploring random actions with probability epsilon to discover potentially superior paths.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "Epsilon-Greedy Exploration Strategy",
    "syllabus": "University Core"
  },
  {
    "id": 83,
    "part": 17,
    "chapter": 41,
    "diff": "Hard",
    "q": "In Temporal Difference (TD) learning, the quantity delta_t = R_{t+1} + gamma * V(S_{t+1}) - V(S_t) is called the:",
    "options": [
      "Advantage coefficient",
      "Temporal Difference (TD) Error",
      "Bellman divergence",
      "Eligibility trace"
    ],
    "ans": 1,
    "exp": "The TD Error delta_t represents the difference between the updated one-step lookahead estimate (R_{t+1} + gamma * V(S_{t+1})) and the previous estimate V(S_t).",
    "uni": true,
    "unit": "Unit IV",
    "topic": "Temporal Difference Error",
    "syllabus": "University Core"
  },
  {
    "id": 84,
    "part": 17,
    "chapter": 42,
    "diff": "Hard",
    "q": "What is the primary advantage of Policy Gradient methods (e.g. REINFORCE) over value-based methods (e.g. Q-Learning)?",
    "options": [
      "They completely eliminate the need for discount factor gamma",
      "They can naturally optimize parameterized stochastic policies and handle high-dimensional or continuous action spaces without computing a max over all actions",
      "They have zero variance in gradient estimation",
      "They never require interaction with the environment"
    ],
    "ans": 1,
    "exp": "Value-based methods require finding argmax_a Q(s,a), which is intractable in continuous action spaces (e.g., robotic torque control). Policy gradients directly parameterize pi_theta(a|s) and can learn stochastic policies.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "Policy Gradients vs Value-Based RL",
    "syllabus": "University Core"
  },
  {
    "id": 85,
    "part": 17,
    "chapter": 42,
    "diff": "Hard",
    "q": "In the REINFORCE policy gradient algorithm, why is a baseline function b(s) subtracted from the return G_t in the gradient update grad_theta log pi_theta(a|s) * (G_t - b(s))?",
    "options": [
      "To eliminate bias in the gradient estimate",
      "To reduce the variance of the gradient estimator without introducing any mathematical bias",
      "To ensure all returns are strictly positive",
      "To invert the policy distribution"
    ],
    "ans": 1,
    "exp": "Subtracting a state-dependent baseline b(s) leaves the expected gradient mathematically unchanged (unbiased) because E[grad log pi * b(s)] = 0, but drastically dampens variance, accelerating convergence.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "Baseline Subtraction in Policy Gradients",
    "syllabus": "University Core"
  },
  {
    "id": 86,
    "part": 18,
    "chapter": 43,
    "diff": "Easy",
    "q": "In NLP text preprocessing, what is the key difference between Stemming and Lemmatization?",
    "options": [
      "Stemming uses dictionary lookup and morphological analysis to return valid root words (lemmas); Lemmatization uses crude heuristic rules that chop word affixes",
      "Stemming applies crude heuristic string chopping to remove suffixes (often producing non-words like 'studi'); Lemmatization uses morphological vocabularies and part-of-speech tags to produce valid base dictionary words",
      "Stemming is only for Python, while Lemmatization is for Java",
      "Stemming computes vector embeddings, while Lemmatization tokenizes characters"
    ],
    "ans": 1,
    "exp": "Stemming (e.g., Porter stemmer) cuts suffixes heuristically ('running' -> 'run', 'studies' -> 'studi'). Lemmatization (e.g., WordNet) uses morphological analysis and POS tags to return valid lemmas ('better' -> 'good', 'studies' -> 'study').",
    "uni": true,
    "unit": "Unit IV",
    "topic": "Stemming vs Lemmatization",
    "syllabus": "University Core"
  },
  {
    "id": 87,
    "part": 18,
    "chapter": 43,
    "diff": "Medium",
    "q": "In TF-IDF text vectorization, the Inverse Document Frequency (IDF) of a term t in a corpus of N documents is calculated as:",
    "options": [
      "IDF(t) = log(N / (DF(t) + 1))",
      "IDF(t) = N * DF(t)",
      "IDF(t) = DF(t) / N",
      "IDF(t) = exp(N - DF(t))"
    ],
    "ans": 0,
    "exp": "IDF measures term specificity: IDF(t) = log(N / (1 + DF(t))). Terms appearing across almost all documents (like 'the', 'is') receive near-zero IDF, downweighting ubiquitous words.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "TF-IDF Formulation",
    "syllabus": "University Core"
  },
  {
    "id": 88,
    "part": 18,
    "chapter": 43,
    "diff": "Hard",
    "q": "What are the two training architectures introduced in the Word2Vec paper (Mikolov et al., 2013)?",
    "options": [
      "Encoder-Decoder and Transformer",
      "Continuous Bag of Words (CBOW) and Continuous Skip-Gram",
      "Convolutional Filter and Recurrent Highway",
      "Forward RNN and Bidirectional LSTM"
    ],
    "ans": 1,
    "exp": "Word2Vec proposed: (1) CBOW, which predicts the current center word from surrounding context words, and (2) Skip-Gram, which predicts context words given the center word.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "Word2Vec Architectures (CBOW vs Skip-Gram)",
    "syllabus": "University Core"
  },
  {
    "id": 89,
    "part": 18,
    "chapter": 43,
    "diff": "Medium",
    "q": "Why is the Naive Bayes classifier called 'Naive'?",
    "options": [
      "Because it does not use mathematical probabilities",
      "Because it naively assumes that all input features (words) are conditionally independent of each other given the class label",
      "Because it only works on tiny toy datasets",
      "Because it cannot handle text data"
    ],
    "ans": 1,
    "exp": "The 'naive' assumption is conditional feature independence: P(x_1, x_2, ..., x_d | C) = product_{i=1}^d P(x_i | C). Despite ignoring word co-occurrence correlations, it performs surprisingly well for text classification.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "Naive Bayes Independence Assumption",
    "syllabus": "University Core"
  },
  {
    "id": 90,
    "part": 19,
    "chapter": 44,
    "diff": "Medium",
    "q": "What prevents a standard Autoencoder with an unconstrained bottleneck layer from simply learning the trivial identity function?",
    "options": [
      "Using Sigmoid activation on the input",
      "Constraining the bottleneck latent space dimension to be significantly smaller than the input dimension (undercomplete autoencoder)",
      "Setting the learning rate to zero",
      "Adding a softmax layer at the output"
    ],
    "ans": 1,
    "exp": "In an undercomplete autoencoder, bottleneck dimension d_z << d_x forces the encoder to compress data into a low-dimensional manifold, discarding noise and preserving only salient latent factors of variation.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "Autoencoder Bottleneck Compression",
    "syllabus": "University Core"
  },
  {
    "id": 91,
    "part": 19,
    "chapter": 44,
    "diff": "Hard",
    "q": "In Variational Autoencoders (VAEs), how does the 'Reparameterization Trick' allow backpropagation through stochastic latent variables?",
    "options": [
      "By replacing all random variables with constant zeros",
      "By decomposing the latent vector as z = mu + sigma (*) epsilon, where epsilon ~ N(0, I) is an auxiliary independent noise vector, pushing stochasticity outside the computational graph",
      "By using Monte Carlo tree search instead of gradient descent",
      "By calculating derivatives using numerical finite differences"
    ],
    "ans": 1,
    "exp": "Sampling z ~ N(mu, sigma^2) directly has non-differentiable stochastic nodes. The reparameterization trick rewrites z = mu(x) + sigma(x) (*) epsilon with epsilon ~ N(0, I), allowing deterministic gradients dL/dmu and dL/dsigma.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "VAE Reparameterization Trick",
    "syllabus": "University Core"
  },
  {
    "id": 92,
    "part": 19,
    "chapter": 44,
    "diff": "Hard",
    "q": "The loss function of a Variational Autoencoder (VAE) consists of which two components?",
    "options": [
      "Mean Squared Error and Hinge Loss",
      "Reconstruction Loss (e.g. MSE/BCE) plus the Kullback-Leibler (KL) Divergence between the approximate posterior q(z|x) and prior p(z)",
      "Binary cross-entropy and L1 weight penalty",
      "Discriminator loss and Generator loss"
    ],
    "ans": 1,
    "exp": "The VAE Evidence Lower Bound (ELBO) objective balances: (1) Reconstruction loss (how well decoded z recovers input x), and (2) KL Divergence D_KL(q_phi(z|x) || p(z)), which regularizes the latent space towards a standard normal N(0, I).",
    "uni": true,
    "unit": "Unit IV",
    "topic": "VAE Loss & KL Divergence",
    "syllabus": "University Core"
  },
  {
    "id": 93,
    "part": 19,
    "chapter": 45,
    "diff": "Medium",
    "q": "In a Generative Adversarial Network (GAN), the Generator G and Discriminator D are trained in a two-player Minimax game given by:",
    "options": [
      "min_G max_D V(D, G) = E_{x~p_data}[log D(x)] + E_{z~p_z}[log(1 - D(G(z)))]",
      "max_G min_D V(D, G) = E[D(x) - G(z)]",
      "min_{D, G} [ MSE(x, G(z)) + CrossEntropy(D(x)) ]",
      "max_G max_D [ log D(x) * log G(z) ]"
    ],
    "ans": 0,
    "exp": "Goodfellow et al. (2014) minimax game: D maximizes the probability of assigning correct labels to real and generated samples, while G minimizes log(1 - D(G(z))) to fool D into classifying generated fakes as real.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "GAN Minimax Objective Formulation",
    "syllabus": "University Core"
  },
  {
    "id": 94,
    "part": 19,
    "chapter": 45,
    "diff": "Hard",
    "q": "What is 'Mode Collapse' in the context of GAN training?",
    "options": [
      "The discriminator's weights explode to infinity",
      "The generator discovers a small subset of outputs that fool the discriminator and repeatedly produces only those few samples, ignoring the full diversity of the true data distribution",
      "The loss function becomes strictly convex",
      "The learning rate decays to zero before convergence"
    ],
    "ans": 1,
    "exp": "Mode collapse occurs when Generator G maps diverse latent vectors z to only a single or few distinct outputs ('modes') that fool D, failing to represent the complete variety and distribution of training data.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "GAN Mode Collapse",
    "syllabus": "University Core"
  },
  {
    "id": 95,
    "part": 19,
    "chapter": 45,
    "diff": "Hard",
    "q": "At theoretical global Nash equilibrium in a standard GAN, what is the output of the optimal discriminator D*(x) for any sample?",
    "options": [
      "D*(x) = 1.0 (all samples are real)",
      "D*(x) = 0.0 (all samples are fake)",
      "D*(x) = 0.5 (the discriminator cannot distinguish generated samples from real samples)",
      "D*(x) fluctuates between -1 and +1 indefinitely"
    ],
    "ans": 2,
    "exp": "At the global optimum, the generator's distribution p_g matches the true data distribution p_data everywhere (p_g = p_data). Therefore, D*(x) = p_data(x) / (p_data(x) + p_g(x)) = 1/2 = 0.5.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "GAN Nash Equilibrium & Optimal Discriminator",
    "syllabus": "University Core"
  },
  {
    "id": 96,
    "part": 20,
    "chapter": 46,
    "diff": "Medium",
    "q": "In algorithmic fairness, what does 'Demographic Parity' (Statistical Parity) require?",
    "options": [
      "The model must have identical error rates across all classes",
      "The acceptance rate (positive prediction probability P(Y_hat = 1)) must be equal across all protected demographic groups (e.g. gender, race)",
      "Every individual must receive an identical raw prediction score",
      "Training data must contain equal numbers of samples for all features"
    ],
    "ans": 1,
    "exp": "Demographic Parity requires P(Y_hat = 1 | A = a) = P(Y_hat = 1 | A = b) for sensitive attributes A. It ensures equal selection rates across groups regardless of historical base rates.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "Demographic Parity Definition",
    "syllabus": "University Core"
  },
  {
    "id": 97,
    "part": 20,
    "chapter": 46,
    "diff": "Hard",
    "q": "How does 'Equalized Odds' differ from Demographic Parity in evaluating fairness?",
    "options": [
      "Equalized Odds requires that both the True Positive Rate (TPR) and False Positive Rate (FPR) be equal across all protected demographic groups given the true label Y",
      "Equalized Odds ignores protected attributes completely",
      "Equalized Odds only applies to unsupervised clustering algorithms",
      "Equalized Odds mandates that the model weights are strictly non-negative"
    ],
    "ans": 0,
    "exp": "Hardt et al. (2016): Equalized Odds conditions on true outcome Y, requiring P(Y_hat = 1 | A=a, Y=y) = P(Y_hat = 1 | A=b, Y=y) for y in {0, 1}. This ensures equal TPR and equal FPR across demographic groups.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "Equalized Odds vs Demographic Parity",
    "syllabus": "University Core"
  },
  {
    "id": 98,
    "part": 21,
    "chapter": 47,
    "diff": "Hard",
    "q": "In AI for Healthcare systems, why is Federated Learning particularly valuable for training diagnostic models across multiple hospital networks?",
    "options": [
      "It centralizes all patient electronic health records in an open public repository",
      "It trains models locally on hospital servers and aggregates only model weight updates centrally, preserving patient HIPAA data privacy and security",
      "It eliminates the need for physician annotations",
      "It guarantees 100% accuracy on rare medical diseases"
    ],
    "ans": 1,
    "exp": "Federated learning sends model parameters to decentralized client hospital servers, trains on private patient data locally, and aggregates only encrypted gradient updates at a central coordinator, preserving patient confidentiality.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "Federated Learning in Healthcare",
    "syllabus": "University Core"
  },
  {
    "id": 99,
    "part": 21,
    "chapter": 48,
    "diff": "Medium",
    "q": "In Autonomous Vehicles, why is 'Sensor Fusion' (combining Cameras, LiDAR, and Radar) essential for the perception subsystem?",
    "options": [
      "Each sensor modality has complementary physics: cameras provide dense visual semantics and color, LiDAR delivers accurate 3D spatial geometry, and Radar operates reliably in rain, fog, and measures direct Doppler velocity",
      "Using multiple sensors reduces electrical battery consumption in electric vehicles",
      "Sensor fusion replaces the need for a central vehicle computing unit",
      "It eliminates the need for GPS navigation satellites"
    ],
    "ans": 0,
    "exp": "No single sensor is sufficient: cameras fail in darkness/glare; LiDAR degrades in heavy fog/snow and lacks color; Radar penetrates adverse weather and measures direct velocity but has coarse resolution. Sensor fusion fuses their strengths.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "Sensor Fusion in Autonomous Vehicles",
    "syllabus": "University Core"
  },
  {
    "id": 100,
    "part": 22,
    "chapter": 50,
    "diff": "Medium",
    "q": "When architecting an end-to-end Machine Learning system, which phenomenon describes the performance degradation of a deployed model caused by changes in the statistical relationship between input features X and target labels Y over time?",
    "options": [
      "Data Drift (Covariate Shift)",
      "Concept Drift",
      "Gradient Explosion",
      "Over-regularization"
    ],
    "ans": 1,
    "exp": "Concept Drift occurs when the conditional distribution P(Y | X) changes over time (the underlying concept changes, e.g. consumer purchasing behavior changes post-pandemic), requiring continuous model retraining and monitoring.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "Concept Drift vs Data Drift in MLOps",
    "syllabus": "University Core"
  }
];
