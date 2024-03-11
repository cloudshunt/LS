/*
1. welcome message, goodbye message, game engine (DONE)
2. create deck of card (done)
3. deal card (affects player, deck) (DONE)
4. be able to show cards that i have first (DONE)
4. ask if player wants to hit or not.
5. Establish points based on player's hand (after recieving delt card
  player's points get updated ) (need to adjust if have ACES)
  player has points property
6. create bust condition
7. create situation where player can hit until bust or hold which becomes dealer's turn
8 dealer hits until 17 or more. Display each hit with one second delay
9. if both dealer decides to stay, then compare the points to determine winner or tie.
10 deal with money, winning gains 1 dollar, losing loses 1 dollar


5. if points is > 21, indicate bust and end game

--deal with points--
- 
--end of deal with points--


My design decision will be:
Dealer has exact same properties & methods
as player.

Dealer specialize treatment will be dealt
via game engine
WHY? (so i may be able tore-use some code, instead
  of seperate code)
Points only gets calculate in participants' hand,
  Ace value will adjust accordingly

Will shuffle the entire deck when starting another round (for simplicity)

NOTE: given money to bet (similar to score tracking), will be implemented
at the end when the entire game is functional.
 */
const readline = require('readline-sync');

class Card {
  constructor(cardSuit, cardValue) {
    this.cardSuit = cardSuit;
    this.cardValue = cardValue;
    // Will have Rank Suit
    //STUB
    // What sort of state does a card need?
    //Points?
  }

  //return card info?
  getCardInfo() {

  }
}

class Deck {
  constructor() {
    //STUB
    // What sort of state does a deck need?
    // 52 Cards?
    // obviously, we need some data structure to keep track of cards
    // array, object, something else?
    this.deckArr = [];
    this.initializeDeck();
    this.shuffleDeck();
  }

  static SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  static VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

  shuffleDeck() {
    for (let idx = this.deckArr.length - 1; idx > 0; idx--) {
      let otherIdx = Math.floor(Math.random() * (idx + 1)); // 0 to index

      //swap elements
      let temp = this.deckArr[idx];
      this.deckArr[idx] = this.deckArr[otherIdx];
      this.deckArr[otherIdx] = temp;
    }
  }

  initializeDeck() {
    Deck.SUITS.forEach((cardSuit) => {
      Deck.VALUES.forEach((cardValue => {
        this.deckArr.push(new Card( cardSuit, cardValue));
      }));
    });
  }

  deal(participant) {
    //deal removes card from deck and gets put into a participant's hand
    let card = this.deckArr.shift();
    participant.addToHand(card);
  }
}

class Participant {
  constructor(identity) {
    const INITIAL_DOLLAR = 5;
    this.identity = identity;
    this.hand = [];
    this.money = INITIAL_DOLLAR;
    //STUB
    // do I do mixin for dealer? in terms of hideCard revelCard
    //amount of moeny available (even though dealer will have this, but wont be used)
  }

  hit(deck) {
    //STUB
    deck.deal(this);
  }

  stay() {
    //STUB
  }

  isBusted() {
    //STUB
  }

  score() {
    //STUB
  }

  addToHand(card) {
    this.hand.push(card);
  }

  getHand() {
    return this.hand;
  }
}

class TwentyOneGame {
  constructor() {
    //STUB
    this.deck = new Deck();
    this.player = new Participant('player');
    this.dealer = new Participant('dealer');
    // What sort of state does the game need?
    // A deck? Two participants?
  }

  static WINNING_POINTS = 21;

  start() {
    //SPIKE
    //this.displayWelcomeMessage();
    this.initalDeal();
    let initialDisplay = true;
    this.showCards(initialDisplay);


    // console.log(`DEALER`);
    // console.log(this.dealer);

    // let cardLeft = this.deck.deckArr.length;
    // console.log(`Card remaining in deck: ${cardLeft}`);

    // this.dealCards();
    // this.showCards();
    // this.playerTurn();
    // this.dealerTurn();
    // this.displayResult();
    //this.displayGoodbyeMessage();
  }

  initalDeal() {
    this.deck.deal(this.dealer);
    this.deck.deal(this.player);

    this.deck.deal(this.dealer);
    this.deck.deal(this.player);
  }


  pointsUpdate() {
    //
  }


  handDisplayLoop(symbolAndValue) {
    // initial display hides dealer's second card

    return this.joinAnd(symbolAndValue);
  }

  showCards(initialCardDisplay = null) {
    let symbolIcon = {Hearts:'\u2665', Diamonds:'\u2666', Clubs:'\u2663', Spades:'\u2660'};

    let symbolAndValuePlayer = this.player.getHand().map( (card) => {
      return symbolIcon[ card['cardSuit'] ] + card['cardValue'];
    });

    let symbolAndValueDealer = this.dealer.getHand().map( (card) => {
      return symbolIcon[ card['cardSuit'] ] + card['cardValue'];
    });
    //STUB
    // 1.show symbol and value (DONE)
    // 2. show points
    //console.log(`Dealer has: `);
    if (initialCardDisplay) console.log(`Dealer has: ${symbolAndValueDealer[0]} and ?(unknown card).`);
    else console.log(`Dealer has: ${this.handDisplayLoop(symbolAndValueDealer)}`);

    console.log(`You have: ${this.handDisplayLoop(symbolAndValuePlayer)}`);

  }

  playerTurn() {
    //STUB
    
  }

  dealerTurn() {
    //STUB
  }

  hideDealerCard() {
    //STUB
  }

  revealDealerCard() {
    //STUB
  }

  displayWelcomeMessage() {
    console.log('Welcome to the Game of 21');
    console.log('Please press "Enter" or "Return" key to continue');
    let response;

    while (true) {
      response = readline.question();
      if (response === '') {
        console.clear();
        break;
      }

      console.clear();
      console.log('Invalid input, Please press "Enter" or "Return" key to continue');
    }
  }

  displayGoodbyeMessage() {
    console.log('Thank you for playing 21, goodbye!');
  }

  displayResult() {
    //STUB
  }

  // eslint-disable-next-line consistent-return
  joinAnd(arr, delimeter = ', ', lastDelimeter = 'and') {
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
}

let game = new TwentyOneGame();
game.start();