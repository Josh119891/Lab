/*
 * @Author: josh119891
 * @Date: 2021-03-27 12:12:06
 * @LastEditors: josh119891
 * @LastEditTime: 2021-03-27 12:13:09
 * @Description: 罗马数字转整数
*/
// ? 比较小的数字是在左边还是在右边，左边-，右边+
var romanToInt = function(s) {
  const map ={
      "I":1,
      "V":5,
      "X":10,
      "L":50,
      "C":100,
      "D":500,
      "M":1000,
  };
  let resul =0;
  for(let i=0;i<s;i++){
    map[s[i]] < map[s[i+1]] ? result -= map[s[i]] : result += map[s[i]]
  }
  return result 
};