/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return nums.sort((a, b) => b - a)[k - 1];
};

function findKthLargest(nums: number[], k: number): number {
  let maxPos, temp;

  for (let i = 0; i < k; i++) {
    maxPos = 0;
    for (let j = 1; j < nums.length - i; j++) {
      if (nums[maxPos] < nums[j]) {
        maxPos = j;
      }
    }
    temp = nums[maxPos];
    nums[maxPos] = nums[nums.length - i - 1];
    nums[nums.length - i - 1] = temp;
  }
  return nums[nums.length - k];
}
