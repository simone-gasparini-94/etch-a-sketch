const gridContainer = document.querySelector("#grid-container");
const submitButton = document.querySelector("#submit-button");
const inputField = document.querySelector("#input");
const clearButton = document.querySelector("#clear-button");

function createGrid(squaresNumber) {
    gridContainer.innerHTML = "";

    let squareSize = 640 / squaresNumber;

    for (let i = 0; i < squaresNumber * squaresNumber; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square");

        squareDiv.style.height = `${squareSize}px`;
        squareDiv.style.width = `${squareSize}px`;
        
        let lightness = 100;
        const darkenGrid = () => {
            if (lightness > 0) {
                lightness -= 10;
                squareDiv.style.backgroundColor = `hsl(0, 0%, ${lightness}%)`;
            };
        };
        squareDiv.addEventListener("mouseover", darkenGrid);
        gridContainer.appendChild(squareDiv);
    };
};

function setSquaresNumber() {
    const squaresNumber = parseInt(inputField.value);
    if (squaresNumber > 1 && squaresNumber < 64) {
        return createGrid(squaresNumber);
    } else {
        alert("ENTER A NUMBER BETWEEN 2-64");
    }
};

function clearGrid() {
    createGrid(16);
    inputField.value = "";
};

submitButton.addEventListener("click", setSquaresNumber);
clearButton.addEventListener("click", clearGrid);

createGrid(16);