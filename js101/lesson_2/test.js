const READLINE = require('readline-sync');
function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Do you want to play again (y/n)?');
let answer = READLINE.question().toLowerCase();
while (answer !== 'n' && answer !== 'no' && answer !== 'y' && answer !== 'yes') {
  prompt('Please enter "y" or "n".');
  answer = READLINE.question().toLowerCase();
}