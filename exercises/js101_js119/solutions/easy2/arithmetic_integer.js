/*
input: num1(int), num2 (int)
output: log various operations's output
*/

const READLINE = require('readline-sync');

function prompt(message) {
  console.log(`==> ${message}`);
}


prompt("Enter first number: ");
let num1 = Number(READLINE.question());

prompt("Enter second number: ");
let num2 = Number(READLINE.question());

prompt(`${num1} + ${num2} = ${ num1 + num2}`);
prompt(`${num1} - ${num2} = ${ num1 - num2}`);
prompt(`${num1} * ${num2} = ${ num1 * num2}`);
prompt(`${num1} / ${num2} = ${ (num1 / num2).toFixed(2)}`);
prompt(`${num1} % ${num2} = ${ num1 % num2}`);
prompt(`${num1} ** ${num2} = ${ Math.pow(num1,num2)}`);
