
// creates 8x8 grid of pixels and adds the script defining the pixel art


// -- create grid ------------

let container = document.getElementById("pixels");

for (let r=0; r<8; r++) {
    for (let c=0; c<8; c++) {
        let new_pixel = document.createElement("div");
        new_pixel.setAttribute("class", "pixel");
        let pixel_name = c.toString() + "," + r.toString();
        new_pixel.setAttribute("id", pixel_name);

        container.appendChild(new_pixel);
    }
}

// -- get custom script ------------

let noInput = document.body.querySelector("#no-input");
let withInput = document.body.querySelector("#with-input");

const queryString = window.location.search;
const filename = new URLSearchParams(queryString).get("script");
if (filename) {
    console.log("here");
    noInput.style.display = "none";
    withInput.style.display = "block";

    let scriptName = document.body.querySelector("#with-input h2");
    scriptName.innerHTML = filename;

    let customScript = document.createElement("script");
    customScript.src = `my-scripts/${filename}`;
    document.body.appendChild(customScript);
} else {
    noInput.style.display = "block";
    withInput.style.display = "none";
}

function getScript() {
    // get text input
    let filename = document.getElementById("custom-input").value;
    document.getElementById("custom-input").value = "";

    // navigate to query param
    window.location.href = `?script=${filename}`;
}

// -- back to home when click title ------------

function goHome() {
    window.location.href = window.location.pathname;
}