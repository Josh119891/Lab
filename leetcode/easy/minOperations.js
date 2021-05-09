/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let steps = 0
  if (nums.length === 1) return steps;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] !== undefined && nums[i + 1] <= nums[i]) {
      steps += (nums[i] + 1 - nums[i + 1]);
      nums[i + 1] = nums[i] + 1
    }
  }
  return steps;
};
