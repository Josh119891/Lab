/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    var c = 0;
   for (var i = 0; i < nums.length; i++) {
     if (nums[i] < nums[i - 1]) {
       c++;
       if (c > 1) return false; // check for same number not repeated more than twice consequintely
       if (nums[i] <= nums[i - 2] && nums[i + 1] <= nums[i - 1]) return false;
     }
   }
   return true; 
 };