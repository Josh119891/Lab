function isSubsequence(s: string, t: string): boolean {
  let i = 0;
  for (let char of t) {
    if (char === s[i]) {
      i++;
    }
  }
  return s.length === i;
}
