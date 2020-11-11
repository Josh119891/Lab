/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var res='';
    if(!strs.length){ return res;}
       
    for(var i=0;i<strs[0].length;i++){
        for(var j=0;j<strs.length;j++){
            if(strs[0][i]!=strs[j][i]){
                return res;
            }
        }
        res+=strs[0].charAt(i);
    }
    return res;
};
