// a XOR 0 = a; a XOR a =0; 
// a XOR b XOR a = (a XOR a) XOR b = 0 XOR b =b;
var singleNumber = function(nums) {
    let ans = 0;
    for(const num of nums) {
        ans ^= num;
    }
    return ans;
};

//输入到Map,Set或二维数组里， count 为value