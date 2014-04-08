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

function room(id, x, y, width, height, objects, doors)  {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.id = id;
    this.objects = objects;
    this.doors = doors;
}
function object(x, y, type, spec) {
    this.x = x;
    this.y = y;
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
var GroundMap = new Array();
GroundMap.push( new room(1, 0, 0,200,200, new Array[new object(100, 100, PUIT, "A")], new door(0, 1, null, false)));
  
