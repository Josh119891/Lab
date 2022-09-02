/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

var mergeTwoLists = function (l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  let ans = temp = new ListNode();
  while (l1 && l2) {
    if (l1.val > l2.val) {
      temp.next = l2;
      l2 = l2.next;
    } else {
      temp.next = l1;
      l1 = l1.next;
    }
    temp = temp.next;
  }
  temp.next = l1 ? l1 : l2;

  return ans.next;
};