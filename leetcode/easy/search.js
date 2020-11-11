/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var left=0;
    var right=nums.length-1;
    while(left<right){
        let mid= parseInt((left+(right-left))/2);
        if(nums[mid]===target){
            return mid;
        }else if(target<nums[mid]){
            right=mid-1;
        }else {
            left=mid+1;
        }
        
    }
    return -1;
};

search([5],5);