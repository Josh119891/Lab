/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let arr = []

  for (let i = 0; i < nums.length; i = i + 2) {
    arr = arr.concat(new Array(nums[i]).fill(nums[i + 1]))
  }
  return arr;
};
/**
* @param {number[]} nums
* @return {number[]}
*/
var decompressRLElist = function (nums) {
  return nums.reduce((pre, cur, idx, arr) => {
    return idx % 2 === 1 ? [...pre, ...new Array(arr[idx - 1]).fill(cur)] : pre;
  }, []);
};
