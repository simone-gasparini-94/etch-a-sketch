const gridContainer = document.querySelector("#grid-container");

function createGrid() {
    for (let i = 0; i < 16 * 16; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        gridContainer.appendChild(squareDiv);
    };
};

createGrid();