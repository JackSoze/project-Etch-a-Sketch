let numberOfDivs =16;


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

var randomColor = Math.floor(Math.random()*16777215).toString(16)

createDivs();
const button = document.querySelector('#prompt')
    button.addEventListener('click',function(e){
    numberOfDivs = parseInt(prompt('number of divs',16));
    const squareDivs = document.querySelectorAll('.squareDiv');
    squareDivs.forEach(squareDiv=>squareDiv.remove());
    createDivs()
    colorChange ()
})

function colorChange() {
const squareDivs = document.querySelectorAll('.squareDiv')
    squareDivs.forEach(squareDiv =>
    squareDiv.addEventListener('mouseenter', function(e){
        console.log(e)
        //this.classList.add('color') //to add a class changing background to just black
        let randomColor = Math.floor(Math.random()*16777215).toString(16)
        squareDiv.setAttribute('style', `background-color : #${randomColor}`)
    }) 
    )}







