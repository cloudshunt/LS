/* eslint-disable max-lines-per-function */
const READLINE = require('readline-sync');
const SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
const WINNING_POINTS = 21;
const DEALER_AIM_POINTS = 17;

function invalidMessage() {
  prompt('Invalid entry, try again!');
}

function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]]; // swap elements
  }
}

function initializeDeck() {
  let deckArr = [];

  SUITS.forEach((cardSuit) => {
    VALUES.forEach((cardValue => {
      deckArr.push(initializeCard( cardSuit, cardValue));
    }));
  });

  shuffle(deckArr);

  return deckArr;
}

function initializeCard(cardSuit, cardValue) {
  let cardObj = {};

  cardObj['suit'] = cardSuit;
  cardObj['value'] = cardValue;

  return cardObj;
}

function initializeHand() {
  let handTracker = { player:{hand:[], total: 0}, dealer:{hand:[], total: 0} };
  return handTracker;
}

function calcTotal(who, handTracker) {
  let values = handTracker[who].hand.map((card) => {
    return card.value;
  });

  let sum = 0;
  values.forEach(value => {
    if (value === 'Ace') sum += 11;
    else if (['Jack','Queen','King'].includes(value)) sum += 10;
    else sum += value;
  });

  // Aces adjustment
  values
    .filter((value) => value === 'Ace')
    .forEach(() => {
      if (sum > WINNING_POINTS) sum -= 10;
    });

  // update totalPoints for respective entity (dealer or player)
  handTracker[who].total = sum;
  return sum;
}

function initialDeal(deck, handTracker) {
  dealCard("player", deck, handTracker);
  dealCard("dealer", deck, handTracker);

  dealCard("player", deck, handTracker);
  dealCard("dealer", deck, handTracker);
}

function prompt(message) {
  console.log(`=>${message}`);
}

// eslint-disable-next-line consistent-return
function joinAnd(arr, delimeter = ', ', lastDelimeter = 'and') {
  lastDelimeter = " " + lastDelimeter + " ";
  if (arr.length === 0) return "";
  else if (arr.length === 1) return arr.join();
  else if (arr.length === 2) return arr.join(lastDelimeter);
  else if (arr.length >= 3) {
    let allNumStrExceptLast = arr.slice(0, arr.length - 1).join(delimeter);
    let lastStrNum = arr.slice(arr.length - 1);
    let result = allNumStrExceptLast + lastDelimeter + lastStrNum;
    return result;
  }
}

// eslint-disable-next-line consistent-return
function handDisplayLoop(someonesHand, who, endCondition = false) {

  let someonesHandValueArr = someonesHand.map((card) => {
    return card.value;
  });

  // show 0th idx of dealers card as unknown.
  // Only display the unknown card when game ending condition occurs
  // such as someone busts or someone wins
  if (who === 'dealer') {
    let unknownCard = someonesHandValueArr.shift();
    if (endCondition === false) {
      someonesHandValueArr.push('unknown card');
      return joinAnd(someonesHandValueArr);
    } else if (endCondition === true) {
      let unknownCardMessage = `the unknown card is ${unknownCard}!!!`;
      someonesHandValueArr.push(unknownCardMessage);
      return joinAnd(someonesHandValueArr);
    }
  }

  if (who === 'player') return joinAnd(someonesHandValueArr);

}

function displayHands(handTracker, endCondition) {
  let yourSum = handTracker['player'].total;
  let dealerHand = handTracker.dealer.hand;
  prompt(`Dealer has: ${handDisplayLoop(dealerHand, "dealer", endCondition)}`);

  let yourHand = handTracker.player.hand;
  prompt(`You have: ${handDisplayLoop(yourHand, "player", endCondition)} (${yourSum})\n`);
}

function bustOrNot(sum) {
  if (sum <= WINNING_POINTS) return false;
  else return true;
}

function dealCard(who, deck, handTracker) {
  let card = deck.shift();
  handTracker[who]['hand'].push(card);

  let sum = calcTotal(who,handTracker);
  handTracker[who].total = sum; //update totalPoints of either player/dealer
}

function dealingLogic(who, deck, handTracker, endCondition = false) {
  dealCard(who, deck, handTracker);
  let sum = handTracker[who].total;
  let bust = bustOrNot(sum);
  endCondition = bust;
  displayHands(handTracker, endCondition);

  return bust;
}

function playerPrompt(who, deck, handTracker) {
  let bust = false;

  while (true) {
    prompt('Enter 1 = hit, 2 = stay');
    let input = READLINE.question();

    if (input === '1') {
      console.clear();
      prompt(`You Hit`);
      bust = dealingLogic(who, deck, handTracker);
    } else if (input === '2') {
      console.clear();
      prompt(`You Hold`);
      break;
    } else {
      invalidMessage();
    }

    if (bust) break;
  }

  return bust;
}

function dealerLogic(who, deck, handTracker) {
  let bust = false;
  let dealerTurn = true;
  let sum = handTracker[who].total;

  while (true) {
    if (sum < DEALER_AIM_POINTS) {
      prompt(`Dealer hits`);
      bust = dealingLogic(who, deck, handTracker, dealerTurn);
      sum = handTracker[who].total;
      if (bust) break;

    } else if (sum >= DEALER_AIM_POINTS) {
      prompt(`Dealer holds`);
      break;
    }
  }

  return bust;
}


function announceResult(result, handTracker, grandScore) {
  let playerSum = handTracker['player'].total;
  let dealerSum = handTracker['dealer'].total;

  switch (result) {
    case "you busted":
      grandScore.dealer += 1;
      prompt(`You busted at ${playerSum}, Dealer wins at ${dealerSum}`);
      break;
    case "dealer busted":
      grandScore.player += 1;
      prompt(`Dealer busted at ${dealerSum}, You win at ${playerSum}!`);
      break;
    case "player":
      grandScore.player += 1;
      prompt(`You Win! your score: ${playerSum}, dealer score: ${dealerSum}`);
      break;
    case "dealer":
      grandScore.dealer += 1;
      prompt(`Dealer wins! your score: ${playerSum}, dealer score: ${dealerSum}`);
      break;
    case "tie":
      prompt(`It's a tie! The score is ${playerSum}`);
  }
}

function findResult(handTracker) {
  let playerSum = handTracker['player'].total;
  let dealerSum = handTracker['dealer'].total;

  if (playerSum > WINNING_POINTS) return "you busted";
  else if (dealerSum > WINNING_POINTS) return "dealer busted";
  else if (playerSum > dealerSum) return "player";
  else if (dealerSum > playerSum) return "dealer";
  else return "tie";

}

// eslint-disable-next-line max-statements
function round(deck, handTracker, grandScore) {
  let result;
  let playerBust = playerPrompt("player", deck, handTracker);
  if (playerBust) {
    result = findResult(handTracker);
    announceResult(result, handTracker, grandScore);
    return;
  }

  let dealerBust = dealerLogic("dealer", deck, handTracker);
  if (dealerBust) {
    result = findResult(handTracker);
    announceResult(result, handTracker, grandScore);
    return;
  }

  let endCondition = true;
  displayHands(handTracker, endCondition);
  findResult(handTracker);
  result = findResult(handTracker);
  announceResult(result, handTracker, grandScore);
}


// eslint-disable-next-line max-statements
function startGame() {
  let grandScore = {player:0, dealer:0};
  let continueGame = true;

  while (continueGame) {
    let deck = initializeDeck();
    let handTracker = initializeHand();

    initialDeal(deck, handTracker);
    displayHands(handTracker);

    round(deck, handTracker, grandScore);

    if (grandScore.player === 3) {
      prompt(`You are the Grand Winner, woah!!! Goodbye.`);
      break;
    } else if (grandScore.dealer === 3) {
      prompt(`Dealer is the Grand Winner, yikes~ GoodBye`);
      break;
    }

    while (true) {
      prompt(`Another round? 1 = yes 2 = no`);
      let input = READLINE.question();
      if (input === '1') {
        console.clear();
        break;
      } else if (input === '2') {
        prompt('Thank you for playing, goodbye!');
        continueGame = false;
        break;
      } else invalidMessage();
    }
  }


}

startGame();