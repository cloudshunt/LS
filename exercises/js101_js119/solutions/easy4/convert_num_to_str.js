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

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"

