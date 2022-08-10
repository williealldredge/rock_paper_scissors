let playerScore = 0
let compScore = 0

const choice = ['rock','paper','scissors'];

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
        playerScore++
        return 'You win! Rock SMASHES scissors'
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++
        return 'You win! Paper SMOTHERS rock!'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerscore++
        return 'You win! Scissors SLICES paper'
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper'){
        compScore++
        return 'You lose sukka! Bot paper SUFFOCATES rock'
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        compScore++
        return 'You lose sukka! Bot scissors SHREDS paper'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        compScore++
        return 'You lose sukka! Bot rock DESTROYS scissors'
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('pick your weapon','rock, paper, or scissors').toLowerCase()
        const computerSelection = getComputerChoice()
        console.log('1', playRound(playerSelection, computerSelection))
       }       

    if (playerScore < compScore){
        return 'Get it together buddy! Terminator took over the world'
    }
    else if (playerScore > compScore){
        return "You just stopped the rise of the machines"
    }
    else {
        return 'Tied? Do better'
    }
}

console.log (game())