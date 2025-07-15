console.log("Hello World!");

function getComputerChoice() {
    const array = ['rock', 'paper', 'scissors'];
    let n = Math.floor(Math.random() * 3);
    return array[n];
}
let humanScore = 0;
let computerScore = 0;
let round = 0;
let announcement = document.querySelector(".announcement");
function playRound(humanChoice, computerChoice) {
    if (round == 0) {
        announcement.textContent = "";
    }
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                humanScore++;
            } else if (computerChoice === "paper") {
                computerScore++;
            }
            break;
        case "paper":
            if (computerChoice === "scissors") {
                computerScore++;
            } else if (computerChoice === "rock") {
                humanScore++;
            }
            break;
        case "scissors":
            if (computerChoice === "paper") {
                humanScore++;
            } else if (computerChoice === "rock") {
                computerScore++;
            }
            break;
    }
    round++;
    let userScoreDisplay = document.querySelector(".user");
    let computerScoreDisplay = document.querySelector(".computer");
    userScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    if (round == 5) {
        announceWinner();
        round = 0;
        humanScore = 0;
        computerScore = 0;
    }
}


const buttons = document.querySelectorAll('.btn');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
        playRound(e.target.textContent.toLowerCase(),
            getComputerChoice());
    });
}

function announceWinner() {

    if (computerScore > humanScore) {
        announcement.textContent = "You lose :(";
    }
    else if (humanScore > computerScore) {
        announcement.textContent = "You win!!!";
    } else {
        announcement.textContent = "Draw";
    }
}




