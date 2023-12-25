/**
 * initializeDeck Algo:
 * ------------------
 * ????
 * this logic is used when delt ace?
 * function aceOneOrEleven(points) {
 *  return points > 10 ? 1:11;
 * }
 * 
 * const SUITS = ['Hearts', 'Diamonds', 'Clubs', and 'Spades']
 * const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10,
 *                Jack, Queen, King, Ace]
 * const POINTS = {
 *  2: 2, 3: 3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9,
 *  10:10, Jack: 10, Queen:10, King: 10,
 *  Ace: aceOneOrEleven(points) OR Null?
 * }
 * SET deckArr = []
 * SET id = 0
 *
 * LOOP SUITS:
 *  LOOP VALUES:
 *    initializeCard(id, cardSuit, cardValue) append to deckArr
 *    id += 1
 * 
 * InitializeCard(id, cardSuit, cardValue) Algo:
 *  SET cardObj = {};
 *  cardObj[STR(id)] = {
 *    suit: cardSuit
 *    value: cardValue
 *    points: POINTS[value]
 * }
 * ----------------
 * data structure for players
 */

// use this when delt cards?
function aceOneOrEleven(points) {
  return points > 10 ? 1 : 11;
}

const SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
const POINTS = {
  2:2,
  3:3,
  4:4,
  5:5,
  6:6,
  7:7,
  8:8,
  9:9,
  10:10,
  Jack: 10,
  Queen: 10,
  King: 10,
  Ace: null
};

function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]]; // swap elements
  }
}

function initializeDeck() {
  let deckArr = [];
  let id = 0;

  SUITS.forEach((cardSuit) => {
    VALUES.forEach((cardValue => {
      //console.log(id, cardSuit, cardValue);
      deckArr.push(initializeCard(id, cardSuit, cardValue));
      id += 1;
    }));
  });

  shuffle(deckArr);

  return deckArr;
}

function initializeCard(id, cardSuit, cardValue) {
  let cardObj = {};
  //                    id : {misc info}
  // example output: { '50': { suit: 'Spades', value: 'King', points: 10 } }
  cardObj[String(id)] = {
    suit: cardSuit,
    value: cardValue,
    points: POINTS[cardValue]
  };

  return cardObj;
}

function initializeHand() {
  let handTracker = {
    player:{hand:[], points:0},
    dealer:{hand:[], points:0}
  };
  return handTracker;
}

/**
 * card is either delt to player or dealer, every deal gives one card
 */



function updateHand(who, cardToAdd, handTracker) {
  handTracker[who]['hand'].push(cardToAdd);

  let cardID = Object.keys(cardToAdd).join(); //to get card id as stand alone string
  handTracker[who]['points'] += cardToAdd[cardID].points;

  return handTracker;

}

function dealCard(who, deck, handTracker) {
  let card = deck.shift();
  return updateHand(who, card, handTracker);
}

function initialDeal(deck, handTracker) {
  handTracker = dealCard("player", deck, handTracker);
  handTracker = dealCard("dealer", deck, handTracker);

  handTracker = dealCard("player", deck, handTracker);
  handTracker = dealCard("dealer", deck, handTracker);

  return handTracker;
}

function prompt(message) {
  console.log(`=>${message}`);
}
function displayHands(handTracker) {
  console.log(handTracker.dealer);
  //let dealerValue = handTracker.dealer;
  //prompt(`Dealer has: ${dealerValue} and unknown card`); //unknown card will be idx 0
  prompt(`You have:`);
}
function startGame() {
  let deck = initializeDeck();
  let handTracker = initializeHand();
  handTracker = initialDeal(deck, handTracker);

  displayHands(handTracker);


  //console.log();

}

startGame();