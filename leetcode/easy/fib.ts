function fib(n: number): number {
  const ans = [0, 1, 1];
  if (n <= 2) return ans[n];

  for (let i = 0; i < n - 1; i++) {
    ans[i + 2] = ans[i] + ans[i + 1];
  }
  return ans[n];
}
