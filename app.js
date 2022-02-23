

    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

function computerPlay(){
    let randomNum = getRandomArbitrary(1,4);
    let computerChoice = '';
    if (randomNum === 1){
        computerChoice = 'rock';
    }
    else if (randomNum === 2){
        computerChoice = 'paper';
    }
    else if (randomNum === 3){
        computerChoice = 'scissors';
    }
    
    return computerChoice;  
}

function playerChoice(){
   let choice = prompt("Would you like to play, 'rock', 'paper', or scissors?");
   choice = choice.toLowerCase();
   return choice
}
function playRound (playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return `You both chose ${computerSelection}. It's a tie!`;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return `Players choice of: ${playerSelection} beats Computers choice of: ${computerSelection}. Player Wins!`;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return `Players choice of: ${playerSelection} beats Computers choice of: ${computerSelection}. Player Wins!`;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return `Players choice of: ${playerSelection} beats Computers choice of: ${computerSelection}. Player Wins!`;
    }
    else{
        return `Computers choice of: ${computerSelection} beats Players choice of: ${playerSelection}. Computer Wins!`;;
    }
    
}

function game(){
    for (let i = 0; i < 10; i++) {
        console.log(playRound(playerChoice(), computerPlay()));
     }    
}

game();