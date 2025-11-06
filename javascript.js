function getComputerChoice() {
    const randomChoice = Math.random() * 100;

    if (randomChoice <= 33) return 'PAPER';
    else if (randomChoice <= 66) return 'SCISSOR';
    else if (randomChoice <= 100) return 'ROCK';
    
    return 'invalid';
}

function getHumanChoice() {
    const humanChoice = prompt('Pick between rock, paper or scissor');
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase(); // makes human input case-insensitive
    let humanWin = false;

    if (humanChoice === computerChoice) {
        console.log('A draw!');
        return 'draw';
    } 
    
    else if (humanChoice === 'PAPER') {
        if (computerChoice === 'ROCK') {
            console.log('You win! Paper beats Rock.');
            humanWin = true;
        } else if (computerChoice === 'SCISSOR') {
            console.log('You lose! Scissor beats Paper.');
            humanWin = false;
        }
    } 
    
    else if (humanChoice === 'SCISSOR') {
        if (computerChoice === 'PAPER') {
            console.log('You win! Scissor beats Paper.');
            humanWin = true;
        } else if (computerChoice === 'ROCK') {
            console.log('You lose! Rock beats Scissor.');
            humanWin = false;
        }
    }

    else if (humanChoice = 'ROCK') {
        if (computerChoice === 'PAPER') {
            console.log('You lose! Paper beats Rock.');
            humanWin = false;
        } else if (computerChoice === 'SCISSOR') {
            console.log('You win! Rock beats Scissor');
            humanWin = true;
        }
    }

    if (humanWin) return 'human';
    else return 'computer';
}

function playGame() {
    let computerChoice, humanChoice, winner;

    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

    while(roundsPlayed < 5) {
        roundsPlayed++;

        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();

        console.log(`The computers choice: ${computerChoice}`);
        console.log(`The humans choice: ${humanChoice}`);

        winner = playRound(humanChoice, computerChoice);
        if (winner === 'human') {
            humanScore++;
        } else if (winner === 'computer') {
            computerScore++;
        }

        console.log(`Scoreline Round ${roundsPlayed}-> Human: ${humanScore}, Computer: ${computerScore}`);
    }
}

playGame()