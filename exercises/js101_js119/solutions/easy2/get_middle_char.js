/*
  Input: Str
  Output: Str

  Question in my Words:
  Given a string,
  return 1 middle character if input str length is odd
  return 2 middle character if input str len is even

  explicit:
    Input: non-empty str

  Data: N/A
  Algo:

  SET function oddOrEvenCheck(para: inputStr)
      IF inputStr % 2 EQUALs 0:
        RETURN "even"
      ELSE
        RETURN "odd"

  SET resultStr = ''
  SET oddOrEven = oddOrEvenCheck(inputStr.length)
  IF oddOrEven is odd:
    midChar = round down (inputStr length / 2)
    resultStr += midChar
    RETURN resultStr
  IF oddOrEven is even:
    midRightChar = len / 2
    midLeftChar = midRightChar - 1
    resultStr += midLeftChar + midRightChar
    RETURN resultStr
Odd cases:
    ex1: if len is 5, return idx 2
    ex2: if len is 1, return idx 0
    round down result works

Even cases:
    ex1: if len is 4, return idx 1 & 2
    ex2: if len is 2, return idx 0 & 1
    midRightChar = len / 2
    midLeftChar = midRightChar - 1
 */


function centerOf(inputStr) {
  function oddOrEvenCheck(inputStrLen) {
    if (inputStrLen % 2 === 0) return "even";
    else return "odd";
  }


  let resultStr = '';
  let oddOrEven = oddOrEvenCheck(inputStr.length);

  if (oddOrEven === 'odd') {
    let midChar = inputStr[Math.floor(inputStr.length / 2)];
    resultStr += midChar;
    return resultStr;
  }  else if (oddOrEven === 'even') {
    let midRightChar = inputStr[inputStr.length / 2];
    let midLeftChar = inputStr[(inputStr.length / 2) - 1];
    resultStr += midLeftChar + midRightChar;
    return resultStr;
  }
}


function outPut(result) {
  console.log(result);
}

outPut(centerOf('I Love JavaScript'));
outPut(centerOf('Launch School'));
outPut(centerOf('Launch'));
outPut(centerOf('Launchschool'));
outPut(centerOf('x'));

