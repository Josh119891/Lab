function findPeakElement(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
      return mid;
    }
    if (nums[mid] > nums[mid + 1]) {
      right = mid; //下降
    } else {
      left = mid + 1; //上升
    }
  }
  return left;
}
