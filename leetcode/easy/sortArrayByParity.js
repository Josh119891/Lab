/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    var ans=[];
    for(var e of A){
        if(e%2==0){
            ans.push(e);
        }
    }
        for(var o of A){
        if(o%2==1){
            ans.push(o);
        }
    }
    
    return ans
};

var sortArrayByParity = function(A) {
    const temp = [];
    A.forEach(v => {
        v % 2 === 0 ? temp.unshift(v) : temp.push(v);
    })
    
    return temp;
};

var sortArrayByParity = function(A) {
    return [...A.filter(v => v % 2 === 0), ...A.filter(v => v % 2 !== 0)];
};