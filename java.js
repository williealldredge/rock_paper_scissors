const choice = ['rock' , 'paper' , 'scissors'];

function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'rock'){
        return 'You Tied, the RoBoT picked Rock!'
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper'){
        return 'You tied, the RoBoT picked paper too!'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        return 'You tied, the RoBoT picked scissors too!'
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'You win! Rock SMASHES scissors'
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return 'You win! Paper SMOTHERS rock!'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'You win! Scissors SLICES paper'
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return 'You lose sukka! Bot paper SUFFOCATES rock'
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'You lose sukka! Bot scissors SHREDS paper'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'You lose sukka! Bot rock DESTROYS scissors'
    }