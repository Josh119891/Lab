/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map=[];
    for(let c of s){
        map[c]=map[c]+1||1;
    }
    let arr=[];
    for(let key in map){
        arr.push(key.repeat(map[key]));
    }
    
    return arr.sort((a,b)=>b.length-a.length).join('');
    
};

console.log(frequencySort("tree"))