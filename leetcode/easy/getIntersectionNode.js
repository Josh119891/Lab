
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }
  let pA = headA, pB = headB;
  while (pA !== pB) {
    pA = pA !== null ? pA.next : headB;
    pB = pB !== null ? pB.next : headA;
  }
  return pA;
};