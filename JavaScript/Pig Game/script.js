"use strict";

//Take user input of 2 player's names and replace in player 1 and player2.
// give an info about game in a box.(maybe a modal at the end of a page or when the page refreshes).

//Selecting Elements
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.getElementById("score--0");
const score1 = document.querySelector("#score--1");
let current0 = document.getElementById("current--0");
let current1 = document.getElementById("current--1");
const diceElem = document.getElementsByClassName("dice")[0];
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Starting Requirements
score0.textContent = 0;
score1.textContent = 0;
diceElem.classList.add("hidden");

let scores, activePlayer, currentScore, playing;
const init = function () {
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;

  current0.textContent = 0;
  current1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;

  diceElem.classList.add("hidden");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
};
init();

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceElem.classList.remove("hidden");

    diceElem.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else switchPlayer();
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    diceElem.classList.add("hidden");
    document.querySelector(`#current--${activePlayer}`).textContent = "😉🍷🎊";

    if (scores[activePlayer] >= 30) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else switchPlayer();
  }
});
btnNew.addEventListener("click", init);
