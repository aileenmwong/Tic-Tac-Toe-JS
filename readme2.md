![Tic Tac Toe](../readme-assets/tictactoeboard.png "Tic Tac Toe")

###### Tic Tac Toe! ####

I'm making Tic Tac Toe! I'm making it because I was told to do it.

[Play The Game](https://www.bitballoon.com/sites/sales-person-enemies-10410)
 
##### Technologies Used ###

- HTML
- CSS
- Vanilla Javascript

#### Example Code ###

```function checkPlayable (event) {
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
```

#### Planning ###

### Start Game ###
![Tic Tac Toe](../readme-assets/startgame.jpg "Start Tic Tac Toe")

### Play State ###
![Tic Tac Toe](../readme-assets/playstate.jpg "Play Tic Tac Toe")

### Win State ###
![Tic Tac Toe](../readme-assets/winnerstate.jpg "Win Tic Tac Toe")

### End Game ###
![Tic Tac Toe](../readme-assets/reset.jpg "End Tic Tac Toe")
