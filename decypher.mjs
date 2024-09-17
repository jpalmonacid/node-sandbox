function decypher(cypher, needle) {
  const offset = cypher.charCodeAt() - needle.charCodeAt();
  const decypheredText = cypher.split('')
    .map(char => {
      const charCode = char.charCodeAt() - offset;
      let calculatedCharCode = 0;
      if (charCode >= 'a'.charCodeAt() && charCode <= 'z'.charCodeAt()) {
        calculatedCharCode = charCode;
      } else if (charCode < 'a'.charCodeAt()) {
        calculatedCharCode = 'z'.charCodeAt() - ('a'.charCodeAt() - charCode) + 1;
      } else if (charCode > 'z'.charCodeAt()) {
        calculatedCharCode = (charCode - 'z'.charCodeAt()) + 'a'.charCodeAt() + 1;
      }
      return String.fromCharCode(calculatedCharCode);
    })
    .join('');
  return decypheredText;
}

export default decypher;
