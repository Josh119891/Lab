function getDecimalValue(head: ListNode | null): number {
  if (!head) return 0;
  let value = 0;
  while (head) {
    console.log(value, head.val);
    head = head.next;
  }
  return value;
}
