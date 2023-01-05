game();

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

function game() {
    let scoreComputer, scorePlayer;
    scoreComputer = 0;
    scorePlayer = 0;

    for(let i = 0; i < 5; i++) {
        let result;
        console.log("Current score: computer -", scoreComputer, 'player - ', scorePlayer);
        result = playRound();
        if (result == 'Player wins!') {
            scorePlayer++
        } else if(result == 'Computer wins!') {
            scoreComputer++
        }
        console.log(result);
    }
    console.log("Final score: computer -", scoreComputer, 'player - ', scorePlayer);
    if(scoreComputer > scorePlayer){
        console.log('Final result: Computer wins the game!')
    } else if(scoreComputer < scorePlayer){
        console.log('Final result: Player wins the game!')
    } else {
        console.log('Final result: A tie!')
    }
}