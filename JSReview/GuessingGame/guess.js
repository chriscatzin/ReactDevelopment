var secretNumber = 7;

var guess = prompt("Guess a number");

if(guess === secretNumber){
    alert("YOU GOT IT RIGHT!");
}
else if(guess !== secretNumber){
    alert("THE NUMBER IS WRONG!");
}
