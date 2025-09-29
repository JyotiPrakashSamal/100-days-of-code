'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    //for DRY
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess)       //This executes when there is falsify values
    // document.querySelector('.message').textContent = '🚫No Number';
    displayMessage('🚫No Number');
  else if (guess === secretNumber) {
      document.querySelector('.number').textContent = secretNumber;
    //   document.querySelector('.message').textContent = 'Hurray!!!🎊🍷🎊';
    displayMessage('Hurray!!!🎊🍷🎊');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').style.fontSize = '3rem';
    document.querySelector('.message').style.fontWeight = '900';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //Restructuring the code...(DRY Principle)
  else if (guess !== secretNumber) { 
      if (score > 1) {
        //   document.querySelector('.message').textContent = guess>secretNumber? 'too High↗️':'too Low📉';
      displayMessage(guess>secretNumber? 'too High↗️':'too Low📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the Game😝😏');
      document.querySelector('.score').textContent = 0;
    }
  }
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'too High↗️';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the Game😝😏';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'too Low📉';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the Game😝😏';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start Guessing Again...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').style.fontSize = '2rem';
  document.querySelector('.message').style.fontWeight = '300';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
