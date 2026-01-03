---
title: "Solutions to Algorithms Illustrated (Part 1 - Chapter 4 - The Master Method)"
date: "2025-12-20"
summary: "This is my journal which contains the solution to selected problems in Algorithms Illustrated by Tim Roughgarden."
tags: ["DSA"]
child: true
---

### Reference

#### Standard Recurrence Format

- **Base case:** $T(n)$ is at most a constant for all sufficiently small $n$.

- **General case:** for larger values of n,

$$
\begin{equation}
T(n) \leq a \cdot T\left(\frac{n}{b}\right) + O(n^d)
\end{equation}
$$

where,

- $a = $ number of recursive calls (rate of subproblem proliferation)
- $b = $ input size shrinkage factor
- $d = $ exponent for the polynomial term of the combine step

#### Master Theorem

If $T(n)$ is is defined by a standard recurrence, with parameters $a \geq 1$, $b \gt 1$, and $d \geq 0$, then

$$
\begin{equation}
T(n) =
\begin{cases}
O\left(n^d\right) & \text{if } a < b^d \\
O\left(n^d \log n\right) & \text{if } a = b^d \\
O\left(n^{\log_b a}\right) & \text{if } a > b^d
\end{cases}
\end{equation}
$$

### Problem 4.1

It asks which of the options is the best intepretation of $b^d$ in the Master Theorem.

#### Solution

- Option D: The rate at which the work-per-subproblem is shrinking (per level of recursion).

### Problem 4.2

It asks for the smallest correct upper bound among the given options for the recurrence: $T(n) \leq 7 T(n/3) + O(n^2)$.

#### Solution

- $a = 7$, $b = 3$, $d = 2$

- $b^d = 9$, and since $a < b^d$, by case 1 of the Master Theorem, $T(n) = O(n^2)$.

### Problem 4.3

It asks for the smallest correct upper bound among the given options for the recurrence: $T(n) \leq 9 T(n/3) + O(n^2)$.

#### Solution

- $a = 9$, $b = 3$, $d = 2$

- $b^d = 9$, and since $a = b^d$, by case 2 of the Master Theorem, $T(n) = O(n^2 \log n)$.

### Problem 4.4

It asks for the smallest correct upper bound among the given options for the recurrence: $T(n) \leq 5 T(n/3) + O(n)$.

#### Solution

- $a = 5$, $b = 3$, $d = 1$

- $b^d = 3$, and since $a > b^d$, by case 1 of the Master Theorem, $T(n) = O(n^{\log_3 5})$.

### Problem 4.5

It asks for the smallest correct upper bound among the given options for the recurrence: $T(n) \leq T(\lfloor\sqrt{n}\rfloor) + 1$.

#### Solution

- Based on the general case of the Standard Recurrence Format, we know that we can not apply Master Theorem to find solution to this recurrence relation.
- However, we can use recursion tree to come up with an upper bound on the amount of work.
- At each recursion level,

    - No. of subproblems = 1
    - Size of subproblem reduces by square root.

- Hence, total work is bounded by the recursion depth.
- Let's take the continuous case assumption,

$$
\begin{equation}
T(n) \leq T(\lfloor\sqrt{n}\rfloor) + 1 \leq T(\sqrt{n}) + 1
\end{equation}
$$

- We can break $n$ such that $p^{2^D} = n$, where $p$ is a real number and $\lfloor\sqrt{p}\rfloor = 1$.
- Hence, $D$ is equal to the recursion depth.

$$
\begin{equation}
\begin{aligned}
2^D \cdot \log_2 p &= \log_2 n \\
D + \log_2(\log_2 p) &= \log_2(\log_2 n) \\
D &= O(\log \log n)
\end{aligned}
\end{equation}
$$

- Hence, smallest upper bound is $O(\log \log n)$.

#### Another approach based on Master Theorem

- Using change of variables,
    - Let $n = 2^m \implies m = \log n$
    - And $S(m) = T(2^m)$

- After substitution, the recurrence relation takes the following form,

$$
\begin{equation}
S(m) \leq S(\frac{m}{2}) + 1
\end{equation}
$$

- The above equation is in the Standard Recurrence Format with $a = 1$, $b = 2$ and $d = 0$, hence we can apply Master Theorem on it.
- $a = b^d$, hence, case 2 applies.
- Correct upper bound is: $\log m = \log \log n$