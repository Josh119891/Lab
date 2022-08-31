/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope2 = function (n) {
  if (n <= 3) return n - 1;
  let p = 1000000007;
  let ans = 1;
  while (n > 4) {
    n -= 3;
    ans = (ans * 3) % p;
  }
  return (ans * n) % p;

}