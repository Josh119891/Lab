/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    result.splice(index[j], 0, nums[i])
  }
  return result;
};


var createTargetArray = function (nums, index) {
  return nums.reduce((pre, cur, i) => {
    pre.splice(index[i], 0, cur)
    return pre;
  }, [])
};