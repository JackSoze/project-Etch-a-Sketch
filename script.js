function createDivs() {
    const container = document.querySelector('#container');
    let numberOfDivs = 256;
    for (let i=0; i<numberOfDivs; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('squareDiv');
        
        container.appendChild(squareDiv)
    }
}

createDivs()

const squareDivs = document.querySelectorAll('.squareDiv')
squareDivs.forEach(squareDiv =>
    squareDiv.addEventListener('mouseenter', function(e){
        this.classList.add('color')
    }) 
    )