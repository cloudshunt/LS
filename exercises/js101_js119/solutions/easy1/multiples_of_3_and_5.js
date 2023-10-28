/*
PEDAC:

Input: inputNum(number)
Output: outputNum(number)

Explicit:
- create function
- inputNum greater than 1, and is an Integer
Implicit:
  N/A

Question in my own words:
  from 1 ~ inputNumber (inclusive),
  Get the sum of any numbers that are multiples of 3 OR 5.

Case: given in example, run it through my own words
Edge Case: N/A

Data Structure: N/A
Algo:
language agnostic psudeo code in my own words

  Function - SET param: inputNum
    SET result = 0
    Loop from 1 ~ inputNum: SET num = 1
      IF num is multiples of 3:
        result+=num
      ELSE IF num is multiple of 5:
        result+=num
      num increment by 1
    
    RETURN result

TIME: 15min
*/

// TIME for code:
// think i'm done: 3min20sec
function multisum(inputNum){
  let result = 0
  for (let num = 0; num <= inputNum; num+=1){
    if (num % 3 == 0){ result += num }
    else if (num % 5 == 0){result += num }
  }
  console.log(result)
}


multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168