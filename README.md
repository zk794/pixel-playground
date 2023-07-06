# pixel playground

A fun way to explore coding! Use Javascript to create fun images on an 8x8 pixel grid. You can make a still image or a looping animation!

## natural design

Colors are commonly represented in RGB (red green blue) format. So, we can represent a color as an array of three integers between 0 and 255.

To tell the pixel playground what to display, you just need to tell it three numbers for each pixel on the 8x8 grid. Therefore, you create an 8x8x3 three-dimensional array of integers. We call this grid the matrix representation of the image.

An animation is just several still images shown in order. Therefore, to define an animation, you make an array of matrices, which will be an nx8x8x3 four-dimensional array (where n is the number of frames -- the only limit is your computer's memory!).

## simple api

You only need to learn three simple built-in functions!

* `drawScreen(matrix)`: this function takes an 8x8x3 array of integers as input. It will draw the design you specified to the screen.
* `drawAnimation(matrices, framerate)`: this function takes an nx8x8x3 array of integers (i.e. an array of single-screen matrices) and a framerate (in frames per second) as input. By default, the framerate is 1fps. It will draw the animation you specified to the screen.
* `newScreen()`: this function returns an 8x8x3 array of integers with all pixels set to black (technically near-black: rgb(1, 14, 26)). You can make a matrix without using this function, but it makes it much easier!

A suggested workflow is to spend most of the code defining your matrix/ces, then a single call to either `drawScreen` or `drawAnimation` at the end. This simple api allows you to focus on learning core coding techniques and trying new ideas, not the particular applet being used.

## built in color options

While you can use any of the 255^3 RGB colors, I have included built-in colors to get you started. Each one is simply a global variable that holds an array of three integers. Here are the built-in color variables:

RED, ORANGE, YELLOW, GREEN, AQUE, BLUE, PURPLE, PINK, BLACK, GRAY, WHITE

## easy to start!

All you need to do to get started is to clone or fork this repository

1. Clone (or fork then clone) this repository. 
2. Create your script in the my-scripts folder
3. Open index.html in your browser (double-click on it in your file explorer) and type in the name of your file.

See the my-scripts folder for examples to get started!