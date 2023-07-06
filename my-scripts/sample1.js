// A very simple example: manually encode each pixel

// create a default matrix we can edit
let daisy = newScreen();

// specify the row number (y-coordinate), then the column number (x-coordinate)
daisy[2][3] = WHITE;
daisy[4][3] = WHITE;
daisy[3][2] = WHITE;
daisy[3][4] = WHITE;
daisy[3][3] = YELLOW;
daisy[4][4] = GREEN;
daisy[5][5] = GREEN;

// don't forget to display the matrix you created!
drawScreen(daisy);