
// global scores, get reset per beginning of game
let playerScore = 0;
let computerScore = 0;

// uses math.random func to make choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    console.log(choice);
    if(choice == 1) {
        return 'Rock';
    } else if(choice == 2){
        return 'Paper';
    } else if(choice == 3){
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    // make playerSelection case-INsensitive
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    console.log( 'Player: ' + playerSelection );
    console.log( 'Computer: ' + computerSelection )
    // make if statements for all scenarios
    // Rock beats scissors
    // Paper beats rock
    // Scissors beat paper
    // if player and computer choices are the same, go again
    if(!(playerSelection == computerSelection)){
        // if one player has rock and other scissors, rock wins
        if(playerSelection == 'rock' && computerSelection == 'scissors'){ 
            win(playerSelection, computerSelection);
        } else if(playerSelection == 'scissors' && computerSelection == 'rock'){ 
            lose(playerSelection, computerSelection);
        }
        // If one has paper and other rock, paper wins
        else if(playerSelection == 'paper' && computerSelection == 'rock'){ 
            win(playerSelection, computerSelection);
        }
        else if(playerSelection == 'rock' && computerSelection == 'paper'){ 
            lose(playerSelection, computerSelection);
        }
        // If one has scissors and other paper, scissors wins
        else if(playerSelection == 'scissors' && computerSelection == 'paper'){ 
            win();
        } else if(playerSelection == 'paper' && computerSelection == 'scissors'){ 
            lose();
        }
    }
    return "Tie! Play another round.";
}

function win(playerSelection, computerSelection) {
    playerScore++;
    return "You Win! " + playerSelection + " beats " + computerSelection;
}

function lose(playerSelection, computerSelection) {
    computerScore++;
    return "You Lose! " + computerSelection + " beats " + playerSelection;
}

function game(){
    computerScore = 0;
    playerScore = 0;
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper, or Scissors?");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);
    }
    if(playerScore == computerScore){

        return ("Game over, its a tie! (" + playerScore + " : " + computerScore + ")");
    }
    else if(playerScore > computerScore){
        return ("Game over, human wins! (" + playerScore + " : " + computerScore + ")");
    }
    else if(playerScore < computerScore){
        return ("Game over, the computer wins! (" + playerScore + " : " + computerScore + ")");
    }
}

console.log(game());
