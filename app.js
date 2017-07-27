
var compScore = 0;
var playerScore = 0;
var compChoiceWord = '';


function getComputerChoice() {
    //generate a random number between 0 and 1
    var compChoiceNum = Math.random();

    //get computer's word choice from the random number.
    if (compChoiceNum >= 0.0 && compChoiceNum <= 0.33) {
        compChoiceWord = 'rock';
    }
    if (compChoiceNum > 0.33 && compChoiceNum <= 0.66) {
        compChoiceWord = 'paper';
    }
    if (compChoiceNum > 0.66 && compChoiceNum <= 1) {

        compChoiceWord = 'scissors';
    }

    return compChoiceWord;
}


function play(selection) {
    var compSelection = getComputerChoice();
    var result = '';
    var leftImage = '';
    var rightImage = '';

    var compWins = `Computer chose ${compSelection}. Computer wins.`;
    var playerWins = `Computer chose ${compSelection}. You win!`

    //tying scenario
    if (compSelection == selection) {
        result = `It's a tie!\ntry again.`;
        leftImage = '<i class="fa fa-ban result-image game-title" aria-hidden="true"></i>'
        rightImage = '<i class="fa fa-ban result-image game-title" aria-hidden="true"></i>'

    }

    //computer winning scenarios
    if (compChoiceWord == 'rock' && selection == 'scissors') {
        result = compWins;
        compScore += 1;
        leftImage = '<i class="fa fa-hand-rock-o result-image game-title" aria-hidden="true"></i>'
        rightImage = '<i class="fa fa-hand-scissors-o result-image game-title" aria-hidden="true"></i>'
    }
    if (compChoiceWord == 'paper' && selection == 'rock') {
        result = compWins;
        compScore += 1;
        leftImage = '<i class="fa fa-hand-paper-o result-image game-title" aria-hidden="true"></i>'
        rightImage = '<i class="fa fa-hand-rock-o result-image game-title" aria-hidden="true"></i>'


    }
    if (compChoiceWord == 'scissors' && selection == 'paper') {
        result = compWins;
        compScore += 1;
        leftImage = '<i class="fa fa-hand-scissors-o result-image game-title" aria-hidden="true"></i>'
        rightImage = '<i class="fa fa-hand-paper-o result-image game-title" aria-hidden="true"></i>'

    }

    //player winning scenarios
    if (selection == 'rock' && compSelection == 'scissors') {
        result = playerWins;
        playerScore += 1;
        leftImage = '<i class="fa fa-hand-scissors-o result-image game-title" aria-hidden="true"></i>'
        rightImage = '<i class="fa fa-hand-rock-o result-image game-title" aria-hidden="true"></i>'

    }
    if (selection == 'paper' && compSelection == 'rock') {
        result = playerWins;
        playerScore += 1;
        leftImage = '<i class="fa fa-hand-rock-o result-image game-title" aria-hidden="true"></i>'
        rightImage = '<i class="fa fa-hand-paper-o result-image game-title" aria-hidden="true"></i>'

    }
    if (selection == 'scissors' && compSelection == 'paper') {
        result = playerWins;
        playerScore += 1;
        leftImage = '<i class="fa fa-hand-paper-o result-image game-title" aria-hidden="true"></i>'
        rightImage = '<i class="fa fa-hand-scissors-o result-image game-title" aria-hidden="true"></i>'

    }

    document.getElementById('player-choice').innerHTML = "You chose: " + selection;
    document.getElementById('game-result').innerHTML = result;
    document.getElementById('comp-score').innerHTML = compScore;
    document.getElementById('player-score').innerHTML = playerScore;
    document.getElementById('left-image').innerHTML = leftImage;
    document.getElementById('right-image').innerHTML = rightImage;

} // end play function

function clearAll() {
    compScore = 0;
    playerScore = 0;
    location.reload();
}



