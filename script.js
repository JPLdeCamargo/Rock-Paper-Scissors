const playerScore = document.querySelector("#playerScore")
const computerScore = document.querySelector("#computerScore")
function clicked(playerChoice){
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    console.log(winner)
    changeScore(winner);
}

function getComputerChoice(){
    let computerNumChoice = Math.floor(Math.random() * 3);
    let computerChoice = '';
    switch (computerNumChoice){
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissor';
            break;
    }
    return computerChoice;
}

function getWinner(playerChoice, computerChoice){
    console.log(`${playerChoice}, ${computerChoice}`)
    if (playerChoice === computerChoice){
        return 'draw';
    }
    if ((playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissor' && computerChoice === 'paper')){
            return 'player';
    }
    return 'computer';
}

function changeScore(winner){
    if (winner === 'player'){
        let intPlayerScore = parseInt(playerScore.textContent)
        intPlayerScore++;
        playerScore.textContent = `${intPlayerScore}`
    }
    else if (winner === 'computer'){
        let intComputerScore = parseInt(computerScore.textContent)
        intComputerScore++;
        computerScore.textContent = `${intComputerScore}`
    }
}