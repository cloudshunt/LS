const READLINE = require('readline-sync');
const VALID_CHOICES = ['rock','paper','scissors', 'lizard', 'spock'];
const VALID_CHOICES_ABBREVIATIONS = ['r','p','sc','l','sp'];
const MESSAGE = selectionMessage(VALID_CHOICES, VALID_CHOICES_ABBREVIATIONS);
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard', 'sc', 'l'],   r: ['scissors', 'lizard', 'sc', 'l'],
  paper:    ['rock',     'spock', 'r', 'sp'],    p: ['rock',     'spock', 'r', 'sp'],
  scissors: ['paper',    'lizard', 'p', 'l'],    sc:['paper',    'lizard', 'p', 'l'],
  lizard:   ['paper',    'spock', 'p', 'sp'],    l: ['paper',    'spock', 'p', 'sp'],
  spock:    ['rock',     'scissors', 'r', 'sc'], sp:['rock',     'scissors', 'r', 'sc'],
};

function selectionMessage(choices, abbreviationChoices) {
  let resultMessage = '';

  for (let idx = 0; idx < choices.length; idx += 1) {
    resultMessage += `${choices[idx]} = ${abbreviationChoices[idx]}, `;
  }
  //rid of the extra comma and space and the end of message
  resultMessage = resultMessage.slice(0, resultMessage.length - 2);

  return resultMessage;
}


function gameWinCheck (choice, otherChoice) {
  return WINNING_COMBOS[choice].includes(otherChoice);
}

function displayWinner(playerChoice, computerChoice) {
  prompt(`You chose ${playerChoice}, computer chose ${computerChoice}`);

  let playerWin = gameWinCheck(playerChoice, computerChoice);
  let computerWin = gameWinCheck(computerChoice, playerChoice);

  if (playerWin) {
    prompt('You win!');
  } else if (computerWin) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}


while (true) {
  prompt(`Choose one: ${MESSAGE}`);
  let playerChoice = READLINE.question();

  while (!VALID_CHOICES.includes(playerChoice) &&
         !VALID_CHOICES_ABBREVIATIONS.includes(playerChoice)) {
    prompt("That's not a valid choice");
    playerChoice = READLINE.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(playerChoice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = READLINE.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = READLINE.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}


