/*
 * @Author: josh119891
 * @Date: 2021-03-12 16:43:00
 * @LastEditors: josh119891
 * @LastEditTime: 2021-03-12 17:04:06
 * @Description: file content
 */
function twoSum(nums, target) {
  let j = nums.length - 1;
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] + nums[j] > target) {
      j--;
    }
    if (nums[i] + num[j] === target) {
      return [nums[i], nums[j]]
    }

  }
  return [-1, -1]
};