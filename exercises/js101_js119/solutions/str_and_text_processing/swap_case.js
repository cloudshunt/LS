/**
 * 
 */

function swapCase(inputStr) {
  let result = inputStr.
    split('').
    map((char) => {
      if (isAlphabet(char)) {
        if (char === char.toUpperCase()) {
          return char.toLowerCase();
        } else {
          return char.toUpperCase();
        }
      }
      return char;
    }).
    join('');

  console.log(result);
}

function isAlphabet(char) {
  char = char.toLowerCase();
  return ('a' <= char) && (char <= 'z');
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"