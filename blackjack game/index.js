let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");

let player = {
    name: "Madhura",
    chips: 100
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    cardEl.textContent = "Cards: " ;
    for(let counter = 0; counter<cards.length; counter++){
        cardEl.textContent += cards[counter] + " ";
    }

    if (sum<21){
        message = "Do you want to draw a card?";
    }
    else if (sum === 21){
        message = "You've got the Blackjack!";
        hasBlackJack = true;
        player.chips += sum;
        playerEl.textContent = player.name + ": $" + player.chips;

    }
    else{
        message = "You're out of the game.";
        isAlive = false;
        player.chips -= sum;
        playerEl.textContent = player.name + ": $" + player.chips;
    }

    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;

}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let anotherCard = getRandomCard();
        sum += anotherCard;
        cards.push(anotherCard);
        renderGame();
    }
}

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1;
    if (randomNumber > 10){
        return 10;
    }
    else if(randomNumber === 1){
        return 11;
    }
    else{
        return randomNumber;
    }
}