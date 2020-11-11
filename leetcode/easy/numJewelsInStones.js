/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 * 96ms 36.2ms
 */
var numJewelsInStones = function(J, S) {
    var count=0;
    for(var s of S){
        for(var j of J){
            if(s==j){
                count++;
            }
        }
    }
    return count;
};


var numJewelsInStones1 = function(J, S) {
    var count=0;
    var jSet = new Set(J);
    for(var s of S){
        if(jSet.has(s)){
            count++;
        }
    }
    return count;
};


var numJewelsInStones2 = function(J, S) {
    var count=0;
    for(var s of S){
       if(J.indexOf(s)!=-1){
           count++;
       }
    }
    return count;
  
};
