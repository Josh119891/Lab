function maxProfit(prices: number[]): number {
  let ans = 0;
  let temp = prices[0];
  for (let i = 1; i < prices.length; i++) {
    temp = Math.min(prices[i], temp);
    ans = Math.max(prices[i] - temp, ans);
  }
  return ans;
}
