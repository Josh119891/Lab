/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
    var result='';
    for(var i=0;i<shifts.length-1;i++){
        for(var j=i+1;j<shifts.length;j++){
            shifts[i]+=shifts[j];
        }
        shifts[i]%=26;
        var res=S[i].charCodeAt()+shifts[i];
        if(res>122){
            res=(res-122)+96;
        }
        result+=String.fromCharCode(res);
    }
    var length=S.length;
    shifts[length-1]%=26;
    var last=S[length-1].charCodeAt()+shifts[length-1];
    if(last>122){
        last=(last-122)+96;
    }
    return result+=String.fromCharCode(last);
}

var shiftingLetters1 = function(S, shifts) {
    var temp=0;
    var res='';
    for(var i=shifts.length-1;i>=0;i--){
        temp += shifts[i] % 26;
        shifts[i] = temp % 26;
    }

    for(var j=0;j<S.length;j++){
        res+=shift(S[j],shifts[j]);
    }
    return res;
}


var shift = function(char, distance){

    return String.fromCharCode(char.charCodeAt()+distance>122?
        char.charCodeAt()+distance-26:
        char.charCodeAt()+distance);

}
