function multiply(num1, num2) {
  return num1 * num2;
}

function powerToTheNth(num, nth) {
  let resultNum = num;

  for (let i = 1; i < nth; i += 1) {
    resultNum = multiply(resultNum, num);
  }

  return resultNum;
}

console.log(powerToTheNth(5,1));
console.log(powerToTheNth(5,3) === 125); // logs true
console.log(powerToTheNth(-8, 2) === 64); // logs true

/*FURTHER EXPLORATION, make func into
 power to the n */