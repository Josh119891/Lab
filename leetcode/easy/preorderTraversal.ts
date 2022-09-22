function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  const ans = [];
  const stack = [root];
  while (stack.length) {
    const cur = stack.pop();
    ans.push(cur.val);
    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
  }
  return ans;
}
