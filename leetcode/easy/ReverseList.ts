function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let cur = head;
  let prev = null;
  let next = null;
  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}

var reverseList = function (head) {
  let [prev, curr] = [null, head];
  while (curr) {
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }
  return prev;
};
