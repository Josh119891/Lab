class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


const dfsWhile = (root) => {
  if (root === null) return [];
  const ans = [];
  const stack = [root];
  while (stack.length > 0) {
    // 因为pop是获取数组最后的node，
    // 所有若是最左边的话，应该cur.left在后面
    const cur = stack.pop();
    ans.push(cur.val);
    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
  }
  return ans;
}

const dfsRecursive = (root) => {
  if (root === null) return [];
  const leftValues = dfsRecursive(root.left);
  const rightValues = dfsRecursive(root.right);
  return [root.val, ...leftValues, ...rightValues];
}



const bfsWhile = (root) => {
  if (root === null) return [];
  const ans = []
  const queue = [root];
  while (queue.length > 0) {
    const cur = queue.shift();
    ans.push(cur.val)
    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right)
  }
  return ans;
}


const bfsRecursive = (...nodes) => {
  const cur = []
  const children = []
  for (let node of nodes) {
    if (node === null) continue;
    cur.push(node.val);
    if (node.left) children.push(node.left);
    if (node.right) children.push(node.right);
  }
  return [...cur, ...children]

}


const bfsWhileIncludes = (root, target) => {
  if (root === null) return false;
  const queue = [root];
  while (queue.length > 0) {
    const cur = queue.shift();
    if (cur.val === target) return true;
    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right)
  }
  return false;
}


const bfsRecursiveIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  return bfsRecursiveIncludes(root.left, target) || bfsRecursiveIncludes(root.right, target)
}



const dfsTreeSum = (root) => {
  if (root === null) return 0;
  let ans = 0
  const stack = [root];
  while (stack.length > 0) {
    const cur = stack.pop();
    ans += cur.val;
    if (cur.left) stack.push(cur.left);
    if (cur.right) stack.push(cur.right);

  }
  return ans;
}


const dfsTreeSum2 = (root) => {
  if (root === null) return 0;
  return root.val + dfsTreeSum2(root.left) + dfsTreeSum2(root.right);
}

const maxPathSum = (root) => {
  if (root === null) return 0;
  if (root.left === null && root.right === null) return root.val;
  const maxChild = Math.max(maxPathSum(root.left), maxPathSum(root.right));
  return root.val + maxChild;
}



const inOrder = (root) => {
  if (root === null) return;
  inOrder(root.left);
  console.log(root.value)
  inOrder(root.right);

}

const preOrder = (root) => {
  if (root === null) return;
  console.log(root.value)

  preOrder(root.left);
  preOrder(root.right);

}

const postOrder = (root) => {
  if (root === null) return;

  postOrder(root.left);
  console.log(root.value)

  postOrder(root.right);

}