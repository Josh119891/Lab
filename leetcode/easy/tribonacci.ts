function tribonacci(n: number): number {
  const ans = [0, 1, 1];
  if (n < 3) return ans[n];
  for (let i = 3; i <= n; i++) {
    ans[i] = ans[i - 1] + ans[i - 2] + ans[i - 3];
  }
  return ans[n];
}
