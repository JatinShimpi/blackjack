let player = {
    name: "jatin",
    chips:145
}
let cards =[]
let sum = 0
let hasblackjack = false 
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")  //here id is specified using the # if we specified the element
                                               // with an id if we use class instead then a '.' will need to be used
let cardsEL = document.getElementById("cards-el")  

let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" +player.chips

function getRandomcard(){

    let random =(Math.floor(Math.random()*13)+1)
    
    if (random===1) {
        return 11
    }
    if (random>10) {
        return 10
    }
    else{
        return random
    }
}

function startGame(){
    isAlive=true
    let firstcard = getRandomcard()
    let secondcard = getRandomcard()
    sum = firstcard + secondcard 
    cards =[firstcard,secondcard]
    renderGame()
}

function renderGame(){

    cardsEL.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEL.textContent += cards[i]+" "
        
    }

    sumEl.textContent = "Sum: "+sum

    if(sum<=20){
        message = "Do you want to draw another card?"
    }
    else if(sum === 21){
        message="Blackjack!"
        hasblackjack = true
    } 
    else{
        message="You are out of the game"
        isAlive = false
    }
    
    messageEl.textContent = message
}

function newCard(){

    if(isAlive===true && hasblackjack===false){

    let newcard = getRandomcard()
    sum += newcard
    cards.push(newcard);
    console.log(cards)
    renderGame()
    }

}