/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== i) return i;
  }
  return nums.length
};
/**
* @param {number[]} nums
* @return {number}
*/
var missingNumber = function (nums) {
  let right = nums.length - 1;
  let left = 0;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] == mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left
};
