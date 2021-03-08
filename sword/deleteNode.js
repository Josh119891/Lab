/*
 * @Author: josh119891
 * @Date: 2021-01-21 14:34:35
 * @LastEditors: josh119891
 * @LastEditTime: 2021-01-21 14:48:14
 * @Description: file content
 */
const deleteNode = (head, val) => {
  if (head.val == val) {
    return head.next;
  }
  head.next = deleteNode(head.next, val);
  return head;
};