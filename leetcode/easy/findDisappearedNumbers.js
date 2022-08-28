var findDisappearedNumbers = function (nums) {
  let n = nums.length;
  for (let num of nums) {
    let i = (num - 1) % n;
    nums[i] += n;
  }
  const ans = [];

  for (let [i, value] of nums.entries()) {
    if (value <= n) {
      ans.push(i + 1)
    }
  }
  return ans;
};