const readline = require('readline-sync');
const msgJson = require('./calculator_messages.json');


function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

let continueProgram = true;

while (continueProgram) {
  prompt(msgJson.greetMessage); //json greet //done

  prompt("What's the first number?");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(msgJson.notValidNumMessage); //json notValidNumMessage DONE
    number1 = readline.question();
  }

  console.log('Second number?');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(msgJson.notValidNumMessage); //json notValidNum DONE
    number2 = readline.question();
  }

  console.log( msgJson.selectOperationMessage); //json selectOperation DONE
  let operation = readline.question();

  while (!['1','2','3','4'].includes(operation)) {
    prompt(msgJson.invalidOperationSelectMessage); //json invalidOperationSelectMessage DONE
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


  while (true) {
    prompt(msgJson.repeatProgramSelectionMessage); //json repeatProgramSelection
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

