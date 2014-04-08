var TAPIS = 0;
var TABLE = 1;
var TABLEAU = 2;
var CLEF = 4;
var PUIT = 5;
var MUR = 6;
var TANK = 7;
var DRAPCOM = 8;
var LIVRE = 9;
var OBAMA = 10;
var BENLADEN = 11;
var YANOUKOVIC = 12;
var FEMINISTE = 13;
var OURS = 14;
var VODKA = 15;
var CAVIAR = 16;
var CIGARETTE = 17;

function room(width, height, objects, doors) {
    this.width = width;
    this.height = height;
    this.objects = objects;
    this.doors = doors;
}
function object(x, y, width, height, type, spec) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
    this.spec = spec;
}
function door(id, arrival, color, lock) {
    this.id = id;
    this.arrival = arrival;
    this.color = color;
    this.lock = lock;
}

//Ground
var GroundMap = [
    new room(200, 200, [new object(100, 100, 32, 32, PUIT, "A")], new door(0, 1, null, false))
    ];

