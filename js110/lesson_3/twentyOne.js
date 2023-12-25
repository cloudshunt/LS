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

function initializePlayersHand() {
  let players = {
    human:{hands:[], points:0},
    computer:{hands:[], points:0}
  }
}

function startGame() {
  let deck = initializeDeck();

}

startGame();