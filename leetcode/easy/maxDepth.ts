function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  const queue = [root];
  let ans = 0;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    ans++;
  }
  return ans;
}
