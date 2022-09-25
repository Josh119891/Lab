// 逻辑： 前后缀分列
var goodIndices = function (nums, k) {
  let len = nums.length;
  let arrA = new Array(len).fill(1);
  let arrB = new Array(len).fill(1);
  // 列出非递增的数组， index-1为 前面有多少个 非递增数， index 为包括自身在内共有多少个  非递增数
  for (let i = 1; i < len; i++) {
    if (nums[i] <= nums[i - 1]) {
      arrA[i] = arrA[i - 1] + 1;
    }
  }
  // 列出非递减数组， 跟nums[i+1]对比, 处理逻辑相同
  for (let i = len - 2; i >= 0; i--) {
    if (nums[i] <= nums[i + 1]) {
      arrB[i] = arrB[i + 1] + 1;
    }
  }
  const ans = []
  // 检查左右两边，长度相合的数字
  for (let i = k; i < len - k; i++) {
    if (arrA[i - 1] >= k && arrB[i + 1] >= k) {
      ans.push(i);
    }
  }
  return ans;
};
