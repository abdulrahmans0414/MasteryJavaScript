//  nested if else

// creaate a game logic
// winning number 19

// 19 your guess is right
// 17 too low
// 20 too high

let winningNumber = 19;
let userGuess = +prompt("Guess a number") // ""
// console.log(typeof userGuess, userGuess);

if (userGuess === winningNumber) {
    console.log("Your guess is correct");
}
else {
    if (userGuess > winningNumber) {
        console.log("high");
    } else {
        (userGuess < winningNumber)
        console.log("Low")
    }
}