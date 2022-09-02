var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const ans = [];
  while (queue.length > 0) {
    let len = queue.length;
    let temp = []
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      temp.push(cur.val);
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    ans.push(temp);
  }
  return ans;
};