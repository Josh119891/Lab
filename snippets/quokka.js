/*
 * @Author: josh119891
 * @Date: 2020-11-09 19:00:07
 * @LastEditors: josh119891
 * @LastEditTime: 2020-11-09 19:06:31
 * @Description: file content
 */
Array.isArray(Array.prototype);  // true  // Array的原型是一个数组
Array.isArray([], 123); // true
Array.isArray(123, []); // false

Array.from("asjkdhajk"); // ["a", "s", "j", "k", "d", "h", "a", "j", "k"]
Array.of("asiudhuia"); // ["asiudhuia"]