//Joe's solution

  document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  const game = {
    inProgress: true,
    currentPlayer: 'X',
    board: [0,1,2,3,4,5,6,7,8],
    checkWinner: function() {
      if ((this.board[0] === this.board[1]) && (this.board[1] === this.board[2])){
        console.log('You win');

      //to put it in the html, create an empty div in the html and then fill in content
      document.querySelector('#winner').innerHTML = `${this.currentPlayer} has won`
      this.inProgress = false;
      }
    }
  }

const cells = document.querySelectorAll('.row .cell')
for(let i = 0; i < cells.length; i += 1) {
  cells[i].addEventListener('click', function playCell() {
    if(game.inProgress) {
      cells[i].innerHTML = game.currentPlayer;
      //update the board array with current Player value
      game.board[i] = game.currentPlayer
      //check winner
      game.checkWinner();
      //alternate player
      game.currentPlayer = game.currentPlayer === 'X' ? 'O' : 'X'
      //remove the playCell EV
      cells[i].removeEventListener('click', playCell);
    } else {
      alert(`Game is Over...:{`)
      }
    }
  })

}

});
