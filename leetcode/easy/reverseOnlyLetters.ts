function reverseOnlyLetters(s: string): string {
  let reg = /^[a-zA-Z]+$/;
  let text = [...s];
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    while (!reg.test(text[l])) {
      l++;
    }
    while (!reg.test(text[r])) {
      r--;
    }

    if (l >= r) break;
    [text[l], text[r]] = [text[r], text[l]];
    l++;
    r--;
  }
  return text.join("");
}
