function decypher(cypher, needle) {
  const offset = cypher.charCodeAt() - needle.charCodeAt();
  const decypheredText = cypher.split('')
    .map(char => {
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
  return decypheredText;
}

export default decypher;
