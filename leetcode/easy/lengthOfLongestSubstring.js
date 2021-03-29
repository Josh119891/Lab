/*
 * @Author: josh119891
 * @Date: 2021-03-16 09:51:50
 * @LastEditors: josh119891
 * @LastEditTime: 2021-03-16 12:54:41
 * @Description: 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 */


const lengthOfLongestSubstring = function (str) {
  if (str.length === 0) return 0;
  let arr = [];
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    let index = arr.indexOf(str[i])
    if (index !== -1) {
      arr.splice(0, index + 1);
    }
    arr.push(str.charAt(i))
    max = Math.max(arr.length, max)
  }
  return max;
};
console.log(lengthOfLongestSubstring(`dvdf`));