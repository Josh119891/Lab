/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let larIndex = nums.indexOf(Math.max(...nums))
    let lar = Math.max(...nums)
    for(let i=0; i<nums.length; i++) {
        if(nums[i]*2 > lar && nums[i] != lar) {
            return -1
        }
    }
    return larIndex
};
