//STILL INCORRECT
/** NOTE, totally miss one little part....
 * should be more careful
 * 
 * Algorithm:
 * 
 * 2 parts
 * 
 * 1st, get the last number
 * 1 corresponds to st
 * 2 to nd
 * 3 to rd
 * 0,4 ~ 9 to th
 * 
 * 2nd, get the number to corespond to
 * what century. Once I find the pattern
 * the algorithm won't be hard to write.
 * 
 * 1 ~ 100, 1st century
 * 101 ~ 200, 2nd century
 * 1001 ~ 1100, 11th century
 * 10101 ~ 10200 102nd century
 * 
 * How to determine what century?
 * first century
 * 1/ 100 = 0.01
 * 100 / 100 = 1
 * 
 * second century
 * 101 / 100 = 1.01 
 * 200 / 100 = 2
 * 
 * 10th century
 * 1001 / 100 = 10.01
 * .. 1010 /100 = 10.10
 * 1100 / 100 = 11
 * 
 * Pattern, if divide the number without decimal
 * than it is that num / 100 century
 *  
 * when  num / 100 has decimal, round it up will
 * give correct century.
 * 
 * 
 * i'll use object to store corresponding
 * 1: "st" IF
 * 2: "nd" else IF
 * 3: "rd" else IF
 * ELSE th
 * 
 * 
  * 1st, get the last number
 * 1 corresponds to st
 * 2 to nd
 * 3 to rd
 * 0,4 ~ 9 to th
 * 
 * 1st get the correct century
 * 
 *  RESULT = num / 100 
 * IF result has decimal
 * round it up to get get the correct century
 * 
 * ELSE: result is the correct century
 * 
 * get last digit of result,
 * if digit equal 1, then concat th to result
 * if digit equal 2, then concat nd to result
 * if digit equal to 3, concat 3rd to result
 * ELSE, concat th to the result
 */

function century(num) {

  let centuryNum = num / 100;
  if (centuryNum > Math.floor(centuryNum)) centuryNum = Math.ceil(centuryNum);

  let answer = String(centuryNum);
  let lastDigitStr = answer.slice(-1);
  if (lastDigitStr === '1') return answer + "st";
  else if (lastDigitStr === '2') return answer + "nd";
  else if (lastDigitStr === '3') return answer + "rd";
  else return answer + "th";

}