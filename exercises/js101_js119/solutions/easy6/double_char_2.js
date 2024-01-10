
function doubleConsonants(inputStr) {
  let resultString = '';
  for (let idx = 0; idx < inputStr.length; idx += 1) {
    let char = inputStr[idx];
    let charLowerCase = char.toLowerCase();

    if ('aeiou'.includes(charLowerCase)) {
      resultString += char;
      continue;
    } else if (!( charLowerCase >= 'a' && charLowerCase <= 'z' )) {
      resultString += char;
      continue;
    }

    resultString += char.repeat(2);
  }
  return resultString;

}

// function hi(char) {
//   let charLowerCase = char.toLowerCase();
//   if (charLowerCase >= 'a' && charLowerCase <= 'z') {
//     console.log(char);
//   } else console.log('invalid');
// }

// hi(' ');

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""