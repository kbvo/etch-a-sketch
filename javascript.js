const grid = document.querySelector(".grid");
const resetButton = document.querySelector(".reset");

function makeGrid(size) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    const squareSize = 480 / size;
    for (i = 0; i < size * size; ++i) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener('mouseenter', () => {
            // random color
            /*let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            square.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b +")";*/
            // darken color
            const currentColor = square.style.backgroundColor || "rgb(255, 255, 255)";
            const newColor = darkenColor(currentColor);
            square.style.backgroundColor = newColor;
        });
        grid.appendChild(square);
    }
}

resetButton.addEventListener('click', () => {
    let size;
    do {
        size = prompt("Enter the number of squares per side for the new grid (maximum 100):");
        if (size === null) return;
    } while (isNaN(size) || size < 1 || size > 100);

    makeGrid(size);
});

function darkenColor(color) {
    const rgbValues = color.match(/\d+/g);
    const newRgbValues = rgbValues.map(value => Math.max(0, value - 25));
    const newColor = `rgb(${newRgbValues.join(',')})`;
    return newColor;
}

makeGrid(16);