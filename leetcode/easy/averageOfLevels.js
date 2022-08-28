const averageOfLevels = (root) => {
  //BFS
  if (root === null) return null;
  let res = [];
  let queue = [root];
  while (queue.length) {
    const levelSize = queue.length;
    let curSum = 0
    for (let i = 0; i < levelSize; i++) {
      let cur = queue.shift();
      curSum += cur.val
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    res.push(curSum / levelSize)


  }
  return res;
};