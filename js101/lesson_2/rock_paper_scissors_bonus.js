const CLEAR = require('clear');
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
const GRAND_WIN_SCORE = 3;
let playerScore = 0;
let computerScore = 0;

function grandWinnerAnnounce() {
  if (playerScore === 3) {
    prompt('Player is the grand winner!!');
  } else if (computerScore === 3) {
    prompt('Computer is the grand winner!!');
  }
  console.log('-----------------------------');
}

function resetScores() {
  playerScore = 0;
  computerScore = 0;
}

function displayScore() {
  prompt('Current Scores are:');
  console.log(`Player: ${playerScore}\nComputer: ${computerScore}`);
}

function selectionMessage(choices, abbreviationChoices) {
  let resultMessage = '';

  for (let idx = 0; idx < choices.length; idx += 1) {
    resultMessage += `${choices[idx]} = ${abbreviationChoices[idx]}, `;
  }
  //rid of the extra comma and space ay the end of message
  resultMessage = resultMessage.slice(0, resultMessage.length - 2);

  return resultMessage;
}


function gameWinCheck (choice, otherChoice) {
  return WINNING_COMBOS[choice].includes(otherChoice);
}

function scoreIncrement(playerWin, computerWin) {
  if (playerWin) {
    playerScore += 1;
  } else if (computerWin) {
    computerScore += 1;
  }
}

function displayWinner(playerWin, computerWin) {
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

  let playerWin = gameWinCheck(playerChoice, computerChoice);
  let computerWin = gameWinCheck(computerChoice, playerChoice);

  prompt(`You chose ${playerChoice}, computer chose ${computerChoice}`);
  displayWinner(playerWin, computerWin);
  scoreIncrement(playerWin, computerWin);
  displayScore();

  if (playerScore === GRAND_WIN_SCORE || computerScore === GRAND_WIN_SCORE) {
    grandWinnerAnnounce();
    resetScores();
  }


  prompt('Do you want to play again (y/n)?');
  let answer = READLINE.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = READLINE.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
  CLEAR();
}
