/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  let spaces = Array.from(text).filter((i) => i === ' ').length;
  const words = text.trim().split(/\s+/);
  if (words.length === 1) {
    return words[0] + ' '.repeat(spaces)
  }
  const gap = Math.floor(spaces / (words.length - 1));
  const ending = spaces % (words.length - 1);
  return words.join(' '.repeat(gap)) + ' '.repeat(ending)
};