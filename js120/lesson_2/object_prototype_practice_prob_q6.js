/*
How to create an object that doesn't have a prototype?
 */

let a = Object.create(null);
console.log(Object.getPrototypeOf(a));