let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// let fruits = Object.keys(obj);
let resultArr = [];
for (let food in obj) {
  if (obj[food]['type'] === 'fruit') {
    let colorArr = obj[food]["colors"].map(color => {
      return color[0].toUpperCase() + color.slice(1);
    });

    resultArr.push(colorArr);
  } else {
    let size = obj[food]["size"];
    let sizeUpperCase = size.toUpperCase();

    resultArr.push(sizeUpperCase);
  }

}

console.log(resultArr);
