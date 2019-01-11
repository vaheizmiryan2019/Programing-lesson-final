var LivingCreature = require("./LivingCreature")
var Gishatich = require("./Gishatich")

module.exports = class Generator2 extends LivingCreature {
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
    Generacnel2() {
        var array = this.chooseCell(0)
        var empty = array[Math.floor(Math.random() * array.length)];
        generacnel2QanakStat++;
        if (empty && gishatichArr.length == 0 && weather != "dzmer") {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            var gish = new Gishatich(newX, newY)
            gishatichArr.push(gish)
        }
    }
}
