//values that can be set to customize
var gameInit = {
  aceValue: 1,
  faceValue: 11,
   //accepts arrays for suites and cards to spit out customized decks
   //Suite names should be capitalized
  deckInit: function(suites, cards) {
    var tempDeck = [];
    var tempValue;
    for (i = 0; i < suites.length; i++) {
      for (j = 0; j < cards.length; j++) {
        if (typeof(cards[j]) === "string"){
          switch (cards[j].toLowerCase()){
            case "ace" || "Ace":
            tempValue = this.aceValue;
            break;

            case "jack" || "Jack":
            tempValue = this.faceValue;
            break;

            case "queen" || "Queen":
            tempValue = this.faceValue;
            break;

            case "king" || "King":
            tempValue = this.faceValue;
            break;
          }
        } else {
          tempValue = cards[j];
        }
        tempDeck.push({
          cardName: cards[j] + " of " + suites[i],
          cardSuite: suites[i].toLowerCase(),
          cardValue: tempValue
        });
      }
    }
  app.customDeck = tempDeck;
  console.log(tempDeck);
}
};
