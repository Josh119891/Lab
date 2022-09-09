function partition(arr, lo, hi) {
  let pivot = arr[lo];
  let index = lo;
  for (let i = lo; i <= hi; i++) {
    if (arr[i] < pivot) {
      index++;
      [arr[i], arr[index]] = [arr[index], arr[i]];
    }
  }
  [arr[lo], arr[index]] = [arr[index], arr[lo]];
  return index;
}

var getLeastNumbers = function (arr, k) {
  const length = arr.length;
  if (k >= length) return arr;
  let left = 0,
    right = length - 1;
  let index = partition(arr, left, right);
  while (index !== k) {
    if (index < k) {
      left = index + 1;
      index = partition(arr, left, right);
    } else if (index > k) {
      right = index - 1;
      index = partition(arr, left, right);
    }
  }

  return arr.slice(0, k);
};
