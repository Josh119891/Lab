/**
 * @param {number[]} nums
 * @return {string[]}
 */
//单指针识别
var summaryRanges = function(nums) {
  var res = [];
  var left = nums[0];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      res.push(left === nums[i] ? "" + nums[i] : left + "->" + nums[i]);
      left = nums[i + 1];
    }
  }
  return res;
};
