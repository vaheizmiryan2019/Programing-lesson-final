var LivingCreature = require("./LivingCreature")
var Xotaker = require("./Xotaker")


module.exports = class Generator1 extends LivingCreature {
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
    Generacnel1() {
        var array = this.chooseCell(0)
        var empty = array[Math.floor(Math.random() * array.length)];
        generacnel1QanakStat++;
        if (empty && xotakerArr.length == 0 && weather != "dzmer") {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            var xt = new Xotaker(newX, newY)
            xotakerArr.push(xt)
        }
    }
}

