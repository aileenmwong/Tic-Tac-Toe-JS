/**
 * @name {game} - object literal
 * @desc - should have a "board" property - initially set to ''

*/

	/***** Minimum Game Methods *****/

	/**
	 * @name {makeBoard}
   * @desc
	 		- should create a new board object for the game
	 * @return {nothing}
	*/

	/**
	 * @name {start}
   * @desc
	 		- should start the game and display the current state of the board
	 * @return {nothing}
	*/

	/**
	 * @name {play}
	 * @param {number} - should accept a single input value, a position on the game board and make a play.
	 * @desc
	 		- If the position is 0, its gonna look in the board array of cells and get the cell with the index of 0.
 			- after a play it should set the value for the cell according to the current player.
      EX. if player is X set that cell to X.
			- should check for a winner after each play and alert the winner if one is found.
		* @return {nothing}
	*/

	/**
	 * @name {checkWin}
	 * @desc
			- should check the game board to see if the previous play was a winning play
			- should alert the user if tehy have won!
	 * @return {boolean}
	*/


const game = {
  currentPlayer: 'X',
  boardArr: [],
  makeBoard: function() {
    this.board = new Board ()
  },
  start: function () {
    this.makeBoard();
    this.board.startGame();
  },
  play: function(num, event) {
    if(this.board.cells[num].playAble()) {
      this.updateCell(num)
      this.updateBoard(event)
    }
  },
  updateCell: function(num) {
    this.board.cells[num].setValue(this.currentPlayer)
  },
  updateBoard: function(event) {
    event.target.innerHTML = this.currentPlayer;
  },
  freespaces: function() {
    for (let i = 0; i < this.board.cells.length; i+=1) {
      if (!this.board.cells[i].value) { return true }
    }
      return false
  },
  checkWin: function() {
    if ((this.board.cells[0]).value) === (this.board.cells[1]).value) && (this.board.cells[1]).value) === (this.board.cells[2]).value)) {
      alert(`${this.currentPlayer} has won`)
  }
  if (!this.freeSpaces()) {
    alert("game over")
  }
  },
  activePlayer() {
    this.currentPlayer = this.currentPlayer == 'X' ? 'O' : 'X'
  }
}

game.makeBoard()
game.start()
console.log(game.board)
