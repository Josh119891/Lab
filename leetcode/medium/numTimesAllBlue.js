/**
 * @param {number[]} light
 * @return {number}
 */
var numTimesAllBlue = function(light) {
  let res = 0;
  let max = 0;
  for(let i =0;i<light.length();i++){
      max = Math.max(length[i],max);
      if(max === i+1){
        res++;
      }
  }
  return res;
};