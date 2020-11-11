/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var ans = 0;
    for(var num of nums) {
        if(num != val) {
            nums[ans] = num;
            ans++;
        }
    }
    return ans;

};

removeElement(
    [3,2,2,3],3);
