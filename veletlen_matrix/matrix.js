const originalArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let displayArray = [];

const matrixTable = document.getElementById("matrix");
const resetButton = document.getElementById("resetButton");

function initialBoard() {
    displayArray = [...originalArray];
    setRandomOrder();
    renderBoard();
}

function setRandomOrder() {
    const copyArray = [...originalArray];
    for (let i = 0; i < originalArray.length; i++) {
        const randomIndex = Math.floor(Math.random() * copyArray.length);
        displayArray[i] = copyArray[randomIndex];
        copyArray.splice(randomIndex, 1);
    }
}

function getItem() {
    const randomIndex = Math.floor(Math.random() * displayArray.length);
    return displayArray.splice(randomIndex, 1)[0];
}

function setDisplayBoard(event) {
    const cell = event.target;
    if (cell.classList.contains("cell")) {
        const value = getItem();
        cell.innerText = value;
    }
}

function renderBoard() {
    matrixTable.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        matrixTable.appendChild(row);
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("click", setDisplayBoard);
            cell.innerText = displayArray[i * 3 + j];
            row.appendChild(cell);
        }
    }
}

resetButton.addEventListener("click", () => {
    initialBoard();
});

initialBoard();
