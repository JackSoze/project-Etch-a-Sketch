let numberOfDivs =16;


function createDivs() {

    const container = document.querySelector('#container');

    if (numberOfDivs>100) {
        alert ('refresh and input a number less than 100')
        return;
    }
    
    for (let i=0; i<(numberOfDivs*numberOfDivs); i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('squareDiv');
        
        container.appendChild(squareDiv)
    }
    
    container.setAttribute('style',`grid-template-columns: repeat(${numberOfDivs}, 2fr) ;grid-template-rows: repeat(${numberOfDivs}, 2fr)`);

    const squareDivs = document.querySelectorAll('.squareDiv')
    squareDivs.forEach(squareDiv =>
    squareDiv.addEventListener('mouseenter', function(e){
        this.classList.add('color')
    }) 
    )

}

createDivs();

const button = document.addEventListener('click',function(e){
    console.log(e)
    numberOfDivs = parseInt(prompt('number of divs',16));
    const squareDivs = document.querySelectorAll('.squareDiv');
    squareDivs.forEach(squareDiv=>squareDiv.remove());
    createDivs()
})






