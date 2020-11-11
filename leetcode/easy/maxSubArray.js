/*
 * @param {number[]} nums
 * @return {number}
 * 正数增益法
 *  -2，3，-1，1，-3
 * 第一步: <0 => sum=-2
 * 第二步：sum<0 => sum=3， 并被比大小输入ans
 * 第三步： >0=> sum=2,  比大小，比不过
 */
var maxSubArray = function(nums) {
    var sum = 0;
    var max = -Number.MAX_VALUE;
  
    for (var i = 0; i < nums.length; i++) {
      sum = Math.max(sum + nums[i], nums[i]);
      max = Math.max(max, sum);
    }
    return max;
  };

console.log(maxSubArray([-1,-2,-3,-4]));
