/**
 * @param {number[]} nums
 * @return {boolean}
 */

//双指针
var containsDuplicate = function(nums) {
    for(var i =0;i<nums.length-1;i++){
        for(var j=i+1;j<nums.length;j++){
            if (nums[i]==nums[j]){
                return true;
            }
        }
    }
    return false;
};

//排序后，找下一位
var containsDuplicate2 = function(nums) {
    nums.sort();
     for(var i=0;i<nums.length-1;i++){
         if(nums[i]==nums[i+1]){
             return true; 
         }
     }
     return false;
 };

//利用Set的不重复性
var containsDuplicate3 = function(nums) {
    return new Set(nums).size<nums.length;
};

//利用indexOf回馈第一找到
var containsDuplicate4 = function(nums) {
    for(var i=0;i<nums.length;i++){
        if(nums.indexOf(nums[i])!=i){
            return true;
        }
    }
    return false;
};

