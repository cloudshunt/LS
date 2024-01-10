function signedIntegerToString(num) {
  let sign = Math.sign(num);
  switch (sign) {
    case 1:
      return "+" + integerToString(num);
    case -1:
      num *= sign;
      return "-" + integerToString(num);
    case 0:
      return "0";
  }
}

function integerToString(num) {
  const DIGIT = ['0','1','2','3','4','5','6','7','8','9'];
  let result = '';


  do {
    let remainder = num % 10;
    num = Math.floor(num / 10);

    result = DIGIT[remainder] + result;
  } while (num > 0);

  return result;
}


console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
