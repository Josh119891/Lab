function lengthOfLastWord(s: string): number {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (count > 0) return count;
      continue;
    } else {
      count++;
    }
  }
  return count;
}
