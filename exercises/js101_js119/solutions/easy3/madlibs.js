/*
PEDAC
INPUT: str1(noun) str2(verb) str3(adjective) str4(adverb)
OUTPUT:
Print sentence using INPUT
ex: do you VERB your ADJ NOUN ADVERB? that's hilarious !

what if given empty input?

Req:
implicit: import readline sync library.

No Algo or data structure

I'll do manual input first then repalce with readline
 */


const READLINE = require(`readline-sync`);

let noun = READLINE.question('Enter a noun: ');
let verb = READLINE.question('Enter a verb: ');
let adjective = READLINE.question('Enter a adjective: ');
let adverb = READLINE.question('Enter a adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
