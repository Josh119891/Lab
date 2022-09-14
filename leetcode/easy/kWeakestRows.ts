function kWeakestRows(mat: number[][], k: number): number[] {
  const arr = [];
  for (let i = 0; i < mat.length; i++) {
    let num = getAmount(mat[i]);
    arr.push([num, i]);
  }
  console.log(arr);
  return arr
    .sort((a, b) => a[0] - b[0])
    .slice(0, k)
    .map((i) => i[1]);
}

function getAmount(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor(right - left);
    if (arr[mid] === 0 && arr[mid - 1] === 1) {
      return mid;
    } else if (arr[mid] === 1) {
      left = mid + 1;
    } else if (arr[mid] === 0) {
      right = mid - 1;
    }
  }
  return right + 1;
}

function kWeakestRows(mat: number[][], k: number): number[] {
  const ans = [];
  const colLen = mat[0].length;
  const rowLen = mat.length;
  for (let i = 0; i < colLen; i++) {
    for (let j = 0; j < rowLen; j++) {
      if (ans.includes(j)) continue;
      if (mat[j][i] === 0) {
        ans.push(j);
        if (ans.length === k) return ans;
      }
    }
  }
  // 有0的情况不满足 k的数量，需要加入全是1的情况
  let i = 0;
  while (ans.length < k) {
    if (mat[i][colLen - 1] === 1) {
      ans.push(i);
    }
    i++;
  }

  return ans;
}
