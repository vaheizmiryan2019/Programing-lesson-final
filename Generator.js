var LivingCreature = require("./LivingCreature")
var Grass = require("./Grass")


module.exports = class Generator extends LivingCreature {
    constructor(x, y){
        super(x, y);
    
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

    Generacnel() {
        var array = this.chooseCell(0)
        var empty = array[Math.floor(Math.random() * array.length)];
        generacnelQanakStat++;
        if (empty && grassArr.length == 0 && weather != "dzmer") {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }
}

