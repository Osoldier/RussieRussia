//ELEMENTS
var TAPIS = 0;
var TABLE = 1;
var TABLEAU = 2;
var PEAUOURS = 3;
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
var PORTECRIMEA = 18;


//DIRECTIONS
var TOP = 0;
var LEFT = 1;
var BOTTOM = 2;
var RIGHT = 3;

//PORTES
var DOORWIDTH = 70;
var DOORHEIGHT = 10;

//MODEL
var LONGER = 100;
var LARGER = 200;
var SQUARED = 300;

//Ground
var GroundMap = [
    new room(LONGER, [new object(700, 400, 32, 32, true, PUIT, "A")], [new door(RIGHT, 0, 1, null, false)]),
    new room(SQUARED, [new object(600, 400, 32, 32, true, TABLE, null), new object(500, 100, 32, 16, true, TANK, null)], [new door(LEFT, 1, 0, null, false), new door(BOTTOM, 2, "UNDEFINED", null, false), new door(RIGHT, 3, 4, null, false)]),
    new room(LONGER, [new object(300, 200, 32, 32, false, DRAPCOM, null)], [new door(LEFT, 4, 3, null, false), new door(RIGHT, 5, 6, null, false)]),
    new room(LONGER, [new object(700, 400, 32, 32, true, PUIT, "B")], [new door(LEFT, 6, 5, null, false), new door(RIGHT, 7, 8, null, false)]),
    new room(LONGER, [new object(380, 550, 32, 32, false, TANK, null)], [new door(LEFT, 8, 7, null, false), new door(RIGHT, 9, 10, "red", true)]),
    new room(SQUARED, [new object(950, 500, 32, 32, false, DRAPCOM, null)], [new door(LEFT, 10, 9, "red", true), new door(BOTTOM, 11, 12, "green", true)]),
    new room(LARGER, [new object(660, 300, 32, 32, true, TABLE, null), new object(500, 500, 32, 32, true, TABLE, null)], [new door(TOP, 12, 11, "green", true), new door(BOTTOM, 13, 14, null, false)]),
    new room(LONGER, [], [new door(TOP, 14, 13, null, false), new door(RIGHT, 15, 16, null, false), new door(BOTTOM, 27, "FIRSTFLOOR", null, false), new door(LEFT, 26, 25, null, false)]),
    new room(SQUARED, [new object(270, 200, 32, 32, false, LIVRE)], [new door(LEFT, 16, 15, null, false), new door(BOTTOM, 17, 18, "blue", true)]),
    new room(SQUARED, [new object(950, 400, 40, 40, true, PORTECRIMEA)], [new door(TOP, 18, 17, "blue", false), new door(LEFT, 19, 20, null, false), new door(BOTTOM, 37, 38, null, false)]),
    new room(LONGER, [], [new door(RIGHT, 20, 19, null, false), new door(LEFT, 21, 22, null, false)]),
    new room(LARGER, [], [new door(RIGHT, 22, 21, null, false), new door(TOP, 23, 24, null, false), new door(BOTTOM, 76, 45, null, false)]),
    new room(SQUARED, [new object(500, 400, 32, 32, true, PUIT, "C"), new object(650, 400, 64, 64, false, PEAUOURS, "E")], [new door(BOTTOM, 24, 23, null, false), new door(RIGHT, 25, 26, null, false), new door(LEFT, 28, 29, "blue", true)]),
    new room(SQUARED, [new object(600, 400, 64, 64, false, PEAUOURS, "F"), new object(600, 780, 32, 16, true, LIVRE)], [new door(RIGHT, 29, 28, "blue", true), new door(LEFT, 30, 31, null, false)])
];

function room(model, objects, doors) {
    switch (model) {
        case LONGER:
            this.width = 700;
            this.height = 500;
            break;
        case LARGER:
            this.width = 500;
            this.height = 700;
            break;
        case SQUARED:            
            this.width = 700;
            this.height = 700;
            break;
    }
    this.objects = objects;
    this.doors = doors;
}
function object(x, y, width, height, collidable, type, spec) {
    this.x = x;
    this.collidable = collidable;
    this.y = y;
    this.sprite = new Image();
    this.width = width;
    this.height = height;
    this.type = type;
    this.spec = spec;
}
function door(place, id, arrival, color, lock) {
    this.place = place;
    switch (place) {
        case TOP:
            this.width = DOORWIDTH
            this.height = DOORHEIGHT
            break;
        case BOTTOM:
            this.width = DOORWIDTH
            this.height = DOORHEIGHT
            break;
        case LEFT:
            this.width = DOORHEIGHT
            this.height = DOORWIDTH
            break;
        case RIGHT:
            this.width = DOORHEIGHT
            this.height = DOORWIDTH
            break;
    }
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
    var roomX = Game.canvas.width / 2 - (map[id].width / 2), roomY = Game.canvas.height / 2 - (map[id].height / 2);
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