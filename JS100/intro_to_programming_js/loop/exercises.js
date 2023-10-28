// function factorial(n){

//   let result = 1;

//   for (let num = n; num >= 1; num-=1){
//     result *= num;
//   }

//   return result;

// }

// console.log(factorial(1)) //1
// console.log(factorial(2)) // 2
// console.log(factorial(3)) //  6



// function randomNumberBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let tries = 0;

// for(let result=0;result <= 2;) {
//   result = randomNumberBetween(1, 6);
//   tries += 1;
// }

// console.log('It took ' + String(tries) + ' tries to get a number greater than 2');


function rec_factorial(n){
  if (n === 1) {return 1}
  else if (n === 2) {return 2}

  
  return n * rec_factorial(n - 1);

}

console.log(rec_factorial(1)) //1
console.log(rec_factorial(2)) //2
console.log(rec_factorial(3)) //6
console.log(rec_factorial(4)) //24