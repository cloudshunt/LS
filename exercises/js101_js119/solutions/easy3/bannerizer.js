/*
Input: str (Sentence)
Output: str (sentence with frame around it)

implicit:
- sentence requires a space infront and a space at the end
- Given a sentence. the
width will be the sentence's length and
"-" on the front end and "-" on the back end.
example:
 -----
  dog
 -----

|
| dog
|
- given an empty str will return empty frame
width for empty frame: --
height remains at:
|
|
|

explicit:
- word will always fit in browser window

question:
- assuming words will be always in the mid section?
|
| here, no matter how long this sentence is?
|

Data structure: no tmuch
Algo:
 required to establish width "-" based on length of
 sentence add two more "-"

Psuedo code:

INPUT sentence

SET totalWidth = sentence's length + 2
SET widthBar = '-' repeat totalWidth times
SET widthSpace = ' ' repeat totalWidth times
PRINT +widthBar+
PRINT |widthSpace|
PRINT | sentence |
PRINT |widthSpace|
PRINT +widthBar+


NOW, truncate if it doesn't fit inside max width provided
as second argument

Assuming that max width doesn't
take default -- into consideration

I would assume that i will need to increase
the length of | to accomadate truncated
sentence

assume the I can truncate from any part of
the sentence

algo

Function arg(sentence totalWidth)
//there is limitation
IF totalwidth not equal undefined
  process with truncate

ELSE
  Process without truncate

Will need to increase vertical bar based
on how many truncation took place

EX:
space limit = 3
words = 4

verticalSpace required will
be based on?
need 2 vertical space (default space is 1)
Parameter for maxwidth EQUAL 1
1st, determine how many vertical
spaces i'll need by:
result = sentence length / maxWidth
if result < 0, then verticalSpace = 1
if result > result(floor)
  then verSpace = result + 1

horizontal amount = maxwidth


*/

function logInBox(sentence) {
  let totalWidth = sentence.length + 2;
  let widthBar = '-'.repeat(totalWidth);
  let widthSpace = ' '.repeat(totalWidth);

  let output = `\
  +${widthBar}+\n\
  |${widthSpace}|\n\
  | ${sentence} |\n\
  |${widthSpace}|\n\
  +${widthBar}+`;


  console.log(output);
}

