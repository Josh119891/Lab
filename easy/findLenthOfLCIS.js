/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(nums.length<=1){
        return nums.length;
    }
    var count=1;
    var max=1;
    for(var i=0;i<nums.length-1;i++){
        if(nums[i+1]>nums[i]){
            count++;
        }else{
            count=1;
        }
        max=Math.max(count,max);
    }
    return max;
};
findLengthOfLCIS ([1,3,5,4,7]);