---
title: "AI Foundations — Pacman"
description: "Search, probabilistic tracking, reinforcement learning, and adversarial agents in Pacman"
slug: projects/courses/CS-5100/ai-foundations-pacman
---

Four AI projects implemented in the Pacman game environment, covering core AI paradigms from classical search to multi-agent reinforcement learning (RL). Each project builds on the previous, progressing from deterministic to stochastic to adversarial environments.

:::note
This page is an abridged version of the [project website](https://praphulsamavedam.github.io/CS-5100-Foundations-of-AI/) hosted on [GitHub Repository](https://github.com/PraphulSamavedam/CS-5100-Foundations-of-AI)
:::


### Project 1: Search Algorithms

**Problem:** Navigate Pacman through mazes to reach goals efficiently.

**Algorithms Implemented:**
- **DFS** (Stack frontier) — complete but not optimal
- **BFS** (Queue frontier) — guarantees shortest path
- **UCS** (Priority Queue by path cost) — optimal for weighted graphs
- **A\*** (Priority Queue by f = g + h) — optimal with admissible heuristics

**Custom Heuristics:**
- Manhattan distance for single-goal search
- Corners problem heuristic (admissible, consistent)
- Food collection heuristic minimizing remaining food distance

**Results:** A* with heuristics expands 2-3x fewer nodes than uninformed search. Handles mazes from 10 to 600+ nodes.

### Project 2: Probabilistic Ghost Tracking

**Problem:** Track invisible ghosts using noisy distance sensor readings.

**Approach:** Hidden Markov Model where ghost positions are hidden states and noisy distances are observations.

**Methods:**
- **Exact Inference** (Forward Algorithm) — true probability distributions, O(|X|²) per step
- **Particle Filtering** — approximate inference, O(N) complexity, scales to large state spaces
- **Joint Particle Filtering** — tracks multiple ghosts simultaneously

**Results:** Real-time tracking at 30+ FPS with 100-500 particles. Handles multi-target tracking with correlated ghost movements.

### Project 3: Reinforcement Learning

**Problem:** Learn optimal policies through trial-and-error in Gridworld, Crawler robot, and Pacman.

**Algorithms:**
- **Value Iteration** — model-based, computes optimal policy from known MDP
- **Q-Learning** — model-free, discovers optimal policy without transition/reward functions
- **Approximate Q-Learning** — linear function approximation for generalization to unseen states

**Key Concepts:** Bellman equations, temporal difference learning, exploration vs exploitation (ε-greedy), feature-based state representation.

**Results:** Q-Learning converges to optimal policy. Approximate Q-Learning generalizes across states using hand-crafted features (ghost distance, food distance, capsule proximity).

### Project 4: Multi-Agent Adversarial Search

**Problem:** Pacman must make optimal decisions against intelligent ghost opponents.

**Algorithms:**
- **Minimax** — optimal play against perfect opponents, alternating MAX/MIN layers
- **Alpha-Beta Pruning** — 2-10x speedup through branch elimination
- **Expectimax** — handles suboptimal/random opponents with expected value computation

**Evaluation Functions:** Custom scoring combining food distance, ghost proximity, capsule strategy, and trapped-state detection.

**Results:** Alpha-beta pruning achieves 2-10x speedup (typically 3-5x). Expectimax outperforms minimax against non-optimal ghost AI.

## Technologies

Python, NumPy, MDPs, Bayesian Networks, Particle Filtering, Q-Learning, Minimax, Alpha-Beta Pruning

