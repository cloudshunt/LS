const READLINE = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GRAND_WINNER_WIN_ROUND_REQ = 5; //score track
const MID_SQUARE = 'b2';
const WINNING_LINES = [
  ['a1','a2','a3'], ['b1','b2','b3'], ['c1','c2','c3'], // rows
  ['a1','b1','c1'], ['a2','b2','c2'], ['a3','b3','c3'], // columns
  ['a1','b2','c3'], ['a3','b2','c1']             // diagonals
];

let welcomeMessage = () => prompt('Welcome to Tic-Tac-Toe:');

function prompt(text) {
  console.log(`=>${text}`);
}

function initializeBoard() {
  let board = {
    a1: INITIAL_MARKER, a2: INITIAL_MARKER, a3: INITIAL_MARKER,
    b1: INITIAL_MARKER, b2: INITIAL_MARKER, b3: INITIAL_MARKER,
    c1: INITIAL_MARKER, c2: INITIAL_MARKER, c3: INITIAL_MARKER,
  };

  return board;
}

function displayBoard(b) {
  console.clear();

  console.log('');
  console.log('     |     |');
  console.log(`  ${b["a1"]}  |  ${b["a2"]}  |  ${b["a3"]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${b["b1"]}  |  ${b["b2"]}  |  ${b["b3"]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${b["c1"]}  |  ${b["c2"]}  |  ${b["c3"]}`);
  console.log('     |     |');
  console.log('');

}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoice(board) {
  let square;

  function choiceDisplay(coordinate) {
    if (board[coordinate] === INITIAL_MARKER) return coordinate;
    else return '-';
  }

  while (true) {
    prompt('Choose a square:');
    prompt(`${choiceDisplay('a1')}, ${choiceDisplay('a2')}, ${choiceDisplay('a3')}`);
    prompt(`${choiceDisplay('b1')}, ${choiceDisplay('b2')}, ${choiceDisplay('b3')}`);
    prompt(`${choiceDisplay('c1')}, ${choiceDisplay('c2')}, ${choiceDisplay('c3')}`);
    square = READLINE.question().trim();

    if (emptySquares(board).includes(square)) break;
    else prompt("Invalid choice, try again.\n");

  }

  board[square] = HUMAN_MARKER;

}

function findAtRiskSquare(line, board, marker) {
  let markerLine = line.map(square => board[square]);

  if (markerLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) return unusedSquare;
  }

  return null;

}

function computerDefensiveChoice(board) {
  let riskSquare = null;
  for (let idx = 0; idx < WINNING_LINES.length; idx += 1) {
    let line = WINNING_LINES[idx];
    riskSquare = findAtRiskSquare(line, board, HUMAN_MARKER);
    if (riskSquare) return riskSquare;
  }

  return riskSquare;
}

function computerRandomChoice(board) {
  let randomIdx = Math.floor(Math.random() * emptySquares(board).length);
  return emptySquares(board)[randomIdx];
}

function computerOffensiveChoice(board) {
  let riskSquare = null;
  for (let idx = 0; idx < WINNING_LINES.length; idx += 1) {
    let line = WINNING_LINES[idx];
    riskSquare = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (riskSquare) return riskSquare;
  }

  return riskSquare;
}

function computerChoice(board) {
  let randomSquare = computerRandomChoice(board);
  let offensiveSquare = computerOffensiveChoice(board);
  let defensiveSquare = computerDefensiveChoice(board);
  let midSquare = board[MID_SQUARE];

  if (offensiveSquare) board[offensiveSquare] = COMPUTER_MARKER;
  else if (defensiveSquare) board[defensiveSquare] = COMPUTER_MARKER;
  else if (midSquare === INITIAL_MARKER) board[MID_SQUARE] = COMPUTER_MARKER;
  else board[randomSquare] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    let [sq1,sq2,sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) return "human";
    else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) return 'computer';
  }

  return false;
}

function endGameCheckAndMessage(board) {
  if (boardFull(board)) {
    prompt("It's a tie...");
    return true;
  } else if (detectWinner(board)  === 'human') {
    prompt('You Won!!');
    return true;
  } else if (detectWinner(board)  === 'computer') {
    prompt('You Lost!!');
    return true;
  }

  return false;
}

function humanTurnLogic(board) {
  playerChoice(board);
  displayBoard(board);
}

function computerTurnLogic(board) {
  computerChoice(board);
  displayBoard(board);
}

// eslint-disable-next-line max-lines-per-function, max-statements
function turnsLogic(board, humanWin, computerWin, whoFirst) {
  let endGame;

  let whoGoesNext = (whoFirst === 'human') ? 1 : 2;
  while (true) {
    if (whoGoesNext % 2 === 1) {
      humanTurnLogic(board);
      endGame = endGameCheckAndMessage(board);
      if (endGame) {
        humanWin += 1;
        break;
      }
    } else if (whoGoesNext % 2 === 0) {
      computerTurnLogic(board);
      endGame = endGameCheckAndMessage(board);
      if (endGame) {
        computerWin += 1;
        break;
      }
    }
    whoGoesNext += 1;
  }

  return [humanWin, computerWin];
}

function startMenu() {
  welcomeMessage();

  while (true) {
    prompt('Select:\n1 to start with your turn.\n2 to start with Computer.');
    let input = READLINE.question();
    if (input === '1') return 'human';
    else if (input === '2') return 'computer';
    else {
      prompt('inbalid input, try again');
    }
  }
}

function anotherRoundCheck() {
  while (true) {
    prompt('Another round? 1 = yes, 2 = no');
    let anotherGame = READLINE.question();
    if (anotherGame === '1') {
      console.clear();
      return true;
    } else if (anotherGame === '2') {
      prompt('Thank you for playing, goodbye!');
      return false;
    } else {
      prompt('Invalid option, try again');
    }
  }
}

function initializeWinCount() {
  return [0,0];
}

function scoreDisplay(yourWin, computerWin) {
  prompt(`Your Score:${yourWin} // Computer Score:${computerWin}`);
}

function grandWinnerCheck(yourWin, computerWin) {
  scoreDisplay(yourWin, computerWin);
  if (yourWin === GRAND_WINNER_WIN_ROUND_REQ) {
    prompt('You are the Grand Winner!!');
    return [...initializeWinCount(), true];
  } else if (computerWin === GRAND_WINNER_WIN_ROUND_REQ) {
    prompt('Computer is the Grand Winner!!');
    return [...initializeWinCount(), true];
  } else return [yourWin, computerWin, false];
}

function roundOfGame(humanWin, computerWin, whoFirst) {
  let board = initializeBoard();
  displayBoard(board);

  [humanWin, computerWin] = turnsLogic(board, humanWin, computerWin, whoFirst);

  return [humanWin, computerWin];
}

function startGame() {
  let whoFirst =  startMenu();
  //console.log(`${whoFirst} goes first`);
  let continueGame = true;
  let grandWin;

  let [yourWin, computerWin] = initializeWinCount();

  while (continueGame) {
    [yourWin, computerWin] = roundOfGame(yourWin, computerWin, whoFirst);
    [yourWin, computerWin, grandWin] = grandWinnerCheck(yourWin, computerWin);
    if (grandWin === true) {
      prompt('Thank you for playing the grand game, Good Bye!!!');
      break;
    }
    continueGame = anotherRoundCheck();
  }
}

startGame();