function numberOfLines(widths: number[], s: string): number[] {
  const MAX_WIDTH = 100;
  let ans = 1;
  let cur = 0;
  for (let char of s) {
    let num = widths[char.charCodeAt(0) - 97];
    if (cur + num > MAX_WIDTH) {
      ans++;
      cur = num;
    } else {
      cur += num;
    }
  }
  return [ans, cur];
}
