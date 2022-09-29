function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;
  const set = new Set(nums);
  let ans = 0;
  for (let num of set) {
    if (!set.has(num - 1)) {
      let temp = 0;
      while (set.has(num++)) {
        temp++;
      }
      ans = Math.max(ans, temp);
    }
  }

  return ans;
}

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
