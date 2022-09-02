/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let ans = [];
  while (queue.length > 0) {
    let cur = queue.shift();
    ans.push(cur.val);
    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);

  }
  return ans;
};