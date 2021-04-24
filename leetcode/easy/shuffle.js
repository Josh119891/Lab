/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

//  给你一个数组 nums ，数组中有 2n 个元素，按 [x1,x2,...,xn,y1,y2,...,yn] 的格式排列。

//  请你将数组按 [x1,y1,x2,y2,...,xn,yn] 格式重新排列，返回重排后的数组。
var shuffle = function (nums, n) {
  let result = []
  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[n + i]);
  }
  return result;
};