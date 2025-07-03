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

function getHumanChoice() {
    return prompt("Enter rock, paper or scissors.");
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

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
    }

    for (i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice().toLowerCase();
        playRound(humanChoice, computerChoice);
    }

    if (computerScore > humanScore) {
        console.log(`You lose!\nUser score: ${humanScore} \nComputer Score: ${computerScore}`);
    } else if (computerScore < humanScore) {
        console.log(`You win!\nUser score: ${humanScore} \nComputer Score: ${computerScore}`);
    } else {
        console.log(`Tie!\nUser score: ${humanScore} \nComputer Score: ${computerScore}`);
    }
}