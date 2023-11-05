const READLINE = require('readline-sync');
const VALID_CHOICES = ['rock','paper','scissors', 'lizard', 'spock'];


function gameWinCheck (choice, otherChoice) {
  if ((choice === 'rock' && (otherChoice === 'scissors' || otherChoice === 'lizard')) ||
      (choice === 'paper' && (otherChoice === 'rock' || otherChoice === 'spock')) ||
      (choice === 'scissors' && (otherChoice === 'paper' || otherChoice === 'lizard')) ||
      (choice === 'lizard' && (otherChoice === 'spock' || otherChoice === 'paper')) ||
      (choice === 'spock' && (otherChoice === 'rock' || otherChoice === 'scissors'))) {
    return true;
  } else {return false}
}

function displayWinner(playerChoice, computerChoice) {
  prompt(`You chose ${playerChoice}, computer chose ${computerChoice}`);

  let playerWin = gameWinCheck(playerChoice, computerChoice);
  let computerWin = gameWinCheck(computerChoice, playerChoice);

  if ( playerWin) {
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
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let playerChoice = READLINE.question();

  while (!VALID_CHOICES.includes(playerChoice)) {
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


