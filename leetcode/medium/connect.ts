/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
interface Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;
}

function connect(root: Node | null): Node | null {
  if (!root) return null;
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    const temp = [];
    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      temp.push(cur);
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    temp.forEach((value, index, arr) => (value.next = arr[index + 1] || null));
  }
  return root;
}
