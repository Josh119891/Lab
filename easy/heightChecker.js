/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    var count=0;
    var arr= [...heights].sort((a,b)=>a-b);
    for(var i=0;i<heights.length;i++){
        if(heights[i]!=arr[i]){
            count++;
        }
    }
    return count;
};