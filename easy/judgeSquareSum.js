/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
        for(var i=Math.floor(Math.sqrt(c));i>=0;i--){
            if(Number.isInteger(Math.sqrt(c-i*i)))
                return true        
        }
        return false
};


var judgeSquareSum1= function(c){
    if(c==0) return true;
    for(var a=0;a*a<c;a++){
        if(Math.sqrt(c-(a*a))%1==0){
            return true;
        }
    }
    return false;
}
