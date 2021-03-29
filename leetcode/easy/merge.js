/*
 * @Author: josh119891
 * @Date: 2021-03-27 12:14:21
 * @LastEditors: josh119891
 * @LastEditTime: 2021-03-27 12:14:22
 * @Description: 合并排序
 */
var merge = function(A, m, B, n) {
  A.splice(m, A.length - m, ...B);
  A.sort((a, b) => a - b);
};