function xor(val1, val2) {
  if ((!!val1 === true) && (!!val2 === false)) return true;
  else if ((!!val1 === false) && (!!val2 === true)) return true;
  else return false;
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true