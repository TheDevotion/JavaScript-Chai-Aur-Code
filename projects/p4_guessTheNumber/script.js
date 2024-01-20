let randomNumber = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const Remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = []; // array of guesses
let numGuesses = 1;

let playGame = true; // in every game

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // will validate value 1 to 100 or not
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess < 1) {
    alert(`Please enter a valid number greater than 0 `);
  } else if (guess > 100) {
    alert(`Please enter a valid number smaller than 101 `);
  } else {
    prevGuess.push(guess);
    if (numGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // is value == random number.
  if (guess === randomNumber) {
    displayMessage(`You guessed it right. Congratulations !`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is tooo low.`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is tooo high.`);
  }
}

// clean - up :::

function displayGuess(guess) {
  // clean values, and update guess array, and remaining
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGuesses++;
  Remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message) {
  // this will interact with DOM.
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");

  // chaning the values in globaly created p.
  p.classList.add("button"); // to add a button.
  p.innerHTML = `<h2 id="newGame" >Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = Math.floor(Math.random() * 100 + 1);
    prevGuess = [];
    numGuesses = 1;
    guessSlot.innerHTML = "";
    Remaining.innerHTML = `${11 - numGuesses}`;

    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    lowOrHigh.innerHTML = "";

    playGame = true;
  });
}
