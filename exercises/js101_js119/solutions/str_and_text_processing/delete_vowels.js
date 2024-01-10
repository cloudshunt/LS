/**
 * 
 */

function removeVowels(inputArr) {
  let vowels = 'aeiou';

  let result = inputArr.map((str) => {
    return str.split('').
      filter((char) => !vowels.includes(char.toLowerCase())).
      join('');
  });

  console.log(result);
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]