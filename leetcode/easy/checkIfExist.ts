function checkIfExist(arr: number[]): boolean {
  const map = new Map();
  for (let num of arr) {
    if (map.get(num) === 2 || map.get(num * 2) === 1) return true;
    map.set(num, 1);
    map.set(num * 2, 2);
  }
  return false;
}
