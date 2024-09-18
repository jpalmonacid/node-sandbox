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
      if (!isLowercaseAlphabetChar(char) && !isUppercaseAlphabetChar(char)) {
        return char;
      }
      const offsettedCharCode = char.charCodeAt() - offset;
      let lowestCharCode = 0, highestCharCode = 0;
      if (isLowercaseAlphabetChar(char)) {
        lowestCharCode = 'a'.charCodeAt();
        highestCharCode = 'z'.charCodeAt();
      } else if (isUppercaseAlphabetChar(char)) {
        lowestCharCode = 'A'.charCodeAt();
        highestCharCode = 'Z'.charCodeAt();
      }
      let boundedCharCode = shiftCharBetweenBoundaries(offsettedCharCode, lowestCharCode, highestCharCode);
      return String.fromCharCode(boundedCharCode);
    })
    .join('');
}

function isUppercaseAlphabetChar(char) {
  return char.charCodeAt() >= 'A'.charCodeAt()
    && char.charCodeAt() <= 'Z'.charCodeAt();
}

function isLowercaseAlphabetChar(char) {
  return char.charCodeAt() >= 'a'.charCodeAt()
    && char.charCodeAt() <= 'z'.charCodeAt();
}

function shiftCharBetweenBoundaries(charCode, lowestCharCode, highestCharCode) {
  let boundedCharCode = 0;
  if (charCode >= lowestCharCode && charCode <= highestCharCode) {
    boundedCharCode = charCode;
  } else if (charCode < lowestCharCode) {
    boundedCharCode = highestCharCode - (lowestCharCode - charCode) + 1;
  } else if (charCode > highestCharCode) {
    boundedCharCode = (charCode - highestCharCode) + lowestCharCode + 1;
  }
  return boundedCharCode;
}

export default decypher;
