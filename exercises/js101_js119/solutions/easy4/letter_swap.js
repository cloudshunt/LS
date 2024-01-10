
/**
 * explicit:
 *  - words contains at least on letter
 *  - str will contain at least one word
 *  - contains only words and spaces
 *  - No leading, trailing or repeated spaces.
 * 
 * Algo:
 * 
 * SET newWords = '';
 * 
 * Split inPut words into the inputArray.
 * LOOP through the inputArray.
 *  LET firstChar = element's first char
 *  LET lastChar = element's last char
 *  LET midChars = element's mid char
 *  LET newChar = lastChar + midChars + firstChar;
 *  element = newChar
 * When done looping join back the array to
 * get the new string
 */

function swap(words) {
  if (words.length === 1) return words;

  return words.split(' ').map((word) => {
    let newChar = word[word.length - 1] +
                  word.slice(1, word.length - 1) +
                  word[0];
    return newChar;
  }).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log(swap('a'));