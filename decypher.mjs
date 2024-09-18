function decypher(cypher, needle) {
  const words = cypher.split(' ');
  let i = 0, found = false, decypheredWord = '';
  while (!found && i < words.length) {
    if (words[i].length === needle.length) {
      const offset = words[i].charCodeAt() - needle.charCodeAt();
      decypheredWord = decodeText(words[i], offset);
      if (decypheredWord === needle) {
        found = true;
      }
    }
    i++;
  }
  const offset = words[i - 1].charCodeAt() - needle.charCodeAt();
  const decypheredText = decodeText(cypher, offset);
  return decypheredText;
}

function decodeText(text, offset) {
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
