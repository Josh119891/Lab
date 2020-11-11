/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  var sum = 0;
  var res = 0;
  for (var c of s) {
    c === "L"?sum++:sum--;  
    if (sum === 0) res++;
  }
  return res;
};
const balancedStringSplit2 = function(s) {
  let bal = 0;
  return s.split("").reduce((pre, curr) => {
    curr === "L" ? bal++ : bal--;
    return bal === 0 ? pre + 1 : pre + 0;
  }, 0);
};
