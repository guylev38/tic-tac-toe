const Gameboard = function (data) {
  this.data = data;
  this.drawBoard = () => {
    const gameboardDiv = document.querySelector('.gameboard');
    for (let i = 0; i < 9; i++) {
      let card = document.createElement('div');
      card.classList.add('card');
      if (this.data[i] == 'x') {
        card.textContent = 'X';
        card.id = 'x';
      } else if (this.data[i] == 'o') {
        card.textContent = 'O';
        card.id = 'o';
      }
      gameboardDiv.appendChild(card);
    }
  };
};

let data = ['', '', '', '', '', '', '', '', ''];

const gameboard = new Gameboard(data);
gameboard.drawBoard();
