document.addEventListener("DOMContentLoaded", function() {
    let cells = document.getElementsByClassName("cell");

    function changeColor(element) {
        let currentColor = element.dataset.color;    
        
        if (currentColor === "yellow") {
            element.style.backgroundColor = "blue";
            element.dataset.color = "blue";
        } else if (currentColor === "blue") {
            element.style.backgroundColor = "red";
            element.dataset.color = "red";
        } else {
            element.style.backgroundColor = "yellow";
            element.dataset.color = "yellow";
        }
    }

    Array.from(cells).forEach(cell => {
        cell.addEventListener("click", function() {
            changeColor(this);
        });
    });
});