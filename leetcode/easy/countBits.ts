function countBits(n: number): number[] {
  const ans: number[] = [];
  for (let i = 0; i <= n; i++) {
    let bits = i
      .toString(2)
      .split("")
      .reduce((pre: number, cur: string): number => {
        return cur === "1" ? pre + 1 : pre;
      }, 0);
    ans.push(bits);
  }
  return ans;
}
