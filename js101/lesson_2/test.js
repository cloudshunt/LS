const READLINE = require('readline-sync');
const VALID_CHOICES = {
  rock: 'r',
  paper: 'p',
  scissors: 'sc',
  spock: 'sp'
};

// const VALID_CHOICES = ['rock','paper','scissors', 'lizard', 'spock'];
// const VALID_CHOICES_ABBREVIATIONS = ['r','p','sc','l','sp'];
const MESSAGE = selectionMessage(VALID_CHOICES);
function prompt(message) {
  console.log(`=> ${message}`);
}

function selectionMessage(validChoices) { //DONE
  let resultMessage = ``;
  for (const key in validChoices) {
    resultMessage += `${key} = ${validChoices[key]}, `;
  }

  //rid of the extra comma and space ay the end of message
  resultMessage = resultMessage.slice(0, resultMessage.length - 2);

  return resultMessage;
}

prompt(`Choose one: ${MESSAGE}`); //DONE
let playerChoice = READLINE.question().toLowerCase();

let choicesAbbreviationsArr = Object.values(VALID_CHOICES);

while (!(playerChoice in VALID_CHOICES) &&
       !choicesAbbreviationsArr.includes(playerChoice)) {
  prompt("That's not a valid choice");
  playerChoice = READLINE.question();
}