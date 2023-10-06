let currentPlayer = 'x';

const Gameboard = function () {
  this.data = [
    ['x', 'o', 'o'],
    ['o', 'x', 'x'],
    ['o', 'x', 'x'],
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
      middle = this.data[i][1]
      left = this.data[i][0]
      right = this.data[i][2]
      if(middle == left && middle == right) return true;
    }

    // Check Cols
    for(let j=0; j<3; j++){
      middle = this.data[1][j];
      upper = this.data[0][j];
      bottom = this.data[2][j];
      if(middle == upper && middle == bottom) return true;
    }

    // Check Main Diagonal
    if(this.data[0][0] == this.data[1][1] && this.data[0][0] == this.data[2][2])
      return true;    


    // Check Sub Diagonal
    if(this.data[0][2] == this.data[1][1] && this.data[1][1] == this.data[2][0])
      return true;


    return false;
  };
  // this.highlightWin;
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
