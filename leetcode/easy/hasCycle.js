/*
 * @Author: josh119891
 * @Date: 2021-03-27 12:13:30
 * @LastEditors: josh119891
 * @LastEditTime: 2021-03-27 12:13:39
 * @Description: 环形链表
 */
var hasCycle = (head) => {
  let map = new Map();
  while (head) {
    if (map.has(head)) return true;
    map.set(head, true); // 存的是节点的地址引用，而不是节点值
    head = head.next;
  }
  return false;
};