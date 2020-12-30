// array of color values
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector('#btn'),
    color = document.querySelector('.color');

// add event listener
btn.addEventListener('click', () => {
    // generate random number from the array
    const randomNumber = Math.floor(Math.random() * colors.length);
    // append the values in the color array to the body background
    document.body.style.background = colors[randomNumber];
    // display color values
    color.textContent = colors[randomNumber];
})   
