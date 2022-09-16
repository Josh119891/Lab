function peakIndexInMountainArray(arr: number[]): number {
  let i = 0;
  while (arr[i] < arr[i + 1]) {
    i++;
  }
  return i;
}

function peakIndexInMountainArray(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      return mid;
    }
    if (arr[mid] > arr[mid + 1]) {
      right = mid - 1;
    } else if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    }
  }
  return left;
}
