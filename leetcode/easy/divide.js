/**
 * 1. 利用 while + 减法来代替 除法
 * 2. 考虑边界问题 2^32次方的边界问题
 * 3. 利用位运算来代替 减法
 */

/**
 * 位计算:
 * 
 */

var divide = function (a, b) {
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);
  if (a == MIN && b == -1) return MAX
  if (a == MIN && b == 1) return MIN
  const isNegative = (a > 0) ^ (b > 0);
  let absA = Math.abs(a);
  let absB = Math.abs(b);
  let ans = 0;
  while (absA >= absB) {
    absA -= absB;
    ans++;
  }
  return isNegative ? -ans : ans;

};


var divide = function (a, b) {
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);
  if (a == MIN && b == -1) return MAX
  if (a == MIN && b == 1) return MIN
  const isNegative = (a > 0) ^ (b > 0);
  let absA = Math.abs(a);
  let absB = Math.abs(b);
  let ans = 0
  for (let i = 31; i >= 0; i--) {
    if ((absA >>> i) >= absB) {
      absA -= absB << i
      ans += 1 << i
    }
  }
  return isNegative ? -ans : ans
};