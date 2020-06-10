var secretNumber = 7;

var guess = prompt("Guess a number");

if(Number(guess) === secretNumber){
    alert("YOU GOT IT RIGHT!");
}
else if(Number(guess) > secretNumber){
    alert("The number is too high, guess again.");
}
else if(Number(guess) < secretNumber){
    alert("The number is too low, guess again.")
}
