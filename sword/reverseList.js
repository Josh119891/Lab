/*
 * @Author: josh119891
 * @Date: 2021-01-21 11:33:59
 * @LastEditors: josh119891
 * @LastEditTime: 2021-01-21 14:13:39
 * @Description: file content
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  const prev = null;
  const curr = head;
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}  