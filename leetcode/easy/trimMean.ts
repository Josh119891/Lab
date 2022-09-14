function trimMean(arr: number[]): number {
  const len = arr.length;
  const trimResult = arr
    .sort((a, b) => a - b)
    .slice(Math.ceil(len / 20), len - Math.floor(len / 20));
  return trimResult.reduce((pre, cur) => pre + cur, 0) / trimResult.length;
}
