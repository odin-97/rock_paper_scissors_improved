const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissor');

const playButton = document.querySelector('.hidden');

let userText = document.querySelector('#user');
let computerText = document.querySelector('#computer');
let winnerText = document.querySelector('#winner');

let userScoreLine = document.querySelector('#userScore');
let computerScoreLine = document.querySelector('#computerScore');

let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
    const randomChoice = Math.random() * 100;

    if (randomChoice <= 33) return 'PAPER';
    else if (randomChoice <= 66) return 'SCISSOR';
    else if (randomChoice <= 100) return 'ROCK';
    
    return 'invalid';
}


function playRound(humanChoice) {
    humanChoice = humanChoice.toUpperCase(); // makes human input case-insensitive

    const computerChoice = getComputerChoice();
    computerText.textContent = computerChoice;

    roundsPlayed++;

    if (humanChoice === computerChoice) {
        winnerText.textContent = 'A Draw!'
    } 
    
    else if (humanChoice === 'PAPER') {
        if (computerChoice === 'ROCK') {
            winnerText.textContent = 'You win! Paper beats Rock.';
            userScore++;
            userScoreLine.textContent = userScore;
        } else if (computerChoice === 'SCISSOR') {
            winnerText.textContent = 'You lose! Scissor beats Paper.';
            computerScore++;
            computerScoreLine.textContent = computerScore;
        }
    } 
    
    else if (humanChoice === 'SCISSOR') {
        if (computerChoice === 'PAPER') {
            winnerText.textContent = 'You win! Scissor beats Paper.';
            userScore++;
            userScoreLine.textContent = userScore;
        } else if (computerChoice === 'ROCK') {
            winnerText.textContent = 'You lose! Rock beats Scissor.'
            computerScore++;
            computerScoreLine.textContent = computerScore;
        }
    }

    else if (humanChoice === 'ROCK') {
        if (computerChoice === 'SCISSOR') {
            winnerText.textContent = 'You win! Rock beats Scissor.'
            userScore++;
            userScoreLine.textContent = userScore;
        } else if (computerChoice === 'PAPER') {
            winnerText.textContent = 'You lose! Paper beats Scissor.'
            computerScore++;
            computerScoreLine.textContent = computerScore;
        }
    }

    if (roundsPlayed === 5) {
        let promptText = ''

        if (userScore > computerScore) {
            promptText = `You won! Final score is ${userScore}:${computerScore}`;
        } else if (computerScore > userScore) {
            promptText = `You lost! Final score is ${userScore}:${computerScore}`;
        } else {
            promptText = `We have a Draw! Final score is ${userScore}:${computerScore}`;
        }

        playButton.classList.toggle('hidden');

        setTimeout(() => {
            alert(promptText);
        }, 0);  
        
    }
}

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

playButton.addEventListener('click', () => {
    userText.textContent = '';
    computerText.textContent = '';
    winnerText.textContent = '';

    roundsPlayed = 0;
    userScore = 0;
    computerScore = 0;
    userScoreLine.textContent = '0';
    computerScoreLine.textContent = '0';
    playButton.classList.toggle('hidden');
})

