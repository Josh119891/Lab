function findWords(words: string[]): string[] {
  if (words.length === 0) return [];
  const keyboards = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  return words.filter((word) => {
    return keyboards.some((keylevel) =>
      word
        .toLocaleLowerCase()
        .split("")
        .every((char) => keylevel.includes(char))
    );
  });
}
