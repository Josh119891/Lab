/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    if(A.length==1) return true;
    var inc=false;;
    var dec=false;;
    for(var i=0;i<A.length-1;i++){
        if(A[i]<A[i+1]){
            inc=true;
        }else{
            dec=true;
        }

        if(inc&&dec){
            return false;
        } 
    }
    return !(inc&&dec);
};

