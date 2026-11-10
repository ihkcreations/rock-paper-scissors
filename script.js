const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const playerDisplayEl = document.getElementById("player-display");
const computerDisplayEl = document.getElementById("computer-display");
const resultMessageEl = document.getElementById("result-message");
const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");
const btnReset = document.getElementById("btn-reset");
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function determineWinner(player, computer) {
  if (player === computer) {
    return "draw";
  }
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  }
  return "computer";
}
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  playerDisplayEl.textContent = capitalize(playerChoice);
  computerDisplayEl.textContent = capitalize(computerChoice);
  const winner = determineWinner(playerChoice, computerChoice);
  if (winner === "player") {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    resultMessageEl.textContent = "You win this round.";
  } else if (winner === "computer") {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    resultMessageEl.textContent = "Computer wins this round.";
  } else {
    resultMessageEl.textContent = "It is a tie.";
  }
}
btnRock.addEventListener("click", () => {
  playRound("rock");
});
btnPaper.addEventListener("click", () => {
  playRound("paper");
});
btnScissors.addEventListener("click", () => {
  playRound("scissors");
});
btnReset.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  playerDisplayEl.innerHTML = '<span class="placeholder">-</span>';
  computerDisplayEl.innerHTML = '<span class="placeholder">-</span>';
  resultMessageEl.textContent = "Choose your weapon to start the round.";
});
