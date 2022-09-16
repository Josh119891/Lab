function searchInsert(nums: number[], target: number): number {
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (target < nums[mid]) {
      right = mid - 1;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return left;
}
