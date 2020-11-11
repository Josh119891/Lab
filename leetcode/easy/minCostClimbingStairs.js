/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    var dp=[];
    dp[0]=cost[0];
    dp[1]=cost[1];
    for(i=2;i<cost.length;i++){
        dp[i]=cost[i]+Math.min(dp[i-1],dp[i-2]);
    }
  
    return Math.min(dp[cost.length-1],dp[cost.length-2]);
};

minCostClimbingStairs([10, 15, 20]);