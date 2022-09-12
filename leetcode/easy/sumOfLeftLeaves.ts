/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) return 0;
  const queue = [root];
  let sum = 0;
  while (queue.length) {
    let cur = queue.shift();

    if (cur.left) {
      if (cur.left.left === null && cur.left.right === null) {
        sum += cur.left.val;
      } else {
        queue.push(cur.left);
      }
    }
    if (cur.right) queue.push(cur.right);
  }
  return sum;
}
