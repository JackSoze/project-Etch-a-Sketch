function createDivs() {
    const container = document.querySelector('#container');
    let numberOfDivs = 16;
    for (let i=0; i<numberOfDivs; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('child');
        squareDiv.textContent='i am a square div'
        container.appendChild(squareDiv)
    }
}

createDivs()