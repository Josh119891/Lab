function getLength(head: ListNode | null): number {
  let dumb = new ListNode(-1);
  dumb.next = head;
  let len = -1;
  while (dumb) {
    dumb = dumb.next;
    len++;
  }
  return len;
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null;
  let len = getLength(head);
  let dumb = new ListNode(-1);
  dumb.next = head;
  let cur = dumb;
  for (let i = 0; i < len - n; i++) {
    cur = cur.next;
  }
  cur.next = cur.next.next;

  return dumb.next;
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null;
  let dumb = new ListNode(-1);
  dumb.next = head;
  let fast = head;
  let slow = dumb;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;

  return dumb.next;
}
