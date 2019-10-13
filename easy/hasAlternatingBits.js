/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    var arr=n.toString(2).split('');
    for(var i=0;i<arr.length-1;i++){
        if(arr[i]===arr[i+1]){
            return false;
        }
    }
    return true;
};