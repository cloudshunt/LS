//create deep copy of the objects
let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let deepCopiedObj = {};

for (let name in munsters) {
  deepCopiedObj[name] = Object.freeze({age:munsters[name]['age'], gender:munsters[name]['gender']});

}

console.log(deepCopiedObj);
deepCopiedObj.herman.age = 99;
console.log(munsters);
console.log(deepCopiedObj);

