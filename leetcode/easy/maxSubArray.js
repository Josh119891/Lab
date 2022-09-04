var maxSubArray = function (nums) {
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    nums[i] += Math.max(nums[i - 1], 0);
    sum = Math.max(nums[i], sum);
  }
  return sum;
};
