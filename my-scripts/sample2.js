// Creating more complex designs by leveraging the power of code.

// a function to create a vertical stripe
function makeStripe(matrix, color, xPos) {
    for (let i=0; i<8; i++) {
        matrix[i][xPos] = color;
    }
}

let stripes = newScreen();

let colors = [RED, ORANGE, YELLOW, GREEN, AQUA, BLUE, PURPLE, PINK];

// use the function we wrote to draw 8 stripes in order
colors.forEach((color, i) => makeStripe(stripes, color, i));

drawScreen(stripes);
