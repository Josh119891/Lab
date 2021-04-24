/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */

//  给你两个整数，n 和 start 。
//  数组 nums 定义为：nums[i] = start + 2*i（下标从 0 开始）且 n == nums.length 。
//  请返回 nums 中所有元素按位异或（XOR）后得到的结果。

var xorOperation = function (n, start) {
  let result = start;
  for (let i = 1; i < n; i++) {
    result ^= (start + i * 2)
  }
  return result;
};