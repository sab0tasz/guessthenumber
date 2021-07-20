'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Dominika wybierz numer';

console.log(document.querySelector('.message').textContent);


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 100;

document.querySelector('.guess').value = 10;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const widthStyle = function (width) {
  document.querySelector('.number').style.width = width;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const backgroundChange = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // no input

  if (!guess) {
    // document.querySelector('.message').textContent = 'Type in the number!';
    displayMessage('No number!');

    // player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct number');

    backgroundChange('#60b347');

    widthStyle('30rem');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.highscore').textContent = score;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low!';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  backgroundChange('#222');
  widthStyle('15rem');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
});
