function decypher(cypher, needle) {
  const words = cypher.split(' ');
  let i = 0, found = false, cypherOffset = 0;
  while (!found && i < words.length) {
    const currentWord = words[i];
    if (currentWord.length === needle.length) {
      const currentWordOffset = currentWord.charCodeAt() - needle.charCodeAt();
      const decypheredWord = shiftText(currentWord, currentWordOffset);
      if (decypheredWord === needle) {
        found = true;
        cypherOffset = currentWordOffset;
      }
    }
    i++;
  }
  if (!found && i === words.length) {
    return 'invalid';
  }
  const decypheredText = shiftText(cypher, cypherOffset);
  return decypheredText;
}

function shiftText(text, offset) {
  return text.split('')
    .map(char => {
      if (
        (char.charCodeAt() < 'a'.charCodeAt()
          || char.charCodeAt() > 'z'.charCodeAt())
        && (char.charCodeAt() < 'A'.charCodeAt()
          || char.charCodeAt() > 'Z'.charCodeAt())
        ) {
        return char;
      }
      const offsettedCharCode = char.charCodeAt() - offset;
      let boundedCharCode = 0, lowestCharCode = 0, highestCharCode = 0;
      if (
        char.charCodeAt() >= 'a'.charCodeAt()
        && char.charCodeAt() <= 'z'.charCodeAt()
      ) {
        lowestCharCode = 'a'.charCodeAt();
        highestCharCode = 'z'.charCodeAt();
      } else if (char.charCodeAt() >= 'A'.charCodeAt() && char.charCodeAt() <= 'Z'.charCodeAt()) {
        lowestCharCode = 'A'.charCodeAt();
        highestCharCode = 'Z'.charCodeAt();
      }
      if (offsettedCharCode >= lowestCharCode && offsettedCharCode <= highestCharCode) {
        boundedCharCode = offsettedCharCode;
      } else if (offsettedCharCode < lowestCharCode) {
        boundedCharCode = highestCharCode - (lowestCharCode - offsettedCharCode) + 1;
      } else if (offsettedCharCode > highestCharCode) {
        boundedCharCode = (offsettedCharCode - highestCharCode) + lowestCharCode + 1;
      }
      return String.fromCharCode(boundedCharCode);
    })
    .join('');
}

export default decypher;
