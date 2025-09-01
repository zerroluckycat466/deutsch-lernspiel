let score = 0;
let level = 1;
document.getElementById('start-button').addEventListener('click', function() {
    // Log the button click event
    console.log('Start button clicked.');
    document.getElementById('game-info').innerText = 'Welcome to the game! The adventure begins now! Good luck!';
    initializeGameVariables();
});

function initializeGameVariables() {
    // Other game variables can be added here
}