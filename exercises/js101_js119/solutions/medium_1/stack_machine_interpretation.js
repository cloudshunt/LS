/**
 * understanding question:
 * [3,6,4]  registor 7
 * operation
 * [3,6]  registor = 4 * 7 = 28
 * [3,6] registor = 28
 * operation
 * [3] registor = 6 * 28
 * [3] registor = 168
 * 
 * ---
 * Understanding the prob:
 * - register is not part of the stack
 * 
 * - MULT, removes last ele from stack,
 * registor value = last ele * registoer vaule
 * ex: stack= [3,6,4] reg=7
 *  MULT operation:
 *    stack = [3,6] (b/c pop stack)
 *    reg=28 (b/c 4 * 7)
 * 
 * DONE- n: place a value in registor.
 * DONE- PUSH: push register value onto stack, leave val in registor
 * DONE- MULT: remove last ele from stack,
 *         multiply that value with register num
 *         replace register num with the multiplied result
 * DONE- DIV: same operation as MULT, but divide instead
 * DONE- REMAINDER: same op as DIV, but remainder instead
 * - POP: REMOVE last ele from stack, replace register value with it.
 * - PRINT: print register value,
 * 
 * 5 PUSH 3 MULT PRINT:
 * stack = [] , reg = 0
 * 5: stack = [], reg = 5
 * PUSH: stack = [5], reg = 5
 * 3: stack = [5], reg = 3
 * MULT: stack = [], reg = 15
 * PRINT: print register value, is 15
 * 
 */

function initialization() {
  let stack = [];
  let register = 0;
  return [stack,register];
}

const PRINT = (reg) => console.log(reg);
const MULT = (stack, register) => {
  let lastElement = stack.pop();
  register *= lastElement;
  return register;
};
const DIV = (stack, register) => {
  let lastElement = stack.pop();
  register = Math.round(register / lastElement);
  return register;
};

const REMAINDER = (stack, register) => {
  let lastElement = stack.pop();
  register %= lastElement;
  return register;
};

const PUSH = (stack, register) => stack.push(register);
const POP = (stack) => stack.pop();

// eslint-disable-next-line max-lines-per-function
function goThroughCommands(commands, stack, register) {
  for (let cmd of commands) {

    switch (cmd) {
      case 'PRINT':
        PRINT(register);
        break;
      case 'PUSH':
        PUSH(stack, register);
        break;
      case 'POP':
        register = POP(stack, register);
        break;
      case 'MULT':
        register = MULT(stack, register);
        break;
      case 'DIV':
        register = DIV(stack, register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'REMAINDER':
        register = REMAINDER(stack, register);
        break;
      default:
        if (typeof cmd === 'number') { // place num in register
          register = cmd;
        }
    }


  }

}

function convertNumStrIntoNum(commands) {
  commands = commands.split(' ').map(str => {
    if (Number.isNaN( Number(str) )) {
      return str;
    } else return Number(str); //if num str is a num, return it as a number
  });

  return commands;
}

function minilang(commands) {
  let [stack, register] = initialization();

  commands = convertNumStrIntoNum(commands);
  goThroughCommands(commands, stack, register);

  //console.log(stack);
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)



/**
 * 2 logics,
 * 
 * 1. create logic that accepts multiple commands
 * and go through loops that executes all commands
 * sequentially
 *  create a new array where its str numbers are converted to numbers
 * 
 * 2.create a case where if command is a number
 * then set register as that number
 * 
 */