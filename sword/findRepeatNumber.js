/*
 * @Author: josh119891
 * @Date: 2021-01-19 16:24:43
 * @LastEditors: josh119891
 * @LastEditTime: 2021-01-19 16:39:20
 * @Description: file content
 */
const findRepeatNumber = (nums) => {
  // prefix
  if (!Array.isArray(nums)) {
    return -1;
  }
  if (nums.length <= 2) {
    return nums[0];
  }
  const temp = {};
  for (let i = 0; i < nums.length; i++) {
    temp[nums[i]] = temp[nums[i]] + 1 || 1;
    if (temp[nums[i]] > 1) {
      return nums[i]
    }
  }
  return -1;
};