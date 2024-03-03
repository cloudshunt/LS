
function Square(marker = Square.UNUSED_SQUARE) {
  this.marker = marker;
}
Square.UNUSED_SQUARE = ' ';

let sq = new Square();
console.log(sq);

