function getComputerChoice() {
    const randomChoice = Math.random() * 100;

    if (randomChoice <= 33) return 'PAPER';
    else if (randomChoice <= 66) return 'SCISSOR';
    else if (randomChoice <= 100) return 'ROCK';
    
    return 'invalid';
}

let winnerText = document.querySelector('#winner');

function playRound(humanChoice) {
    humanChoice = humanChoice.toUpperCase(); // makes human input case-insensitive
    const computerChoice = getComputerChoice();
    computerText.textContent = computerChoice;
    let humanWin = false;

    if (humanChoice === computerChoice) {
        winnerText.textContent = 'Draw!';
        return 'draw';
    } 
    
    else if (humanChoice === 'PAPER') {
        if (computerChoice === 'ROCK') {
            winnerText.textContent = 'You win! Paper beats Rock.';
            humanWin = true;
        } else if (computerChoice === 'SCISSOR') {
            winnerText.textContent = 'You lose! Scissor beats Paper.';
            humanWin = false;
        }
    } 
    
    else if (humanChoice === 'SCISSOR') {
        if (computerChoice === 'PAPER') {
            winnerText.textContent = 'You win! Scissor beats Paper.';
            humanWin = true;
        } else if (computerChoice === 'ROCK') {
            winnerText.textContent = 'You lose! Rock beats Scissor.';
            humanWin = false;
        }
    }

    else if (humanChoice === 'ROCK') {
        if (computerChoice === 'PAPER') {
            winnerText = 'You lose! Paper beats Rock.';
            humanWin = false;
        } else if (computerChoice === 'SCISSOR') {
            winnerText.textContent = 'You win! Rock beats Scissor';
            humanWin = true;
        }
    }

    if (humanWin) return 'human';
    else return 'computer';
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissor');

let userText = document.querySelector('#user');
let computerText = document.querySelector('#computer');



rockButton.addEventListener('click', () => {
    userText.textContent = 'Rock';
    playRound('rock');
});

paperButton.addEventListener('click', () => {
    userText.textContent = 'Paper';
    playRound('paper');
});

scissorButton.addEventListener('click', () => {
    userText.textContent = 'Scissor';
    playRound('scissor');
});

