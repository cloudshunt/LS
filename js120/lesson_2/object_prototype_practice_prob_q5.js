let qux = { foo: 1 };
let baz = Object.create(qux);
baz.foo = 2;

/*

writw function that searches
the prototype chain of an object
for a property and assigns it a new value

If the property doesn't exist in any
of the prototype objects, the function
should do nothing.
 (this is opposite of js's mechinism)


Algo:
- loop through property chain
- if found an object that owns the property
then assign the value.

DETAILS:
how to search through property chain?
 - how to check it's own prototype?

Loop and go one chain up each prototype until it reaches null

 */

// let a = {zyzz: 1};
// let propertyName = 'yo';
// let val = '1';

function assignProperty(obj, propName, val) {
  while (obj !== null) {
    if (obj.hasOwnProperty(propName)) {
      obj[propName] = val;
      break;
    }

    obj = Object.getPrototypeOf(obj); // update prototype
  }
}

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false