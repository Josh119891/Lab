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

function averageOfSubtree(root: TreeNode | null): number {
  if (!root) return 0;
  let ans = 0;
  const dfs = (root: TreeNode | null) => {
    if (!root) return [0, 0];
    const left = dfs(root.left);
    const right = dfs(root.right);
    let value = root.val + left[0] + right[0];
    if (root.val === Math.floor(value / (1 + left[1] + right[1]))) ans++;
    return [value, left[1] + right[1] + 1];
  };
  dfs(root);
  return ans;
}
