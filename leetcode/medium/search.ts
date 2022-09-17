//33. 搜索旋转排序数组
//一次遍历
function search(nums: number[], target: number): number {
  return nums.indexOf(target);
}

// 二分查找

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  while (left <= right) {
    mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] >= nums[0]) {
      //如果mid在做左边
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // 如果mid在右半段
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}
