const squareContainer = document.querySelector(".container");
const btn = document.querySelector("button");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        square = document.createElement("div");
        
        square.style.width = "25px";
        square.style.height = "25px";
        square.style.backgroundColor = "black";
        squareContainer.appendChild(square);
    }
}

squareContainer.addEventListener("mouseover", changeColor);
btn.addEventListener("click", generateNewGrid);


function changeColor(event) {
    randomColor = "rgb("
    for (let i = 0; i < 3; i++) {
        if (i != 2) randomColor += Math.floor(Math.random() * 256) + ",";
        else if (i == 2) randomColor += Math.floor(Math.random() * 256) + ")";
    }
    if (event.target.matches(".container div")) {
        event.target.style.backgroundColor = randomColor;
        event.target.style.opacity = window.getComputedStyle(event.target).getPropertyValue("opacity") - .1;
    }


}

function generateNewGrid() {
    let input = parseInt(prompt("Please enter a number between 0 - 100!"));
    if (input < 0) input = 0;
    else if (input > 100) input = 100;

    let squares = squareContainer.querySelectorAll("div");
    squares.forEach((square) => square.remove());

    for (let i = 0; i < input; i++) {
        for (let j = 0; j < input; j++) {
            square = document.createElement("div");

            changedRatio = (450 - input * 3) / input;
            newRatio = changedRatio + "px";

            square.style.width = newRatio;
            square.style.height = newRatio;
            square.style.backgroundColor = "black";
            squareContainer.appendChild(square);
        }
    }
}