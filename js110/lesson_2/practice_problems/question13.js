const truthiness = {
  falsy: [ null, undefined, '', false, NaN, 0 ],
  truthy: ['everything else...']
};

// let newObj = JSON.parse(JSON.stringify(truthiness));
// console.log(newObj);

let newObj = {};


for (let key in truthiness) {
  newObj[key] = truthiness[key].slice();
}

console.log(newObj);
