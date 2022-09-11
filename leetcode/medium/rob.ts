function rob(nums: number[]): number {
  const len = nums.length;
  const dp = new Array(len + 1).fill(0);
  dp[0] = 0;
  dp[1] = nums[0];
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }
  return dp[len];
}
