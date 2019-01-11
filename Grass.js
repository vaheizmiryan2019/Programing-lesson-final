var LivingCreature = require("./LivingCreature")

module.exports = class Grass extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.maxMulCount = 3;
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
        this.multiply++

        if (weather == "amar" || weather == "garun") {
            this.maxMulCount = 1;
        }
        else {
            this.maxMulCount = 1.5;
        }
        if (empty && this.multiply > this.maxMulCount && weather != "dzmer") {
            xotQanakStat++;
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }
}


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

