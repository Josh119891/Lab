/*
 * @Author: josh119891
 * @Date: 2021-03-27 12:10:08
 * @LastEditors: josh119891
 * @LastEditTime: 2021-03-27 12:10:21
 * @Description: 相交链表
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  let pA=headA;

    while(pA){
      let pB =headB;
      while(pB){
        if(pA===pB){
          return pA;
        }
        pB=pB.next;
      }
      pA=pA.next;
    }
    return null
};