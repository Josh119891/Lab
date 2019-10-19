/**
 * @param {number[]} nums
 * @return {number[]}
 */
//90%和60%，但步骤太麻烦
var findErrorNums = function(nums) {
  var res = [];
  var arr = new Array(nums.length + 1);
  arr.fill(0);
  for (let num of nums) {
    arr[num] = arr[num] + 1 || 1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      res[0] = i;
    } else if (arr[i] === 0) {
      res[1] = i;
    }
  }
  return res;
};

var findErrorNums2 =function(nums){
    var hashMap = new Set(nums);
    var origin =0;
    var setSum=0;
    var errorSum=0;
    for(let i=0;i<nums.length;i++){
        origin+=i;
        errorSum+=nums[i];
    }
    for(let num of hashMap){
        setSum+=num;
    }
    return [errorSum-setSum,origin-setSum];


}




