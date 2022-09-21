function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA && !headB) return null;
  if (!headA) return headB;
  if (!headB) return headA;
  const set = new Set();
  while (headA) {
    set.add(headA);
    headA = headA.next;
  }
  while (headB) {
    if (set.has(headB)) return headB;
    headB = headB.next;
  }
  return null;
}

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA || !headB) return null;
  let pA = headA;
  let pB = headB;
  while (pA !== pB) {
    pA = pA !== null ? pA.next : headB;
    pB = pB !== null ? pB.next : headA;
  }
  return pA;
}
