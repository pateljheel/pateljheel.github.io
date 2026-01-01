---
title: "Computational Intractability & Natural Processes"
date: "2025-12-31"
summary: "This article touches some of the natural barriers which prevent efficient solution to NP-hard problems."
tags: ["COMPUTATION"]
---

Nowadays, computers have become an essential part of everyone’s lives, and we are so accustomed to them that we often take the notion of computation for granted. But have you ever stopped to contemplate what it truly means to compute? For Computer Science graduates, this question lies at the heart of one of the most important subjects in the field: the Theory of Computation. For a formal and rigorous treatment of this topic within the context of Computer Science, I recommend Introduction to the Theory of Computation by Michael Sipser.

## Automata, Complexity & Computability

The Theory of Computation revolves around three main ideas:

- Automata: These provide formal definitions of models of computation. Automata are simple abstract machines that allow us to precisely define what computation is and to build the theoretical foundations of computability and complexity. Although these machines are conceptually simple, they are equivalent to modern computers in terms of what they can compute.
- Complexity and Computability: These models of computation, or modern computers, are used to solve problems. Such problems can be broadly classified into three categories:
    1. Tractable problems: Easy problems, which can be solved in time polynomial in the input size $n$ (the class $P$). For example, sort problem, where $n$ is the number of elements in the list to be sorted.
    2. Intractable (believed): Hard problems, for which no polynomial-time solutions are known (including NP-hard and NP-complete problems). For example, the Traveling Salesman Optimization or Decision problem, where $n$ is the number of cities/stops.
    3. Undecidable problems, which cannot be solved by any algorithm, regardless of time or computational resources. For example the halting problem.

Complexity theory studies the distinction between easy and hard problems by analyzing the resources (such as time and space) required to solve them, while computability theory focuses on identifying the fundamental limits of computation by characterizing problems that cannot be solved by computers or automata at all.

## The Travelling Salesman Problem

In this article, we will discuss intractable problems, that is, problems that are believed to have no polynomial-time solutions. The word believed is used deliberately, because no one has yet proven that polynomial-time algorithms do not exist for NP-hard or NP-complete problems. What has been proven is that these problems share common structural properties: if a polynomial-time algorithm is found for any one NP-complete problem, then all NP problems would admit polynomial-time solutions. In that case, the complexity classes P and NP would be equal.

Despite decades of research, no such algorithm has been discovered, and the prevailing consensus among researchers is that $N \neq NP$. However, this remains unproven and stands as one of the most important open problems in mathematics and computer science.

One of the classic NP-hard problems is the Travelling Salesman Problem (TSP). It can be stated as follows: given a list of cities and the distances between every pair of cities, what is the shortest possible route that visits each city exactly once and returns to the starting city? This formulation captures the intuitive essence of the problem. Despite its simple statement, the TSP is a fundamentally important optimization problem that arises in many domains, including electronics, genetics, logistics, and operations research.

> The ubiquity of the Traveling Salesman Problem in optimization prompts a deeper question: do natural systems implicitly compute solutions to TSP-like problems, and if such systems exist, can their underlying mechanisms be formalized and leveraged to solve arbitrary instances of the TSP?

The answer is yes: there have been attempts to solve TSP-like problems using natural processes, but none have been successful in providing efficient, general solutions. It appears that nature itself imposes fundamental barriers, manifesting as prohibitive requirements in time, mass, or energy, that prevent such processes from yielding scalable solutions to NP-hard problems. In the following sections, I highlight two well-known and influential attempts in this direction: one based on DNA computing and the other on quantum computing.

## Birth of DNA Computing

To see exactly where the "physical shortcut" hits a wall, let's look at DNA Computing; one of the most famous attempts to solve NP-hard problems using the physical world.

In 1994, Leonard Adleman used DNA to solve a version of the TSP (the Hamiltonian Path problem); a Hamiltonian path visits each city (vertex) exactly once between a specified start and end.

- Adleman represented each vertex and each edge of a small directed graph using unique DNA strands. The sequences were designed so that edges could hybridize (bind) naturally via Watson–Crick base pairing to form candidate paths through the graph.
- By mixing these strands in a test tube, billions of possible paths formed simultaneously due to the massive inherent parallelism of molecular binding.
- He then used biochemical techniques (such as polymerase chain reaction and gel electrophoresis) to filter out sequences that did not encode valid Hamiltonian paths, ultimately identifying those that did.

Although the construction of correct paths happened quickly in the tube, the process of biochemical separation and analysis took on the order of a week in the laboratory for the seven-node example.

### Key Observation

- It was the first demonstration that a physical (biochemical) process could be used to compute solutions to a well-defined NP-complete problem.
- DNA’s ability to form an astronomical number of combinations in parallel is what enabled the generation of potential solution strands.
- The computation’s bottleneck was not generating candidates but filtering out incorrect ones using laboratory techniques.
- DNA computing exploits the massive parallelism of molecules: in a single test tube, billions of DNA strands can simultaneously encode potential solutions to a combinatorial problem like TSP. While this works for small problem instances, scaling to larger instances becomes exponentially impractical. For example, consider 20 cities. To represent all possibilities, you would need an astronomical amount of DNA, far more than is physically available on Earth.

> Hence, although a solution emerged almost instantaneously through the sheer parallelism of DNA molecules, the inherent complexity revealed itself as a natural barrier, manifesting in the immense demands of mass, time, and resources.

## Quantum Annealing

Quantum annealing, based on the quantum computation model, is a technique explored for solving TSP-like and other combinatorial optimization problems.

- The TSP is converted into a Quadratic Unconstrained Binary Optimization (QUBO) problem or an Ising model, which quantum annealers like those from D-Wave (a quantum computing company) can process. Each city and each possible position in the tour is represented by binary variables. Constraints (e.g., visiting each city exactly once) are encoded as energy penalties.
- The quantum system is initialized in a superposition of all possible solutions. Through annealing, the system evolves under a carefully controlled Hamiltonian, gradually “settling” into lower-energy states.
- Ideally, the ground state of the final Hamiltonian corresponds to the shortest tour. Multiple runs are usually required because quantum annealing is probabilistic, and the lowest-energy state may not be reached every time.

### Key Observation

- Exploits quantum tunneling, which allows the system to escape local minima that trap classical algorithms.
- Can explore a very large solution space in parallel, potentially faster than classical heuristics for some instances.
- Quantum annealers are limited by the number of qubits and their connectivity. Current machines can handle small to medium TSP instances (tens of cities) but not arbitrarily large ones.
- Noise, decoherence, and embedding constraints can prevent finding the true optimal solution. Quantum states are fragile. The longer the problem takes to solve (as $n$ increases), the more likely the "computer" is to be hit by a stray photon or heat, collapsing the calculation before it's finished.
- Like DNA computing, it does not bypass the exponential complexity of NP-hard problems in general; it provides heuristic or probabilistic solutions.

> Both DNA computing and quantum annealing illustrate the capacity of natural processes to explore extremely large solution spaces in parallel. In DNA computing, molecular interactions generate a combinatorial set of candidate solutions simultaneously, whereas in quantum annealing, a quantum system exists in a superposition of multiple candidate solutions, allowing probabilistic exploration of the solution space. Nevertheless, in both approaches, inherent physical and computational constraints impose unavoidable limits: the exponential growth of possible solutions translates into prohibitive requirements for molecular mass, laboratory resources, and time in DNA computing, and into qubit limitations, decoherence, and probabilistic outcomes in quantum annealing. These cases demonstrate that, although natural processes can inspire effective computational heuristics, the intrinsic complexity of NP-hard problems remains, indicating that the laws of nature enforce fundamental barriers to efficiently obtaining exact solutions.
