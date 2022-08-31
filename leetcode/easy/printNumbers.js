/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  let ans = [];
  for (let i = 1; i < Math.pow(10, n); i++) {
    ans.push(i);
  }
  return ans;
};
var printNumbers2 = function (n) {
  let len = Math.pow(10, n) - 1
  return Array.from({ length: len }, (item, index) => index + 1)
}