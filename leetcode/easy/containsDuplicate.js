
//利用Set的不重复性
var containsDuplicate3 = function (nums) {
  return new Set(nums).size !== nums.length;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const obj = {};
  for (let num of nums) {
    if (obj[num]) {
      return true;
    } else {
      obj[num] = 1;
    }
  }
  return false
};