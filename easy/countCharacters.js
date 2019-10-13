/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  return words
    .filter(word => {
      let charsRemain = chars.split("");
      let correctWord = true;

      word.split("").forEach(letter => {
        if (!correctWord) return;
        if (charsRemain.includes(letter)) {
          charsRemain.splice(charsRemain.indexOf(letter), 1);
        } else {
          correctWord = false;
        }
      });

      return correctWord;
    })
    .join("").length;
};

var countCharacters1 = function(words, chars) {
  var res = "";
  for (var i = 0; i < words.length; i++) {
    let temp = [...chars];
    let match = true;
    for (var j = 0; j < words[i].length; j++) {
      if (match) {
        if (temp.includes(words[i][j])) {
          temp.splice(temp.indexOf(words[i][j]), 1);
        } else {
          match = false;
        }
      }
    }
    if (match) {
      res += words[i];
    }
  }
  return res.length;
};
