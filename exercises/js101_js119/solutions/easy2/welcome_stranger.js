/*
input: array1, object1
output: string

explicit req:
implicit req:

problem in my own words;
Given 2 arguments,
an array & an object.
use it to print information

Case:
Edge: what if it's empty string, do I need to deal?

D.S.: N/A
Algo:

Given Array1, Object1

RETURN combined elements of Array1,
and also the corresponding values
to all existing properties of Object
all combined into one sentence.

TIME 9 min
*/

function greetings(arr1, obj1) {
  // is there a simpler method besides need to loop through?
  let fullName = arr1.reduce((accu, curVal) => {
    // eslint-disable-next-line no-return-assign
    return accu += ' ' + curVal;
  }, '');
  fullName = fullName.trim();

  let titleAndJob = `${obj1.title} ${obj1.occupation}`;

  let message = `Hello, ${fullName}! Nice to have a ${titleAndJob} around.`;
  return message;

}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.