/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var j=s.length-1;
    var i=0;
    while(i<j){
        [s[i],s[j]]=[s[j],s[i]];
        i++;
        j--;
    }
};