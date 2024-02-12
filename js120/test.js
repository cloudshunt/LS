/* eslint-disable max-lines-per-function */
let choices = ['rock','paper', 'scissors'];
let moveName = 'rock';

function computerIntelligence() {

  function initializeStats() {
    const INITIAL_POINTS = 1;
    let stats = {};
    choices.forEach((moveName) => {
      stats[moveName] = {points: INITIAL_POINTS, usageOdds: null};
    });

    updateUsagePercentage(stats);
    return stats;
  }

  function updateUsagePercentage(stats) {
    let totalPoints = Object.values(stats).reduce(
      (sumPoints, curStats) => sumPoints + curStats.points, 0
    );

    for (let moveName in stats) {
      let resultUsageOdds = stats[moveName].points / totalPoints;
      resultUsageOdds = Number(resultUsageOdds.toFixed(4));

      stats[moveName].usageOdds = resultUsageOdds;
    }
  }

  return {
    stats: initializeStats(),

    updateUsagePercentage: updateUsagePercentage,
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

const computer = computerIntelligence();
computer.moveLoseStatsUpdate(moveName);
console.log(computer);
console.log(computer.weightedRandomSelection());

