// Christopher Catzin
// Last Modified: 7/9/2020

var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modebuttons = document.querySelectorAll(".mode");


for(var i = 0; i < modebuttons.length; i++) {
	modebuttons[i].addEventListener("click", function() {
		modebuttons[0].classList.remove("selected");
		modebuttons[1].classList.remove("selected");
		this.classList.add("selected");	
		this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
		reset();
	});
}

function reset(){
    colors = generateRandomColors(numOfSquares);
    
    // Pick a new random color from the array.
    pickedColor = pickColor();

    // Change colorDisplay to match picked color.
    colorDisplay.textContent = pickedColor;

    resetButton.textContent = "New Colors";

    messageDisplay.textContent = "";

    // change colors of squares.
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

    h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numOfSquares = 3;
//     colors = generateRandomColors(numOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else{
//             squares[i].style.display = "none";
//         }
//     }
// })

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numOfSquares = 6;
//     colors = generateRandomColors(numOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// })

resetButton.addEventListener("click", function(){
    reset();
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function(){
        // Grab color of clicked squares.
        var clickedColor = this.style.backgroundColor;

        // Compare color to pickedColor.
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    // loop through all squares.
    for(var i = 0; i < squares.length; i++){
        // Change each color to match given color.
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        // Get random color and push into arr
        arr.push(randomColor());
    }
    // Return Array
    return arr;
}

function randomColor(){
    // Pick from "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);

    // Pick from a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);

    // Pick from a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}