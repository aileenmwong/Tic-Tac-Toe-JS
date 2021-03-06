/**
 * Represents the class Board.
 * @constructor
 * @hint - does not take any parameters,
 * but sets the initial values for:
 * cells - a list of cells objects, initially empty array
 * currentPlayer - initially set to null
 * winner - stores winner
 */

class Board {
  constructor () {
    this.cells = [],
    this.currentPlayer = null,
    this.winner = null,
  }


	/**** Minimum Board methods ****/
	/**
	 * @name startGame
	 * @desc
	 	- should set up the board and add cells to the board
		- should set the current player
	 * @return {nothing}
	*/

  startGame() {
    for (let i = 0; i < 9; i++){
      this.cells.push(new Cell ())
    }
  }

	/**
	 * @name {makePlay}
	 * @param {number} - accepts a position argument
	 * @desc
	  - sets the value of that cell at the position
		- should do nothing if the cell has already been played on
		- should do nothing if there is no cell at that position
	 * @return {nothing}
	*/
  makePlay(position) {
    this.cells[position].playAble() ? this.cells[position].setValue(1) : '';

  }


	/**
	 * @name {checkWin}
	 * @desc
		- should check the game board to see if the previous play was a winning play
	 * @return {boolean}
	 */
   function checkWin() {
    if cells()

   }
}
