function getComputerChoice() {
    let rand;
    rand = Math.floor(Math.random() * 3)
    switch(rand) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

function getPlayerChoice() {
    while(true) {
        input = prompt("Choose rock, paper or scissors").toLowerCase();
        if(input == 'rock' || input == 'paper' || input == 'scissors') return input;
    }
}

function playRound() {
    let computerChoice, playerChoice;

    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();

    console.log(computerChoice, playerChoice);

    if(computerChoice == 'rock') {
        if(playerChoice == 'rock') {
            return "It's a tie!"
        } else if (playerChoice == 'paper') {
            return "Player wins!"
        } else if (playerChoice == 'scissors') {
            return "Computer wins!"
        }
    }

    if(computerChoice == 'paper') {
        if(playerChoice == 'paper') {
            return "It's a tie!"
        } else if (playerChoice == 'scissors') {
            return "Player wins!"
        } else if (playerChoice == 'rock') {
            return "Computer wins!"
        }
    }

        if(computerChoice == 'scissors') {
            if(playerChoice == 'scissors') {
                return "It's a tie!"
            } else if (playerChoice == 'rock') {
                return "Player wins!"
            } else if (playerChoice == 'paper') {
                return "Computer wins!"
            }
        }
}