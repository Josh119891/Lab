function search(nums: number[], target: number): number {
  return nums.reduce((pre, cur) => (cur === target ? pre + 1 : pre), 0);
}

//二分查找
function search(nums: number[], target: number): number {
  const binarySearch = (nums, target) => {
    let i = 0;
    let j = nums.length - 1;
    while (i <= j) {
      let m = Math.floor((i + j) / 2);
      if (nums[m] <= target) {
        i = m + 1;
      } else {
        j = m - 1;
      }
    }
    return i;
  };
  return binarySearch(nums, target) - binarySearch(nums, target - 1);
}

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    }
  }
  return -1;
}
