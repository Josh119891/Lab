/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */

 //超出时间限制
 var countSteppingNumbers = function(low, high) {
    var res=[];
    for(var i=low;i<=high;i++){
        if(i<10){
            res.push(i);
        }else{
            let arr=(i+'').split('');
            let isStepping=true;
            for(let j=0;j<arr.length-1;j++){
                    if(Math.abs(arr[j]-arr[j+1])!=1){
                        isStepping=false;
                }
            }
            if(isStepping==true){
                res.push(i);
            }
        }

    }
   
 
    return res;
};


countSteppingNumbers(0,21);