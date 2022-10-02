function commonFactors(a: number, b: number): number {
  let ans = 0;
  let temp = a > b ? b : a;
  for (let i = temp; i > 0; i--) {
    if (a % i === 0 && b % i === 0) ans++;
  }
  return ans;
}
