/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    let max = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
        if (i >= k - 1) {
            max = Math.max(max, sum / k);
            sum -= nums[i - k + 1];
        }
    }
    
    return max;
};


findMaxAverage([1,12,-5,-6,50,3],4);
findMaxAverage([5],1);