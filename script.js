
// global variables
const playerScore = document.querySelector("#playerScore")
const computerScore = document.querySelector("#computerScore")
const playerChoices = document.querySelectorAll('.player-choice')
const computerChoices = document.querySelectorAll('.computer-choice')

for(let i = 0; i < playerChoices.length; i++){
    playerChoices[i].addEventListener('click', function(){
        doButtonAnimation(this.id);
        playGame(this.id);
    })
}

function playGame(choice){
    const playerChoice = choice
    const computerChoice = getComputerChoice();
    highlightComputerChoice(computerChoice)
    const winner = getWinner(playerChoice, computerChoice);
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

function highlightComputerChoice(choice){
    // remove class from last highlighted choice
    for(let i = 0; i < computerChoices.length; i++){
        computerChoices[i].classList.remove('highlight-choice')
    }

    const computerChoice = document.querySelector(`#computer-${choice}`)
    computerChoice.classList.add('highlight-choice')
    
}

function getWinner(playerChoice, computerChoice){
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

function doButtonAnimation(choice){

    const activeButton = document.querySelector(`#${choice}`)
    activeButton.classList.add('button-active')
    setTimeout(function(){
        activeButton.classList.remove('button-active')
    }, 100)
}