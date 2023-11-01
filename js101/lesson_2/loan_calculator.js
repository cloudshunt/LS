const READLINE = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)) || Number(number) < 0;
}

function invalidMonths(numOfMonths) {
  return invalidNumber(numOfMonths) || //not a valid num OR
  !(Number.isInteger(Number(numOfMonths))) || //not an integer OR
  Number(numOfMonths) < 1; //less than 1 month
}

function monthlyPaymentCalc(loanAmt, APR, months) {
  //deal with 0 interest loans
  if (APR === '0') {
    return Number(loanAmt) / Number(months);
  }

  //Ex: APR is 15%, need to divide by 100 to make it 0.15 to allow for further
  //calculation
  let monthlyInterest = (Number(APR) / 100) / 12;

  let monthlyPmt = Number(loanAmt) *
                  (monthlyInterest /
                  (1 - Math.pow((1 + monthlyInterest), (-Number(months)))));
  return monthlyPmt;
}


prompt('Welcome to loan calculator!');

while (true) {
  console.log("--------------------------------------");

  prompt('What is your loan amount?');
  let loanAmount = READLINE.question();

  while (invalidNumber(loanAmount)) {
    prompt('Invlid entry, loan amount must be postive number');
    loanAmount = READLINE.question();
  }

  prompt('What is your loan duration? (in months)');
  let loanDurationMonths = READLINE.question();

  while (invalidMonths(loanDurationMonths)) {
    prompt('Invlid entry, loan months must be larger than 0 and be an integer');
    loanDurationMonths = READLINE.question();
  }

  prompt('What is your Annual Percentage Rate (APR)? ex: if it is 15.5%, enter 15.5');
  let APR = READLINE.question();

  while (invalidNumber(APR)) {
    prompt('Invlid entry, APR must be a positive number');
    APR = READLINE.question();
  }

  console.log(`\nCheck point:\n\
  Loan amount:$ ${loanAmount}\n\
  Loan duration: ${loanDurationMonths}\n\
  APR: ${APR}%\n`);

  let monthlyPayment = monthlyPaymentCalc(loanAmount, APR, loanDurationMonths);
  prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);

  prompt('Do another calculation? no = 0 yes = 1');
  let anotherRound = READLINE.question();
  while (anotherRound !== '1' && anotherRound !== '0') {
    prompt("Invalid entry, enter 1 to continue, 0 to terminate the program");
    anotherRound = READLINE.question();
  }

  if (anotherRound === '0') {
    break;
  } else if (anotherRound === '1') {
    continue;
  }

}