let aneesh = {
  name: 'Aneesh',
};

// console.log(typeof Object.prototype.constructor);
// console.log(Object.getOwnPropertyNames(Object));
// Aneesh -proto-> Object.prototype
// Object.prototype object has 'constructor' as its property

//console.log(Object.getOwnPropertyNames(Object.prototype.constructor));
console.log(Object.getOwnPropertyNames(Object.__proto__));