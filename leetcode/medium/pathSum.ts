class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

type MyStack = [TreeNode | null, number, number[]];

function pathSum(root: TreeNode | null, target: number): number[][] {
  const ans: number[][] = [];
  if (!root) return ans;
  const stack: MyStack[] = [[root, target, []]];
  while (stack.length) {
    let [cur, target, steps] = stack.pop();
    let temp = target - cur.val;
    steps.push(cur.val);
    if (!cur.left && !cur.right) {
      if (temp === 0) {
        ans.push([...steps]);
      }
    } else {
      if (cur.right) stack.push([cur.right, temp, [...steps]]);
      if (cur.left) stack.push([cur.left, temp, [...steps]]);
    }
  }
  return ans;
}
