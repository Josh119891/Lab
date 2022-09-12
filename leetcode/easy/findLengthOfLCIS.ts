function findLengthOfLCIS(nums: number[]): number {
  if (nums.length <= 1) return nums.length;
  let max = 1;
  let temp = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      temp++;
    } else {
      max = Math.max(max, temp);
      temp = 1;
    }
  }
  return Math.max(max, temp);
}

function findLengthOfLCIS(nums: number[]): number {
  if (nums.length <= 1) return nums.length;
  const dp = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    }
  }
  return Math.max(...dp);
}
