/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  const arr = Array.from(num.toString());
  let dp = [1, 1];
  for (let i = 2; i < arr.length + 1; i++) {
    let temp = Number(arr[i - 2] + arr[i - 1]);
    if (temp >= 10 && temp <= 25) {
      dp[i] = dp[i - 1] + dp[i - 2];
    } else {
      dp[i] = dp[i - 1]
    }


  }
  return dp[arr.length]

};