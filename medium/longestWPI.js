/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
    let dp = [hours[0]>8? 1: -1], max = hours[0]>8? 1: 0;
    for(let j = 1; j<hours.length; j++){
        let curr = hours[j]>8 ? 1:-1, len = dp.length;
        for(let i = 0; i<=len; i++){
            dp[i] = (dp[i]||0) + curr
            if(dp[i]>0){
                max = Math.max(max, j - i + 1);
            }
        }
    }
    console.log(max)
    return max
};

longestWPI([9,9,6,0,6,6,9]);

