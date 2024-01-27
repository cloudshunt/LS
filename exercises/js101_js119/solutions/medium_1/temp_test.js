let array = ['Chase', 'chase', 'Robert', 'robert', 'Fuad', 'fuad', 'JZ', 'jz', 'Laren', 'laren'];

/**
 * IF both lower, sort normal
 * IF both upper, sort normal
 * IF other (one is upper other one is lower), sort normal
 */

array.sort((a,b) => {
  if ( charIsLower(a[0]) && charIsLower(b[0])) {
    return a.charCodeAt() - b.charCodeAt();
  } else if (charIsUpper(a[0]) && charIsUpper(b[0])) {
    return a.charCodeAt() - b.charCodeAt();
  } else {
    return b.charCodeAt() - a.charCodeAt(); // b/c Capital letter has lower UTF score, which is less in numeric value
  }
});

function charIsUpper(char) {
  return 'A' < char && char < 'Z';
}

function charIsLower(char) {
  return 'a' < char && char < 'z';
}

console.log(array);

