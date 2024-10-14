const gridContainer = document.querySelector("#grid-container");
const submitButton = document.querySelector("#submit-button");
const inputField = document.querySelector("#input");

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
    if (squaresNumber > 0 && squaresNumber < 100) {
        return createGrid(squaresNumber);
    } else {
        alert("ENTER A VALID NUMBER");
    }
};

submitButton.addEventListener("click", setSquaresNumber);

createGrid(16);