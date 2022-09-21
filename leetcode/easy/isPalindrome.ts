/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
  if (!head) return false;
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] !== arr[j]) return false;
    i++;
    j--;
  }
  return true;
}
