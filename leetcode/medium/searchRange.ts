function searchRange(nums: number[], target: number): number[] {
  let a = -1;
  let b = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (i === 0 || nums[i - 1] < target) {
        a = i;
      }
      if (i === 0 || i + 1 <= nums.length || nums[i] < nums[i + 1]) {
        b = i;
      }
    }
  }
  return [a, b];
}
