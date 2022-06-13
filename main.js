/*jslint browser: true, devel: true */
alert('Game Start!');
var starterCash = 10;
var cashBalance = 0;
var cashElement = document.getElementById('Cash');
var suits = ["Clubs", "Hearts", "Diamonds", "Spades"];
var cards = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

function getCard() {
    var card = cards[Math.floor(Math.random() * 13)];
    var suit = suits[Math.floor(Math.random() * 4)];
    return (card + " of " + suit);
}
function updateCash(a) {
    cashBalance += a;
    cashElement.textContent = 'Cash: ' + cashBalance;
}
function bTest() {updateCash(1); }

/*declarations stop here*/
/*main code starts here*/

updateCash(starterCash);

