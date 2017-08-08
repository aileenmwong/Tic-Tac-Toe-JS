//worked with Zarinna, Chris, Nayeli, Silvia, and Mao on HW on Saturday. Yay team effort!

  document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  /**
  This App file is game management file. **Here**:
  * Call the start method of the Game object
  * Grab all cells from the DOM
  * Add Event listener to each one of the cells
  * Grab the id of clicked cell
  * Play the cell with that id
  * Check for win
  */

//declare player 1 starting place to count for clicks
var player = 2;

//select all boxes and pushes them into an array - code from https://davidwalsh.name/nodelist-array
let boxes = Array.prototype.slice.call(document.querySelectorAll(".cell"));

//add the function to what happens when someone clicks on a box using a for loop
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', checkPlayable);
}
//check to see if the game is playable with a function with click event parameter
function checkPlayable (event) {
  //check to see if player is player 1 using if statement
  if (player % 2 === 0) {
    //insert X into the box
    boxes[event.target.id].innerHTML = 'X';
    //push the X into the array created above
    boxes.splice(event.target.id, 1, 'X');
    //keep increasing the number of clicks
        player++;
  } else {
    //if modulus equals something other than 0, add an O for the other player
    boxes[event.target.id].innerHTML = 'O';
    //push the O into the array
    boxes.splice(event.target.id, 1, 'O');
    //keep increasing the number of clicks
    player++;
  }
  //show the boxes in the console to see what boxes are being played
console.log(boxes);
//check for winner
checkWin(boxes);
}

//check for the winner function using a bunch of if statements
function checkWin (boxes) {
  //horizontal row 1 match
  if ((boxes[0] === boxes[1]) && (boxes[0] === boxes[2])) {
    setTimeout(function() {
      alert('You win!'); }, 300);
    }
  //horizontal row 2 match
  else if ((boxes[3] === boxes[4]) && (boxes[3] === boxes[5])) {
    setTimeout(function() {
      alert('You win!'); }, 300);
    }
  //horizontal row 3 match
  else if ((boxes[6] === boxes[7]) && (boxes[6] === boxes[8])) {
    setTimeout(function() {
      alert('You win!'); }, 300);
    }
  //vertical row 1 match
  else if ((boxes[0] === boxes[3]) && (boxes[0] === boxes[6])) {
    setTimeout(function() {
      alert('You win!'); }, 300);
    }
  //vertical row 2 match
  else if ((boxes[1] === boxes[4]) && (boxes[1] === boxes[7])) {
    setTimeout(function() {
      alert('You win!'); }, 300);
    }
  //vertical row 3 match
  else if ((boxes[2] === boxes[5]) && (boxes[2] === boxes[8])) {
    setTimeout(function() {
      alert('You win!'); }, 300);
    }
  //diagonal match top left to bottom right
  else if ((boxes[0] === boxes[4]) && (boxes[0] === boxes[8])) {
    setTimeout(function() {
      alert('You win!'); }, 300);
    }
  //diagonal match top right to bottom left
  else if ((boxes[2] === boxes[4]) && (boxes[2] === boxes[6])) {
    setTimeout(function() {
      alert('You win!'); }, 300);
    }


}

});

/////CONSTRUCTOR SOLUTION CODE

  document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

game.start();

});
