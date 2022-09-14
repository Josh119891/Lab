function singleNumber(nums: number[]): number {
  const map = new Map();
  for (let num of nums) {
    map.set(num, map.get(num) + 1 || 1);
  }
  for (let [key, values] of map.entries()) {
    if (values === 1) return key;
  }
  return -1;
}
