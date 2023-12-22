const INITIAL_MARKER = ' ';
const WINNING_LINES = [
  ['a1','a2','a3'], ['b1','b2','b3'], ['c1','c2','c3'], // rows
  ['a1','b1','c1'], ['a2','b2','c2'], ['a3','b3','c3'], // columns
  ['a1','b2','c3'], ['a3','b2','c1']             // diagonals
];

function findAtRiskSquare(board) {
  let riskExist = false;
  for (let idx = 0; idx < WINNING_LINES.length; idx += 1) {
    console.log(WINNING_LINES[idx]);
    riskExist = WINNING_LINES[idx].filter(square => board[square] === 'X') === 2;
    if (riskExist) {
      let potentialRiskSquare = Object.values(WINNING_LINES[idx]);
      let riskSquare = potentialRiskSquare.filter(square => board[square] === 'X');
      return riskSquare;
    }
  }
}

function initializeBoard() {
  let board = {
    a1: INITIAL_MARKER, a2: INITIAL_MARKER, a3: INITIAL_MARKER,
    b1: INITIAL_MARKER, b2: INITIAL_MARKER, b3: INITIAL_MARKER,
    c1: INITIAL_MARKER, c2: INITIAL_MARKER, c3: INITIAL_MARKER,
  };

  return board;
}

let board = initializeBoard();

findAtRiskSquare(board);
