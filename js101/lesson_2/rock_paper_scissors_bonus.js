const CLEAR = require('clear');
const READLINE = require('readline-sync');
const VALID_CHOICES = {
  rock: 'r',
  paper: 'p',
  scissors: 'sc',
  spock: 'sp'
};
const CHOICES_ABBREVIATION_ARR = Object.values(VALID_CHOICES);

const MESSAGE = selectionMessage(VALID_CHOICES);
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
  if (playerScore === GRAND_WIN_SCORE) {
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

function selectionMessage(validChoices) {
  let resultMessage = ``;
  for (const key in validChoices) {
    resultMessage += `${key} = ${validChoices[key]}, `;
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

function displayWelcomeMessage() {
  prompt("Welcome to the game of rock, paper, scissors, lizard and spock.");
}

function computerChoiceSelection() {
  let randomIndex = Math.floor(Math.random() * CHOICES_ABBREVIATION_ARR.length);
  let computerChoice = CHOICES_ABBREVIATION_ARR[randomIndex];
  return computerChoice;
}

function playerChoiceSelection() {
  let playerChoice = READLINE.question().toLowerCase();

  while (!(playerChoice in VALID_CHOICES) &&
         !CHOICES_ABBREVIATION_ARR.includes(playerChoice)) {
    prompt("That's not a valid choice");
    playerChoice = READLINE.question();
  }

  return playerChoice;
}

function playAgainSelection() {
  let answer = READLINE.question().toLowerCase();
  while (answer !== 'n' && answer !== 'no' && answer !== 'y' && answer !== 'yes') {
    prompt('Please enter "y" or "n".');
    answer = READLINE.question().toLowerCase();
  }
  return answer;
}

displayWelcomeMessage();
while (true) {
  prompt(`Choose one: ${MESSAGE}`);
  let playerChoice = playerChoiceSelection();
  let computerChoice = computerChoiceSelection();

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
  let answer = playAgainSelection();
  if (answer[0] !== 'y') break;
  CLEAR();
}
