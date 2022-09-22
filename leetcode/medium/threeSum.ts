function threeSum(nums: number[]): number[][] {
  const temp = nums.sort((a, b) => a - b);
  if (temp.length < 3) return [];
  const ans = [];
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] > 0) return ans; // 因为已经排序了，当i大于0就不可能三数等于0
    if (i > 0 && temp[i] === temp[i - 1]) continue; // 避免重复
    let l = i + 1;
    let r = temp.length - 1;
    while (l < r) {
      let sum = temp[i] + temp[l] + temp[r];
      if (sum === 0) {
        ans.push([temp[i], temp[l], temp[r]]);
        while (l < r && temp[l] === temp[l + 1]) l++;
        while (l < r && temp[r] === temp[r - 1]) r--;
        l++;
        r--;
      } else if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      }
    }
  }
  return ans;
}
