var minNumber = function (nums) {
  return nums.sort((a, b) => `${a}${b}` - `${b}${a}`).join('')
};