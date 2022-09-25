/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let max = Math.max(...nums);
  let ans = 0;
  let j = 0;
  for (let num of nums) {
    if (num === max) {
      j++;
      ans = Math.max(ans, j)
    } else {
      j = 0
    }
  }
  return ans;
};