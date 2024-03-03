/*
The proof:
 */


function Dog() {
  //some properties
}

let cloudy = new Dog();

// what is the prototype of cloudy?
// these are two different ways to get cloudy object's prototype
// Note: __proto__ is not a recommended way to get an object's prototype
console.log(Object.getPrototypeOf(cloudy) === Dog.prototype);
console.log(cloudy.__proto__ === Dog.prototype);

// draw relationship diagram


let cloudyPrototype = Object.getPrototypeOf(cloudy);

console.log(Object.getOwnPropertyNames(cloudyPrototype));

console.log(Dog.prototype.__proto__ === Object.prototype);