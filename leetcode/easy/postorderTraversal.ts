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

function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  const ans = [];
  const stack = [root];
  while (stack.length) {
    const cur = stack.pop();
    ans.unshift(cur.val);
    if (cur.left) stack.push(cur.left);

    if (cur.right) stack.push(cur.right);
  }
  return ans;
}
