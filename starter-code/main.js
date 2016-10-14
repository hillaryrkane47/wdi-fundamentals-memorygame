// cards 
var cards = ['queen', 'queen', 'king', 'king'];

// represents cards in play
var cardsInPlay = [];


// board set to variable
var board = document.getElementById('game-board');

// function to create the game board
function createBoard() {

	// looping through cards array to create card elements for game board
	for (var i=0; i<cards.length; i++) {

		// creating div element which will be used as a card
		var cardElement = document.createElement('div');

		// using class name for css ease
		cardElement.className = 'card';

		// this will set the card's 'data-card' to be the element of the array
       // data- attributes are meant to store data about an element that is not tied to a style.
       // i.e. "king"
		cardElement.setAttribute('data-card', cards[i]);

		// when card is clicked the function isTwoCards will be executed
		cardElement.addEventListener('click', isTwoCards);

		// append the card to the board
		board.appendChild(cardElement);
	}
}

// checks to see if there are cards in play
function isTwoCards() {
 // add card to array of cards being viewed
  // 'this' is not covered in the pre-work but
  // for now, just know it gives you access to the cardElement you click on
  cardsInPlay.push(this.getAttribute('data-card'));
  // show the card's image
  console.log(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king') {
  	this.innerHTML = "<img src='http://i.imgur.com/Z7NLQkd.jpg'>";
  } else {
  	this.innerHTML = "<img src='http://i.imgur.com/twhMMu4.jpg'>";
  }
  if (cardsInPlay.length === 2) {
  	isMatch(cardsInPlay);
  	cardsInPlay = [];
  }
}

function isMatch(cards) {
	// alert winning message
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

createBoard();











