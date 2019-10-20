/**
 * @param {number[]} nums
 * @param {number[]}
 */
var majorityElement2 = function(nums){
    var arr=[];
    var res=[];
    for(var num of nums){
        arr[num]=arr[num]+1||1;
        if(arr[num]>(nums.length/3)){
            if(!res.includes(num)){
                res.push(num);

            }
        }
    }
    return res;
};