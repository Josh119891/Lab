/**
 * 只允许一次交易
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var max=0;
    var profix;
     for( var i = 0;i<prices.length-1;i++){
         for(var j=i+1;j<prices.length;j++){
              profix = prices[j]-prices[i];
             if(profix>max){
                 max=profix;
             }
         }
     }
     return max;
 };

//找最小值
 var maxProfit2 = function(prices) {
    var max=0;
    var minValue=prices[0];
    for(var i=1;i<prices.length;i++){
        if(prices[i]<minValue){
            minValue=prices[i];
        }
        max=Math.max(prices[i]-minValue,max);
    }
    return max;
 };

 //最大值
 var maxProfit3 = function(prices){
    var max=0;
    var maxValue=prices[prices.length-1];
    for(var i=prices.length-2;i>=0;i--){
        if(prices[i]>maxValue){
            maxValue=prices[i];
        }
        max=Math.max(maxValue-prices[i],max);

    }
    return max;
 }

//最小值变形
var maxProfit = function(prices) {
    var min = prices[0]; 
    var max = 0;
    for (var i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
};