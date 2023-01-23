let choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    const choice = Math.floor(Math.random() * choices.length);
    const selection = choices[choice]
    return selection
}

function getPlayerChoice() {
    const choice = prompt('Rock, paper, or scissors?').toLowerCase()
    return choice
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'rock' && playerSelection === 'rock' || computerSelection === 'paper' && playerSelection === 'paper' || computerSelection === 'scissors' && playerSelection === 'scissors') {
        return 'You tie!'
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return 'You lose!'
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        return 'You win!'
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return 'You lose!'
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        return 'You win!'
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        return 'You win!'
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return 'You lose!'
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let winner = playRound(getComputerChoice(), getPlayerChoice())
        if (winner === 'You win!') {
            playerScore += 1
        } else if (winner === 'You lose!') {
            computerScore += 1
        } else {
            console.log('Tie')
        }
        console.log("Your score " + playerScore)
        console.log("Computer score " + computerScore)
    }

    if (playerScore > computerScore) {
        console.log('You win!')
    } else {
        console.log('You lose!')
    }
}

game()