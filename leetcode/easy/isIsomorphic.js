/*
 * @Author: josh119891
 * @Date: 2021-03-27 12:14:54
 * @LastEditors: josh119891
 * @LastEditTime: 2021-03-27 12:18:46
 * @Description: 同构字符串
 */

// ? 标记映射逻辑
var isIsomorphic = function(s, t) {
  for (let i = 0; i < s.length; i++)
      if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false
  return true
};