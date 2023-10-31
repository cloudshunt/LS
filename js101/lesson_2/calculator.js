const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("Welcome to Calculator!");

prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("not a valid number, try again");
  number1 = readline.question();
}

console.log('Second number?');
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("not valid number, try again");
  number2 = readline.question();
}

console.log(
  // eslint-disable-next-line no-multi-str
  "Select an operation.\n\
1) Add 2) Subtract 3) Multiply 4) Divide"
);
let operation = readline.question();

while (!['1','2','3','4'].includes(operation)) {
  prompt('Must choose 1,2,3 or 4');
  operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

console.log(`result is ${output}`);

console.log('hi');
