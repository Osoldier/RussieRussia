//ELEMENTS
var TAPIS = "TAPIS";
var TABLE = "TABLE";
var TABLEAU = "TABLEAU";
var PEAUOURS = "PEAUOURS";
var CLEFB = "CLEFB";
var CLEFR = "CLEFR";
var CLEFV = "CLEFV";
var CLEFJ = "CLEFJ";
var PUIT = "PUIT";
var MUR = "MUR";
var TANK = "TANK";
var DRAPCOM = "DRAPCOM";
var LIVRE = "LIVRE";
var OBAMA = "OBAMA";
var BENLADEN = "BENLADEN";
var YANOUKOVIC = "YANOUKOVIC";
var FEMINISTE = "FEMINISTE";
var OURS = "OURS";
var VODKA = "VODKA";
var CAVIAR = "CAVIAR";
var CIGARETTE = "CIGARETTE";
var PORTECRIMEA = "PORTECRIMEA";
var CLEF_1 = "CLEF_1";
var CLEF_2 = "CLEF_2";
var CLEF_3 = "CLEF_3";

//Objects à manger
var EATEABLES = [
    VODKA, CAVIAR, CIGARETTE
];

var TAKEABLE = [
    CLEFB, CLEFJ, CLEFR, CLEFV,CLEF_1,CLEF_2,CLEF_3
];

//POSITIONS
var TOP = 0;
var LEFT = 1;
var BOTTOM = 2;
var RIGHT = 3;
var TOPLEFT = 10;
var TOPRIGHT = 20;
var BOTLEFT = 12;
var BOTRIGHT = 22;

//PORTES
var DOORWIDTH = 100;
var DOORHEIGHT = 12;
var DOORIMGHEIGHT = 90;
var DOORIMGWIDTH = 142;

//MODEL
var LONGER = 100;
var LARGER = 200;
var SQUARED = 300;

var BLUE = 8;
var RED = 9;
var GREEN = 10;
var YELLOW = 11;
var WHITE = 13;
var CRIMEE = 12;

//La Map en entier
var GroundMap = [
    /* 0 */ new room(LONGER, [new object(700, 400, 64, 64, true, PUIT, "A")], [new door(RIGHT, 0, 1, null, false)]),
    /* 1 */ new room(SQUARED, [new object(600, 400, 32, 32, true, TABLE, null), new object(500, 100, 64, 64, true, TANK, null), new object(600, 100, 32, 32, false, CLEFR)], [new door(LEFT, 1, 0, null, false), new door(BOTTOM, 37, 36, null, false), new door(RIGHT, 3, 4, null, false)]),
    /* 2 */ new room(LONGER, [new object(300, 200, 32, 32, false, DRAPCOM, null)], [new door(LEFT, 4, 3, null, false), new door(RIGHT, 5, 6, null, false)]),
    /* 3 */ new room(LONGER, [new object(700, 400, 64, 64, true, PUIT, "B")], [new door(LEFT, 6, 5, null, false), new door(RIGHT, 7, 8, null, false)]),
    /* 4 */ new room(LONGER, [new object(380, 550, 64, 64, true, LIVRE, null)], [new door(LEFT, 8, 7, null, false), new door(RIGHT, 9, 10, RED, true)]),
    /* 5 */ new room(SQUARED, [new object(950, 500, 32, 32, false, TANK, null)], [new door(LEFT, 10, 9, RED, true), new door(BOTTOM, 11, 12, GREEN, true)]),
    /* 6 */ new room(LARGER, [new object(660, 300, 32, 32, true, TABLE, null), new object(500, 500, 32, 32, true, TABLE, null)], [new door(TOP, 12, 11, GREEN, true), new door(BOTTOM, 13, 14, null, false)]),
    /* 7 */ new room(LONGER, [], [new door(TOP, 14, 13, null, false), new door(RIGHT, 15, 16, null, false), new door(BOTTOM, 27, 222, null, false), new door(LEFT, 26, 25, null, false)]),
    /* 8 */ new room(SQUARED, [], [new door(LEFT, 16, 15, null, false), new door(BOTTOM, 17, 18, BLUE, true)]),
    /* 9 */ new room(SQUARED, [new object(950, 400, 113, 120, true, PORTECRIMEA)], [new door(TOP, 18, 17, BLUE, true), new door(LEFT, 19, 20, null, false), new door(BOTTOM, 76, 38, null, false)]),
    /* 10 */ new room(LONGER, [], [new door(RIGHT, 20, 19, null, false), new door(LEFT, 21, 22, null, false)]),
    /* 11 */ new room(LARGER, [], [new door(RIGHT, 22, 21, null, false), new door(TOP, 23, 24, null, false), new door(BOTTOM, 761, 45, null, false)]),
    /* 12 */ new room(SQUARED, [new object(500, 400, 64, 64, true, PUIT, "C"), new object(650, 400, 64, 64, false, PEAUOURS, "E")], [new door(BOTTOM, 24, 23, null, false), new door(RIGHT, 25, 26, null, false), new door(LEFT, 28, 29, BLUE, true)]),
    /* 13 */ new room(SQUARED, [new object(600, 400, 64, 64, false, PEAUOURS, "F"), new object(600, 780, 32, 16, true, LIVRE)], [new door(RIGHT, 29, 28, BLUE, true), new door(LEFT, 30, 31, null, false)]),
    /* 14 */ new room(LARGER, [], [new door(BOTTOM, 35, 34, null, false), new door(TOP, 36, 37, null, false)]),
    /* 15 */ new room(SQUARED, [new object(600, 800, 40, 30, false, DRAPCOM, null), new object(400, 200, 60, 40, true, CIGARETTE)], [new door(RIGHT, 31, 30, null, false), new door(LEFT, 32, 33, null, false)]),
    /* 16 */ new room(LONGER, [new object(200, 350, 50, 60, false, TABLEAU, null), new object(400, 300, 30, 50, true, CIGARETTE)], [new door(TOP, 36, 37, null, false), new door(BOTTOM, 70, 69, RED, true), new door(RIGHT, 33, 32, null, false)]),
    /* 17 */ new room(LONGER, [new object(980, 350, 50, 60, false, TABLEAU, null)], [new door(TOP, 69, 70, RED, true), new door(BOTTOM, 68, 67, null, false)]),
    /* 18 */ new room(LONGER, [new object(200, 350, 50, 60, false, TABLEAU, null), new object(400, 300, 30, 50, true, CIGARETTE)], [new door(TOP, 67, 68, null, false), new door(BOTTOM, 52, 53, null, false), new door(RIGHT, 51, 50, GREEN, true)]),
    /* 19 */ new room(SQUARED, [new object(400, 600, 32, 32, false, TABLE), new object(600, 35, 50, 60, false, DRAPCOM, null), new object(600, 820, 32, 32, false, TABLEAU, null)], [new door(LEFT, 50, 51, GREEN, true), new door(RIGHT, 49, 48, null, false)]),
    /* 20 */ new room(SQUARED, [new object(600, 250, 64, 64, false, PEAUOURS, "G"), new object(600, 35, 50, 60, false, LIVRE, null), new object(600, 500, 32, 32, true, CIGARETTE, null)], [new door(LEFT, 48, 49, null, false), new door(RIGHT, 47, 46, null, false)]),
    /* 21 */ new room(SQUARED, [new object(600, 600, 32, 32, true, CAVIAR)], [new door(LEFT, 46, 47, null, false), new door(TOP, 45, 761, null, false), new door(RIGHT, 44, 43, null, false)]),
    /* 22 */ new room(LONGER, [new object(700, 300, 32, 32, false, CLEFV)], [new door(BOTTOM, 42, 66, GREEN, true), new door(TOP, 41, 184, null, false), new door(LEFT, 43, 44, null, true), new door(RIGHT, 40, 39, null, false)]),
    /* 23 */ new room(SQUARED, [], [new door(LEFT, 39, 40, null, false), new door(TOP, 38, 76, null, false)]),
    /* 24 */ new room(LARGER, [], [new door(TOP, 53, 52, null, false), new door(BOTTOM, 54, 55, null, false)]),
    /* 25 */ new room(LARGER, [new object(300, 450, 64, 64, false, DRAPCOM)], [new door(TOP, 66, 42, GREEN, true), new door(BOTTOM, 65, 64, null, false)]),
    /* 26 */ new room(SQUARED, [new object(280, 90, 96, 96, true, TANK), new object(350, 400, 32, 32, true, TABLE), new object(350, 450, 32, 32, true, CAVIAR)], [new door(TOP, 55, 54, null, false), new door(RIGHT, 56, 57, null, false), new door(BOTTOM, 71, 72, BLUE, true)]),
    /* 27 */ new room(LONGER, [new object(500, 500, 32, 32, true, CAVIAR), new object(520, 500, 32, 32, true, CIGARETTE)], [new door(LEFT, 57, 56, null, false), new door(RIGHT, 58, 59, null, false)]),
    /* 28 */ new room(LONGER, [new object(500, 500, 32, 32, true, CAVIAR)], [new door(LEFT, 59, 58, null, false), new door(RIGHT, 60, 61, null, false)]),
    /* 29 */ new room(LONGER, [new object(500, 140, 60, 60, true, LIVRE)], [new door(LEFT, 61, 60, null, false), new door(RIGHT, 62, 63, null, false)]),
    /* 30 */ new room(SQUARED, [new object(280, 90, 96, 96, true, TANK), new object(280, 180, 32, 32, true, CIGARETTE), new object(700, 700, 32, 32, true, CIGARETTE), new object(600, 400, 64, 64, false, PEAUOURS, "I")], [new door(TOP, 64, 65, null, false), new door(LEFT, 63, 62, null, false)]),
    /* 31 */ new room(LARGER, [], [new door(TOP, 72, 71, BLUE, true), new door(BOTTOM, 73, 74, null, false)]),
    /* 32 */ new room(SQUARED, [new object(550, 750, 32, 32, true, CIGARETTE), new object(600, 750, 32, 32, true, VODKA), new object(650, 750, 32, 32, true, CAVIAR)], [new door(TOPRIGHT, 74, 73, null, false), new door(TOPLEFT, 75, "CAVERNE", null, false)]),
    /* 33 */ new room(SQUARED, [new object(700, 350, 32, 32, true, TABLE), new object(370, 350, 32, 32, true, CAVIAR)], [new door(LEFT, 183, 171, null, false), new door(RIGHT, 185, 666, null, false), new door(BOTTOM, 184, 41, null, false)]),
    /* 34 */ new room(SQUARED, [new object(500, 450, 32, 32, true, VODKA), new object(370, 350, 64, 64, false, PEAUOURS, "C")], [new door(LEFT, 172, 173, YELLOW, true), new door(RIGHT, 171, 183, null, false), new door(TOP, 170, 169, null, false)]),
    /* 35 */ new room(SQUARED, [new object(500, 450, 32, 32, true, VODKA)], [new door(LEFT, 175, 176, null, false), new door(RIGHT, 173, 172, YELLOW, true), new door(TOP, 174, 163, BLUE, true)]),
    /* 36 */ new room(SQUARED, [new object(500, 450, 32, 32, true, TABLE)], [new door(LEFT, 178, 179, null, false), new door(RIGHT, 176, 175, null, false), new door(TOP, 177, 158, BLUE, true)]),
    /* 37 */ new room(SQUARED, [], [new door(LEFT, 181, 182, GREEN, true), new door(RIGHT, 179, 178, null, false), new door(TOP, 180, 155, null, false)]),
    /* 38 */ new room(SQUARED, [new object(800, 750, 32, 32, true, TABLE), new object(550, 35, 64, 64, true, LIVRE), new object(500, 450, 32, 32, true, CAVIAR)], [new door(RIGHT, 182, 181, GREEN, true)]),
    /* 39 */ new room(SQUARED, [new object(500, 400, 64, 64, true, PUIT, "D")], [new door(LEFT, 167, 164, null, false), new door(TOP, 168, 135, null, false), new door(BOTTOM, 169, 170, null, false)]),
    /* 40 */ new room(SQUARED, [], [new door(LEFT, 162, 159, RED, true), new door(TOPLEFT, 165, 153, YELLOW, true), new door(TOPRIGHT, 166, 139, RED, true), new door(RIGHT, 164, 167, null, false), new door(BOTTOM, 163, 174, BLUE, true)]),
    /* 41 */ new room(SQUARED, [], [new door(LEFT, 157, 156, RED, true), new door(TOPLEFT, 160, 145, GREEN, true), new door(TOPRIGHT, 161, 152, YELLOW, true), new door(RIGHT, 159, 162, null, false), new door(BOTTOM, 158, 177, BLUE, true)]),
    /* 42 */ new room(SQUARED, [new object(500, 500, 32, 32, true, CAVIAR)], [new door(RIGHT, 156, 157, RED, true), new door(TOP, 154, 149, BLUE, true), new door(BOTTOM, 155, 180, null, false)]),
    /* 43 */ new room(SQUARED, [new object(600, 700, 32, 32, true, CAVIAR), new object(550, 700, 32, 32, true, CAVIAR), new object(500, 700, 32, 32, false, CLEFJ), new object(500, 500, 64, 64, false, PEAUOURS, "B")], [new door(BOTRIGHT, 153, 165, YELLOW, true), new door(BOTLEFT, 152, 161, YELLOW, true), new door(TOPRIGHT, 151, 140, YELLOW, true), new door(TOPLEFT, 150, 144, YELLOW, true)]),
    /* 44 */ new room(SQUARED, [new object(600, 300, 32, 32, true, TABLE)], [new door(LEFT, 136, 137, GREEN, true), new door(TOP, 134, 133, YELLOW, true), new door(BOTTOM, 135, 168, null, false)]),
    /* 45 */ new room(SQUARED, [new object(600, 300, 32, 32, true, TABLE)], [new door(LEFT, 141, 142, RED, true), new door(TOP, 138, 128, null, false), new door(BOTLEFT, 140, 151, YELLOW, true), new door(BOTRIGHT, 139, 166, RED, true), new door(RIGHT, 137, 136, GREEN, true)]),
    /* 46 */ new room(SQUARED, [new object(400, 300, 32, 32, true, TABLE), new object(500, 500, 32, 32, true, VODKA)], [new door(LEFT, 146, 147, null, false), new door(TOP, 143, 125, null, false), new door(BOTLEFT, 145, 160, GREEN, true), new door(BOTRIGHT, 144, 150, YELLOW, true), new door(RIGHT, 142, 141, RED, true)]),
    /* 47 */ new room(SQUARED, [], [new door(RIGHT, 147, 146, null, false), new door(TOP, 148, 122, null, false), new door(BOTTOM, 149, 154, BLUE, true)]),
    /* 48 */ new room(SQUARED, [], [new door(LEFT, 130, 129, null, false), new door(TOP, 131, 132, RED, true), new door(BOTTOM, 133, 134, YELLOW, true)]),
    /* 49 */ new room(SQUARED, [new object(600, 300, 32, 32, true, CAVIAR)], [new door(LEFT, 127, 126, GREEN, true), new door(RIGHT, 129, 130, null, false), new door(BOTTOM, 128, 138, null, false)]),
    /* 50 */ new room(SQUARED, [new object(600, 300, 32, 32, true, CAVIAR)], [new door(LEFT, 124, 123, null, false), new door(RIGHT, 126, 127, GREEN, true), new door(BOTTOM, 125, 143, null, false)]),
    /* 51 SALLE BOSS => CAVIAR = BOSS */ new room(SQUARED, [new object(600, 200, 32, 32, false, CAVIAR)], [new door(LEFT, 120, 121, YELLOW, true), new door(RIGHT, 123, 124, null, false), new door(TOP, 119, 118, BLUE, true), new door(BOTTOM, 122, 148, null, false)]),
    /* 52 */ new room(SQUARED, [new object(300, 370, 32, 32, true, CAVIAR), new object(300, 450, 32, 32, true, VODKA), new object(300, 530, 32, 32, true, CIGARETTE), new object(600, 800, 64, 64, true, LIVRE)], [new door(RIGHT, 121, 120, YELLOW, true)]),
    /* 53 */ new room(SQUARED, [new object(500, 250, 32, 32, true, CIGARETTE), new object(270, 400, 64, 64, true, TANK)], [new door(BOTTOM, 132, 131, RED, true)]),
    /* 54 */ new room(SQUARED, [new object(450, 200, 32, 32, true, VODKA), new object(910, 400, 64, 64, true, TANK)], [new door(BOTTOM, 118, 119, BLUE, true)]),
    /* 55 */ new room(SQUARED, [new object(400, 200, 32, 32, true, VODKA)], [new door(RIGHT, 187, 188, GREEN, true), new door(BOTTOM, 186, 190, null, false)]),
    /* 56 */ new room(SQUARED, [new object(400, 200, 32, 32, true, VODKA), new object(400, 500, 32, 32, true, CAVIAR), new object(600, 300, 32, 32, true, CIGARETTE)], [new door(LEFT, 188, 187, GREEN, true), new door(BOTTOM, 189, 193, null, false)]),
    /* 57 */ new room(SQUARED, [new object(600, 600, 32, 32, true, TABLE)], [new door(TOP, 190, 186, null, false), new door(RIGHT, 191, 192, null, false)]),
    /* 58 */ new room(SQUARED, [], [new door(TOP, 193, 189, null, false), new door(RIGHT, 194, 195, BLUE, true), new door(LEFT, 192, 191, null, false)]),
    /* 59 */ new room(SQUARED, [new object(500, 500, 32, 32, true, CAVIAR)], [new door(LEFT, 195, 194, BLUE, true), new door(RIGHT, 197, 198, null, false), new door(BOTTOM, 196, 200, null, false)]),
    /* 60 */ new room(SQUARED, [new object(500, 600, 32, 32, true, TABLE)], [new door(LEFT, 198, 197, null, false), new door(BOTTOM, 199, 202, null, false)]),
    /* 61 */ new room(LARGER, [new object(400, 500, 64, 64, true, PUIT, "F")], [new door(TOP, 200, 196, null, false), new door(BOTTOM, 201, 210, null, false)]),
    /* 62 */ new room(SQUARED, [new object(700, 600, 64, 64, true, PUIT, "E")], [new door(TOP, 202, 199, null, false), new door(BOTTOM, 203, 212, null, false), new door(RIGHT, 204, 205, null, false)]),
    /* 63 */ new room(LONGER, [], [new door(LEFT, 205, 204, null, false), new door(BOTTOM, 206, 85, YELLOW, true), new door(RIGHT, 207, 208, null, false)]),
    /* 64 */ new room(SQUARED, [new object(500, 600, 32, 32, true, VODKA)], [new door(LEFT, 208, 207, null, false), new door(BOTTOM, 209, 214, null, false)]),
    /* 65 */ new room(LARGER, [new object(400, 500, 32, 32, true, CAVIAR)], [new door(TOP, 210, 201, null, false), new door(BOTTOM, 211, 216, GREEN, true)]),
    /* 66 */ new room(LARGER, [new object(370, 400, 64, 64, true, TANK)], [new door(TOP, 212, 213, null, false), new door(BOTTOM, 213, 218, null, false)]),
    /* 67 */ new room(LARGER, [new object(450, 500, 32, 32, true, VODKA)], [new door(TOP, 214, 209, null, false), new door(BOTTOM, 215, 225, BLUE, true)]),
    /* 68 */ new room(LARGER, [new object(580, 200, 64, 64, true, PUIT, "G"), new object(815, 400, 64, 64, true, TANK), new object(580, 720, 64, 64, false, PEAUOURS, "H")], [new door(TOP, 216, 211, GREEN, true), new door(BOTTOM, 217, 232, null, false)]),
    /* 69 */ new room(SQUARED, [], [new door(RIGHT, 220, 221, null, false), new door(TOP, 218, 213, null, false), new door(BOTTOM, 219, 235, GREEN, true)]),
    /* 70 */ new room(LONGER, [new object(400, 400, 32, 32,true, VODKA)], [new door(LEFT, 221, 220, null, false),new door(TOP,222,27,null,false),new door(RIGHT,223,224,null,false)]),
    /* 71 */ new room(SQUARED, [new object(400,400,32,32,true, CIGARETTE)],[new door(LEFT,224,223,null,false),new door(TOP,225,215,BLUE,true)]),
    /* 72 */ new room()
    /* 73 */
    /* 74 */
    /* 75 */
    /* 76 */
    /* 77 */
    /* 78 */
    /* 79 */
    /* 80 */
    /* 81 */
    /* 82 */
    /* 83 */
    /* 84 */
    /* 85 */
    /* 86 */
    /* 87 */
    /* 88 */
    /* 89 */
    /* 90 */
];

function dispatchKeys() {
    for (var i = 0; i < 3; i++) {
        var j = Math.floor(Math.random() * GroundMap.length);
        if (i == 0) {
            GroundMap[j].objects.push(new object(600, 400, 32, 32, false, CLEF_1, null));
        }else if(i == 1) {
            GroundMap[j].objects.push(new object(600, 400, 32, 32, false, CLEF_2, null));
        }else if(i == 2) {
            GroundMap[j].objects.push(new object(600, 400, 32, 32, false, CLEF_3, null));
        }else {
            throw "Illegal Argument"
        }
        console.log(i+": "+j);
    }
}

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
        case TOPLEFT:
        case TOPRIGHT:
            this.imgHeight = DOORIMGHEIGHT;
            this.imgwidth = DOORIMGWIDTH;
            this.width = DOORWIDTH;
            this.height = DOORHEIGHT;
            break;
        case BOTTOM:
        case BOTLEFT:
        case BOTRIGHT:
            this.imgHeight = DOORIMGHEIGHT;
            this.imgwidth = DOORIMGWIDTH;
            this.width = DOORWIDTH;
            this.height = DOORHEIGHT;
            break;
        case LEFT:
            this.imgHeight = DOORIMGWIDTH;
            this.imgwidth = DOORIMGHEIGHT;
            this.width = DOORHEIGHT;
            this.height = DOORWIDTH;
            break;
        case RIGHT:
            this.imgHeight = DOORIMGWIDTH;
            this.imgwidth = DOORIMGHEIGHT;
            this.width = DOORHEIGHT;
            this.height = DOORWIDTH;
            break;
    }
    this.id = id;
    this.arrival = arrival;
    this.color = color;
    this.lock = lock;
}

/**
 * Trouve l'id de la chambre avec un id de porte
 * @param {Number} id
 * @returns {Number} RoomId
 */
function getRoomIdWithDoor(id) {
    for (var i = 0; i < player.Map.length; i++) {
        for (var j = 0; j < player.Map[i].doors.length; j++) {
            if (player.Map[i].doors[j].id == id)
                return i;
        }
    }
    return null;
}

/**
 * Trouve un tableau avec toutes les portes de la chambre via l'id de la chambre
 * @param {Number} id
 * @returns {player.Map.doors}
 */
function getAllDoorsInRoom(id) {
    return player.Map[id].doors;
}

/**
 * Trouve un tableau avec tout les objets de la chambre via l'id de la chambre
 * @param {Number} id
 * @returns {player.Map.objects}
 */
function getAllObjectsInRoom(id) {
    return player.Map[id].objects;
}

/**
 * Trouve l'objet de la porte via son id
 * @param {Number} id
 * @returns {door}
 */
function getDoorWithId(id) {
    for (var i = 0; i < player.Map.length; i++) {
        for (var j = 0; j < player.Map[i].doors.length; j++) {
            if (player.Map[i].doors[j].id == id)
                return player.Map[i].doors[j];
        }
    }
    return null;
}

/**
 * Trouve l'id de la chambre avec le type et la spécificité d'un objet
 * @param {Number} type
 * @param {String} spec
 * @returns {Number}
 * @throws {No object match} Objet introuvable
 */
function getRoomIdWithObjectTypeAndSpec(type, spec) {
    for (var i = 0; i < player.Map.length; i++) {
        for (var j = 0; j < player.Map[i].objects.length; j++) {
            var objectCurrent = player.Map[i].objects[j];
            if (objectCurrent.type == type && objectCurrent.spec == spec) {
                return i;
            }
        }
    }
    throw "No object match";
}

/**
 * Initialise la chambre avec son id
 * @param {Array} map Optionel
 * @param {Number} id
 * @returns {null}
 */
function initRoom(map, id) {
    if (map === null || typeof map === undefined) {
        map = GroundMap;
    }
    var roomX = Game.canvas.width / 2 - (map[id].width / 2), roomY = Game.canvas.height / 2 - (map[id].height / 2);
    map[id].doors.forEach(function(entry) {
        Game.context.beginPath();
        var x = 0;
        var y = 0;
        var imgX = 0;
        var imgY = 0;
        switch (entry.place) {
            case TOP:
                y = roomY;
                x = roomX + (map[id].width / 2) - (DOORWIDTH / 2);
                imgX = x - 20;
                imgY = y - DOORIMGHEIGHT + 20;
                break;
            case LEFT:
                y = roomY + (map[id].height / 2) - (DOORWIDTH / 2);
                x = roomX;
                imgX = x - DOORIMGHEIGHT + 20;
                imgY = y - 20;
                break;
            case BOTTOM:
                y = roomY + map[id].height - DOORHEIGHT;
                x = roomX + (map[id].width / 2) - (DOORWIDTH / 2);
                imgX = x - 20;
                imgY = y;
                break;
            case RIGHT:
                y = roomY + (map[id].height / 2) - DOORWIDTH / 2;
                x = roomX + (map[id].width) - DOORHEIGHT;
                imgX = x;
                imgY = y - 20;
                break;
            case TOPLEFT:
                y = roomY;
                x = roomX + (map[id].width / 4) - (DOORWIDTH / 2);
                imgX = x - 20;
                imgY = y - DOORIMGHEIGHT + 20;
                break;
            case TOPRIGHT:
                y = roomY;
                x = roomX + 3 * (map[id].width / 4) - (DOORWIDTH / 2);
                imgX = x - 20;
                imgY = y - DOORIMGHEIGHT + 20;
                break;
            case BOTLEFT:
                y = roomY + map[id].height - DOORHEIGHT;
                x = roomX + (map[id].width / 4) - (DOORWIDTH / 2);
                imgX = x - 20;
                imgY = y;
                break;
            case BOTRIGHT:
                y = roomY + map[id].height - DOORHEIGHT;
                x = roomX + 3 * (map[id].width / 4) - (DOORWIDTH / 2);
                imgX = x - 20;
                imgY = y;
                break;
        }
        entry.x = x;
        entry.y = y;
        entry.imgX = imgX;
        entry.imgY = imgY;
    });
}
//DERNIER RECOURS
function ToString(item) {

}