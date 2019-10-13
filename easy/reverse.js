 /**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var res=0;
    while (parseInt(x / 10)) {
        res = 10 * res +  10 * parseInt(x % 10);
        x = parseInt(x / 10);
    }
    if (res > 2147483647|| res < -2147483648) return 0;
    return  res + x;
    
};

var reverse2 = function(x) {
    var sign=(x<0)?-1:1;
    var res=parseInt(String(x).split('').reverse().join(''))*sign;
        if (res > 2147483647|| res < -2147483648) return 0;

       return res;
};

var reverse3 = function(x) {
    var sign=(x<0)?-1:1;
    var res=String(Math.abs(x)).split('');
    var i=0;
    var j=res.length-1;
    while(i<j){
        [res[i],res[j]]=[res[j],res[i]]
        i++;
        j--;
    }
    res=res.join('')*sign;

        if (res > 2147483647|| res < -2147483648) return 0;

       return res;

};