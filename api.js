
// user can define a "screen" (i.e. a pattern of pixels) 
// by editing a matrix (8x8x3)

// user can make a (looping) animation by defining n screens
// and creating an array of matrices (nx8x8x3).

// -- GLOBAL CONSTANTS -----------------

// COLORS
const GRAY = [160, 160, 160];
// const RED = [255, 173, 173];
const RED = [255, 162, 162];
// const ORANGE = [255, 214, 165];
const ORANGE = [255, 211, 156];
// const YELLOW = [253, 255, 182];
const YELLOW = [252, 255, 169];
// const GREEN = [202, 255, 191];
const GREEN = [202, 255, 191];
const AQUA = [155, 246, 255];
// const BLUE = [160, 196, 255];
const BLUE = [148, 186, 255];
// const PURPLE = [189, 178, 255];
const PURPLE = [206, 162, 252];
const PINK = [255, 189, 255];
const BLACK = [1, 14, 26];
const WHITE = [223, 241, 241];

let looper;

// -- FRONTEND -------------------------

function newScreen() {
    let screen = [];
    for (let i=0; i<8; i++) {
        let row = [];
        for (let j=0; j<8; j++) {
            row.push(BLACK);
        }
        screen.push(row);
    }
    return screen;
}

// matrix: 8x8x3 array of ints, defining the RGB colors of pixels
function drawScreen(matrix) {
    for (let y=0; y<8; y++) {
        for (let x=0; x<8; x++) {
            drawPixel(x, y, matrix[y][x])
        }
    }
}

// matrices: nx8x8x3 array of ints, defining a sequence of screens.
function drawAnimation(matrices, framerate=1) {
    let counter = {"val": 0}; // object instead of int allows pass-by-reference
    looper = setInterval(drawFrame, Math.floor(1000/framerate),
                matrices, counter);
}

// -- BACKEND --------------------------

function drawPixel(x, y, color) {
    // find the html element corresponding to the pixel
    let pixel = document.getElementById(`${x},${y}`);
    // change its color
    let colorString = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    pixel.style.background = colorString;
}

function drawFrame(matrices, frameCounter) {
    drawScreen(matrices[frameCounter.val % matrices.length]);
    frameCounter.val++;
}
