class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function ReverseList(head: ListNode): ListNode {
  // write code here
  let prev = null;
  let curr = head;
  let next: ListNode;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

function ReverseList(pHead) {
  let prev = null;
  let curr = pHead;
  let next = null;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
module.exports = {
  ReverseList: ReverseList,
};
