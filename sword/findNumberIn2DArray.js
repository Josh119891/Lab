/*
 * @Author: josh119891
 * @Date: 2021-01-19 16:50:54
 * @LastEditors: josh119891
 * @LastEditTime: 2021-01-19 17:00:22
 * @Description: file content
 */
const isInPeriod = (num, arr) => arr[0] <= num && num <= arr[arr.length - 1];

const findNumberIn2DArray = (matrix, target) => {
  for (let arr of matrix) {
    if (isInPeriod(target, arr)) {
      if (arr.includes(target)) {
        return true;
      }
    }
  }
  return false;
};