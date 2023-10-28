//question 3
// let myArray = {
//   0: 'bob',
//   1: 'joe',
//   2: 'marley',
//   length: 3
// };

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }
// console.log(1)

//q4, creat an array for keys of obj
// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// let arr = [];

// for (let key in obj){
//   arr.push(key.toUpperCase());
// };

// console.log(arr)
// let x = Object.keys(obj)
// console.log(Array.isArray(x))

//question 5
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

console.log(Object.keys(myObj))

console.log(myObj)

// Question 7
myObj.qux = 3
console.log(myObj)

// Question 8

function copyObj(obj, keys){
  let newObj = {};

  if (keys){
    keys.forEach((key) => newObj[key] = obj[key]);
    return newObj;
  }
  else {
    return Object.assign(newObj, obj);
  }

  
};

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }


//q13
function foo(bar) {
  console.log(bar());
}



foo(()=>'Welcome');    // Should print 'Welcome'
foo(()=>3.1415);    // Should print 3.1415
foo(()=>[1, 2, 3]);    // Should print [1, 2, 3]

