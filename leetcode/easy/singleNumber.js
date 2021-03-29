/*
 * @Author: josh119891
 * @Date: 2021-03-27 12:14:00
 * @LastEditors: josh119891
 * @LastEditTime: 2021-03-27 12:14:00
 * @Description:  只出现一次的数字
 */
var singleNumber = function(nums) {
  for(let item of nums){
      if(nums.indexOf(item)===nums.lastIndexOf(item)) return item
  }
};
var singleNumber = function(nums) {
  let ans = 0;
  for(const num of nums) {
      ans ^= num; //异或
  }
  return ans;
};

