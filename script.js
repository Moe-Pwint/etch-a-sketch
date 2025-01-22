
const getNum = document.querySelector('#getNum')
const container = document.querySelector('#container');

getNum.addEventListener('mousedown', () => {container.textContent = '';});

getNum.addEventListener('click',() => {
    
    let wrongInput = true;
    while (wrongInput) {
        
        const answer = prompt('Please type in a number between 10 and 100');
        console.log(answer);
        if (answer >= 10 && answer <= 100) {
            console.log(createGrid(answer));
            wrongInput = false;
            break;
        } else {
            alert('Please type a valid number!');
        }}
    });


function createGrid(number) {
    for (let i = 0; i < number; i++) {
        let col = document.createElement("div");
        col.setAttribute('class','column');

        for (let j = 0; j < (number); j++) {
            const squareDiv = document.createElement('div');
            squareDiv.setAttribute("class","squareDiv");
            col.appendChild(squareDiv);
        } container.appendChild(col);

    } const pixel = document.querySelectorAll('.squareDiv');
        pixel.forEach(p => {
        p.addEventListener('mouseenter', function() {
            changeColorRandom(p);
        }, {once: true});
});
}

function changeColorRandom (ele) {
    const r = (Math.floor(Math.random() * 255) +1);
    const g = (Math.floor(Math.random() * 255) +1);
    const b = (Math.floor(Math.random() * 255) +1);
    var randomCol = "rgb(" + r + "," + g + "," + b + ")"; 
    //parent.childNodes[1].style.color = col;//
    ele.style.backgroundColor = randomCol;
}

/*
1. Every time a pixel is colored, the color stays and not colored again when the same pixel is hovered again.
2. Every time the pixel is hovered, the opacity increases 0.1.
*/

/*
Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%. 
The goal is to achieve a fully black (or completely colored) square in only ten interactions.
Hint: The opacity CSS property is useful here. 
To learn how to use it, check this MDN docs article about the opacity CSS property.
*/


/*

    */