// Pseudo code
/*
- ask user for first number
- ask user for second number

- ask user to select an operation to perform.
- perform operation on the 2 numbers
- print result to the terminal.
*/

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// prompt("Welcome to Calculator!");

// prompt("What's the first number?");
// let number1 = readline.question();

// while (invalidNumber(number1)) {
//   prompt("not a valid number, try again");
//   number1 = readline.question();
// }

// console.log('Second number?');
// let number2 = readline.question();

// while (invalidNumber(number2)) {
//   prompt("not valid number, try again");
//   number2 = readline.question();
// }

// console.log(
//   // eslint-disable-next-line no-multi-str
//   "Select an operation.\n\
// 1) Add 2) Subtract 3) Multiply 4) Divide"
// );
// let operation = readline.question();

// while (!['1','2','3','4'].includes(operation)) {
//   prompt('Must choose 1,2,3 or 4');
//   operation = readline.question();
// }

// let output;
// switch (operation) {
//   case '1':
//     output = Number(number1) + Number(number2);
//     break;
//   case '2':
//     output = Number(number1) - Number(number2);
//     break;
//   case '3':
//     output = Number(number1) * Number(number2);
//     break;
//   case '4':
//     output = Number(number1) / Number(number2);
//     break;
// }

// console.log(`result is ${output}`);

let continueProgram = true;

while (continueProgram) {
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

  // prompt('Do another round of calculation? 1 = yes, 2 = no ');
  // end = readline.question();

  // if (end === '1') {continue} //continue program
  // else if (end === '2') {continueProgram = false}
  // else {console.log('invalid input, try again.')}

  while (true) {
    prompt('Do another round of calculation? 1 = yes, 2 = no ');
    let end = readline.question();

    if (end === '1') {
      continueProgram = true;
      break;
    } else if (end === '2') {
      continueProgram = false;
      break;
    } else {console.log('invalid input, try again.') }
  }
}

