function productExceptSelf(nums: number[]): number[] {
  const ans: number[] = [];
  let r = 1;
  let l = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] = r;
    r *= nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    ans[i] *= l;
    l *= nums[i];
  }
  return ans;
}
