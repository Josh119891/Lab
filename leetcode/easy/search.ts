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
