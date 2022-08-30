/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  if (n === 0) return 1;
  if (n <= 2) return n;
  let a = 1;
  let b = 2;
  for (let i = 2; i < n; i++) {
    [b, a] = [(b + a) % 1000000007, b];
  }
  return b;
};