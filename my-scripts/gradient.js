// returns 8x8x3 array of ints
function gridInterpolate(color1, color2) {
    let rDist = color2[0] - color1[0];
    let gDist = color2[1] - color1[1];
    let bDist = color2[2] - color1[2];
    let rDiff = Math.floor(rDist / 8);
    let gDiff = Math.floor(gDist / 8);
    let bDiff = Math.floor(bDist / 8);

    let m = newScreen();
    for (let y=0; y<8; y++) {
        for (let x=0; x<8; x++) {
            let r = color1[0] + y * rDiff;
            let g = Math.floor(color1[1] + ((y + x) / 2) * gDiff);
            let b = color1[2] + x * bDiff;
            m[y][x] = [r, g, b];
        }
    }
    
    return m;
}

let frames = [];
let color1 = [0, 0, 0];
let color2 = [255, 0, 255];

let i = 0;
while (i <= 255) {
    color1 = color1.map((n, idx) => idx == 1 ? n + 1 : n);
    color2 = color2.map((n, idx) => idx == 1 ? n + 1 : n);
    frames.push(gridInterpolate(color1, color2));
    i++;
}

frames = frames.concat(frames.slice().reverse());

// let grad = gridInterpolate([0,255,0], [255, 0, 255]);
// let grad = gridInterpolate(ORANGE, BLUE);
// drawScreen(grad);

drawAnimation(frames, 30);