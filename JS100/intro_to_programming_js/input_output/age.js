let rlSync = require('readline-sync');
let curAge = Number(rlSync.question("How old are you? "));
console.log(`You are ${curAge} years old.`);


for (idx in years = [10,20,30]){
  console.log(`In ${years[idx]} years, you will be ${curAge + Number(years[idx])} years old.`);
}

