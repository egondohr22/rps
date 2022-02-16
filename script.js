const Elements = ["rock", "paper", "scissors"];

function computerPlay() {
    return Elements[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase();
    if(computerSelection == playerSelection)
    {
        console.log("Tie");
        return 0;
    }
    else if(
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
    ) {
        console.log(`${computerSelection.toUpperCase()} beats ${playerSelection}`);
        return 1;
    }
    else{
        console.log(`${playerSelection.toUpperCase()} beats ${computerSelection}`);
        return 2;
    }

}




function game(){
    for(let i = 0; i < 5; i++) { 
        let player = prompt("What do you pick? Rock, Paper or Scissors?");
        playRound(player, computerPlay());
    }
}

game();

