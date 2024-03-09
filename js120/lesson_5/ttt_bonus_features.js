let readline = require('readline-sync');

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.reset();
  }

  reset() {
    this.squares = {};
    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[String(counter)] = new Square();
    }
  }

  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    this.display();
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }
}

class Player {
  constructor(marker) {
    const INITIAL_SCORE = 0;
    this.marker = marker;
    this.score = INITIAL_SCORE;
  }

  updateScore() {
    this.score += 1;
  }

  getScore() {
    return this.score;
  }
  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}


class TTTGame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.firstPlayer = null;
  }

  static WINNING_SCORE = 3;

  static POSSIBLE_WINNING_ROWS = [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ];

  static joinOr = function(arr,  separator = ', ', conjunction = 'or') {
    conjunction = ' ' + conjunction + ' '; //adding space before and after
    let resultStr = '';

    for (let idx = 0; idx < arr.length; idx++) {
      let strEle = String(arr[idx]);
      if (arr.length === 1) return strEle;
      else if (idx === arr.length - 2) { // 1 element before last
        resultStr += strEle + conjunction;
      } else if (idx === arr.length - 1) {
        resultStr += strEle; // last element
      } else { // add conjunction
        resultStr += strEle +  separator;
      }
    }

    return resultStr;
  }

  static playAnotherRound() {
    console.log('Player another round? (y/n)');
    let anotherRound;
    while (true) {
      anotherRound = readline.question().toLowerCase();
      if (anotherRound === 'y' || anotherRound === 'n') break;
      console.log('Invalid entry, please try again');
    }
    console.clear();
    return anotherRound;
  }

  gameOver() {
    return this.boardIsFull() || this.someoneWon();
  }

  boardIsFull() {
    let unusedSquares = this.board.unusedSquares();
    return unusedSquares.length === 0;
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
    console.log("");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      if (this.human.getScore() === TTTGame.WINNING_SCORE) {
        console.log("You are the Grand Winner! Congratulations!");
      } else {
        console.log("You won this round, good job!");
      }

    } else if (this.isWinner(this.computer)) {
      if (this.computer.getScore() === TTTGame.WINNING_SCORE) {
        console.log("I, the computer am the Grand Winner, MVP, GOAT of Tic Tac Toe");
      } else {
        console.log("I won this round! Take that, human!");
      }

    } else {
      console.log("A tie game. How boring.");
    }
  }

  isWinner(player) {
    const SQUARE_REQ_TO_WIN = 3;
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === SQUARE_REQ_TO_WIN;
    });
  }


  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${TTTGame.joinOr(validChoices)}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    // mark the selected square with the human's marker
    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let choice = this.computerOffensiveMove() || this.computerDefensiveMove() ||
                 this.getMidSquare()  || this.getRandomSquare();

    // mark selected square with computer marker
    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  identifyCriticalSquare(player) {
    let winRow = this.getCriticalRow(player);

    if (!winRow) return null;
    else {
      let winSquare = winRow.filter(key => {
        return this.board.squares[key].getMarker() !== player.getMarker();
      });

      return winSquare[0];
    }
  }

  getCriticalRow(player) {
    const MARK_AMOUNT = 2;

    for (let idx = 0; idx < TTTGame.POSSIBLE_WINNING_ROWS.length; idx++) {
      let row = TTTGame.POSSIBLE_WINNING_ROWS[idx];

      let hasEmptySquare = row.map((key) => this.board.squares[key].getMarker())
        .includes(Square.UNUSED_SQUARE);

      if (this.board.countMarkersFor(player, row) === MARK_AMOUNT
         && hasEmptySquare) {
        return row;
      }
    }
    return null;
  }


  getRandomSquare() {
    let validChoices = this.board.unusedSquares();
    let choice;
    do {
      choice = Math.floor((9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));

    return choice;
  }

  getMidSquare() {
    const MID_SQUARE_NUM = 5;
    let midSquareStatus = this.board.squares[MID_SQUARE_NUM].getMarker();
    return midSquareStatus === Square.UNUSED_SQUARE ? MID_SQUARE_NUM : null;
  }

  computerOffensiveMove() {
    let winSquare = this.identifyCriticalSquare(this.computer);
    return winSquare;
  }

  computerDefensiveMove() {
    let riskSquare = this.identifyCriticalSquare(this.human);
    return riskSquare;
  }

  gamePlayLogic() {
    let alternatingTracker = this.firstPlayer === 'human' ? 1 : 2;

    while (true) {
      if (alternatingTracker % 2 === 1) {
        this.humanMoves();
        if (this.gameOver()) break;
      } else {
        this.computerMoves();
        if (this.gameOver()) break;
      }

      alternatingTracker += 1;

      this.board.displayWithClear();
    }

    // update on who goes first the next round of game.
    if (this.firstPlayer === 'human') this.firstPlayer = 'computer';
    else this.firstPlayer = 'human';

  }

  displayScores() {
    console.log(`\nRequires ${TTTGame.WINNING_SCORE} points to be the Grand Winner`);
    console.log(`Human:  ${this.human.getScore()} | Computer: ${this.computer.getScore()}\n`);
  }

  incrementWinnerScore() {
    let humanWon = this.isWinner(this.human);
    let computerWon = this.isWinner(this.computer);

    if (humanWon) this.human.updateScore();
    else if (computerWon) this.computer.updateScore();
    // if it's tie, nothing happens

  }

  whoGoesFirstQuestion() {
    console.log('Which player goes first? h = human , c = computer');
    while (true) {

      this.firstPlayer = readline.question().toLowerCase();
      if (this.firstPlayer === 'h' || this.firstPlayer === 'human') {
        this.firstPlayer = 'human';
        break;
      } else if (this.firstPlayer === 'c' || this.firstPlayer === 'computer') {
        this.firstPlayer = 'computer';
        break;
      }

      console.log('Invalid entry, please try again.');
    }
  }

  playRounds() {
    this.whoGoesFirstQuestion();

    while (true) {
      this.board.displayWithClear();
      this.gamePlayLogic();
      this.board.displayWithClear();
      this.incrementWinnerScore();

      this.displayResults(); //announce winner
      this.displayScores();

      if (this.human.getScore() === TTTGame.WINNING_SCORE ||
      this.computer.getScore() === TTTGame.WINNING_SCORE) {
        break;
      }

      let anotherRound = TTTGame.playAnotherRound();
      if (anotherRound === 'n') break;
      else this.board.reset();
    }
  }

  play() {
    this.displayWelcomeMessage();
    this.playRounds();
    this.displayGoodbyeMessage();
  }
}


let game = new TTTGame();
game.play();