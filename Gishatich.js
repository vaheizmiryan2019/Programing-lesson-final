var LivingCreature = require("./LivingCreature")

module.exports = class Gishatich extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 8;
        this.maxMulCount = 10;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    mult() {
        var array = this.chooseCell(0)
        var empty = array[Math.floor(Math.random() * array.length)];
        gishatichQanakStat++;
        
        if (weather == "garun") {
            this.maxMulCount = 10;
        }
        if (weather == "amar") {
            this.maxMulCount = 13;
        }

        if (weather == "ashun") {
            this.maxMulCount = 13;
        }
        if (weather == "dzmer") {
            this.maxMulCount = 11;
        }
        if (empty && this.energy > this.maxMulCount && weather != "garun") {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            var gish = new Gishatich(newX, newY)
            gishatichArr.push(gish)
        }
    }

    move() {
        var array = this.chooseCell(0)
        var empty = array[Math.floor(Math.random() * array.length)];
        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
        var array = this.chooseCell(2)
        var food = array[Math.floor(Math.random() * array.length)];
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 2
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1)
                }

            }
        }
    }
}

