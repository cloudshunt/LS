function multiply(num1, num2){
  return num1 * num2
}

function getNum(prompt){
  let rlSync = require('readline-sync');
  return rlSync.question(prompt)
}

let prompt1 = "Enter the first number: ";
let firstNum = getNum(prompt1);

let prompt2 = "Enter the Second number: ";
let secondNum = getNum(prompt2);

let result = multiply(firstNum, secondNum);
console.log(`${firstNum} * ${secondNum} = ${result}`);
