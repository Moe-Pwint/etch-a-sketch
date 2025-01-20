
function createGrid(number) {

    const container = document.querySelector('#container');
    for (let i = 0; i < number; i++) {
        let col = document.createElement("div");
        col.setAttribute('class','column');

        for (let j = 0; j < (number); j++) {
            let squareDiv = document.createElement('div');
            squareDiv.setAttribute("class","squareDiv");
            col.appendChild(squareDiv);
        } container.appendChild(col);
    }
}


console.log(createGrid(4));