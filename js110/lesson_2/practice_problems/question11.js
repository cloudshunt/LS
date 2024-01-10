let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

//how do i copy?

let newArr = arr.map(obj => {
  let newObj = {};
  let keys = Object.keys(obj);
  //console.log(keys);
  keys.forEach(key => newObj[key] = obj[key] + 1);
  return newObj;
});
console.log(newArr);
