var side = 20
var socket = io();
var m = 20
var n = 20
var weather = "garun";
var button = document.getElementById('dekaynacra');


function setup() {

    frameRate(5);
    createCanvas(500, 500);
    background('#acacac');


}
function drawMatrix(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }

            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("#778899");
            }
            else if (matrix[y][x] == 6) {
                fill("#778899");
            }
            else if (matrix[y][x] == 7) {
                fill("#778899");
            }
            else if (matrix[y][x] == 0) {
                if (weather == "garun") {
                    fill("#DAFDC1")
                }
                else if (weather == "amar") {
                    fill("#FC9393")
                }
                else if (weather == "ashun") {
                    fill("#FDDBC1")
                }
                else if (weather == "dzmer") {
                    fill("#D0E1F8")
                }
            }
            rect(x * side, y * side, side, side)

        }
    }
}

socket.on("matrix", drawMatrix);
socket.on("exanak", function (w) {
    weather = w;
});








