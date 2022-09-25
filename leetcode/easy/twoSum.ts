function twoSum(numbers: number[], target: number): number[] {
  let i = 0;
  let j = numbers.length - 1;
  while (i < j) {
    if (numbers[i] + numbers[j] > target) {
      j--;
    } else if (numbers[i] + numbers[j] < target) {
      i++;
    } else {
      break;
    }
  }
  return [i, j];
}

function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let index = map.get(nums[i]);
    if (index !== undefined) return [index, i];
    map.set(target - nums[i], i);
  }
  return [];
}
