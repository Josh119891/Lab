/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    return matrix.reduce((arr, row) => arr.concat(row)).sort((a,b) => a-b)[k - 1];

};

var kthSmallest1 = function(matrix, k) {
    return [].concat(...matrix).sort((a,b) => {return a-b})[k-1]

}
