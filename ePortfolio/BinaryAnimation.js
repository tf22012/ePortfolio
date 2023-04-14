// Get Canvas Element with ID of "BinaryAnimation"
const canvas = document.getElementById('BinaryAnimation');
// Initalizes a 2D drawing area for canvas
const context = canvas.getContext('2d');

// Set canvas width = to window width
canvas.width = window.innerWidth;
// Set canvas height = to window height
canvas.height = window.innerHeight;

// Binary Chars
const binary = '0 1';

// Set font size to 16 (px)
const fontSize = 16;

// Set Columns width to fontsize (16px)
const columns = canvas.width/fontSize;

// Create an Empty array for the raindrop effects 
const fallingBinary = [];

// Go through each column and add a binary character
for( let i = 0; i < columns; i++ ) {
    fallingBinary[i] = 1;
}

// Make draw a function (drawBinaryChar)
function drawBinaryChar() {

    // Create a transparent background for the animation
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';

    // Call base function to set the width and height for binary char
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Set chars color to lime green
    context.fillStyle = 'limegreen';

    // Set font family to monospace
    context.font = fontSize + 'px monospace';

    // Look through the fallingBinary array
    for(let i = 0; i < fallingBinary.length; i++)
    {
        // Create a variation degree for the animation 
        let animationVariation = Math.random() > Math.random() * (0.99 - 0.80) + 0.88;
        // Choose a random binary char and set it equal to text
        const text = binary.charAt(Math.floor(Math.random() * binary.length));
        // fill in the canvas with binary chars 
        context.fillText(text, i * fontSize, fallingBinary[i] * fontSize);
        // checks if the falling character has fallen off the canvas
        if(fallingBinary[i] * fontSize > canvas.height && animationVariation)
        {
            // Sets the char location back to 0 
            fallingBinary[i] = 0;
        }

    fallingBinary[i]++;
    }

};

// Setting the interval for function (drawBinaryChar to 40ms)
setInterval(drawBinaryChar, 40);

/* 
Inspired By:

JavaScript Academy. (2019, November 7). Matrix Raining Code Effect using JavaScript [Blog post]. dev.to. https://dev.to/javascriptacademy/matrix-raining-code-effect-using-javascript-4hep

*/
