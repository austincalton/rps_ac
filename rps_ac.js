// Assigns initial vars for game setup
var weapons = ['Rock' , 'Paper', 'Scissors'];
var gameCount = 0;
var player1wins = 0;
var player2wins = 0;

// while loop runs the game until 1 of the 2 players has 3 wins
while (player1wins < 3 && player2wins < 3) {
  var weaponOfChoiceP1 = weapons[parseInt(Math.random()*weapons.length) %3];
  var weaponOfChoiceP2 = weapons[parseInt(Math.random()*weapons.length) %3];

  if (weaponOfChoiceP1=="Rock" && weaponOfChoiceP2=="Paper") {
     gameResult = "Player 2 wins!";
     var player2wins = player2wins + 1;
  } else if (weaponOfChoiceP1=="Paper" && weaponOfChoiceP2=="Rock") {
    gameResult = "Player 1 wins!";
    var player1wins = player1wins + 1;
  } else if (weaponOfChoiceP1=="Rock" && weaponOfChoiceP2=="Scissors") {
    gameResult = "Player 1 wins!";
    var player1wins = player1wins + 1;
  } else if (weaponOfChoiceP1=="Scissors" && weaponOfChoiceP2=="Rock") {
    gameResult = "Player 2 wins!";
    var player2wins = player2wins + 1;
  } else if (weaponOfChoiceP1=="Paper" && weaponOfChoiceP2=="Scissors") {
    gameResult = "Player 2 wins!";
    var player2wins = player2wins + 1;
  } else if (weaponOfChoiceP1=="Scissors" && weaponOfChoiceP2=="Paper") {
    gameResult = "Player 1 wins!";
    var player1wins = player1wins + 1;
  } else {
    gameResult = "It's a tie!";
  };
    
  var gameCount = gameCount + 1;

};

// Prints the results to the console
  console.log("You've played " + gameCount + " games.")
  console.log("Player 1 has " + player1wins + " wins.");
  console.log("Player 2 has " + player2wins + " wins.");
// Prints the winner's name to the console
  if (player1wins>player2wins) {
    console.log("PLAYER 1 IS THE WINNER!");
  } else {
    console.log("PLAYER 2 IS THE WINNER!");
  };


