function caesarCipher(str, shift) {
  strArray = str.split("");
  result = [];
  strArray.forEach((c) => {
    result.push(shiftLetter(c, shift));
  });
  return result.join("");
}

function shiftLetter(char, shift) {
  if (isLowercaseLetter(char)) {
    return shiftLowercaseLetter(char, shift);
  } else if (isUppercaseLetter(char)) {
    return shiftUppercaseLetter(char, shift);
  } else {
    return char;
  }
}

function shiftCharacter(char, shift, base, wrap) {
  return String.fromCharCode(
    ((char.charCodeAt(0) - base + shift) % wrap) + base
  );
}

function shiftLowercaseLetter(char, shift) {
  return shiftCharacter(
    char,
    shift,
    "a".charCodeAt(0),
    "z".charCodeAt(0) - "a".charCodeAt(0) + 1
  );
}

function shiftUppercaseLetter(char, shift) {
  return shiftCharacter(
    char,
    shift,
    "A".charCodeAt(0),
    "Z".charCodeAt(0) - "A".charCodeAt(0) + 1
  );
}

function isLowercaseLetter(str) {
  return str.length === 1 && /^[a-z]$/.test(str);
}

function isUppercaseLetter(str) {
  return str.length === 1 && /^[A-Z]$/.test(str);
}

module.exports = caesarCipher;
