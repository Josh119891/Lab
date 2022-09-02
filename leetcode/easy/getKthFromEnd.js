/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let ans = head;
  let count = 0;
  while (head.next) {
    count++;
    head = head.next;
  }
  for (let i = 0; i <= count - k; i++) {
    ans = ans.next;
  }
  return ans;
};

var getKthFromEnd = function (head, k) {
  let fast = head; let slow = head;
  while (fast && k > 0) {
    fast = fast.next;
    k--;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next
  }
  return slow;
};