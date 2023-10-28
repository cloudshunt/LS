/*
input: 
 bill (num)
 tip percentage (num)
output:
 tip (num)
 total cost (num)

Explicit reqs:
 give in question, straight forward
Implicit reqs: 
 use readLine or something that will give prompt

Data Structure: N/A
Algo: basic tip calculation

 */


const rlsync = require('readline-sync');

let bill = Number(rlsync.question('What is the bill? '));
let tipPercentage = Number(rlsync.question('What is the tip percentage? '));

let tip = bill * (tipPercentage / 100);
let total = bill + tip;

console.log(`tip: \$${tip.toFixed(2)}`);
console.log(`Total: \$${total.toFixed(2)}`);

