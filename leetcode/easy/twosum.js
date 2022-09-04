/*
 * @Author: josh119891
 * @Date: 2021-03-16 09:20:40
 * @LastEditors: josh119891
 * @LastEditTime: 2021-03-27 12:09:24
 * @Description: 两数之和
 */

var twoSum = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    let sum = nums[i] + nums[j];
    if (sum > target) j--;
    if (sum < target) i++;
    if (sum === target) return [nums[i], nums[j]]
  }
  return []
};

//  原理: 调用辅助数组
function twoSum(nums, target) {
  const temp = []
  for (let i = 0; i < nums.length; i++) {
    if (temp[nums[i]] !== undefined) {
      return [i, temp[nums[i]]]
    }
    temp[target - nums[i]] = i;
  }
}


//  原理: 仅限排序数组的情况下，可以用while
var twoSum = function (nums, target) {
  let j = nums.length - 1;
  let i = 0;
  while (i < j) {
    if (nums[i] + nums[j] === target) return [i + 1, j + 1]
    if (nums[i] + nums[j] > target) {
      j--;
    } else {
      i++;
    }
  }
};



var twoSum = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    let sum = nums[i] + nums[j];
    if (sum > target) j--;
    if (sum < target) i++;
    if (sum === target) return [nums[i], nums[j]]
  }
  return []
};