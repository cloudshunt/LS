let totalAge = 0;

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

for (let key in munsters) {
  if (munsters[key].gender === 'male') {
    totalAge += munsters[key].age;
  } else continue;
}

console.log(totalAge);
let memberDetails = Object.values(munsters);
console.log(memberDetails);