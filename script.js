
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
        p.addEventListener('mouseenter', () => {
            changeColorRandom(p);
        });
        p.addEventListener('mouseleave', () => {
            p.style.backgroundColor = 'lightblue';
    })
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
Rather than squares being the same color throughout the grid, 
randomize the squares’ RGB values with each interaction.
*/


/*

    */