/**
 * 前序 / 后序 +中序 可重构二叉树 （前提是能定位root的值
 * 前序遍历：根->左->右   中序遍历：左->根->右
 */

/**
 * 思路: 根据前序 或 后序的特定，获取根节点的值
 * 找到中序的根节点index，然后分成两部分开始递归
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  const root = new TreeNode(preorder[0])
  const index = inorder.indexOf(preorder[0])
  root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
  root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
  return root;
};