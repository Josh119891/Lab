var maxSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let ans = 0;
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      let s = grid[i][j];
      for (let k = j - 1; k <= j + 1; k++) {
        s += grid[i - 1][k] + grid[i + 1][k];
      }
      ans = Math.max(ans, s);
    }
  }
  return ans;
};
