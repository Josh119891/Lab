
/*
 * @Author: josh119891
 * @Date: 2021-03-16 09:20:40
 * @LastEditors: josh119891
 * @LastEditTime: 2021-03-27 12:09:42
 * @Description: 有效括号
 */


// ? 原理: map只允许左边输入，若有右边输入，则查看栈内最后一个是否对应
function isValid(s) {
  if(s.length%2!==0) return false;
  const temp=[]
  const map ={ "(":")", "{":"}","[":"]"}
  for(let char of s){
    if(map[char]){
      temp.push(char);
    }else{
      if(char!==map[temp.pop()]){
        return false;
      }
    }
    
  }
  return temp.length===0;
};