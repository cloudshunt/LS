/* eslint-disable max-lines-per-function */
function createSelections() {
  return {
    choicesArr: ['rock','paper','sissors'],
  };
}

function createPlayer() {
  return {
    selections: createSelections(),
  };
}

function createIntelligence() {
  return {
    stats : null,

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
  };
}

function createComputer() {
  let playerObj = createPlayer();
  let intelligenceObj = createIntelligence();

  let computerObj = {
    choice() {
      return this.selections.choicesArr;
    },
  };

  let computer = Object.assign(computerObj, playerObj, intelligenceObj);
  computer.initializeStats();
  return computer;
}

let computer = createComputer();
console.log(computer);