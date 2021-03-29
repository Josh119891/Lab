/*
 * @Author: josh119891
 * @Date: 2021-03-16 16:44:51
 * @LastEditors: josh119891
 * @LastEditTime: 2021-03-16 16:46:21
 * @Description: 在Linux Shell命令下通配符'*'表示0个或多个字符, 现编写一段代码实现通配符'*'的功能，注意只需要实现'*', 不用实现其他通配符
 */


function replaceWith(pattern, str) {
  const [start, end] = pattern.split("*");
  const result = []
  str.indexOf(start)
}