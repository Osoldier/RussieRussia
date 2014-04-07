var TAPIS = 0;
var TABLE = 1;
var TABLEAU = 2;
var PORTE = 3;
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

function room(id, objects, doors)  {
    this.id = id;
    this.objects = objects;
    this.doors = doors;
}
function object(type, spec) {
    this.type = type;
    this.spec = spec;
}
function door(id, arrival, color, lock) {
    this.id = id;
    this.arrival = arrival;
    this.color = color;
    this.lock = lock;
}