TIC TAC TOE PSUEDOCODE

GAMEPLAY
1. Make a board and initially set to ' '
2. start game and display the current state of the board
3. When in play, cell accepts a single input value, a position on the game board and make a play
    - If the position is 0, its gonna look in the board array of cells and get the cell with the index of 0.
    - after a play it should set the value for the cell according to the current player.
      EX. if player is X set that cell to X.
    - should check for a winner after each play and alert the winner if one is found.
4. Check to see if there is a winner & alert winner if they have won

HELPER BOARD FUNCTIONS
*create a class board, which sets initial values for cells, current player and winner
*set up the board and add cells to the board
*set up the current player
*set the value of a cell in the position and accepts the position argument
*check to see if the previous play was a winning play

HELPER CELL FUNCTIONS
*create a cell object and sets initial value to 0
*set the state of the cell
*check to see if the cell is playable
*render the cell value and return the value of the current cell

DOM
  * Call the start method of the Game object
  * Grab all cells from the DOM
  * Add Event listener to each one of the cells
  * Grab the id of clicked cell
  * Play the cell with that id
  * Check for win

  

