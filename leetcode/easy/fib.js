/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) return n;
  let a = 0;
  let sum = 1;
  for (let i = 1; i < n; i++) {
    [sum, a] = [(sum + a) % 1000000007, sum];
  }
  return sum;
};