/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var res=[];

 for(var i=0;i<nums.length;i++){
   var temp=1;
    for(var j=0;j<nums.length;j++){
       if(i!=j){
         temp*=nums[j];
       }
    }
    res.push(temp);
 }

 return res;
};