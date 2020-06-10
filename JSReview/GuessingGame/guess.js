var secretNumber = 7;

var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

if(guess === secretNumber){
    alert("YOU GOT IT RIGHT!");
}
else if(guess > secretNumber){
    alert("The number is too high, guess again.");
}
else if(guess < secretNumber){
    alert("The number is too low, guess again.")
}
