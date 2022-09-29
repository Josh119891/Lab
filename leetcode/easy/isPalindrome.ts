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

function isPalindrome(s: string): boolean {
  let txt = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  for (let i = 0, j = txt.length - 1; i <= j; i++, j--) {
    if (txt.charAt(i) !== txt.charAt(j)) return false;
  }
  return true;
}
