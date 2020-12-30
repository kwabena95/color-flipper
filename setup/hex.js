const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"],
    btn = document.querySelector('#btn'),
    colors = document.querySelector('.color');

btn.addEventListener('click', () => {
    let hexSign = '#';
    // create a loop to generate 6 values and append to hexSign
    for (let i = 0; i < 6; i++) {
        hexSign += hex[randonNumber()];
    }
    // target the body
    document.body.style.background = hexSign;
    document.body.style.transition = '.6s ease-in-out';
    // display the values
    colors.textContent = hexSign;
})

// generate random number
const randonNumber = () => {
    return Math.floor(Math.random() * hex.length);
}

