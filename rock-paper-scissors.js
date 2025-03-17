const choices = ["rock", "paper", "scissors"]

const buttons = document.querySelectorAll(".option")
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(e.target.textContent.toLowerCase())
  })
})

let winCount = 0
let loseCount = 0
let tieCount = 0
let roundCount = 0

function playRound(userChoice) {
  roundCount++
  const randomIndex = Math.floor(Math.random() * choices.length)
  const cpuChoice = choices[randomIndex]
  winner = determineWinner(userChoice, cpuChoice)
  updateCounts(winner)
  updateLabels(userChoice, cpuChoice, winner)
}

function determineWinner(player1, player2) {
  if (player1 == player2) {
    return "Tie"
  }

  if (player1 == "rock") {
    if (player2 == "scissors") return "User"
    else if (player2 == "paper") return "CPU"
  }
  else if (player1 == "paper") {
    if (player2 == "rock") return "User"
    else if (player2 == "scissors") return "CPU"
  }
  else if (player1 == "scissors") {
    if (player2 == "paper") return "User"
    else if (player2 == "rock") return "CPU"
  }
}

function updateCounts(winner) {
  switch (winner) {
    case "User":
      winCount++
      break
    case "CPU":
      loseCount++
      break
    case "Tie":
      tieCount++
      break
  }
}

function updateLabels(userChoice, cpuChoice, winner) {
  const userLabel = document.querySelector("#user")
  const cpuLabel = document.querySelector("#cpu")
  const winnerLabel = document.querySelector("#winner")
  const winCountLabel = document.querySelector("#wins")
  const loseCountLabel = document.querySelector("#losses")
  const tieCountLabel = document.querySelector("#ties")
  const roundCountLabel = document.querySelector("#rounds")

  userLabel.textContent = userChoice
  cpuLabel.textContent = cpuChoice
  winnerLabel.textContent = winner

  winCountLabel.textContent = `Wins: ${winCount}`
  loseCountLabel.textContent = `Losses: ${loseCount}`
  tieCountLabel.textContent = `Ties: ${tieCount}`
  roundCountLabel.textContent = `Rounds: ${roundCount}`

  background = "white"
  switch (winner) {
    case "User":
      background = "limegreen"
      break
    case "CPU":
      background = "#ee6e5b"
      break
    case "Tie":
      background = "skyblue"
      break
  }
  winnerLabel.style.backgroundColor = background
}