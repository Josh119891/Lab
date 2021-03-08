/*
 * @Author: josh119891
 * @Date: 2021-01-21 14:54:39
 * @LastEditors: josh119891
 * @LastEditTime: 2021-01-21 14:54:48
 * @Description: file content
 */
/**
 * @param {string} s
 * @return {character}
 */
const firstUniqChar = function (s) {
  if (s.length === 0) return " "
  for (let char of s) {
    if (s.indexOf(char) === s.lastIndexOf(char)) {
      return char;
    }
  }
  return " "
};