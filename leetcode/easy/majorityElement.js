
/**
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在众数。
 * @param {number[]} nums
 * @return {number}
 */

//取巧方式，当一个数出现次数>（n/2），无论偏大偏小，只要按顺序排列，中间都是它
var majorityElement = function(nums) {
        return nums.sort()[parseInt(nums.length/2)];// 因为3/2,结果为1.5，数组无法识别,要加parseInt
};

// 用map,key记数字，value记次数，设初识为1
var majorityElement2 = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    const map = new Map();
    for (let num of nums) {
        if (!map.get(num)) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1);//标记有多少次
            if (map.get(num) > nums.length / 2) {
                return num;
            }
        }
    }

};