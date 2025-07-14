console.log("Hello World!");

function getComputerChoice() {
    let n = Math.floor(Math.random() * 3) + 1;
    switch (n) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}
let humanScore = 0;
let computerScore = 0;
let round = 0;
function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                humanScore++;
                console.log("You win! Rock beats scissors.");
            } else if (computerChoice === "paper") {
                computerScore++;
                console.log("You lose! Paper beats rock.");
            } else {
                console.log("Draw. You both chose rock");
            }
            break;
        case "paper":
            if (computerChoice === "scissors") {
                computerScore++;
                console.log("You lose! Scissors beat paper.");
            } else if (computerChoice === "paper") {
                console.log("Draw. You both chose paper.");
            } else {
                humanScore++;
                console.log("You win! Paper beats rock.");
            }
            break;
        case "scissors":
            if (computerChoice === "scissors") {
                console.log("Draw. You both chose scissors.");
            } else if (computerChoice === "paper") {
                humanScore++;
                console.log("You win! Scissors beat paper.");
            } else {
                computerScore++;
                console.log("You lose! Rock beats scissors");
            }
            break;
    }
    round++;
    let user = document.querySelector(".user");
    let computer = document.querySelector(".computer");
    user.textContent="User Score:"+humanScore;
    computer.textContent="Computer Score:"+computerScore;
    if (round == 5) {
        announceWinner();
        round = 0;
        humanScore=0;
        computerScore=0;
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
    let announcement = document.querySelector(".announcement");
    if (computerScore > humanScore) {
        announcement.textContent = "You lose";
    }
    else if (humanScore > computerScore) {
        announcement.textContent = "You win";
    } else {
        announcement.textContent = "Draw";
    }
}




