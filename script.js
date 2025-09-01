document.getElementById('start-button').addEventListener('click', function() {
    console.log('Start button clicked.');
    document.getElementById('game-info').innerText = 'Welcome to the game! The game is starting! Good luck!';
    initializeGameVariables();
});

function initializeGameVariables() {
    // Initialize game variables here
    let score = 0;
    let level = 1;
    // Other game variables can be added here
}