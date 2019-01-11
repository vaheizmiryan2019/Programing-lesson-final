grassArr = []; xotakerArr = []; gishatichArr = []; zombieArr = []; generatorArr = []; generator1Arr = []; generator2Arr = [];
weather = "garun";

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');


app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

io.on('connection', function (socket) { })


var Grass = require("./Grass")
var Xotaker = require("./Xotaker")
var Gishatich = require("./Gishatich")
var Zombie = require("./Zombie")
var Generator = require("./Generator")
var Generator1 = require("./Generator1")
var Generator2 = require("./Generator2")



function RadInt(min, max) {
    var z = Math.floor(Math.random() * (max - min + 1)) + min;
    return z;
}

matrix = [];
var n = 20
var m = 20

for (var i = 0; i <= n; ++i) {
    matrix[i] = [];
}
for (var y = 0; y <= n; y++) {
    for (var x = 0; x <= m; x++) {
        matrix[y][x] = Math.round(Math.random());
    }
}

var tokos1 = 3;
var tokos2 = 2;
var tokos3 = 1;
var tokos4 = 1;
var tokos5 = 0.1;
var tokos6 = 0.1;
var tokos7 = 0.1;

var qanak1 = n * m * tokos1 / 100;
var qanak2 = n * m * tokos2 / 100;
var qanak3 = n * m * tokos3 / 100;
var qanak4 = n * m * tokos4 / 100;
var qanak5 = n * m * tokos5 / 100;
var qanak6 = n * m * tokos5 / 100;
var qanak7 = n * m * tokos5 / 100;


for (var z = 0; z < qanak1; ++z) {
    var xx = RadInt(0, m);
    var yy = RadInt(0, n);
    matrix[xx][yy] = 2;
}

for (var z = 0; z < qanak2; ++z) {
    var xx = RadInt(0, m);
    var yy = RadInt(0, n);
    matrix[xx][yy] = 3;
}

for (var z = 0; z < qanak3; ++z) {
    var xx = RadInt(0, m);
    var yy = RadInt(0, n);
    matrix[xx][yy] = 4;
}

var xx = RadInt(0, m);
var yy = RadInt(0, n);
matrix[xx][yy] = 5;

var xx = RadInt(0, m);
var yy = RadInt(0, n);
matrix[xx][yy] = 6;

var xx = RadInt(0, m);
var yy = RadInt(0, n);
matrix[xx][yy] = 7;


for (var y = 0; y < matrix.length; ++y) {
    for (var x = 0; x < matrix[y].length; ++x) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y);
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 2) {
            var gr = new Xotaker(x, y);
            xotakerArr.push(gr);
        }
        else if (matrix[y][x] == 3) {
            var gish = new Gishatich(x, y);
            gishatichArr.push(gish);
        }
        else if (matrix[y][x] == 4) {
            var zombie = new Zombie(x, y);
            zombieArr.push(zombie);
        }
        else if (matrix[y][x] == 5) {
            var generator = new Generator(x, y);
            generatorArr.push(generator);
        }
        else if (matrix[y][x] == 6) {
            var generator1 = new Generator1(x, y);
            generator1Arr.push(generator1);
        }
        else if (matrix[y][x] == 7) {
            var generator2 = new Generator2(x, y);
            generator2Arr.push(generator2);
        }
    }
}



function drawUrish() {

    for (var i in grassArr) {
        grassArr[i].mult()
    }

    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }

    for (var i in gishatichArr) {
        gishatichArr[i].mult()
        gishatichArr[i].move()
        gishatichArr[i].eat()
        gishatichArr[i].die()
    }

    for (var i in zombieArr) {
        zombieArr[i].move()
        zombieArr[i].eat()
        zombieArr[i].eat1()
        zombieArr[i].eat2()
    }

    for (var i in generatorArr) {
        generatorArr[i].Generacnel()
    }

    for (var i in generator1Arr) {
        generator1Arr[i].Generacnel1()
    }

    for (var i in generator2Arr) {
        generator2Arr[i].Generacnel2()
    }
    io.sockets.emit("matrix", matrix);


}
function changeWeather() {
    if (weather == "garun") {
        weather = "amar"
    }
    else if (weather == "amar") {
        weather = "ashun"
    }
    else if (weather == "ashun") {
        weather = "dzmer"
    }
    else if (weather == "dzmer") {
        weather = "garun"
    }
    io.sockets.emit("exanak", weather);

}

setInterval(drawUrish, 200);
setInterval(changeWeather, 3000);
setInterval(printStat, 5000);

xotQanakStat = 0;
xotakerQanakStat = 0;
gishatichQanakStat = 0;
zombieQanakStat = 4;
generatorQanakStat = 3;
generacnelQanakStat = 0;
generacnel1QanakStat = 0;
generacnel2QanakStat = 0;
var jsonObj = { "info": [] };
function printStat() {
    var file = "stat.json";
    jsonObj.info.push({ "xot qanak": xotQanakStat, "xotaker qanak": xotakerQanakStat, "gishatich qanak": gishatichQanakStat, "zombie qanak": zombieQanakStat, "generator qanak": generatorQanakStat, "generacnel ": generacnelQanakStat, "generacnel1 ": generacnel1QanakStat, "generacnel2 ": generacnel2QanakStat });
    fs.writeFileSync(file, JSON.stringify(jsonObj));

}

