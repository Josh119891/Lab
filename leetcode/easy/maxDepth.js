/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0
};
var maxDepth = function (root) {
  //BFS
  let maxDepth = 0;
  if (!root) return maxDepth
  let queue = [root];
  while (queue.length > 0) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      if (cur && cur.left) queue.push(cur.left);
      if (cur && cur.right) queue.push(cur.right);
    }
    maxDepth++;
  }
  return maxDepth;
};