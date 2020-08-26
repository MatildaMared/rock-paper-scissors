// Function that returns either 'Rock', 'Paper' or 'Scissors' at random
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

//Set computer and player score variables
let computerScore = 0;
let playerScore = 0;

// Function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("It's a tie!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        return ("Rock beats scissors! You won this round!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        playerScore += 1;
        return ("Rock beats paper! You won this round!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        computerScore += 1;
        return ("Rock beats paper! Computer won this round!");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        return ("Scissors beats paper! Computer won this round!");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        return ("Rock beats scissors! Computer won this round!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        return ("Scissors beats paper! You won this round!");
    } else {
        return ("Something went wrong!");
    }
}

// Function that plays five rounds of Rock, Paper, Scissors and then counts the score and announces the winner!
function game() {
    //First round
    let playerSelection = prompt("Round one! Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay();
    console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}.`);
    console.log(playRound(playerSelection, computerSelection));
    console.log(`You: ${playerScore} points, Computer: ${computerScore} points.`);

    //Second round
    playerSelection = prompt("Round two! Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}.`);
    console.log(playRound(playerSelection, computerSelection));
    console.log(`You: ${playerScore} points, Computer: ${computerScore} points.`);

    //Third round
    playerSelection = prompt("Round three! Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}.`);
    console.log(playRound(playerSelection, computerSelection));
    console.log(`You: ${playerScore} points, Computer: ${computerScore} points.`);

    //Fourth round
    playerSelection = prompt("Round four! Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}.`);
    console.log(playRound(playerSelection, computerSelection));
    console.log(`You: ${playerScore} points, Computer: ${computerScore} points.`);

    //Fifth round
    playerSelection = prompt("Round five! Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}.`);
    console.log(playRound(playerSelection, computerSelection));
    console.log(`You: ${playerScore} points, Computer: ${computerScore} points.`);

    //Counts the score and announces the winner!
    if (playerScore > computerScore) {
        console.log("You won this game! Congratulations!");
    } else if (computerScore > playerScore) {
        console.log("Darn! The computer won. Better luck next time!");
    } else {
        console.log("It's a tie between you and the computer!");
    }
}

// Executes the game!
game();