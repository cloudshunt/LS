// function swapCase(msg) {
//   let resultMsg = "";

//   for (let idx in msg) {
//     if (msg[idx].charCodeAt() <= 90) resultMsg += (msg[idx]).toLowerCase();
//     else if (msg[idx].charCodeAt() >= 97) resultMsg += (msg[idx]).toUpperCase();
//   }

//   console.log(resultMsg);
// }

// let munstersDescription = "The Munsters are creepy and spooky.";
// swapCase(munstersDescription);

// function factors(number) {
//   let factors = [];

//   for (let divisor = number; divisor > 1; divisor -= 1) {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//   }
//   return factors;
// }

// console.log(factors(10));


//-------------------

function rps(fist1, fist2) {
  // Return winning Hand or tie
  if (fist1 === "rock") return fist2 === "paper" ? "paper" : "rock";
  // return the winning hand or tie
  else if (fist1 === "paper") return fist2 === "scissors" ? "scissors" : "paper";
  // return winning hand or tie
  else return fist2 === "rock" ? "rock" : "scissors";

}
//                         (       paper         ,     rock               )
console.log(   rps(   rps(  rps("rock", "paper"), rps("rock", "scissors")  ), "rock"   )   );

//paper
