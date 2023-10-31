const READLINE = require('readline-sync');
const MSG = require('./calculator_messages.json');
const LANGUAGE = 'en';


function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function message(message, lang = LANGUAGE) {
  return MSG[lang][message];
}

let continueProgram = true;

while (continueProgram) {
  prompt(message('greetMessage')); //json greet

  prompt(message('firstNumAsk')); //json firstNumAsk
  let number1 = READLINE.question();

  while (invalidNumber(number1)) {
    prompt(message('notValidNumMessage')); //json notValidNumMessage
    number1 = READLINE.question();
  }

  console.log(message('secondNumAsk')); //json second num
  let number2 = READLINE.question();

  while (invalidNumber(number2)) {
    prompt(message('notValidNumMessage')); //json notValidNum DONE
    number2 = READLINE.question();
  }

  console.log( message('selectOperationMessage')); //json selectOperation DONE
  let operation = READLINE.question();

  while (!['1','2','3','4'].includes(operation)) {
    prompt(message('invalidOperationSelectMessage')); //json invalidOperationSelectMessage DONE
    operation = READLINE.question();
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

  console.log(message('resultMessage'),output); //json


  while (true) {
    prompt(message('repeatProgramSelectionMessage')); //json repeatProgramSelection
    let end = READLINE.question();

    if (end === '1') {
      continueProgram = true;
      break;
    } else if (end === '2') {
      continueProgram = false;
      break;
    } else {console.log(message('invalidContinueProgramSelectionMessage')) } //json
  }
}

