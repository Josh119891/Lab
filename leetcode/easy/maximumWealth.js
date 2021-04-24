/**
 * @param {number[][]} accounts
 * @return {number}
 * 
 */
//  给你一个 m x n 的整数网格 accounts ，其中 accounts[i][j] 是第 i​​​​​​​​​​​​ 位客户在第 j 家银行托管的资产数量。返回最富有客户所拥有的 资产总量 。

//  客户的 资产总量 就是他们在各家银行托管的资产数量之和。最富有客户就是 资产总量 最大的客户。
const sumArray = (arr) => arr.reduce((pre, cur) => pre + cur, 0)


var maximumWealth = function (accounts) {
  let max = 0;
  for (let account of accounts) {
    max = Math.max(sumArray(account), max)
  }
  return max;
};


console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));