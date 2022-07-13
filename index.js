let firstCard = Math.floor(Math.random() * 12) + 2
let secondCard = Math.floor(Math.random() * 12) + 2
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

console.log(firstCard)
console.log(secondCard)
console.log("Sum: " + sum)

if (sum < 21) {
    message = "Do you want to draw a new card? 🙂"
} else if(sum === 21) {
    message = "Congratulations! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isAlive = false
}

console.log(message)
