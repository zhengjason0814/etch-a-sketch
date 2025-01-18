const squareContainer = document.querySelector(".container");

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


function changeColor(event) {
    if (event.target.matches(".container div")) {
        event.target.style.backgroundColor = "red";
    }
}
