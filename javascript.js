const messages = document.querySelector('.messages');
const score = document.querySelector('.score');
const selections = document.querySelector('.selections');

let scoreComputer, scorePlayer;
scoreComputer = 0;
scorePlayer = 0;

buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function(){
    game(button.textContent);
}));

function modifyTextDOM(target, text) {
    const newChild = document.createElement('p');
    newChild.textContent = text;
    const oldChild = target.querySelector('p');
    target.replaceChild(newChild, oldChild);
}

function getComputerChoice() {
    let rand;
    rand = Math.floor(Math.random() * 3)
    switch(rand) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

function getPlayerChoice(buttonText) {
    while(true) {
        input = buttonText.toLowerCase();
        if(input == 'rock' || input == 'paper' || input == 'scissors') return input;
    }
}

function playRound(buttonText) {
    let computerChoice, playerChoice;

    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice(buttonText);

    modifyTextDOM(selections, `Computer: ${computerChoice}, 
        player: ${playerChoice}`);

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

function game(buttonText) {

        let result;
        result = playRound(buttonText);
        if (result == 'Player wins!') {
            scorePlayer++
        } else if(result == 'Computer wins!') {
            scoreComputer++
        }
        modifyTextDOM(score, `Current score: computer - ${scoreComputer}, player - ${scorePlayer}`);
        modifyTextDOM(messages, result);
     
    if (scoreComputer >= 5 || scorePlayer >= 5){
        modifyTextDOM(score, `Final score: computer - ${scoreComputer}, player - ${scorePlayer}`);

        if(scoreComputer > scorePlayer){
            modifyTextDOM(messages, 'Final result: Computer wins the game!')
        } else if(scoreComputer < scorePlayer){
            modifyTextDOM(messages , 'Final result: Player wins the game!')
        } else {
            modifyTextDOM(messages, 'Final result: A tie!')
        }
        scoreComputer = 0;
        scorePlayer = 0;
    }
}