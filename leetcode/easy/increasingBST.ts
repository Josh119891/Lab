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

function inOrder(root: TreeNode | null): TreeNode[] {
  return root
    ? [...inOrder(root.left), new TreeNode(root.val), ...inOrder(root.right)]
    : [];
}

function increasingBST(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  const nodes = inOrder(root);
  let dumbNode = nodes[0];
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].right = nodes[i + 1];
  }
  return dumbNode;
}
