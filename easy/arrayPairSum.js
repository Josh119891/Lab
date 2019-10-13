/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums=nums.sort((a,b)=>a-b);
    console.log(nums);
    var sum=0;
    for(var i=0;i<nums.length-1;i=i+2){
        sum+=nums[i];
    }
    return sum;
};
arrayPairSum([1,2,3,4,5])//?

