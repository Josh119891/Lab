/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    var length =A.length;
    var res=[];
    var odd = A.filter(x=>x%2!=0);
    console.log(odd);
    var even= A.filter(x=>x%2==0);
    console.log(even);
    var route=0;
    for(var i=0;i<length;i++){
        if(i%2==0){
            res.push(even[route]);
            
        }else{
            res.push(odd[route]);
            route++
        }
    }
    console.log(res);
    return res;
};
//自建数组
var sortArrayByParityII2 = function(A) {
    var res=[];
    var even=0;
    var odd=1;
    for(var i=0; i<A.length;i++){
        if(A[i]%2===0){
            res[even]=A[i];
            even+=2;
        }
        if(A[i]%2!=0){
            res[odd]=A[i];
            odd+=2;
        }
    }
    console.log(res);
    return res;
};


sortArrayByParityII2([4,2,5,7]);
