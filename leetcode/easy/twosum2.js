/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function(numbers, target) {
    var l=numbers.length, i=0, j=l-1;
    while (numbers[i]+numbers[j] !== target) {
      numbers[i]+numbers[j] < target ? i++ : j--;
    }
    return [i+1, j+1];
  };