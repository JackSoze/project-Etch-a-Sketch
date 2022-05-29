let numberOfDivs =16;

function etchASketch () {
    createDivs();
    colorButtons()
}


function createDivs() {

    const container = document.querySelector('#container');

    if (numberOfDivs>100) {
        alert ('press button and input a number less than 100')
        return;
    }
    
    for (let i=0; i<(numberOfDivs*numberOfDivs); i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('squareDiv');
        
        container.appendChild(squareDiv)
    }
    
    container.setAttribute('style',`grid-template-columns: repeat(${numberOfDivs}, 2fr) ;grid-template-rows: repeat(${numberOfDivs}, 2fr)`);
}

function colorButtons() {
    const black = document.querySelector('#black');
    black.addEventListener('click', function (e){
        colorChange('black')
    })

    const rgb = document.querySelector('#rgb');
    rgb.addEventListener('click',function(e){
        colorChange('rgb')
    })
}

function colorChange(color) {
    const squareDivs = document.querySelectorAll('.squareDiv')
        squareDivs.forEach(squareDiv =>
        squareDiv.addEventListener('mouseenter', function(e){
           if (color=='rgb') {
            let randomColor = Math.floor(Math.random()*16777215).toString(16)
            squareDiv.setAttribute('style', `background-color : #${randomColor}`)
           } else if (color=='black') {
            squareDiv.setAttribute('style', 'background-color : black')
           }
            }))}
            
etchASketch()
colorChange('rgb');

const button = document.querySelector('#prompt')
    button.addEventListener('click',function(e){
    numberOfDivs = parseInt(prompt('number of divs',16));
    const squareDivs = document.querySelectorAll('.squareDiv');
    squareDivs.forEach(squareDiv=>squareDiv.remove());
    etchASketch()
    colorChange('rgb')
})









