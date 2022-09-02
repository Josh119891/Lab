/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const ans = [];
  let left2Right = true;
  while (queue.length > 0) {
    let len = queue.length;
    let temp = [];
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      if (left2Right) {
        temp.push(cur.val);
      } else {
        temp.unshift(cur.val)
      }
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    left2Right = !left2Right;
    ans.push(temp);
  }
  return ans;
};