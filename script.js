var screen = document.querySelector("canvas");
var brush = screen.getContext("2d");

brush.fillStyle = "transparent";
brush.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, radius, color) {
    brush.fillStyle = color;
    brush.beginPath();
    brush.arc(x, y, radius, 0, 2 * 3.14);
    brush.fill();
}

var colors = ["orchid", "lime", "red", "mistyRose", "orangered", "plum", "yellow", "blue", "orange", "magenta", "purple", "darkred", "hotpink", "gold", "lavender", "RebeccaPurple", "violet", "indigo", "coral", "teal"]
var currentColor = 0;

function changeColors() {
    currentColor++;

    if (currentColor >= colors.length) {
        currentColor = 0;
    }
}

function desenhaFlor(x, y, color) {
    desenhaCirculo(x, y, 80, colors[currentColor+1]);
    desenhaCirculo(x, y - 100, 50, colors[currentColor]);
    desenhaCirculo(x - 55, y - 70, 42, colors[currentColor]);
    desenhaCirculo(x, y + 100, 50, colors[currentColor]);
    desenhaCirculo(x + 60, y + 65, 42, colors[currentColor]);
    desenhaCirculo(x - 100, y, 50, colors[currentColor]);
    desenhaCirculo(x - 65, y + 63, 42, colors[currentColor]);
    desenhaCirculo(x + 100, y, 50, colors[currentColor]);
    desenhaCirculo(x + 60, y - 67, 42, colors[currentColor]);
}

function reloadPage() {
    desenhaFlor(300, 200, colors[currentColor]);
}

setInterval(reloadPage, 700);

setInterval(changeColors, 700);