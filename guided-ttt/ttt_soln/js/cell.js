	/**
 	 * Represents a Cell class.
 	 * @constructor
 	 * @hint - does not take any parameters, but sets the initial value of the cell to 0
 	*/

  class Cell {
    constructor() {
      this.value = 0;
    }



	/**** Minimum methods for the Cell class, REMEMEBER to declare outside the
  constructor, but still within the class ****/


  /**
   * @name {setState} - Sets the state of the cell.
	 * @param {number} value - to reset the intial cell value
	 * @hint - first check if the value is 0, and only then set it to value passed
	 * @return {nothing}
	*/
     setValue (letter) {
      this.value = this.value === 0 ? this letter : 0;
      //if (this.value === 0) {
        //this.value === letter;
      }
      getValue() {
        return this.value;
      }
     }
  }


  /**
   * @name {playable} - Checks if the cell is playable.
	 * @hint - the  cell is playable if it's value is 0 (default),
   the cell is not playable, if it has a value of 1.
	 * @return {boolean} - true if the cell is playable and false otherwise
  */
  playable() {
    return this.value === 0 ? true : false;
  }

  /**
   * @name {render} - Renders the cell value.
	 * @return {number} - returns the value of the current cell
  */
}

const cell1 = new Cell()
cell1.setValue('X')
