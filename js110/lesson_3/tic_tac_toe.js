const READLINE = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GRAND_WINNER_WIN_ROUND_REQ = 2; //score track

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

function computerDefensiveChoice(board) {
  let winningComboHuman = winningComboHumanFunc(board);
  //if (winningComboHuman)
}

function computerRandomChoice(board) {
  return Math.floor(Math.random() * emptySquares(board).length);
}

function computerChoice(board) {
  let randomIdx = computerRandomChoice(board);
  //let defensiveIdx = computerDefensiveChoice(board);
  let square = emptySquares(board)[randomIdx];
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function winningComboHumanFunc(board) {
  let winningComboHuman = [
    (board['a1'] === HUMAN_MARKER && board['a2'] === HUMAN_MARKER && board['a3'] === HUMAN_MARKER),
    (board['b1'] === HUMAN_MARKER && board['b2'] === HUMAN_MARKER && board['b3'] === HUMAN_MARKER),
    (board['c1'] === HUMAN_MARKER && board['c2'] === HUMAN_MARKER && board['c3'] === HUMAN_MARKER),
    (board['a1'] === HUMAN_MARKER && board['b1'] === HUMAN_MARKER && board['c1'] === HUMAN_MARKER),
    (board['a2'] === HUMAN_MARKER && board['b2'] === HUMAN_MARKER && board['c2'] === HUMAN_MARKER),
    (board['a3'] === HUMAN_MARKER && board['b3'] === HUMAN_MARKER && board['c3'] === HUMAN_MARKER),
    (board['a1'] === HUMAN_MARKER && board['b2'] === HUMAN_MARKER && board['c3'] === HUMAN_MARKER),
    (board['a3'] === HUMAN_MARKER && board['b2'] === HUMAN_MARKER && board['c1'] === HUMAN_MARKER)
  ];
  return winningComboHuman;
}

function winningComboPCFunc(board) {
  let winningComboPC = [
    (board['a1'] === COMPUTER_MARKER && board['a2'] === COMPUTER_MARKER && board['a3'] === COMPUTER_MARKER),
    (board['b1'] === COMPUTER_MARKER && board['b2'] === COMPUTER_MARKER && board['b3'] === COMPUTER_MARKER),
    (board['c1'] === COMPUTER_MARKER && board['c2'] === COMPUTER_MARKER && board['c3'] === COMPUTER_MARKER),
    (board['a1'] === COMPUTER_MARKER && board['b1'] === COMPUTER_MARKER && board['c1'] === COMPUTER_MARKER),
    (board['a2'] === COMPUTER_MARKER && board['b2'] === COMPUTER_MARKER && board['c2'] === COMPUTER_MARKER),
    (board['a3'] === COMPUTER_MARKER && board['b3'] === COMPUTER_MARKER && board['c3'] === COMPUTER_MARKER),
    (board['a1'] === COMPUTER_MARKER && board['b2'] === COMPUTER_MARKER && board['c3'] === COMPUTER_MARKER),
    (board['a3'] === COMPUTER_MARKER && board['b2'] === COMPUTER_MARKER && board['c1'] === COMPUTER_MARKER)
  ];
  return winningComboPC;
}

function detectWinner(board) {
  let winningComboPC = winningComboPCFunc(board);
  let winningComboHuman = winningComboHumanFunc(board);

  /** Win conditions
   * a1 a2 a3, b1 b2 b3, c1 c2 c3 //rows
   * a1 b1 c1, a2 b2 c2, a3 b3 c3 // columns
   * a1 b2 c3, a3 b2 c1 //diagonals
   */
  if (winningComboHuman.includes(true)) return "human";
  else if (winningComboPC.includes(true)) return "computer";
  else return false;
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

function turnsLogic(board, humanWin, computerWin) {
  let endGame;

  while (true) {
    playerChoice(board);
    displayBoard(board);
    endGame = endGameCheckAndMessage(board);
    if (endGame) {
      humanWin += 1;
      break;
    }

    computerChoice(board);
    displayBoard(board);
    endGame = endGameCheckAndMessage(board);
    if (endGame) {
      computerWin += 1;
      break;
    }
  }

  return [humanWin, computerWin];
}

function startMenu() {
  welcomeMessage();

  while (true) {
    prompt('Press enter to start, enter anything else + enter to exit:');
    let enter = READLINE.question();
    if (enter === '') return true;
    else {
      return false;
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

function grandWinnerCheck(yourWin, computerWin) {
  if (yourWin === GRAND_WINNER_WIN_ROUND_REQ) {
    prompt('You are the Grand Winner!!');
    return [...initializeWinCount(), true];
  } else if (computerWin === GRAND_WINNER_WIN_ROUND_REQ) {
    prompt('Computer is the Grand Winner!!');
    return [...initializeWinCount(), true];
  } else return [yourWin, computerWin, false];
}

function roundOfGame(humanWin, computerWin) {
  let board = initializeBoard();
  displayBoard(board);

  [humanWin, computerWin] = turnsLogic(board, humanWin, computerWin);

  return [humanWin, computerWin];
}

function startGame() {
  let continueGame =  startMenu();
  let grandWin;

  let [yourWin, computerWin] = initializeWinCount();

  while (continueGame) {
    [yourWin, computerWin] = roundOfGame(yourWin, computerWin);
    [yourWin, computerWin, grandWin] = grandWinnerCheck(yourWin, computerWin);
    if (grandWin === true) {
      prompt('Thank you for playing the grand game, Good Bye!!!');
      break;
    }
    continueGame = anotherRoundCheck();
  }
}

startGame();