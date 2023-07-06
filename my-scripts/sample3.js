// Creating an animation: a pixel moves across the screen

// create an empty array to store all the frames in
let frames = [];

// make 8 frames where the pixel is always in row 3, 
// but in a different column each time.
for (let i=0; i<8; i++) {
    let newFrame = newScreen(); // make a default matrix
    newFrame[3][i] = [169, 137, 214]; // color one pixel
    frames.push(newFrame); // add matrix to the end of the frames array
}

// don't forget to display it!
drawAnimation(frames, 8);