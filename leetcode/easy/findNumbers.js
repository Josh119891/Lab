/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  return nums.reduce((pre, cur) => {
    return cur.toString().length % 2 === 0 ? pre + 1 : pre
  }, 0)
};