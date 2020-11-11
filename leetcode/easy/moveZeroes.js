/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var count=0;
  for(var i=0;i<nums.length;i++){
      if(nums[i]===0){
          nums.splice(i,1); // 第一个是index,第二个是切多少位
          count++;
          i--;
      }
  }
    
    for(var j=0;j<count;j++){
        nums.push(0);
    }
}

var moveZeroes2 = function(nums){
    var length= nums.length;

    var lastZeroes=nums.filter(num=>nums!=0);
    length= length-lastZeroes.length;
    for(var i=0;i<length;i++){
        lastZeroes.push(0);
    }
}