let currentPlayer = 'x';

const Gameboard = function () {
  this.data = [
    ['x', 'o', 'x'],
    ['x', 'o', 'o'],
    ['x', 'x', 'o'],
  ];
  this.gameboardDiv = document.querySelector('.gameboard');
  this.drawBoard = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.addEventListener('click', () => {
          card.textContent = currentPlayer.sign;
          card.id = currentPlayer.sign;
        });
        if (this.data[i][j] == 'x') {
          card.textContent = 'X';
          card.id = 'x';
        } else if (this.data[i][j] == 'o') {
          card.textContent = 'O';
          card.id = 'o';
        }
        this.gameboardDiv.appendChild(card);
      }
    }
  };
  this.checkWin = () => {
    // Check Rows;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {}
    }
  };
  this.highlightWin;
};

const Player = function (sign) {
  this.sign = sign;
};

const gameboard = new Gameboard();
gameboard.drawBoard();

const playerX = new Player('X');
const playerO = new Player('O');

const players = [playerX, playerO];
currentPlayer = players[0];
