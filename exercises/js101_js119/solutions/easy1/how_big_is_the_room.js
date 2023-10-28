/*
input:
 length:number
 width:number
output:
 roomArea: number

Explicit req:
  create prompt that recieves user input for length and width
  calculate roomArea based on length * width * 10.7639
  use readlineSYnc.prompt to collect input
  assume inputs are all valid

Implicit reqs:
  N/A

Put question into my own words (mental model):
  create prompt to recieve user input, length and width.
  use it to calcuate length * width * 10.7639
  and log the result

Test cases: 
  len = 10, width = 7, output = 753.47
Edge cases:
 N/A

Data structure: N/A
Algorith: just the basic math

Anything else? need to remember how to use npm to get 
readlineSync.prompt method

Don't really need pseduo code, it's straight forward
*/

// const rlsync = require('readline-sync');
// const SQMETERS_TO_SQUAREFEET = 10.7639

// let length = Number(rlsync.question("length ?\n"));
// let width = Number(rlsync.question("width ?\n"));
// let areaSqaureMeter = length * width;
// let areaSqaureFeet = (areaSqaureMeter * SQMETERS_TO_SQUAREFEET).toFixed(2);
// console.log(`room is ${areaSqaureMeter} (${areaSqaureFeet} square feet).`);


// FURTHER EXPLORATION
/*
req:
ask user for meters or feet
output and show conversions
*/

const rlsync = require('readline-sync');
const SQMETERS_TO_SQUAREFEET = 10.7639

let metersOrFeet = (rlsync.question("Meters or Feet?\n")).toLowerCase()
console.log(metersOrFeet, typeof metersOrFeet);
let length = Number(rlsync.question("length?\n"));
let width = Number(rlsync.question("width?\n"));

if (metersOrFeet === 'meters'){
  let areaSqaureMeter = length * width;
  let areaSqaureFeet = (areaSqaureMeter * SQMETERS_TO_SQUAREFEET).toFixed(2);
  console.log(`room is ${areaSqaureMeter} sqaure meters (${areaSqaureFeet} square feet).`);
} else if (metersOrFeet === 'feet') {
  let areaSqaureFeet = length * width;
  let areaSqaureMeter = (areaSqaureFeet / SQMETERS_TO_SQUAREFEET).toFixed(2);
  console.log(`room is ${areaSqaureFeet} square feet (${areaSqaureMeter} square meters).`);
}