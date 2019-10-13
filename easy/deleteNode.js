/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

 //因为node是要具体删除的数字，所以跳过node自身，链接下一个node就是删除

var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};