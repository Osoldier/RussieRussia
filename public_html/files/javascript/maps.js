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

//DIRECTIONS
var TOP = 0;
var LEFT = 1;
var BOTTOM = 2;
var RIGHT = 3;

//PORTES
var DOORWIDTH = 40;
var DOORHEIGHT = 40;

//Ground
var GroundMap = [
    new room(1000, 500, [new object(100, 100, 32, 32, true, PUIT, "A")], [new door(RIGHT, 0, 1, null, false)]),
    new room(700, 700, [new object(100, 100, 32, 32, true, TABLE, null), new object(200, 200, 32, 16, true, TANK, null)], [new door(LEFT, 1, 0, null, false), new door(BOTTOM, 2, "UNDEFINED", null, false), new door(RIGHT, 3, 4, null, false)])
];

function room(width, height, objects, doors) {
    this.width = width;
    this.height = height;
    this.objects = objects;
    this.doors = doors;
}
function object(x, y, width, height, collidable, type, spec) {
    this.x = x;
    this.collidable = collidable;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
    this.spec = spec;
}
function door(place, id, arrival, color, lock) {
    this.place = place;
    this.id = id;
    this.arrival = arrival;
    this.color = color;
    this.lock = lock;
}

function getRoomIdWithDoor(id) {
    for (var i = 0; i < player.Map.length; i++) {
        for (var j = 0; j < player.Map[i].doors.length; j++) {
            if (player.Map[i].doors[j].id == id)
                return i;
        }
    }
    return null;
}

function getAllDoorsInRoom(id) {
    return player.Map[id].doors;
}

function getAllObjectsInRoom(id) {
    return player.Map[id].objects;
}

function getDoorWithId(id) {
    for (var i = 0; i < player.Map.length; i++) {
        for (var j = 0; j < player.Map[i].doors.length; j++) {
            if (player.Map[i].doors[j].id == id)
                return player.Map[i].doors[j];
        }
    }
    return null;
}

function initRoom(map, id) {
    var roomX = Game.canvas.width/2-(map[id].width/2), roomY = Game.canvas.height/2-(map[id].height/2);
    map[id].doors.forEach(function(entry) {
        Game.context.beginPath();
        var x = 0;
        var y = 0;
        switch (entry.place) {
            case TOP:
                y = roomY;
                x = roomX + (map[id].width / 2) - (DOORWIDTH / 2);
                break;
            case LEFT:
                y = roomY + (map[id].height / 2) - (DOORHEIGHT / 2);
                x = roomX;
                break;
            case BOTTOM:
                y = roomY + map[id].height - DOORHEIGHT;
                x = roomX + (map[id].width / 2) - (DOORWIDTH / 2);
                break;
            case RIGHT:
                y = roomY + (map[id].height / 2) - DOORHEIGHT / 2;
                x = roomX + (map[id].width) - DOORHEIGHT;
                break;
        }
        entry.x = x;
        entry.y = y;
    });
}