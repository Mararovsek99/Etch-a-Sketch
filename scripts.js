const rangeValueMaker = document.querySelector(".range")
const box = document.querySelector(".container");
const rangeInput = document.querySelector(".rangeValue");



const smallBox = document.createElement("div");
smallBox.style.height = "20px";
smallBox.style.width = "20px";
box.style.display = "flex";

function createGrid(rows, cols) { /*----------------------------------create rows and cols */
    box.style.display = 'grid';
    box.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    box.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    for (let i = 0; i < rows * cols; i++) {
        const gridItem = document.createElement("div");
        gridItem.style.backgroundColor = "#e8eaed";
        gridItem.style.border = "1px black solid";
        box.appendChild(gridItem);
    }
}

rangeInput.addEventListener("input",function(){/*--------------wait for changes in input of range and delete old divs and insert new ones*/ 
    
    while (box.firstChild) {
        box.removeChild(box.firstChild);
    }

    const currentValue = rangeInput.value;
    createGrid(currentValue, currentValue);

    if (rangeValueMaker.lastChild) {
        rangeValueMaker.removeChild(rangeValueMaker.lastChild);
    }

    const rangeNumber = document.createElement("h3");
    rangeNumber.textContent = currentValue + " x " + currentValue;
    rangeNumber.style.color = "#e8eaed";
    rangeNumber.style.width = "60px";
    rangeValueMaker.appendChild(rangeNumber);
})

while (box.firstChild) {
    box.removeChild(box.firstChild);
}

const currentValue = rangeInput.value;
createGrid(currentValue, currentValue);


const rangeNumber = document.createElement("h3");
    rangeNumber.textContent = currentValue + " x " + currentValue;
    rangeNumber.style.color = "#e8eaed";
    rangeNumber.style.width = "60px";
    rangeValueMaker.appendChild(rangeNumber);