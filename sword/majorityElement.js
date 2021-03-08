/*
 * @Author: josh119891
 * @Date: 2021-01-21 14:28:40
 * @LastEditors: josh119891
 * @LastEditTime: 2021-01-21 14:48:56
 * @Description: file content
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  const set = {};
  const half = nums.length / 2;
  for (const num of nums) {
    set[num] = set[num] + 1 || 1
    if (set[num] >= half) {
      return num
    }
  }
  return -1;
};