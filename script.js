function createDivs() {
    const container = document.querySelector('#container');
    let numberOfDivs = parseInt(prompt('how many divs per side?',16));
    for (let i=0; i<(numberOfDivs*numberOfDivs); i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('squareDiv');
        
        container.appendChild(squareDiv)
    }
    const clear = document.createElement('div')
    clear.classList.add('clear')
    container.appendChild(clear)

    container.setAttribute('style',`grid-template-columns: repeat(${numberOfDivs}, 2fr) ; grid-template-rows: repeat(${numberOfDivs}, 2fr)`);
    
}

createDivs()

const squareDivs = document.querySelectorAll('.squareDiv')
squareDivs.forEach(squareDiv =>
    squareDiv.addEventListener('mouseenter', function(e){
        this.classList.add('color')
    }) 
    )