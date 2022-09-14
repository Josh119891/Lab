function maxProduct(words: string[]): number {
  let ans = 0;
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (!hasSameLetter(words[i], words[j])) {
        ans = Math.max(words[i].length * words[j].length, ans);
      }
    }
  }
  return ans;
}

function hasSameLetter(wordA: string, wordB: string): boolean {
  for (let char of wordA) {
    if (wordB.includes(char)) return true;
  }
  return false;
}
