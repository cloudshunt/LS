/*
input:
 num (number)
 response (str)
output:
  sum (number) OR product (number) // inclusive of 1

Explicit requirements:
 check response, depending on respone
 if respone is s
 calculate sum from 1 to input num from user
 if respone is p
 calculate product from 1 to input num from user

Implicit requirements: use readLineSync from library
 figure out what product is and calculate it

Word question in my own way: straight forward, question no Need?

Data: no need
Algo: calculate sum, calculate product

 num variable: recieve user input, convert to number
 sumOrProduct variablel: recieve user input, convert to lower case

 if sumOrProduct is s, then
  variable sum = 0;
  loop: loop initialization = 1, loop condi: i<=num, loop increment: +=1
    sum += initialization
  
 if sumOrProduct is p, then
  variable product = 1;
  loop: loop initialization = 1, loop condi: i<=num, loop increment: +=1
    product *= initialization
  
*/
//----------------------------------------------------------------
/*
Additon, add error handling.
  what error to catch?
  for num:
  input string for num,
  input number with decimal insteead of int,
  
  for sumOrProudct:
  input that are not s or q
*/

// function calcSum(num){
//   let sum = 0;
//   for (let i = 1; i <= num; i+=1){
//     sum+=i;
//   }
//   console.log(`sum is ${sum}`);
// }

// function calcProd(num){
//   let product = 1;
//   for (let i = 1; i <= num; i+=1){
//     product*=i;
//   }
//   console.log(`prdouct is ${product}`);
// }

// const rlsync = require('readline-sync');

// let num;
// let sumOrProduct;

// try{
//   num = Number(rlsync.question(`Integer greater than 0: `));
//   if (Number.isNaN(num) ){
//     throw new Error('Error, Not a Number!');
//   } else if( num < 1){
//     throw new Error('Error, given number less than 1');
//   }

//   sumOrProduct = (rlsync.question(`s or q? `)).toLowerCase();
//   if (sumOrProduct !== 's' || sumOrProduct != 'q'){
//     throw new Error('Error, invalid input');
//   }

// } catch(e){
//   console.error(`${e.message}`);
// }


// if (sumOrProduct === 's'){
//   calcSum(num)
// } else if(sumOrProduct === 'p'){
//   calcProd(num)
// }

//----------------------------------------------------------------

//FURTHER EXPLORATION
// if given are lists of numbers, what would i do?
function calcSum(numArr){
  let sum = numArr.reduce((accu, curVal) => accu + curVal, 0)
  return sum;
}

function calcProd(numArr){
  let product = numArr.reduce((accu, curVal) => accu * curVal, 1)

}

const rlsync = require('readline-sync');

// can i just change this to a list without input?
let numArr = rlsync.question(`Give a list of num greater than 0: `);
let sumOrProduct;

try{

  sumOrProduct = (rlsync.question(`s or q? `)).toLowerCase();
  if (sumOrProduct !== 's' || sumOrProduct != 'q'){
    throw new Error('Error, invalid input');
  }

} catch(e){
  console.error(`${e.message}`);
}


if (sumOrProduct === 's'){
  calcSum(numArr)
} else if(sumOrProduct === 'p'){
  calcProd(numArr)
}

