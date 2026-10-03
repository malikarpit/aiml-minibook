// AI & Machine Learning MiniBook - Question Bank with University Syllabus Mapping
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
    "id": 3,
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
    "id": 4,
    "part": 2,
    "chapter": 7,
    "diff": "Hard",
    "q": "For A* Tree Search to be guaranteed optimal, what property must the heuristic function h(n) satisfy?",
    "options": [
      "Monotonicity / Consistency only",
      "Admissibility (never overestimating the true cost to reach the goal)",
      "It must equal the exact shortest path distance h*(n)",
      "It must be non-negative and strictly decreasing"
    ],
    "ans": 1,
    "exp": "For Tree-Search A*, admissibility (h(n) <= h*(n)) is sufficient for optimality. For Graph-Search A* (with an explored set), consistency (monotonicity) is required to guarantee optimality without reopening closed nodes.",
    "uni": true,
    "unit": "Unit I",
    "topic": "Informed Search (A* Search)",
    "syllabus": "University Core"
  },
  {
    "id": 5,
    "part": 4,
    "chapter": 11,
    "diff": "Medium",
    "q": "In Alpha-Beta pruning, when does a beta-cutoff occur at a MIN node?",
    "options": [
      "When the current beta value is strictly greater than alpha",
      "When the current beta value becomes less than or equal to the alpha value inherited from ancestors",
      "When alpha reaches positive infinity",
      "When both alpha and beta equal zero"
    ],
    "ans": 1,
    "exp": "A beta cutoff occurs at a MIN node when its value v <= alpha. Since MAX already has a better choice with value alpha elsewhere, MAX will never choose the branch leading to this MIN node.",
    "uni": true,
    "unit": "Unit I",
    "topic": "Game Playing (Alpha-Beta Pruning)",
    "syllabus": "University Core"
  },
  {
    "id": 6,
    "part": 6,
    "chapter": 17,
    "diff": "Medium",
    "q": "A high-variance machine learning model typically exhibits which of the following behaviors?",
    "options": [
      "High training error and high test error (Underfitting)",
      "Low training error and significantly higher test error (Overfitting)",
      "Consistently low error on both training and unseen data",
      "Inability to fit even simple linear relationships"
    ],
    "ans": 1,
    "exp": "High variance means the model is overly sensitive to fluctuations and noise in the training set, memorizing training instances (low train error) but failing to generalize to unseen test data (high test error).",
    "uni": true,
    "unit": "Unit II",
    "topic": "Bias-Variance Trade-off",
    "syllabus": "University Core"
  },
  {
    "id": 7,
    "part": 8,
    "chapter": 23,
    "diff": "Medium",
    "q": "In Decision Tree learning, when is the Shannon Entropy of a binary classification node at its maximum value of 1.0 bit?",
    "options": [
      "When all training instances in the node belong to a single class (pure node)",
      "When the training instances are equally split between both classes (50% / 50%)",
      "When the node has reached the maximum allowed tree depth",
      "When the Gini Impurity of the node is exactly 0.0"
    ],
    "ans": 1,
    "exp": "Shannon Entropy H(S) = -p*log2(p) - (1-p)*log2(1-p). When p=0.5, H(S) = -0.5(-1) - 0.5(-1) = 1.0 bit, representing maximum uncertainty and disorder. For a pure node (p=1 or p=0), H(S) = 0.",
    "uni": true,
    "unit": "Unit II",
    "topic": "Decision Trees (Entropy & Information Gain)",
    "syllabus": "University Core"
  },
  {
    "id": 8,
    "part": 9,
    "chapter": 24,
    "diff": "Medium",
    "q": "In a medical diagnosis screening where 99% of patients are healthy and 1% have a severe disease, why is raw classification accuracy an untrustworthy metric?",
    "options": [
      "Because accuracy cannot be calculated on binary classification tasks",
      "Because a trivial model predicting 'Healthy' for everyone achieves 99% accuracy while missing 100% of sick patients",
      "Because accuracy is mathematically identical to False Positive Rate",
      "Because accuracy requires calculating the inverse of the feature covariance matrix"
    ],
    "ans": 1,
    "exp": "This is the classic Accuracy Paradox in class-imbalanced datasets. High accuracy masks complete failure on the minority class. In medical screening, Recall (Sensitivity) and F1-Score are vital to avoid missed positive diagnoses (Type II errors).",
    "uni": true,
    "unit": "Unit II",
    "topic": "Model Evaluation (Accuracy Paradox & Confusion Matrix)",
    "syllabus": "University Core"
  },
  {
    "id": 9,
    "part": 9,
    "chapter": 25,
    "diff": "Hard",
    "q": "What quantities are plotted on the axes of a Receiver Operating Characteristic (ROC) curve?",
    "options": [
      "Precision on the x-axis and Recall on the y-axis",
      "False Positive Rate (1 - Specificity) on the x-axis and True Positive Rate (Recall) on the y-axis",
      "True Positive Rate on the x-axis and False Positive Rate on the y-axis",
      "Training Loss on the x-axis and Validation Loss on the y-axis"
    ],
    "ans": 1,
    "exp": "An ROC curve plots False Positive Rate (FPR = FP / (FP + TN) = 1 - Specificity) on the horizontal x-axis and True Positive Rate (TPR = Recall = TP / (TP + FN)) on the vertical y-axis across all classification probability thresholds.",
    "uni": true,
    "unit": "Unit II",
    "topic": "Classification Metrics (ROC & AUC)",
    "syllabus": "University Core"
  },
  {
    "id": 10,
    "part": 10,
    "chapter": 29,
    "diff": "Hard",
    "q": "How does Lasso Regression (L1 regularization) differ fundamentally from Ridge Regression (L2 regularization) in terms of parameter estimates?",
    "options": [
      "Lasso penalizes the squared L2 norm, whereas Ridge penalizes absolute weights",
      "Lasso can shrink coefficients exactly to zero, performing automatic feature selection, whereas Ridge shrinks coefficients asymptotically toward zero",
      "Ridge eliminates irrelevant features completely, whereas Lasso retains all features",
      "Lasso cannot be used when the number of features exceeds the number of samples"
    ],
    "ans": 1,
    "exp": "The geometry of the L1 penalty (|w|) has sharp corners on the coordinate axes, causing the least-squares loss contours to hit corners where one or more coordinates equal zero, driving irrelevant weights strictly to 0 (sparsity). Ridge (||w||^2) has smooth circular contours, shrinking weights without setting them strictly to zero.",
    "uni": true,
    "unit": "Unit II",
    "topic": "Regularization (Ridge vs Lasso)",
    "syllabus": "University Core"
  },
  {
    "id": 11,
    "part": 11,
    "chapter": 31,
    "diff": "Medium",
    "q": "Why is a single-layer perceptron fundamentally incapable of learning the XOR logic function?",
    "options": [
      "The perceptron learning algorithm does not converge on non-zero bias inputs",
      "XOR is not linearly separable, and a single perceptron can only define a linear hyperplane boundary",
      "The step activation function has an undefined derivative at zero",
      "A perceptron requires continuous inputs and cannot process binary values"
    ],
    "ans": 1,
    "exp": "A single perceptron computes a single linear decision boundary w1*x1 + w2*x2 + b = 0. In the XOR truth table, (0,0) and (1,1) produce 0, while (0,1) and (1,0) produce 1. No single straight line can separate these two classes (as proved by Minsky & Papert in 1969). A multi-layer perceptron with at least one hidden layer is required.",
    "uni": true,
    "unit": "Unit III",
    "topic": "Perceptron & Linear Separability (XOR Barrier)",
    "syllabus": "University Core"
  },
  {
    "id": 12,
    "part": 12,
    "chapter": 33,
    "diff": "Medium",
    "q": "What is the primary mathematical reason for the 'Vanishing Gradient Problem' when training deep networks with Sigmoid activation functions?",
    "options": [
      "The sigmoid function is unbounded and causes weight explosions",
      "The maximum value of the sigmoid derivative sigma'(z) is only 0.25, so multiplying many such derivatives across layers causes gradients to decay exponentially toward zero",
      "The sigmoid function is non-differentiable at negative values",
      "The cross-entropy loss function cancels out the sigmoid gradient"
    ],
    "ans": 1,
    "exp": "For the Sigmoid function, the derivative is sigma'(z) = sigma(z)*(1 - sigma(z)), which achieves its maximum of 0.25 at z = 0. When backpropagating through L layers, the chain rule multiplies L derivative terms (each <= 0.25), shrinking the gradient exponentially like (0.25)^L. ReLU resolves this because its derivative is 1 for all positive activations.",
    "uni": true,
    "unit": "Unit III",
    "topic": "Activation Functions & Vanishing Gradients",
    "syllabus": "University Core"
  },
  {
    "id": 13,
    "part": 13,
    "chapter": 35,
    "diff": "Hard",
    "q": "In the standard backpropagation algorithm for an MLP, how is the error term delta_j of a hidden neuron j computed from the error terms delta_k of the subsequent layer?",
    "options": [
      "delta_j = sum_k (delta_k * w_kj) * f'(z_j)",
      "delta_j = f'(z_j) / sum_k delta_k",
      "delta_j = sum_k (delta_k + w_kj) * z_j",
      "delta_j = (y_j - y_hat_j) * f'(z_j)"
    ],
    "ans": 0,
    "exp": "By the multivariate chain rule, dL/dz_j = sum_k (dL/dz_k * dz_k/da_j) * da_j/dz_j. Since dz_k/da_j = w_kj and da_j/dz_j = f'(z_j), we have delta_j = [sum_k delta_k * w_kj] * f'(z_j). The error is propagated backward through the transposed weight matrix.",
    "uni": true,
    "unit": "Unit III",
    "topic": "Backpropagation & Multivariate Chain Rule",
    "syllabus": "University Core"
  },
  {
    "id": 14,
    "part": 14,
    "chapter": 36,
    "diff": "Medium",
    "q": "Given an input image of size 32 x 32, a filter size of 5 x 5, stride S = 1, and padding P = 0, what is the spatial dimension (height/width) of the resulting output feature map?",
    "options": [
      "32 x 32",
      "28 x 28",
      "27 x 27",
      "30 x 30"
    ],
    "ans": 1,
    "exp": "The formula for the spatial dimension of a 2D convolution output is Out = floor((W - F + 2P)/S) + 1. Substituting the values: floor((32 - 5 + 0)/1) + 1 = floor(27) + 1 = 28. Hence the output feature map is 28 x 28.",
    "uni": true,
    "unit": "Unit III",
    "topic": "Convolutional Neural Networks (Feature Map Dimensions)",
    "syllabus": "University Core"
  },
  {
    "id": 15,
    "part": 15,
    "chapter": 38,
    "diff": "Hard",
    "q": "In a Long Short-Term Memory (LSTM) cell, which component is responsible for deciding how much of the old cell state C_{t-1} should be discarded?",
    "options": [
      "Input Gate i_t",
      "Forget Gate f_t",
      "Output Gate o_t",
      "Candidate State C_tilde_t"
    ],
    "ans": 1,
    "exp": "The Forget Gate computes f_t = sigma(W_f * [h_{t-1}, x_t] + b_f), producing values between 0 and 1. An element-wise multiplication f_t * C_{t-1} scales the previous cell state: 0 means completely discard, and 1 means completely retain. This additive highway protects gradients across long sequences.",
    "uni": true,
    "unit": "Unit III",
    "topic": "LSTM Gating Mechanisms (Forget Gate)",
    "syllabus": "University Core"
  },
  {
    "id": 16,
    "part": 17,
    "chapter": 40,
    "diff": "Hard",
    "q": "What is the key mathematical difference between the Bellman Expectation Equation and the Bellman Optimality Equation for state value V(s)?",
    "options": [
      "The Expectation equation computes an average over a given policy's action distribution, whereas the Optimality equation takes the maximum over all possible actions",
      "The Optimality equation ignores the discount factor gamma",
      "The Expectation equation applies only to deterministic environments, whereas the Optimality equation applies only to stochastic ones",
      "The Expectation equation computes action-values Q(s, a), while the Optimality equation computes rewards R(s)"
    ],
    "ans": 0,
    "exp": "The Bellman Expectation Equation evaluates a fixed policy pi: V_pi(s) = sum_a pi(a|s) sum_{s'} P(s'|s,a)[R(s,a,s') + gamma*V_pi(s')]. The Bellman Optimality Equation seeks the optimal value function by taking the maximum over all actions: V*(s) = max_a sum_{s'} P(s'|s,a)[R(s,a,s') + gamma*V*(s')].",
    "uni": true,
    "unit": "Unit IV",
    "topic": "Markov Decision Processes (Bellman Optimality)",
    "syllabus": "University Core"
  },
  {
    "id": 17,
    "part": 17,
    "chapter": 41,
    "diff": "Medium",
    "q": "Why is Q-Learning classified as an 'Off-Policy' Reinforcement Learning algorithm?",
    "options": [
      "Because it learns without requiring an environment model P(s'|s, a)",
      "Because its TD target uses the maximum Q-value of the next state (greedy action), regardless of which action the agent's behavior policy actually selected",
      "Because it does not update the Q-table during training episodes",
      "Because it only works with continuous state spaces"
    ],
    "ans": 1,
    "exp": "An algorithm is off-policy when the target policy being evaluated/improved differs from the behavior policy generating the data. In Q-learning, the agent may explore using an epsilon-greedy behavior policy, but the Q-update target is r + gamma * max_{a'} Q(s', a'), which assumes the optimal greedy policy. In contrast, on-policy algorithms like SARSA use Q(s', a') where a' is the actual action taken.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "Reinforcement Learning (Q-Learning Off-Policy Nature)",
    "syllabus": "University Core"
  },
  {
    "id": 18,
    "part": 18,
    "chapter": 43,
    "diff": "Medium",
    "q": "In TF-IDF text representation, if a term t appears in every single document in a large corpus of N documents, what happens to its IDF score?",
    "options": [
      "Its IDF score approaches infinity, giving it maximum weight",
      "Its IDF score approaches zero, effectively discounting its weight because it carries no discriminative power",
      "Its IDF score equals N, dominating the classification vector",
      "Its IDF score becomes negative and inverts the document direction"
    ],
    "ans": 1,
    "exp": "The Inverse Document Frequency is defined as IDF(t) = log(N / DF(t)). When a term appears in all N documents, DF(t) = N, so log(N / N) = log(1) = 0. Multiplying TF by 0 zeroes out the feature, correctly recognizing that universal words (like stop-words) provide zero information for distinguishing documents.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "Natural Language Processing (TF-IDF Weighting)",
    "syllabus": "University Core"
  },
  {
    "id": 19,
    "part": 19,
    "chapter": 45,
    "diff": "Hard",
    "q": "At the theoretical global Nash Equilibrium of a Generative Adversarial Network (GAN), what is the optimal output of the Discriminator D(x) for all inputs?",
    "options": [
      "D(x) = 1.0 (it declares all samples to be real)",
      "D(x) = 0.0 (it rejects all samples as fake)",
      "D(x) = 0.5 (the generator's distribution p_g matches the real data distribution p_data, making real and fake indistinguishable)",
      "D(x) oscillates between -1.0 and +1.0"
    ],
    "ans": 2,
    "exp": "As proven by Goodfellow et al. (2014), when the Generator reaches the optimal distribution p_g = p_data, the Discriminator's optimal decision rule D*(x) = p_data(x) / (p_data(x) + p_g(x)) evaluates to 1/2 = 0.5 everywhere. The discriminator is completely uncertain, like tossing a fair coin.",
    "uni": true,
    "unit": "Unit IV",
    "topic": "Generative Adversarial Networks (Nash Equilibrium)",
    "syllabus": "University Core"
  },
  {
    "id": 20,
    "part": 20,
    "chapter": 46,
    "diff": "Medium",
    "q": "Under the 'Demographic Parity' fairness criterion in algorithmic decision-making, which condition must hold across demographic groups A = 0 and A = 1?",
    "options": [
      "Both groups must achieve identical classification accuracy",
      "The probability of receiving a positive prediction P(Y_hat = 1) must be equal across both groups, regardless of true label distributions",
      "The True Positive Rates (Recall) must be identical across both groups",
      "The model must achieve zero False Positives for the disadvantaged group"
    ],
    "ans": 1,
    "exp": "Demographic Parity (also called Statistical Parity) requires that the acceptance/positive prediction rate is independent of the protected sensitive attribute A: P(Y_hat = 1 | A = 0) = P(Y_hat = 1 | A = 1). In contrast, Equal Opportunity requires equal True Positive Rates P(Y_hat = 1 | Y = 1, A = 0) = P(Y_hat = 1 | Y = 1, A = 1).",
    "uni": true,
    "unit": "Unit IV",
    "topic": "AI Ethics & Algorithmic Fairness (Demographic Parity)",
    "syllabus": "University Core"
  }
];

if (typeof window !== 'undefined') {
  window.AIML_QUIZ_DATA = AIML_QUIZ_DATA;
}
