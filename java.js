let playerScore = 0
let compScore = 0

const choice = ['rock','paper','scissors'];

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')


function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection){
   console.log('1', playerSelection, '2', computerSelection)
    if (playerSelection ===  computerSelection ){
        const p = document.createElement('p')
        p.innerText = `You Tied, you both picked ${playerSelection}`
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You win! Rock SMASHES scissors'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You win! Paper SMOTHERS rock!'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You win! Scissors SLICES paper'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        compScore++
        const p = document.createElement('p')
        p.innerText = 'You lose sukka! Bot paper SUFFOCATES rock'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        compScore++
        const p = document.createElement('p')
        p.innerText = 'You lose sukka! Bot scissors SHREDS paper'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        compScore++
        const p = document.createElement('p')
        p.innerText = 'You lose sukka! Bot rock DESTROYS scissors'
        outcomeDiv.appendChild(p)
    }
}

const checkForWinner = (playerScore, compScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('player-won')
        h2.innerText = ' YOU WIN BOZO'
        outcomeDiv.appendChild(h2)
    } else if (compScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('comp-won')
        h2.innerText = ' YOU LOSE BITCH'
        outcomeDiv.appendChild(h2)
    }
}

const updateScores = (playerScore, compScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`
    computerScoreSpan.innerText = `Computer Score: ${compScore}`
}
rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, compScore)
    checkForWinner(playerScore, compScore)
})

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, compScore)
    checkForWinner(playerScore, compScore)
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, compScore)
    checkForWinner(playerScore, compScore)
})

