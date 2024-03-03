// I made this myself
// convert the following factory function
// to consturctor/prototype pattern

// Question 1
function createPlayer() {
  return {
    move : null
  };
}

function createHuman() {
  let playerObject = createPlayer();
  let humanObject = {
    greet() {
      console.log('human says hi');
    }
  };

  return Object.assign(playerObject, humanObject);
}

let human1 = createHuman();
console.log(human1.greet());

//Answer: use createPlayer.call(this) to initialize human1 object's value

// Question 2, what if I need to add a method to
// createPlayer? Change the code to address this (Note: need good practice)

// answer:
// createHuman.prototype = Object.create(createPlayer.prototype);
// createHuman.prototype.constructor = createHuman;


// Question 3, convert your answer for question with `class` syntax


