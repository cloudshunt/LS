/*
Anonymizer:
Good explanation for Anonymizer question, LS130 practice questions.
 */

/* eslint-disable max-len */
let Account = (function() {
  let userFirstName;
  let userPassword;

  function anonymize() {
    const SEQUENCE_LENGTH = 16;
    let sequence = '';
    for (let idx = 0; idx < SEQUENCE_LENGTH; idx += 1) {
      sequence += getRandomChar();
    }
    return sequence;
  }

  function getRandomChar() {
    const ALPHABATS = 'abcdefghijklmnopqrstuvwxyz';
    const NUMBERS = '0123456789';
    let letterOrNumber = Math.floor(Math.random() * 2);
    if (letterOrNumber === 0) { // if 0 is, get letter
      let randomIdx = Math.floor(Math.random() * ALPHABATS.length);
      return ALPHABATS[randomIdx];
    } else if (letterOrNumber === 1) { //if 1, get number
      let randomIdx = Math.floor(Math.random() * NUMBERS.length);
      return NUMBERS[randomIdx];
    }
  }

  function passwordNotValid(inputPassword) {
    return inputPassword !== userPassword;
  }

  return {
    init(firstName, password) {
      userFirstName = firstName;
      userPassword = password;

      this.displayName = anonymize();
      return this;
    },

    firstName(inputPassword) {
      if (passwordNotValid(inputPassword)) return "invalid password";
      else return userFirstName;
    }

  }
})();

// newObj's prototype => objfactory{}which contains closure to encapsulate
// newobj calls init(),  reassigning intial values to closure's value(encapsulated values)
// it also establishes displayName
// how have newObj with updated closure values, and a property called displayName
let fooBar = Object.create(Account).init('bob','123456');
console.log(fooBar.firstName);
console.log(fooBar.firstName('123456'));
console.log(fooBar.firstName('abc'));
console.log(fooBar.displayName);


let joe = Object.create(Account).init('joe', '123456');

//why does foobar logged joe as its name?
// b/c when we accessed Account variable the first time we invoked the IIFE, and then Account variable
// is assigned an object that has closure with several variables.
// And with second access to Account, it still has the object originally created by IIFE.
// ANd we are using that object as prototype for both instances. Knowing that
// the prototype object has closure encapsulated value and also knowing that both instances share
// the sanme prototype which means that the instances share the same encapsulated values.
// there for trying to create a new instance will just update the encapsualted value for all
// instnace of Account
console.log(fooBar.firstName('123456'));