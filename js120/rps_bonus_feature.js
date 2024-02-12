/*NOTE: uncomment line 135 to check computer analysis realtime update*/
/* eslint-disable max-lines-per-function */
const READLINE = require('readline-sync');

function selectionMessage(validChoices) {
  let resultMessage = ``;
  for (const key in validChoices) {
    resultMessage += `${key} = ${validChoices[key]}, `;
  }

  //rid of the extra comma and space ay the end of message
  resultMessage = resultMessage.slice(0, resultMessage.length - 2);

  return resultMessage;
}

function createScore() {
  let STARTING_SCORE = 0;
  return {
    score: STARTING_SCORE,

    addScore() {
      this.score += 1;
    },

    getScore() {
      return this.score;
    },

  };
}

function createSelections() {
  const VALID_CHOICES = {rock: 'r', paper: 'p', scissors: 'sc', spock:'sp', lizard:'l'};
  const CHOICES_ARR = Object.keys(VALID_CHOICES);
  const CHOICES_ABBREVIATION_ARR =  Object.values(VALID_CHOICES);
  const ABBREVIATION_TO_CHOICES = CHOICES_ARR.reduce((obj, curVal) => { // for human
    obj[VALID_CHOICES[curVal]] = curVal;
    return obj;
  } ,{}); // produces obj of {r: 'rock', p: 'paper', etc...}
  const MESSAGE = selectionMessage(VALID_CHOICES);

  return {
    validChoices: VALID_CHOICES, // for players & for message
    choicesArr : CHOICES_ARR, // for human & computer ['rock', 'paper', etc...]
    choicesAbbreviationArr: CHOICES_ABBREVIATION_ARR, // for human ['r', 'p', etc...]
    abbreviationToChoices : ABBREVIATION_TO_CHOICES,// For human: produces  {r: 'rock', p: 'paper', etc...}
    message : MESSAGE, // for human
  };
}

function createPlayer() {
  return {
    move: null,
    score: createScore(),
    selections: createSelections(),
    moveHistory: [],
    getHistory() {
      return this.moveHistory;
    },
  };
}

function createComputerIntelligence() {
  return {
    stats: null,

    initializeStats() {
      const INITIAL_POINTS = 1;
      let tempStats = {};
      this.selections.choicesArr.forEach((moveName) => {
        tempStats[moveName] = {points: INITIAL_POINTS, usageOdds: null};
      });

      this.stats = tempStats;
      this.updateUsagePercentage();
    },

    updateUsagePercentage() {
      let totalPoints = Object.values(this.stats).reduce(
        (sumPoints, curStats) => sumPoints + curStats.points, 0
      );

      for (let moveName in this.stats) {
        let resultUsageOdds = this.stats[moveName].points / totalPoints;
        resultUsageOdds = Number(resultUsageOdds.toFixed(4));

        this.stats[moveName].usageOdds = resultUsageOdds;
      }
    },

    moveWinStatsUpdate(moveName) {
      this.stats[moveName].points += 1;
      this.updateUsagePercentage(this.stats);
    },

    moveLoseStatsUpdate(losingMove) {
      //filter out losing move
      let otherMoves = Object.keys(this.stats).
        filter((move) => move !== losingMove);

      // increase points for all other moves
      otherMoves.forEach((move) => {
        this.stats[move].points += 1;
      });

      this.updateUsagePercentage(this.stats);
    },
    // eslint-disable-next-line consistent-return
    weightedRandomSelection() {
      const totalWeight = Object.values(this.stats).reduce(
        (acc, move) => acc + move.usageOdds, 0
      );

      let randomNum = Math.random() * totalWeight;

      for (let moveName in this.stats) {
        const move = this.stats[moveName];
        if (randomNum < move.usageOdds) {
          return moveName;
        }
        randomNum -= move.usageOdds;
      }
    }
  };

}

function createComputer() {
  let playerObject = createPlayer();
  let intelligentObject = createComputerIntelligence();

  let computerObject = {
    choose() {
      // This Checks the statistic, use to debug
      //console.log(this.stats); //NOTE: this show the stats before current move

      this.move = this.weightedRandomSelection();
      this.moveHistory.push(this.move); // update history
    },

  };

  let computer = Object.assign(playerObject, computerObject, intelligentObject);
  computer.initializeStats();
  return computer;
}

// eslint-disable-next-line max-lines-per-function
function createHuman() {
  //note: "this" keyword refers to playerObject
  let playerObject = createPlayer();
  const ABBRI_MAX_LENGTH = 2;
  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log(`Choose one: ${this.selections.message}`);
        choice = READLINE.question();
        if (this.selections.choicesArr.includes(choice) ||
            this.selections.choicesAbbreviationArr.includes(choice)) {
          break;
        }
        console.log('Sorry, invalid choice.');
      }
      console.clear();

      if (choice.length <= ABBRI_MAX_LENGTH) {
        this.move = this.selections.abbreviationToChoices[choice];
      } else {
        this.move = choice;
      }
      this.moveHistory.push(this.move); // update history
    },
  };

  return Object.assign(playerObject, humanObject);
}

function displayChoices(humanMove, computerMove) {
  console.log(`You chose: ${humanMove}`);
  console.log(`The computer chose: ${computerMove}`);
}


function displayScores(humanScore, computerScore) {
  console.log(`Current score:\n\tHuman: ${humanScore} \n\tComputer: ${computerScore}`);
}

function gameWinCheck (choice, otherChoice) {
  const WINNING_COMBOS = {
    rock:     ['scissors', 'lizard', 'sc', 'l'],   r: ['scissors', 'lizard', 'sc', 'l'],
    paper:    ['rock',     'spock', 'r', 'sp'],    p: ['rock',     'spock', 'r', 'sp'],
    scissors: ['paper',    'lizard', 'p', 'l'],    sc:['paper',    'lizard', 'p', 'l'],
    lizard:   ['paper',    'spock', 'p', 'sp'],    l: ['paper',    'spock', 'p', 'sp'],
    spock:    ['rock',     'scissors', 'r', 'sc'], sp:['rock',     'scissors', 'r', 'sc'],
  };

  return WINNING_COMBOS[choice].includes(otherChoice);
}


function checkAndDisplayRoundWinnerFunc() {
  let humanObj = this.human;
  let computerObj = this.computer;
  let humanMove = humanObj.move;
  let computerMove = computerObj.move;
  let humanWin = gameWinCheck(humanMove, computerMove);
  let computerWin = gameWinCheck(computerMove, humanMove);

  displayChoices(humanMove, computerMove);
  displayWinner();

  displayScores(this.human.score.getScore(), this.computer.score.getScore());

  function displayWinner() {
    if (humanWin) {
      humanObj.score.addScore();
      computerObj.moveLoseStatsUpdate(computerMove); // update computer intelligence
      console.log('You win!');
    } else if (computerWin) {
      computerObj.score.addScore();
      computerObj.moveWinStatsUpdate(computerMove); // update intellegence stats
      console.log('Computer wins!');
    } else {
      console.log("It's a tie");
    }
  }

}

function displayWelcomeMessage() {
  console.log(`Welcome to rock, paper, scissors, spock and lizard!`);
}

function displayGoodbyeMessage() {
  console.log('Thanks for playing. Goodbye!');
}

function grandWinnerAnnounce(player) {
  console.log(`${player} is the Grand Winner.`);
}

function checkDisplayUpdateGrandWinnerFunc() {
  const GRAND_WIN_SCORE = 5;

  if (this.human.score.getScore() === GRAND_WIN_SCORE) {
    let player = 'Human';
    grandWinnerAnnounce(player);
    this.grandWinner = true;
  } else if (this.computer.score.getScore() === GRAND_WIN_SCORE) {
    let player = 'Computer';
    grandWinnerAnnounce(player);
    this.grandWinner = true;
  } else this.grandWinner = false;
}

function playAgainFunc () {
  console.log('Play again? (y/n)');
  let answer = READLINE.question();

  while (answer !== 'y' && answer !== 'n') {
    console.log("invalid entry, try again.");
    answer = READLINE.question();
  }

  return answer.toLowerCase() === 'y';
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  grandWinner: false,

  checkAndDisplayRoundWinner: checkAndDisplayRoundWinnerFunc,
  displayWelcome: displayWelcomeMessage,
  displayGoodbye: displayGoodbyeMessage,
  checkDisplayUpdateGrandWinner: checkDisplayUpdateGrandWinnerFunc,


  playAgain: playAgainFunc,

  play() {
    this.displayWelcome();
    while (true) {
      this.computer.choose();
      this.human.choose();
      console.log(`Computer move history: ${this.computer.getHistory()}`);
      console.log(`Human move history: ${this.human.getHistory()}`);
      this.checkAndDisplayRoundWinner();
      this.checkDisplayUpdateGrandWinner();
      if ( this.grandWinner ) break; //If found grand winner, terminate game
      if (!this.playAgain()) break; //if grand winner doesn't exist, continue to ask "another round?"
      console.clear();
    }

    this.displayGoodbye();
  },
};

RPSGame.play();