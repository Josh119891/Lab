function dominantIndex(nums: number[]): number {
  let max1 = 0;
  let max2 = 0;
  let index = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max1) {
      [max1, max2] = [nums[i], max1];
      index = i;
    } else if (nums[i] > max2) {
      max2 = nums[i];
    }
  }
  return max1 >= max2 * 2 ? index : -1;
}
