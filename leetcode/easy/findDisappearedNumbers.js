/**
 * @param {number[]} nums
 * @return {number[]}
 */

 /**
  * 非常差劲的代码
  */
var findDisappearedNumbers = function(nums) {
    var aSet = new Set(nums);
    var arr=[];
    for(var i=1;i<nums.length+1;i++){
        if(!aSet.has(i)){
            arr.push(i);
        }
    }
    return arr;
};

 /**
  * 176ms 45.4Mb
  */
var findDisappearedNumbers1 = function(nums) {
    let length = nums.length;
    let arr = [];
    for (let i = 0; i < length; i++) {
      arr[i] = i+1
    }
    for (v of nums) {
      arr[v-1] = -1
    }
    return arr.filter( i => (i > 0) )
};

var findDisappearedNumbers2 = function(nums) {

    return nums.sort((a,b)=>a-b).filter(function(num,index,self){
        if(num!=index+1)
          return index+1;
    });
      

};




findDisappearedNumbers1([4,3,2,7,8,2,3,1]);