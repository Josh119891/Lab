/*
 * @Author: josh119891
 * @Date: 2021-03-16 12:54:50
 * @LastEditors: josh119891
 * @LastEditTime: 2021-03-16 13:26:17
 * @Description: 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
*/

const productExceptSelf = function (nums) {
  const result = [];
  let temp = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = temp;
    temp *= nums[i]
  }
  temp = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= temp;
    temp *= nums[i];
  }
  return result;
};

