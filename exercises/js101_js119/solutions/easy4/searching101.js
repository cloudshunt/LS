//further exploration: using some and with target number
function isIncluded(arr, value) {
  let included = arr.some((num) => num === value);
  if (included) console.log(`the number ${value} appears in ${arr}`);
  else console.log(`the number ${value} DOESN'T appear in ${arr}`);
}
// end of further exploration.

const READLINE = require('readline-sync');

let numArr = [];
let target;

for (let num = 1; num < 7; num += 1) {
  let input;
  let numSuffix;
  if (num === 1) numSuffix = 'st';
  else if (num === 2) numSuffix = 'nd';
  else if (num === 3) numSuffix = 'rd';
  else numSuffix = 'th';

  if (num === 6) {
    input = READLINE.question(`Enter the last number: `);
    target = input;
  } else {
    input = READLINE.question(`Enter the ${num}${numSuffix} number: `);
    numArr.push(input);
  }

}

let numArrIncludesTarget = numArr.includes(target);

if (numArrIncludesTarget) {
  console.log(`The number ${target} appears in ${numArr.join()}.`);
} else {
  console.log(`The number ${target} does not appear in ${numArr.join()}.`);
}