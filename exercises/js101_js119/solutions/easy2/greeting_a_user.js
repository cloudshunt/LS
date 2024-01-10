const READLINE = require('readline-sync');

let name = READLINE.question("Your name? ");


if (name[name.length - 1] === "!") {
  name = name.replace("!", "").toUpperCase();
  console.log(`HELLO ${name}, WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}