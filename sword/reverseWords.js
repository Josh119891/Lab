/*
 * @Author: josh119891
 * @Date: 2021-03-12 16:04:21
 * @LastEditors: josh119891
 * @LastEditTime: 2021-03-12 16:18:54
 * @Description: file content
 */

// /\s+/ 任意长度的空格
function reverseWords(s) {


  return s.trim().split(/\s+/).reverse().join(' ');

}