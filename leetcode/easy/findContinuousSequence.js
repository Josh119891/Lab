/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  // 因为是两个以上正整数相加为target,所以最大值因为target /2
  const mid = target % 2 === 0 ? target / 2 : Math.ceil(target / 2) + 1;
  const ans = [];
  const temp = [];
  let sum = 0;
  for (let i = 1; i < mid; i++) {
    temp.push(i);
    sum += i;
    while (sum > target) {
      sum -= (temp.shift());
    }
    if (sum === target && temp.length >= 2) {
      ans.push([...temp]);
    }
  }
  return ans;
};