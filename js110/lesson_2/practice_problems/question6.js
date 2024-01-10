// print name,age and gender of each memeber
let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (let name in munsters) {
  let age = munsters[name].age;
  let gender = munsters[name].gender;
  console.log(`name: ${name}, age: ${age}, gender: ${gender}`);
}

