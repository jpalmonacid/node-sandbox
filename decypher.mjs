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
      if (char.charCodeAt() < 'a'.charCodeAt()
        || char.charCodeAt() > 'z'.charCodeAt()) {
        return char;
      }
      const offsettedCharCode = char.charCodeAt() - offset;
      let boundedCharCode = 0;
      if (offsettedCharCode >= 'a'.charCodeAt() && offsettedCharCode <= 'z'.charCodeAt()) {
        boundedCharCode = offsettedCharCode;
      } else if (offsettedCharCode < 'a'.charCodeAt()) {
        boundedCharCode = 'z'.charCodeAt() - ('a'.charCodeAt() - offsettedCharCode) + 1;
      } else if (offsettedCharCode > 'z'.charCodeAt()) {
        boundedCharCode = (offsettedCharCode - 'z'.charCodeAt()) + 'a'.charCodeAt() + 1;
      }
      return String.fromCharCode(boundedCharCode);
    })
    .join('');
}

export default decypher;
