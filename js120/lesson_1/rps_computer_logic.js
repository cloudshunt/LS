/* eslint-disable max-lines-per-function */
/*
first create initialization of stats for computer to conduct
intellegent choices.

NOTE: This will only take place in computer Object
as  computerIntelligence
*/

let choices = ['rock','paper', 'scissors'];

function computerIntelligence() {
  return {
    //stats : this.initializeStats(),

    initializeStats() {
      const INITIAL_POINTS = 1;
      let stats = {};
      choices.forEach((moveName) => {
        stats[moveName] = {points: INITIAL_POINTS, usageOdds: null};
      });

      this.updateUsagePercentage(stats);
      return stats;
    },

    stats : this.initializeStats(),

    // input obj, side effect of obj transformation. no returns
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

  };
}

let smartObj = computerIntelligence();
console.log(smartObj);


// function initializeStats() {
//   const INITIAL_POINTS = 1;
//   let stats = {};
//   choices.forEach((moveName) => {
//     stats[moveName] = {points: INITIAL_POINTS, usageOdds: null};
//   });

//   updateUsagePercentage(stats);
//   return stats;
// }

// input obj, side effect of obj transformation. no returns
function updateUsagePercentage(stats) {
  let totalPoints = Object.values(stats).reduce(
    (sumPoints, curStats) => sumPoints + curStats.points, 0
  );


  for (let moveName in stats) {
    let resultUsageOdds = stats[moveName].points / totalPoints;
    resultUsageOdds = Number(resultUsageOdds.toFixed(4));

    stats[moveName].usageOdds = resultUsageOdds;
  }

  //console.log(stats);
}

// let stats = initializeStats();


// /*
// after a move wins, it gains one poitns >> updateUsageOdds
// after a move loses, all other moves except the losing move gains one point
// >> updatUsageOdds

//  */

function moveWinStatsUpdate(moveName, stats) {
  stats[moveName].points += 1;
  updateUsagePercentage(stats);
}


// function moveLoseStatsUpdate(losingMove, stats) {
//   //filter out losing move
//   let otherMoves = Object.keys(stats).filter((move) => move !== losingMove);

//   // increase points for all other moves
//   otherMoves.forEach((move) => {
//     stats[move].points += 1;
//   });

//   updateUsagePercentage(stats);
// }

// let winningMove = 'rock';
// moveWinStatsUpdate(winningMove, stats);

// let losingMove = 'rock';
// moveLoseStatsUpdate(losingMove, stats);

// losingMove = 'rock';
// moveLoseStatsUpdate(losingMove, stats);


function weightedRandomSelection(stats) {
  const totalWeight = Object.values(stats).reduce(
    (acc, move) => acc + move.usageOdds, 0
  );

  let randomNum = Math.random() * totalWeight;

  for (let moveName in stats) {
    const move = stats[moveName];
    if (randomNum < move.usageOdds) {
      return moveName;
    }
    randomNum -= move.usageOdds;
  }
}


// console.log(weightedRandomSelection(stats));
