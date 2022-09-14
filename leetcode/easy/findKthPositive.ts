function findKthPositive(arr: number[], k: number): number {
  let index = 0;
  const ans = [];
  for (let i = 1; i <= 2000; i++) {
    if (arr[index] === i) {
      index++;
      continue;
    }
    console.log(ans);
    if (ans.length === k) return ans[ans.length - 1];
  }
}

var findKthPositive = function (arr, k) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= k) {
      k++;
    }
  }

  return k;
};
