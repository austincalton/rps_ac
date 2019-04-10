// Defines initial vars to setup the game
const hands = ['Rock' , 'Paper', 'Scissors'];
// Creates an object of the winning hand combos
const winPairs = {
    Rock: 'Scissors',
    Paper: 'Rock',
    Scissors: 'Paper',
};
// Gets a random hand for each player object
function getHand(list) {
    return list[parseInt(Math.random()*list.length) %3];
}
// player1 and player2 objects are created
const player1 = {
    name: "Austin",
    hand: getHand(hands),
    wins: 0,
};
const player2 = {
    name: "Boof",
    hand: getHand(hands),
    wins: 0,
};
// Creates function to accept 2 objects (player1,player2) and plays 1 round of RPS
function playRound(object1, object2) {
    if (winPairs[object1.hand] === object2.hand) {
        //Player 1 wins
        console.log(object1.name+" played "+object1.hand+", and "+object2.name+" played "+object2.hand);
        console.log(object1.name+" wins this hand.");
        object1.wins = object1.wins + 1;
    }   else if (object1.hand === object2.hand) {
        // Tie
        console.log(object1.name+" played "+object1.hand+", and "+object2.name+" played "+object2.hand);
        console.log("It's a tie this time.");
    }   else {
        // Player 2 Wins
        console.log(object2.name+" wins this one.");
        object2.wins = object2.wins + 1;
    };
    // Updates each player object's hand
    object1.hand = getHand(hands);
    object2.hand = getHand(hands);
};
// Creates a function that will continuously play rounds of RPS until a certain number of wins is achieved
function playGame(p1,p2,pUntil) {
    while (p1.wins < pUntil && p2.wins < pUntil) {
        playRound(p1,p2);
    };
};

//////////////////////////////////////////////////////////////////////

// Calls the master "playGame" function which cycles through 5 rounds of RPS for player1 and player2
playGame(player1,player2,5);
// Logs the final results to the console
console.log("----------------Results-----------------");
console.log(player1.name+" has "+player1.wins+" wins.");
console.log(player2.name+" has "+player2.wins+" wins.");

if (player1.wins>player2.wins) {
    console.log(player1.name+" is the winner!");
} else {
    console.log(player2.name+" is the winner!");
};




