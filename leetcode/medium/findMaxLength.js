/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。
 */


/**
 * 
 * 解题思路1 一次遍历，用cur记录当前的数字，用max来记录含有相同数量的 0 和 1 的最长连续子数组
 */
const findMaxLength = function (nums) {
  let zeros = 0;
  let ones = 0;
  let cur = nums[0];
  let max = 0;
  for (let num of nums) {
    if (cur === num) {
      if (num === 1) {
        ones++;
      }
      if (num === 0) {
        zeros++;
      }
      continue;
    }
    cur = num;
    let temp = Math.min(zeros, ones);
    max = Math.max(temp, max);

  }
  return max;
};