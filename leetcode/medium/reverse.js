var reverse = function (x) {
  let ans = 0;
  while (x !== 0) {
    let cur = x % 10;
    console.log(cur)
    ans = ans * 10 + cur;
    x = ~~(x / 10);
    if (ans < Math.pow(-2, 31) || ans > Math.pow(2, 31) - 1) {
      return 0;
    }
  }
  return ans;

};
console.log(reverse(-321))