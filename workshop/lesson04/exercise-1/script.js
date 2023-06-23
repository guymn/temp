'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    // Insert code here
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        // When there is no input
        displayMessage('⛔️ No number!');
    
    } else if (guess === secretNumber) {
        // When player wins
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
            
    } else if (guess !== secretNumber) {
        // When guess is wrong
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
          } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
          }
    
    }
});

document.querySelector('.again').addEventListener('click', function(){
    displayMessage('');
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    highscore = 0;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('.guess').value = '';
});