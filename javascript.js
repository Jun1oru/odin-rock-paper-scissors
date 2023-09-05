let playerSelection = "rock";
let playerScore = 0;
let computerScore = 0;

const playerScoreH = document.querySelector('#player-score');
const playerChoice = document.querySelector('#player-choice');
const computerScoreH = document.querySelector('#computer-score');
const computerChoice = document.querySelector('#computer-choice');

const currentRound = document.querySelector('#current-round');
const gameState = document.querySelector('#state');

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function() {
    playRound(`${this.id}`, getComputerChoice());
}));

const playButton = document.querySelector('#play');
playButton.addEventListener('click', function() {
    resetGame();
});

resetGame();

function resetGame() {
    playerSelection = "rock";
    playerScore = 0;
    computerScore = 0;

    gameState.textContent = '';
    currentRound.textContent = 'Make a choice: ';
    playerChoice.textContent = '?';
    computerChoice.textContent = '?';

    for(const button of buttons) {
        button.disabled = false;
    }

    playButton.hidden = true;
    playButton.disabled = true;
    
    updateScore();
}

function updateScore() {
    playerScoreH.textContent = `Player Score: ${playerScore}`;
    computerScoreH.textContent = `Computer Score: ${computerScore}`;

    if(playerScore == 5) {
        for(const button of buttons) {
            button.disabled = true;
        }
        playButton.hidden = false;
        playButton.disabled = false;

        return gameState.textContent = "You won!";
    }

    if(computerScore == 5) {
        for(const button of buttons) {
            button.disabled = true;
        }
        playButton.hidden = false;
        playButton.disabled = false;

        return gameState.textContent = "You lost!";
    }
}

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    switch(randomChoice) {
        case 0:
            randomChoice = "rock";
            computerChoice.textContent = 'rock';
            break;
        case 1:
            randomChoice = "paper";
            computerChoice.textContent = 'paper';
            break;
        case 2:
            randomChoice = "scissors";
            computerChoice.textContent = 'scissors';
            break;
    }
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        currentRound.textContent = `It's a tie! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} ties with ${computerSelection}`;
    }
    else {
        if(playerSelection === "rock") {
            if(computerSelection === "paper") {
                currentRound.textContent = 'You lost this round! Paper beats rock!';
                computerScore++;
            }
            else if(computerSelection === "scissors") {
                currentRound.textContent = 'You won this round! Rock beats scissors!';
                playerScore++;
            }
        }
        else if(playerSelection === "paper") {
            if(computerSelection === "scissors") {
                currentRound.textContent = 'You lost this round! Scissors beats paper!';
                computerScore++;
            }
            else if(computerSelection === "rock") {
                currentRound.textContent = 'You won this round! Paper beats rock!';
                playerScore++;
            }
        }
        else if(playerSelection === "scissors") {
            if(computerSelection === "rock") {
                currentRound.textContent = 'You lose this round! Rock beats scissors!';
                computerScore++;
            }
            else if(computerSelection === "paper") {
                currentRound.textContent = 'You won this round! Scissors beats paper!';
                playerScore++;
            }
        }
    }
    playerChoice.textContent = `${playerSelection}`;
    updateScore();
}