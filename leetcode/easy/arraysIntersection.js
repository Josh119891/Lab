/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    var arr = ([...arr1,...arr2,...arr3]).sort((a,b)=>a-b);
arr.push('#');
var count=1;
var res=[];
for(var i=0;i<arr.length;i++){
    if(arr[i]===arr[i+1]){
        count++;
        if(count===3){
            res.push(arr[i]);
        }
    }else{
        count=1;
    }
}

return res;
};