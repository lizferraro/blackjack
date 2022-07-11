let firstCard = Math.floor(Math.random() * 12) + 2;
let secondCard = Math.floor(Math.random() * 12) + 2;
let sum = firstCard + secondCard;

console.log(firstCard)
console.log(secondCard)
console.log(sum)

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
} else if(sum === 21) {
    console.log("Congratulations! You've got Blackjack! 🥳")
} else if(sum > 21) {
    console.log("You're out of the game! 😭")
}