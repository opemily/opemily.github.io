// Set Variables

var box1 = document.querySelector('.one'),
    box2 = document.querySelector('.two'),
    box3 = document.querySelector('.three'),
    box4 = document.querySelector('.four'),
    box5 = document.querySelector('.five'),
    box6 = document.querySelector('.six'),
    box7 = document.querySelector('.seven'),
    box8 = document.querySelector('.eight'),
    box9 = document.querySelector('.nine'),
    startButton = document.querySelector('.new-game'),
    resetButton = document.querySelector('.reset');

// Check for Winner 
var checkWinner = function () {

    if (box1.classList.contains('red-skull') && box2.classList.contains('red-skull') && box3.classList.contains('red-skull')) {
        return window.alert('Player 1 Wins! Click reset to play again!');
    } else if (box4.classList.contains('red-skull') && box5.classList.contains('red-skull') && box6.classList.contains('red-skull')) {
        return window.alert('Player 1 Wins! Click reset to play again!');
    } else if (box7.classList.contains('red-skull') && box8.classList.contains('red-skull') && box9.classList.contains('red-skull')) {
        return window.alert('Player 1 Wins! Click reset to play again!');
    } else if (box1.classList.contains('red-skull') && box4.classList.contains('red-skull') && box7.classList.contains('red-skull')) {
        return window.alert('Player 1 Wins! Click reset to play again!');
    } else if (box2.classList.contains('red-skull') && box5.classList.contains('red-skull') && box8.classList.contains('red-skull')) {
        return window.alert('Player 1 Wins! Click reset to play again!');
    } else if (box3.classList.contains('red-skull') && box6.classList.contains('red-skull') && box9.classList.contains('red-skull')) {
        return window.alert('Player 1 Wins! Click reset to play again!');
    } else if (box1.classList.contains('red-skull') && box5.classList.contains('red-skull') && box9.classList.contains('red-skull')) {
        return window.alert('Player 1 Wins! Click reset to play again!');
    } else if (box3.classList.contains('red-skull') && box5.classList.contains('red-skull') && box7.classList.contains('red-skull')) {
        return window.alert('Player 1 Wins! Click reset to play again!');
    } else if (box1.classList.contains('purple-skull') && box2.classList.contains('purple-skull') && box3.classList.contains('purple-skull')) {
        return window.alert('Player 2 Wins! Click reset to play again!');
    } else if (box4.classList.contains('purple-skull') && box5.classList.contains('purple-skull') && box6.classList.contains('purple-skull')) {
        return window.alert('Player 2 Wins! Click reset to play again!');
    } else if (box7.classList.contains('purple-skull') && box8.classList.contains('purple-skull') && box9.classList.contains('purple-skull')) {
        return window.alert('Player 2 Wins! Click reset to play again!');
    } else if (box1.classList.contains('purple-skull') && box4.classList.contains('purple-skull') && box7.classList.contains('purple-skull')) {
        return window.alert('Player 2 Wins! Click reset to play again!');
    } else if (box2.classList.contains('purple-skull') && box5.classList.contains('purple-skull') && box8.classList.contains('purple-skull')) {
        return window.alert('Player 2 Wins! Click reset to play again!');
    } else if (box3.classList.contains('purple-skull') && box6.classList.contains('purple-skull') && box9.classList.contains('purple-skull')) {
        return window.alert('Player 2 Wins! Click reset to play again!');
    } else if (box1.classList.contains('purple-skull') && box5.classList.contains('purple-skull') && box9.classList.contains('purple-skull')) {
        return window.alert('Player 2 Wins! Click reset to play again!');
    } else if (box3.classList.contains('purple-skull') && box5.classList.contains('purple-skull') && box7.classList.contains('purple-skull')) {
        return window.alert('Player 2 Wins! Click reset to play again!');
    } else {
        return console.log('Keep playing!');
    }
};

// Switch Players

var moves = 0;
var playGame = function (e) {

  if (moves % 2 === 0) {

        e.target.classList.add('red-skull');
        e.target.removeEventListener('click', playGame, false);
        checkWinner();
    } else {

        e.target.classList.add('purple-skull');
        e.target.removeEventListener('click', playGame, false);
        checkWinner();
    }

    moves++;

    if (moves === 9){
      window.alert('It\'s a tie! Play again!');
    }
};


// Start Game Function

var startGame = function () {

    window.alert('Welcome to Dia de Los Muertos Tic Tac Toe. Player 1 is the Red Skull and Player 2 is the Purple Skull. Try to get 3 in a row!');

    box1.addEventListener('click', playGame);
    box2.addEventListener('click', playGame);
    box3.addEventListener('click', playGame);
    box4.addEventListener('click', playGame);
    box5.addEventListener('click', playGame);
    box6.addEventListener('click', playGame);
    box7.addEventListener('click', playGame);
    box8.addEventListener('click', playGame);
    box9.addEventListener('click', playGame);

};

//Reset Game Function

var resetGame = function () {
    location.reload(true);
};

//Add Event Listeners to Buttons

startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);