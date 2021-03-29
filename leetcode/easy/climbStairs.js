/*
 * @Author: josh119891
 * @Date: 2021-03-27 12:10:44
 * @LastEditors: josh119891
 * @LastEditTime: 2021-03-27 12:11:18
 * @Description: 爬楼梯
 */
// ? 第n个楼梯，是n-1和n-2之和
var climbStairs = function(n) {
  let p = 0, q = 0, r = 1;
  for (let i = 1; i <= n; ++i) {
      p = q;
      q = r;
      r = p + q;
  }
  return r;
};