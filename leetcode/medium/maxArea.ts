function maxArea(height: number[]): number {
  let ans = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    let temp = Math.min(height[i], height[j]) * (j - i);
    ans = Math.max(ans, temp);
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }
  return ans;
}
