function search(nums: number[], target: number): boolean {
  const n = nums.length;
  if (n === 0) return false;
  if (n === 1) return nums[0] === target;

  let left = 0;
  let right = n - 1;
  let mid: number;

  while (left <= right) {
    mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] === target || nums[left] === target || nums[right] === target)
      return true;
    if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
      ++left;
      --right;
    } else {
      if (nums[mid] >= nums[left]) {
        // mid在左边升序
        if (target > nums[left] && target < nums[mid]) {
          // 区间（left, mid-1）
          right = mid - 1;
        } else {
          // 区间 (mid+1,right)
          left = mid + 1;
        }
      } else {
        if (target > nums[mid] && target < nums[right]) {
          // 区间 (mid+1, right)
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
  }
  return false;
}
