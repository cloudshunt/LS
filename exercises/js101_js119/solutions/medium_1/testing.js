let num = '1234567890';
let char = 'abcdefghijklmnopqrstuvwxyz';

// let x = Math.floor(Math.random() * 10);
// console.log(x);

const NUMBER = 'num';
const LETTER = 'letter';
const PATTERN = [8,4,4,4,12];

function getNumOrLetter() {
  let zeroOrOne = Math.floor(Math.random() * 2);
  return zeroOrOne === 0 ? NUMBER : LETTER;
}

function getRandomChar(numOrLetter) {
  let resultChar;

  if (numOrLetter === NUMBER) {
    let randomIdx = Math.floor(Math.random() * num.length);
    resultChar = num[randomIdx];
  } else {
    let randomIdx = Math.floor(Math.random() * char.length);
    resultChar = char[randomIdx];
  }
  return resultChar;

}

let result = '';
PATTERN.forEach((num) => {
  for (let idx = 0; idx < num; idx++) {
    result += getRandomChar(getNumOrLetter());
  }
  result += '-';
});

result = result.slice(0, result.length - 1);


console.log(result);
