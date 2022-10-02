class INode {
  val: number;
  children: INode[];
  constructor(val?: number, children?: INode[]) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
  }
}

function maxDepth(root: INode | null): number {
  if (!root) return 0;
  let stack: [INode, number][] = [[root, 1]];
  let ans = 1;
  while (stack.length) {
    let [cur, level] = stack.pop();
    ans = Math.max(ans, level);
    if (cur.children) {
      cur.children.forEach((i) => {
        stack.push([i, level + 1]);
      });
    }
  }
  return ans;
}
