/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var res=new Set(nums);
    for(var i=1;i<Number.MAX_SAFE_INTEGER;i++){
     if(!res.has(i)){
         return i;
     }
 }
};
