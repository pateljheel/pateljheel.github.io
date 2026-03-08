---
title: "Solutions to Algorithms Illustrated (Part 1 - Chapter 5 - QuickSort)"
date: "2026-03-08"
summary: "This is my journal which contains the solution to selected problems in Algorithms Illustrated by Tim Roughgarden."
tags: ["DSA"]
child: true
---

### Problem 5.2

The problem is based upon the randomized selection of the pivot element in QuickSort algorithm. Choose a constant $\alpha$ in interval $(0, 1/2)$. Then what is the probability that, with a randomly chosen pivot element, the Partition subroutine produces a split in which the size of both the resulting subproblems is at least $\alpha$ times the size of the original array?

#### Solution

- Assume uniform probability to choose a pivot, there is $1/n$ probability to choose a random pivot.
- For split in which size of resulting subproblems is at least $\alpha$ times the size of the original array, the chosen pivot must be such that in the sorted array the pivot lies between $\alpha \times n$ and $(1 - \alpha) \times n$.
- Hence, the total number of possible selections is $(1 - \alpha) \times n - \alpha \times n = (1 - 2 \alpha) \times n$
- Hence, option B is correct.

### Problem 5.3

Similar, to previous question, it chooses a constant $\alpha$ in interval $(0, 1/2)$ and assumes that the splits in all the recursions are balanced, i.e. whenever a recursive call is given an array of length $k$, each of its two recursive calls is passed a subarray with length between $\alpha \times k$ and $(1- \alpha) \times k$. We need to find  which levels of the algorithm’s recursion tree can contain leaves?

#### Solution

- Here we need to consider the extreme case, where in every recursive call with input array length, one split is of size $\alpha \times k$ and the other split is of size $(1 - \alpha) \times k$. Clearly, this case will give us the minimun and maximum depth of leaves in the recursion tree.
- The minimum depth of the leaves belong to the branches with split of size $\alpha \times k$. Hence, the minimum depth of the leaves is $\log_{1/\alpha} n$.
- The maximum depth of the leaves belong to the branches with split of size $(1 - \alpha) \times k$. Hence, the maximum depth of the leaves is $\log_{1/(1 - \alpha)} n$.
- Hence, option B is correct.

### Problem 5.4

The problem asks us to find the minimum and maximum recursion depth of the randomized QuickSort algorithm. We need to find the minimum and maximum depth of the recursion tree of the randomized QuickSort algorithm.

#### Solution

- Case 1: The minimum depth of the recursion tree is $\log_2 n$. This happens when the pivot element is always the median of the array, resulting in perfectly balanced splits.
- Case 2: The maximum depth of the recursion tree is $n$. This happens when the pivot element is always the smallest or largest element in the array, resulting in the most unbalanced splits.
- Hence, option B is correct.

### Challenge Problem 5.5

Extend the $\Omega (n \log n)$ lower bound in Section 5.6 to the expected running time of randomized comparison-based sorting algorithms.

*Comming soon...*