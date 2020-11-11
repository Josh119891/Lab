/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    var arr = [1];
    var p2 = 0;
    var p3 = 0;
    var p5 = 0;
    var m;
    for(var i =cache.length;i<n;i++){
        m=Math.min(arr[p2]*2, arr[p3]*3, arr[p5]*5);
        if(m===arr[p2]*2){
            p2++;
        }
        if(m===arr[p3]*3){
            p3++;
        }
        if(m===arr[p5]*5){
            p5++;
        }
    }
    return arr[n-1];

};

