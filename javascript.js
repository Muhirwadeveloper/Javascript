function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const formattedPlayerSelection = playerSelection.toLowerCase();
    const validChoices = ["rock", "paper", "scissors"];

    if (!validChoices.includes(formattedPlayerSelection)) {
        return "Invalid choice! Please choose 'rock', 'paper', or 'scissors'.";
    }

    if (formattedPlayerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (formattedPlayerSelection === "rock" && computerSelection === "scissors") ||
        (formattedPlayerSelection === "paper" && computerSelection === "rock") ||
        (formattedPlayerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You Win! " + formattedPlayerSelection + " beats " + computerSelection;
    } else {
        return "You Lose! " + computerSelection + " beats " + formattedPlayerSelection;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    const rounds = 5;

    for (let i = 0; i < rounds; i++) {
        const playerSelection = prompt("Round " + (i + 1) + ": Enter your choice (rock, paper, or scissors):");
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);

        console.log(roundResult);

        if (roundResult.includes("Win")) {
            playerScore++;
        } else if (roundResult.includes("Lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game.");
    } else if (playerScore < computerScore) {
        console.log("You lose the game. Better luck next time!");
    } else {
        console.log("It's a tie! The game ends in a draw.");
    }
}

game();