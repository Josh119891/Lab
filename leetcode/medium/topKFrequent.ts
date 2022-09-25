function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map();
  for (let num of nums) {
    map.set(num, map.get(num) + 1 || 1);
  }
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((i) => i[0]);
}
