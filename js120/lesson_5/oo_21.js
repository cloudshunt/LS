const readline = require('readline-sync');

class Card {
  static SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  static VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

  constructor(cardSuit, cardValue) {
    this.cardSuit = cardSuit;
    this.cardValue = cardValue;
  }

  getSuit() {
    return this.cardSuit;
  }

  getValue() {
    return this.cardValue;
  }
}

class Deck {
  constructor() {
    this.deckArr = [];
    this.initializeDeck();
    this.shuffleDeck();
  }

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
    Card.SUITS.forEach((cardSuit) => {
      Card.VALUES.forEach((cardValue => {
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
    this.initializePointsAndHand();
    this.money = INITIAL_DOLLAR; //even though dealer will have this, but wont be used
  }

  initializePointsAndHand() {
    this.points = 0;
    this.hand = [];
  }
  increaseDollar() {
    this.money += 1;
  }

  decreaseDollar() {
    this.money -= 1;
  }

  getDollar() {
    return this.money;
  }

  displayPlayerDollar() {
    console.log(`\nYou currently have ${this.money} dollars`);
  }


  isBusted() {
    // eslint-disable-next-line no-use-before-define
    return this.points > TwentyOneGame.WINNING_POINTS;
  }

  addToHand(card) {
    this.hand.push(card);
  }

  getHand() {
    return this.hand;
  }

  pointsUpdate(points) {
    this.points = points;
  }

  getPoints() {
    return this.points;
  }

}

class TwentyOneGame {
  static WINNING_POINTS = 21;
  static WIN_DOLLAR_AMT = 10;
  static LOSE_DOLLAR_AMT = 0;

  constructor() {
    this.deck = new Deck();
    this.player = new Participant('player');
    this.dealer = new Participant('dealer');
  }

  start() {
    this.displayWelcomeMessage();
    while (true) {
      this.roundOfGame();
      this.player.displayPlayerDollar();
      if (this.player.getDollar() === TwentyOneGame.WIN_DOLLAR_AMT) {
        console.log('You are broke now, dirt for dinner !!');
        break;
      } else if (this.player.getDollar() === TwentyOneGame.LOSE_DOLLAR_AMT) {
        console.log('You are rich now, chicken dinner !!');
        break;
      } else {
        let anotherRound = this.anotherRoundCheck();
        this.initializeRound();
        if (anotherRound) continue;
        else break;
      }

    }
    this.displayGoodbyeMessage();
  }

  initializeRound() {
    this.player.initializePointsAndHand();
    this.dealer.initializePointsAndHand();
    this.deck.initializeDeck();
  }

  anotherRoundCheck() {
    let choice;
    while (true) {
      console.log('Another round of game? Yes = y, No = n');
      choice = readline.question().toLowerCase();
      console.clear();
      if (choice === 'y' || choice === 'yes') {
        return true;
      } else if (choice === 'n' || choice === 'no') {
        return false;
      }
      this.invalidEntryMessage();
    }
  }

  roundOfGame() {
    this.initalDeal();
    this.playerTurn();
    if (this.player.isBusted()) {
      this.player.decreaseDollar();
      this.displayRoundLoseMessage();
      return;
    }

    this.dealerTurn();
    if (this.dealer.isBusted()) {
      this.player.increaseDollar();
      this.displayRoundWinMessage();
      return;
    }

    this.pointsResult();
  }

  pointsResult() {
    if (this.dealer.points > this.player.points) {
      this.player.decreaseDollar();
      console.log('Dealer Wins');
    } else if (this.dealer.points < this.player.points) {
      this.player.increaseDollar();
      console.log('You Win');
    } else console.log("It's a tie");

    this.pressEnterToContinueMessage();
  }

  displayRoundWinMessage() {
    console.log('You won this round !!');
    this.pressEnterToContinueMessage();
  }
  displayRoundLoseMessage() {
    console.log('You lost this round !!');
    this.pressEnterToContinueMessage();
  }

  displayCardsDealerHidden() {
    let hideDealerCard = true;
    this.showCards(hideDealerCard);
  }

  displayCardsDealerReveal() {
    this.showCards();
  }

  initalDeal() {
    this.deck.deal(this.dealer);
    this.deck.deal(this.player);

    this.deck.deal(this.dealer);
    this.deck.deal(this.player);

    this.player.pointsUpdate(this.returnPointsSumOf(this.player));
    this.dealer.pointsUpdate(this.returnPointsSumOf(this.dealer));

  }


  returnPointsSumOf(participant) {
    let values = participant.getHand().map((card) => {
      return card.getValue();
    });

    let sum = 0;
    values.forEach(val => {
      if (val === 'Ace') sum += 11;
      else if (['Jack','Queen','King'].includes(val)) sum += 10;
      else sum += val;
    });

    //Aces adjustment
    values
      .filter((value) => value === 'Ace')
      .forEach(() => {
        if (sum > TwentyOneGame.WINNING_POINTS) sum -= 10;
      });

    return sum;
  }


  handDisplayLoop(symbolAndValue) {
    return this.joinAnd(symbolAndValue);
  }

  getParticipantCardDisplay(participant) {
    const SUIT_ICON = {Hearts:'\u2665', Diamonds:'\u2666', Clubs:'\u2663', Spades:'\u2660'};
    let handSuitAndValue = participant.getHand().map( (card) => {
      return SUIT_ICON[ card.getSuit() ] + String(card.getValue());
    });

    return handSuitAndValue;
  }

  showCards(hideDealerCard = false) {
    let symbolAndValuePlayer = this.getParticipantCardDisplay(this.player);
    let symbolAndValueDealer = this.getParticipantCardDisplay(this.dealer);

    if (hideDealerCard) console.log(`=> Dealer has: ${symbolAndValueDealer[0]} and ?(unknown card). (points: ?)`);
    else console.log(`=> Dealer has: ${this.handDisplayLoop(symbolAndValueDealer)} (points: ${this.dealer.getPoints()})`);

    console.log(`=> You have: ${this.handDisplayLoop(symbolAndValuePlayer)} (points: ${this.player.getPoints()})\n`);

  }

  hitLogic(participant) {
    this.deck.deal(participant);
    participant.pointsUpdate(this.returnPointsSumOf(participant));

    console.clear();
  }

  stayLogic() {
    console.clear();
    this.displayCardsDealerHidden();
  }

  playerTurn() {
    //show all hands every hit
    this.displayCardsDealerHidden();

    while (true) {
      console.log('Hit or stay? Hit = h, Stay = s');
      let choice = readline.question().toLowerCase();
      if ( choice === 'h' || choice === 'hit') {
        this.hitLogic(this.player);
        this.displayCardsDealerHidden();
        if (this.player.isBusted()) {
          console.log('You busted');
          break;
        }
      } else if (choice === 's' || choice === 'stay') {
        this.stayLogic();
        break;
      } else {
        this.invalidEntryMessage();
      }
    }
  }

  dealerTurn() {
    const DEALER_MIN_REQUIRED_POINTS = 17;
    while (true) {
      if ( this.dealer.points < DEALER_MIN_REQUIRED_POINTS) {
        this.hitLogic(this.dealer);
        console.log('Dealer hits');
        this.displayCardsDealerReveal();
        if (this.dealer.isBusted()) break;
      } else if (this.dealer.points >= DEALER_MIN_REQUIRED_POINTS) {
        console.log('Dealer stays');
        this.displayCardsDealerReveal();
        break;
      }

    }
    if (this.dealer.isBusted()) console.log('Dealer busted');
  }

  pressEnterToContinueMessage() {
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
    console.clear();
  }

  displayWelcomeMessage() {
    console.log('Welcome to the Game of 21');
    this.pressEnterToContinueMessage();
  }

  displayGoodbyeMessage() {
    console.log('Thank you for playing 21, goodbye!');
  }

  invalidEntryMessage() {
    console.clear();
    console.log('Invalid entry, try again');
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