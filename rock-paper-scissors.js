// Rock, paper, scissors

const choices = ["rock", "paper", "scissors"];

const cpuChoice = choices[Math.floor(Math.random() * choices.length)];

let userChoice = prompt("Enter a number. 1 = rock, 2 = paper, 3 = scissors: ");
userChoice = choices[userChoice];

winner = determineWinner(userChoice, cpuChoice)

winString = `
User: ${userChoice}\n
Cpu: ${cpuChoice}\n
Winner: ${winner}\n
`

alert(winString)

function determineWinner(player1, player2) {
  if (player1 == player2) {
    return "tie";
  }

  if (player1 == "rock") {
    if (player2 == "scissors") return "player1";
    else if (player2 == "paper") return "player2";
  }
  else if (player1 == "paper") {
    if (player2 == "rock") return "player1";
    else if (player2 == "scissors") return "player2";
  }
  else if (player1 == "scissors") {
    if (player2 == "paper") return "player1";
    else if (player2 == "rock") return "player2";
  }
}