let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

obj = {};

for (let idx of nestedArray){
  obj[idx[0]] = idx[1];
}
console.log(obj)