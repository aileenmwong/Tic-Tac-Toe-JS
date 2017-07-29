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

  const makeBoard = [];

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

function checkWin () {
  //horizontal row 1 match
  if ('.cell #0') === ('.cell #1') && ('.cell #0') === ('.cell #2') {
  alert("You win!");
  //horizontal row 2 match
  } else if ('.cell #3') === ('.cell #4') && ('.cell #3') === ('.cell #5') {
  alert("You win!");
  //horizontal row 3 match
  } else if ('.cell #6') === ('.cell #7') && ('.cell #6') === ('.cell #8') {
  alert("You win!");
  //vertical row 1 match
  } else if ('.cell #0') === ('.cell #3') && ('.cell #0') === ('.cell #6') {
  alert("You win!");
  //vertical row 2 match
  } else if ('.cell #1') === ('.cell #4') && ('.cell #1') === ('.cell #7') {
  alert("You win!");
  //vertical row 3 match
  } else if ('.cell #2') === ('.cell #5') && ('.cell #2') === ('.cell #8') {
  alert("You win!");
  //diagonal row top left match
  } else if ('.cell #0') === ('.cell #4') && ('.cell #0') === ('.cell #8') {
  alert("You win!");
  //diagonal row top right match
  } else if ('.cell #2') === ('.cell #4') && ('.cell #2') === ('.cell #6') {
  alert("You win!");
};
