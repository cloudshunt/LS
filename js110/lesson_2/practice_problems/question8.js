let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

'aeiou'.includes('a');

let values = Object.values(obj);
console.log(values);

values.forEach(idx => {
  idx.forEach(word => {
    word.split('').forEach(char => {
      if ('aeiou'.includes(char)) console.log(char);
    });
  });
});
