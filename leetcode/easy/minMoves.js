const nums = require("nums");
/**
 * @param {number[]} nums
 * @return {number}
 */
//排序更费时，因为每个都要按顺序排好
var minMoves = function(nums) {
  return nums
    .sort((a, b) => a - b)
    .reduce((pre, cur) => {
      return (pre += cur - nums[0]);
    }, 0);
};

var minMoves1 = function(nums) {
  return nums.reduce((a, b) => a + b, 0) - Math.min(...nums) * nums.length;
};
