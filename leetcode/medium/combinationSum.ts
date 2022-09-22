function combinationSum(candidates: number[], target: number): number[][] {
  const ans = [];

  const dfs = (target: number, temp: number[], index: number) => {
    if (index === candidates.length) return;
    if (target === 0) {
      ans.push(temp);
      return;
    }
    dfs(target, temp, index + 1);
    if (target - candidates[index] >= 0) {
      dfs(target - candidates[index], [...temp, candidates[index]], index);
    }
  };

  dfs(target, [], 0);
  return ans;
}
