
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
            p.style.backgroundColor = 'darkblue';
        p.addEventListener('mouseleave', () => {
            p.style.backgroundColor = 'lightblue';
    })
    })
});
}




/*
Rather than squares being the same color throughout the grid, 
randomize the squares’ RGB values with each interaction.
*/


/*

    */