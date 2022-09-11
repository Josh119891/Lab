function canJump(nums: number[]): boolean {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i] + i);
    if (max >= nums.length - 1) return true;
    if (max <= i) return false;
  }
  return false;
}
