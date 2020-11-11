/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    const map = new Map();
    nums.forEach((num, index) => {
        if (!map.get(num)) map.set(num, [index]);//这个就直接倒入一个array
        else map.get(num).push(index);
    });
    this.nums = map;
};

Solution.prototype.pick = function(target) {
    const indexes = this.nums.get(target);
    return indexes ? indexes[Math.floor((Math.random() * indexes.length))] : null;
};