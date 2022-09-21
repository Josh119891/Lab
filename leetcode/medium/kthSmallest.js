
var kthSmallest1 = function (matrix, k) {
  return [].concat(...matrix).sort((a, b) => a - b)[k - 1]

}
