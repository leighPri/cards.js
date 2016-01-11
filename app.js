//decks need to have:
//array of 52 cards
//discard array
//shuffle function
//deal function
  //draw function? Maybe sub-property of deal function
//reset function?

//set initial values by editing init.js

var app = {
  baseDeck: [{cardName: "2 of Clubs", cardSuite: "clubs", cardValue: 2},{cardName: "3 of Clubs", cardSuite: "clubs", cardValue: 3},{cardName: "4 of Clubs", cardSuite: "clubs", cardValue: 4},{cardName: "5 of Clubs", cardSuite: "clubs", cardValue: 5},{cardName: "6 of Clubs", cardSuite: "clubs", cardValue: 6},{cardName: "7 of Clubs", cardSuite: "clubs", cardValue: 7},{cardName: "8 of Clubs", cardSuite: "clubs", cardValue: 8},{cardName: "9 of Clubs", cardSuite: "clubs", cardValue: 9},{cardName: "10 of Clubs", cardSuite: "clubs", cardValue: 10},{cardName: "Jack of Clubs", cardSuite: "clubs", cardValue: gameInit.faceValue},{cardName: "Queen of Clubs", cardSuite: "clubs", cardValue: gameInit.faceValue},{cardName: "King of Clubs", cardSuite: "clubs", cardValue: gameInit.faceValue},{cardName: "Ace of Clubs", cardSuite: "clubs", cardValue: gameInit.aceValue},
            {cardName: "2 of Diamonds", cardSuite: "diamonds", cardValue: 2},{cardName: "3 of Diamonds", cardSuite: "diamonds", cardValue: 3},{cardName: "4 of Diamonds", cardSuite: "diamonds", cardValue: 4},{cardName: "5 of Diamonds", cardSuite: "diamonds", cardValue: 5},{cardName: "6 of Diamonds", cardSuite: "diamonds", cardValue: 6},{cardName: "7 of Diamonds", cardSuite: "diamonds", cardValue: 7},{cardName: "8 of Diamonds", cardSuite: "diamonds", cardValue: 8},{cardName: "9 of Diamonds", cardSuite: "diamonds", cardValue: 9},{cardName: "10 of Diamonds", cardSuite: "diamonds", cardValue: 10},{cardName: "Jack of Diamonds", cardSuite: "diamonds", cardValue: gameInit.faceValue},{cardName: "Queen of Diamonds", cardSuite: "diamonds", cardValue: gameInit.faceValue},{cardName: "King of Diamonds", cardSuite: "diamonds", cardValue: gameInit.faceValue},{cardName: "Ace of Diamonds", cardSuite: "diamonds", cardValue: gameInit.aceValue},
            {cardName: "2 of Spades", cardSuite: "spades", cardValue: 2},{cardName: "3 of Spades", cardSuite: "spades", cardValue: 3},{cardName: "4 of Spades", cardSuite: "spades", cardValue: 4},{cardName: "5 of Spades", cardSuite: "spades", cardValue: 5},{cardName: "6 of Spades", cardSuite: "spades", cardValue: 6},{cardName: "7 of Spades", cardSuite: "spades", cardValue: 7},{cardName: "8 of Spades", cardSuite: "spades", cardValue: 8},{cardName: "9 of Spades", cardSuite: "spades", cardValue: 9},{cardName: "10 of Spades", cardSuite: "spades", cardValue: 10},{cardName: "Jack of Spades", cardSuite: "spades", cardValue: gameInit.faceValue},{cardName: "Queen of Spades", cardSuite: "spades", cardValue: gameInit.faceValue},{cardName: "King of Spades", cardSuite: "spades", cardValue: gameInit.faceValue},{cardName: "Ace of Spades", cardSuite: "spades", cardValue: gameInit.aceValue},
            {cardName: "2 of Hearts", cardSuite: "hearts", cardValue: 2},{cardName: "3 of Hearts", cardSuite: "hearts", cardValue: 3},{cardName: "4 of Hearts", cardSuite: "hearts", cardValue: 4},{cardName: "5 of Hearts", cardSuite: "hearts", cardValue: 5},{cardName: "6 of Hearts", cardSuite: "hearts", cardValue: 6},{cardName: "7 of Hearts", cardSuite: "hearts", cardValue: 7},{cardName: "8 of Hearts", cardSuite: "hearts", cardValue: 8},{cardName: "9 of Hearts", cardSuite: "hearts", cardValue: 9},{cardName: "10 of Hearts", cardSuite: "hearts", cardValue: 10},{cardName: "Jack of Hearts", cardSuite: "hearts", cardValue: gameInit.faceValue},{cardName: "Queen of Hearts", cardSuite: "hearts", cardValue: gameInit.faceValue},{cardName: "King of Hearts", cardSuite: "hearts", cardValue: gameInit.faceValue},{cardName: "Ace of Hearts", cardSuite: "hearts", cardValue: gameInit.aceValue}],
  customDeck: [], //acts as baseDeck but for games that use custom decks
  inPlayDeck: [], //holds shuffled deck
  discardDeck: [],
  //accepts a deck to be shuffled and placed in the inPlayDeck. Normally will be baseDeck or discardDeck
  //clearDis is a boolean that will empty the discard deck if true
  shuffle: function(toShuf, clearDis){
    var array = toShuf;
    var counter = array.length, temp, index;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    this.inPlayDeck =  array; //returns shuffled array
    if (clearDis){
      this.discardDeck = [];
    }
    console.log(this.inPlayDeck);
  },
    //numCardsPet is total number of cards PER PLAYER (so if dealing 3 each numCardsPer = 3)
    //playerDealt should equal a player ID to deal to. If not set, deal to all players in a round
    //totalCards is total number of cards dealt. To all players. If not set equals playerDealt * numCardsPer
  //this.baseStack.shift()
  deal: function(numCardsPer, playerDealt){
    if (!numCardsPer) {
      numCardsPer = 1;
    }
    if (!playerDealt) {
      playerDealt = players.names.length; //if not dealing to a specific player deal to all players
    }
      for (i = 0; i < numCardsPer; i++) {
        for (j = 0; j < playerDealt; j++) {
          players.playerObj[j].hand.push(this.baseStack.shift());
        }
      }
  },
  discard: function(toDiscard){ //accepts a single card or arrary of cards to discard
    this.discardDeck.push(toDiscard);
  }
};

var players = {
  playerObj: [],
  addPlayer: function(name, isCpu){ //isCpu should be a boolean
    this.playerObj.push({name, isCpu, hand: [], playArea: [], isTurn: false}); //playArea is for laying down cards not in hand but still owned by player
  },
  getPlayer: function(playerName, subsetOutput) { //returns different aspects of the playerObj based on inputted name
    var tempPlayer;
    for (p = 0; p < this.playerObj.length; p++) {
      if (this.playerObj[p].name === playerName) {
        tempPlayer = this.playerObj[p]; //when loops over desired player, outputs their array into tempPlayer
      }
    }
    switch (subsetOutput) {
      case "name":
      return tempPlayer.name;

      case "isCpu":
      return tempPlayer.isCpu;

      case "hand":
      return tempPlayer.hand;

      case "isTurn":
      return tempPlayer.isTurn;
    }
  }
};

//test players
players.addPlayer("sam", false);
players.addPlayer("sadie", true);

// function Player(name, isCpu){
//   this.playerId = totalPlayers;
//   totalPlayers++;
//   if (name){
//     this.name = name;
//   } else {
//     this.name = "Player " + this.playerId;
// }
//   // this.deck = []; //for games where players have personal decks they draw from
//   this.hand = [];
//   // this.playSpace = []; //for games where players still own cards while they are out and in play but not in their hands
//   if (isCpu){
//     this.cpu = true;
//   } else {
//     this.cpu = false;
//   }
//   this.isTurn = false;
// };
