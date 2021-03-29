/*
 * @Author: josh119891
 * @Date: 2021-03-16 00:25:15
 * @LastEditors: josh119891
 * @LastEditTime: 2021-03-16 00:26:57
 * @Description: file content
 */
/*
 * 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。
// 在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
 */
const missingNumber = function (nums) {
  for (let i = i = 0; i < nums.length; i++) {
    if (!nums.include(i)) {
      return i;
    }
  }
  return -1;
};