const Player = function (sign) {
  this.sign = sign;
};

const playerX = new Player("X");
const playerO = new Player("O");

const players = [playerX, playerO];

let currentPlayer = players[0];

const Gameboard = function () {
  this.data = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  this.prompt = document.getElementById("prompt");
  this.gameboardDiv = document.querySelector(".gameboard");
  this.drawBoard = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        isTurnPlayed = false;
        let card = document.createElement("div");
        card.classList.add("card");
        card.addEventListener("click", () => {
          card.textContent = currentPlayer.sign;
          card.id = currentPlayer.sign;
          isTurnPlayed = true;
          switchTurn();
        });
        if (this.data[i][j] == "x") {
          card.textContent = "X";
          card.id = "x";
        } else if (this.data[i][j] == "o") {
          card.textContent = "O";
          card.id = "o";
        }
        this.gameboardDiv.appendChild(card);
      }
    }
  };
  this.checkWin = () => {
    // Check Rows;
    for (let i = 0; i < 3; i++) {
      middle = this.data[i][1];
      left = this.data[i][0];
      right = this.data[i][2];
      if (middle == left && middle == right) return true;
    }

    // Check Cols
    for (let j = 0; j < 3; j++) {
      middle = this.data[1][j];
      upper = this.data[0][j];
      bottom = this.data[2][j];
      if (middle == upper && middle == bottom) return true;
    }

    // Check Main Diagonal
    if (
      this.data[0][0] == this.data[1][1] &&
      this.data[0][0] == this.data[2][2]
    )
      return true;

    // Check Sub Diagonal
    if (
      this.data[0][2] == this.data[1][1] &&
      this.data[1][1] == this.data[2][0]
    )
      return true;

    this.prompt.textContent = `${currentPlayer.sign.toUpperCase()} Won The Game!`;
    return false;
  };
};

let gameboard = new Gameboard();
const startButton = document.querySelector(".start-button");

startButton.addEventListener("click", gameboard.drawBoard());

function switchTurn() {
  if (gameboard.checkWin()) return;
  if (currentPlayer == players[0]) currentPlayer = players[1];
  else if (currentPlayer == players[1]) currentPlayer = players[0];
}
