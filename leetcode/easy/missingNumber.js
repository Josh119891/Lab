/*
 * @Author: josh119891
 * @Date: 2021-03-16 13:37:00
 * @LastEditors: josh119891
 * @LastEditTime: 2021-03-16 14:17:49
 * @Description: file content
 */
var missingNumber = function (nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (nums.indexOf(i) === -1) {
      return i;
    }
  }
  return -1;
};