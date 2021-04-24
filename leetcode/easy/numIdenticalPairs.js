/**
 * @param {number[]} nums
 * @return {number}
 */
//  给你一个整数数组 nums 。

//  如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。

//  返回好数对的数目。


//暴力解法
// var numIdenticalPairs = function (nums) {
//   let result = 0;
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; i < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         result++;
//       }
//     }
//   }
//   return result;
// };

// 是多边形，连线的问题
// times :  1, 2, 3, 4, 5, 6
// paris:   0, 1, 3, 6, 10
//辅助栈
function numIdenticalPairs(nums) {
  const map = {};
  let pairs = 0
  for (let key of nums) {
    map[key] = map[key] + 1 || 0;
    pairs += map[key];
  }
  return pairs;
};