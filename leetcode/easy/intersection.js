/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var hash1 = new Set(nums1);
    return nums2.filter(function(num,index,self){
            return hash1.has(num)&&(self.indexOf(num)==index);
        });
};

var intersection2 = function(nums1, nums2) {
    var hash1 = new Set(nums1);
    var hash2 = new Set(nums2);
    var res=[];
    for(var i of hash1){
        if(hash2.has(i)){
            res.push(i);
        }
    }
    return res;
};

