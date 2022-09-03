/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const ans = [...prices];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        ans[i] = prices[i] - prices[j];
        break;
      }
    }

  }
  return ans;
};