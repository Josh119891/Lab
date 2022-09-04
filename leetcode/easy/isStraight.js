/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  const map = {};
  let min = 14;
  let max = 0;
  for (let num of nums) {
    if (num === 0) continue;
    map[num] = map[num] + 1 || 1;
    if (map[num] === 2) return false;
    min = Math.min(min, num);
    max = Math.max(max, num);
  }
  return max - min < 5
};