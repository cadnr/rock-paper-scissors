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