function lastRemaining(n: number, m: number): number {
  let arr = new Array(n).fill(0).map((_, index) => index);
  let targetIndex: number = (m - 1) % arr.length;
  while (arr.length !== 1) {
    arr.splice(targetIndex, 1);
    targetIndex = (targetIndex + (m - 1)) % arr.length;
  }
  return arr[0];
}
