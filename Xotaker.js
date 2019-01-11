var LivingCreature = require("./LivingCreature")

module.exports = class Xotaker extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 5;
        this.maxMulCount = 7;
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

    mult() {  //bazmanal
        var array = this.chooseCell(0)
        var empty = array[Math.floor(Math.random() * array.length)];
        xotakerQanakStat++;
        
        if (weather == "garun") {
            this.maxMulCount = 9;
        }
        if (weather == "amar") {
            this.maxMulCount = 12;
        }

        if (weather == "ashun") {
            this.maxMulCount = 14;
        }
        if (weather == "dzmer") {
            this.maxMulCount = 7;
        }
        if (empty && this.energy > this.maxMulCount && weather != "dzmer") {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            var xt = new Xotaker(newX, newY)
            xotakerArr.push(xt)
        }
    }


    move() {  //sharjvel
        var array = this.chooseCell(0)
        var empty = array[Math.floor(Math.random() * array.length)];
        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {  //utel
        var array = this.chooseCell(1)
        var food = array[Math.floor(Math.random() * array.length)];
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 2
        }
    }

    die() {  //satkel
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1)
                }
                {
                }
            }
        }

    }
}
