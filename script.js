const Elements = ["rock", "paper", "scissors"];
const choice = document.querySelectorAll('.pbuttons button')


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
        return -1;
    }

}

function game(){
    let count = 3, s = 0;
    choice.forEach((el) =>
    {
        el.addEventListener('click', () => {
            count--;
            s += playRound(el.id.toString(), computerPlay());
            if(count == 0) {
                if(s > 0) console.log("Computer wins");
                else if(s < 0) console.log("Player wins");
                else console.log("Tie");
                this.removeEventListener('click')
            }
        })
    })
    
}

game();

