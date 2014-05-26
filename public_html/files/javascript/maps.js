//##############################################################################
//Fichier : maps.js
//Description : Fichier contenant la map et tout ce qui s'y référe  
//Date : 12.05.2014
//Version : 1
//##############################################################################

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
var DRAPCOMBAS = "DRAPCOMBAS";
var DRAPCOMDROITE = "DRAPCOMDROITE";
var DRAPCOMGAUCHE = "DRAPCOMGAUCHE";
var LIVRE = "LIVRE";
var LIVREBAS = "LIVREBAS";
var LIVREDROITE = "LIVREDROITE";
var LIVREGAUCHE = "LIVREGAUCHE";
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
    CLEFB, CLEFJ, CLEFR, CLEFV, CLEF_1, CLEF_2, CLEF_3
];

var TP = [
    LIVRE, TANK, DRAPCOM
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
    /* THE GROUND FLOOR */
    /* 0 */ new room(LONGER, [new object(700, 400, 64, 64, true, PUIT, "A")], [new door(RIGHT, 1, 2, null, false)]),
    /* 1 */ new room(SQUARED, [new object(600, 400, 32, 32, true, TABLE, null), new object(500, 100, 64, 64, true, TANK, "A"), new object(600, 100, 32, 32, false, CLEFR)], [new door(LEFT, 2, 1, null, false), new door(BOTTOM, 37, 36, null, false), new door(RIGHT, 3, 4, null, false)]),
    /* 2 */ new room(LONGER, [new object(300, 200, 64, 64, true, DRAPCOM, null)], [new door(LEFT, 4, 3, null, false), new door(RIGHT, 5, 6, null, false)]),
    /* 3 */ new room(LONGER, [new object(700, 400, 64, 64, true, PUIT, "B")], [new door(LEFT, 6, 5, null, false), new door(RIGHT, 7, 8, null, false)]),
    /* 4 */ new room(LONGER, [new object(380, 550, 64, 64, true, LIVRE, "A")], [new door(LEFT, 8, 7, null, false), new door(RIGHT, 9, 10, RED, true)]),
    /* 5 */ new room(SQUARED, [new object(950, 500, 64, 64, true, TANK, "B")], [new door(LEFT, 10, 9, RED, true), new door(BOTTOM, 11, 12, GREEN, true)]),
    /* 6 */ new room(LARGER, [new object(660, 300, 32, 32, true, TABLE, null), new object(500, 500, 32, 32, true, TABLE, null)], [new door(TOP, 12, 11, GREEN, true), new door(BOTTOM, 13, 14, null, false)]),
    /* 7 */ new room(LONGER, [], [new door(TOP, 14, 13, null, false), new door(RIGHT, 15, 16, null, false), new door(BOTTOM, 27, 222, null, false), new door(LEFT, 26, 25, null, false)]),
    /* 8 */ new room(SQUARED, [], [new door(LEFT, 16, 15, null, false), new door(BOTTOM, 17, 18, BLUE, true)]),
    /* 9 */ new room(SQUARED, [new object(950, 400, 113, 120, true, PORTECRIMEA)], [new door(TOP, 18, 17, BLUE, true), new door(LEFT, 19, 20, null, false), new door(BOTTOM, 76, 38, null, false)]),
    /* 10 */ new room(LONGER, [], [new door(RIGHT, 20, 19, null, false), new door(LEFT, 21, 22, null, false)]),
    /* 11 */ new room(LARGER, [], [new door(RIGHT, 22, 21, null, false), new door(TOP, 23, 24, null, false), new door(BOTTOM, 761, 45, null, false)]),
    /* 12 */ new room(SQUARED, [new object(500, 400, 64, 64, true, PUIT, "C"), new object(650, 400, 64, 64, false, PEAUOURS, "E")], [new door(BOTTOM, 24, 23, null, false), new door(RIGHT, 25, 26, null, false), new door(LEFT, 28, 29, BLUE, true)]),
    /* 13 */ new room(SQUARED, [new object(600, 400, 64, 64, false, PEAUOURS, "F"), new object(600, 780, 64, 64, true, LIVRE, "B")], [new door(RIGHT, 29, 28, BLUE, true), new door(LEFT, 30, 31, null, false)]),
    /* 14 */ new room(LARGER, [], [new door(BOTTOM, 35, 34, null, false), new door(TOP, 36, 37, null, false)]),
    /* 15 */ new room(SQUARED, [new object(600, 800, 64, 64, true, DRAPCOM, "A"), new object(400, 200, 30, 50, true, CIGARETTE)], [new door(RIGHT, 31, 30, null, false), new door(LEFT, 32, 33, null, false)]),
    /* 16 */ new room(LONGER, [new object(200, 350, 50, 60, false, TABLEAU, null), new object(400, 300, 30, 50, true, CIGARETTE)], [new door(TOP, 34, 35, null, false), new door(BOTTOM, 70, 69, RED, true), new door(RIGHT, 33, 32, null, false)]),
    /* 17 */ new room(LONGER, [new object(980, 350, 50, 60, false, TABLEAU, null)], [new door(TOP, 69, 70, RED, true), new door(BOTTOM, 68, 67, null, false)]),
    /* 18 */ new room(LONGER, [new object(200, 350, 50, 60, false, TABLEAU, null), new object(400, 300, 30, 50, true, CIGARETTE)], [new door(TOP, 67, 68, null, false), new door(BOTTOM, 52, 53, null, false), new door(RIGHT, 51, 50, GREEN, true)]),
    /* 19 */ new room(SQUARED, [new object(400, 600, 32, 32, true, TABLE), new object(600, 35, 64, 64, true, DRAPCOM, "A"), new object(600, 820, 32, 32, false, TABLEAU, null)], [new door(LEFT, 50, 51, GREEN, true), new door(RIGHT, 49, 48, null, false)]),
    /* 20 */ new room(SQUARED, [new object(600, 250, 64, 64, false, PEAUOURS, "G"), new object(600, 35, 64, 64, true, LIVRE, "B"), new object(600, 500, 32, 32, true, CIGARETTE)], [new door(LEFT, 48, 49, null, false), new door(RIGHT, 47, 46, null, false)]),
    /* 21 */ new room(SQUARED, [new object(600, 600, 32, 32, true, CAVIAR)], [new door(LEFT, 46, 47, null, false), new door(TOP, 45, 761, null, false), new door(RIGHT, 44, 43, null, false)]),
    /* 22 */ new room(LONGER, [new object(700, 300, 32, 32, false, CLEFV)], [new door(BOTTOM, 42, 66, GREEN, true), new door(TOP, 41, 184, null, false), new door(LEFT, 43, 44, null, true), new door(RIGHT, 40, 39, null, false)]),
    /* 23 */ new room(SQUARED, [], [new door(LEFT, 39, 40, null, false), new door(TOP, 38, 76, null, false)]),
    /* 24 */ new room(LARGER, [], [new door(TOP, 53, 52, null, false), new door(BOTTOM, 54, 55, null, false)]),
    /* 25 */ new room(LARGER, [new object(310, 450, 64, 64, true, DRAPCOM, "B")], [new door(TOP, 66, 42, GREEN, true), new door(BOTTOM, 65, 64, null, false)]),
    /* 26 */ new room(SQUARED, [new object(280, 90, 64, 64, true, TANK, "A"), new object(350, 400, 32, 32, true, TABLE), new object(350, 450, 32, 32, true, CAVIAR)], [new door(TOP, 55, 54, null, false), new door(RIGHT, 56, 57, null, false), new door(BOTTOM, 71, 72, BLUE, true)]),
    /* 27 */ new room(LONGER, [new object(500, 500, 32, 32, true, CAVIAR), new object(520, 500, 32, 32, true, CIGARETTE)], [new door(LEFT, 57, 56, null, false), new door(RIGHT, 58, 59, null, false)]),
    /* 28 */ new room(LONGER, [new object(500, 500, 32, 32, true, CAVIAR)], [new door(LEFT, 59, 58, null, false), new door(RIGHT, 60, 61, null, false)]),
    /* 29 */ new room(LONGER, [new object(500, 140, 64, 64, true, LIVRE, "A")], [new door(LEFT, 61, 60, null, false), new door(RIGHT, 62, 63, null, false)]),
    /* 30 */ new room(SQUARED, [new object(280, 90, 64, 64, true, TANK, "B"), new object(280, 180, 32, 32, true, CIGARETTE), new object(700, 700, 32, 32, true, CIGARETTE), new object(600, 400, 64, 64, false, PEAUOURS, "I")], [new door(TOP, 64, 65, null, false), new door(LEFT, 63, 62, null, false)]),
    /* 31 */ new room(LARGER, [], [new door(TOP, 72, 71, BLUE, true), new door(BOTTOM, 73, 74, null, false)]),
    /* 32 */ new room(SQUARED, [new object(550, 750, 32, 32, true, CIGARETTE), new object(600, 750, 32, 32, true, VODKA), new object(650, 750, 32, 32, true, CAVIAR)], [new door(TOPRIGHT, 74, 73, null, false), new door(TOPLEFT, 75, 336, null, false)]),
    /* 33 */ new room(SQUARED, [new object(700, 350, 32, 32, true, TABLE), new object(370, 350, 32, 32, true, CAVIAR)], [new door(LEFT, 183, 171, null, false), new door(RIGHT, 185, 293, null, false), new door(BOTTOM, 184, 41, null, false)]),
    /* THE BASEMENT */
    /* 34 */ new room(SQUARED, [new object(500, 450, 32, 32, true, VODKA), new object(370, 350, 64, 64, false, PEAUOURS, "C")], [new door(LEFT, 172, 173, YELLOW, true), new door(RIGHT, 171, 183, null, false), new door(TOP, 170, 169, null, false)]),
    /* 35 */ new room(SQUARED, [new object(500, 450, 32, 32, true, VODKA)], [new door(LEFT, 175, 176, null, false), new door(RIGHT, 173, 172, YELLOW, true), new door(TOP, 174, 163, BLUE, true)]),
    /* 36 */ new room(SQUARED, [new object(500, 450, 32, 32, true, TABLE)], [new door(LEFT, 178, 179, null, false), new door(RIGHT, 176, 175, null, false), new door(TOP, 177, 158, BLUE, true)]),
    /* 37 */ new room(SQUARED, [], [new door(LEFT, 181, 182, GREEN, true), new door(RIGHT, 179, 178, null, false), new door(TOP, 180, 155, null, false)]),
    /* 38 */ new room(SQUARED, [new object(800, 750, 32, 32, true, TABLE), new object(550, 35, 64, 64, true, LIVRE, "C"), new object(500, 450, 32, 32, true, CAVIAR)], [new door(RIGHT, 182, 181, GREEN, true)]),
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
    /* 51 SALLE BOSS => CAVIAR = BOSS */ new room(SQUARED, [new object(600, 200, 32, 32, true, CAVIAR)], [new door(LEFT, 120, 121, YELLOW, true), new door(RIGHT, 123, 124, null, false), new door(TOP, 119, 118, BLUE, true), new door(BOTTOM, 122, 148, null, false)]),
    /* 52 */ new room(SQUARED, [new object(300, 370, 32, 32, true, CAVIAR), new object(300, 450, 32, 32, true, VODKA), new object(300, 530, 32, 32, true, CIGARETTE), new object(600, 800, 64, 64, true, LIVRE, "C")], [new door(RIGHT, 121, 120, YELLOW, true)]),
    /* 53 */ new room(SQUARED, [new object(500, 250, 32, 32, true, CIGARETTE), new object(270, 400, 64, 64, true, TANK, "C")], [new door(BOTTOM, 132, 131, RED, true)]),
    /* 54 */ new room(SQUARED, [new object(450, 200, 32, 32, true, VODKA), new object(910, 400, 64, 64, true, TANK, "C")], [new door(BOTTOM, 118, 119, BLUE, true)]),
    /* 55 */ new room(SQUARED, [new object(400, 200, 32, 32, true, VODKA)], [new door(RIGHT, 187, 188, GREEN, true), new door(BOTTOM, 186, 190, null, false)]),
    /* THE FIRST FLOOR */
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
    /* 66 */ new room(LARGER, [new object(370, 400, 64, 64, true, TANK, "D")], [new door(TOP, 212, 203, null, false), new door(BOTTOM, 213, 218, null, false)]),
    /* 67 */ new room(LARGER, [new object(450, 500, 32, 32, true, VODKA)], [new door(TOP, 214, 209, null, false), new door(BOTTOM, 215, 225, BLUE, true)]),
    /* 68 */ new room(LARGER, [new object(580, 200, 64, 64, true, PUIT, "G"), new object(815, 400, 64, 64, true, TANK, "D"), new object(580, 720, 64, 64, false, PEAUOURS, "H")], [new door(TOP, 216, 211, GREEN, true), new door(BOTTOM, 217, 232, null, false)]),
    /* 69 */ new room(SQUARED, [], [new door(RIGHT, 220, 221, null, false), new door(TOP, 218, 213, null, false), new door(BOTTOM, 219, 235, GREEN, true)]),
    /* 70 */ new room(LONGER, [new object(400, 400, 32, 32, true, VODKA)], [new door(LEFT, 221, 220, null, false), new door(TOP, 222, 27, null, false), new door(RIGHT, 223, 224, null, false)]),
    /* 71 */ new room(SQUARED, [new object(400, 400, 32, 32, true, CIGARETTE)], [new door(LEFT, 224, 223, null, false), new door(TOP, 225, 215, BLUE, true)]),
    /* 72 */ new room(SQUARED, [new object(400, 400, 32, 32, true, CIGARETTE)], [new door(RIGHT, 227, 228, RED, true), new door(BOTTOM, 226, 236, null, false)]),
    /* 73 */ new room(SQUARED, [new object(500, 500, 32, 32, true, CAVIAR), new object(400, 400, 64, 64, false, PEAUOURS, "J")], [new door(LEFT, 228, 227, RED, true), new door(RIGHT, 230, 231, YELLOW, true), new door(BOTTOM, 229, 239, null, false)]),
    /* 74 */ new room(SQUARED, [], [new door(LEFT, 231, 230, YELLOW, true), new door(RIGHT, 233, 234, null, false), new door(TOP, 232, 217, null, false)]),
    /* 75 */ new room(SQUARED, [new object(300, 300, 32, 32, true, CIGARETTE), new object(970, 400, 64, 64, true,DRAPCOM, "B"), new object(500, 500, 32, 32, true, CAVIAR), new object(600, 300, 64, 64, false, PEAUOURS, "K")], [new door(LEFT, 234, 233, null, false), new door(TOP, 235, 219, GREEN, true)]),
    /* 76 */ new room(SQUARED, [new object(300, 400, 32, 32, true, CAVIAR), new object(500, 600, 32, 32, true, VODKA)], [new door(TOP, 236, 226, null, false), new door(RIGHT, 237, 238, null, false)]),
    /* 77 */ new room(SQUARED, [new object(500, 500, 32, 32, true, CAVIAR)], [new door(LEFT, 238, 237, null, false), new door(TOP, 239, 229, null, false)]),
    /* THE ATTIC */
    /* 78 */ new room(SQUARED, [new object(300, 250, 32, 32, true, CIGARETTE), new object(300, 740, 64, 64, true, TANK, "E")], [new door(RIGHT, 78, 79, null, false), new door(BOTTOM, 77, 102, null, false)]),
    /* 79 */ new room(SQUARED, [new object(350, 400, 32, 32, true, TABLE), new object(700, 400, 32, 32, true, TABLE), new object(500, 500, 64, 64, true, PUIT, "H")], [new door(LEFT, 79, 78, null, false), new door(RIGHT, 80, 82, GREEN, true), new door(BOTTOM, 81, 105, null, false)]),
    /* 80 */ new room(LONGER, [new object(350, 300, 32, 32, true, TABLE), new object(700, 300, 32, 32, true, TABLE)], [new door(LEFT, 82, 80, GREEN, true), new door(RIGHT, 83, 84, null, false)]),
    /* 81 */ new room(SQUARED, [new object(500, 500, 32, 32, true, VODKA)], [new door(LEFT, 84, 83, null, false), new door(TOP, 85, 206, null, false), new door(BOTTOM, 86, 87, null, false)]),
    /* 82 */ new room(SQUARED, [new object(500, 500, 64, 64, true, PUIT, "J"), new object(300, 300, 64, 64, true, TANK, "E")], [new door(TOP, 102, 77, null, false), new door(RIGHT, 103, 104, null, false), new door(BOTTOM, 101, 100, null, false)]),
    /* 83 */ new room(SQUARED, [], [new door(TOP, 105, 81, null, false), new door(LEFT, 104, 103, null, false), new door(RIGHT, 106, 116, null, false), new door(BOTTOM, 107, 108, null, false)]),
    /* 84 */ new room(SQUARED, [new object(600, 200, 32, 32, true, VODKA), new object(500, 300, 64, 64, true, PUIT, "K")], [new door(LEFT, 116, 106, null, false), new door(BOTTOM, 115, 114, null, false)]),
    /* 85 */ new room(LARGER, [new object(400, 500, 32, 32, true, VODKA)], [new door(TOP, 87, 86, null, false), new door(BOTTOM, 88, 89, BLUE, true)]),
    /* 86 */ new room(LARGER, [new object(600, 500, 32, 32, true, CAVIAR), new object(600, 300, 32, 32, true, TABLE), new object(600, 700, 32, 32, true, TABLE)], [new door(TOP, 100, 101, null, false), new door(BOTTOM, 99, 98, YELLOW, true)]),
    /* 87 */ new room(SQUARED, [new object(400, 600, 32, 32, true, CIGARETTE)], [new door(TOP, 108, 107, null, false), new door(RIGHT, 109, 110, null, false)]),
    /* 88 */ new room(SQUARED, [new object(500, 300, 32, 32, true, TABLE), new object(700, 600, 32, 32, true, TABLE)], [new door(TOP, 114, 115, null, false), new door(LEFT, 110, 109, null, false), new door(RIGHT, 112, 113, null, false), new door(BOTTOM, 111, 117, null, false)]),
    /* 89 BOSS DRACNIGGA */ new room(SQUARED, [new object(500, 500, 64, 64, true, PUIT, "I")], [new door(TOP, 89, 88, BLUE, true), new door(LEFT, 113, 112, null, false), new door(BOTTOM, 90, 91, null, false)]),
    /* 90 */ new room(SQUARED, [], [new door(TOP, 98, 99, YELLOW, true), new door(RIGHT, 97, 96, YELLOW, true)]),
    /* 91 */ new room(LONGER, [new object(400, 400, 32, 32, true, CAVIAR)], [new door(LEFT, 96, 97, YELLOW, true), new door(RIGHT, 95, 94, null, false)]),
    /* 92 */ new room(SQUARED, [new object(300, 300, 32, 32, true, TABLE)], [new door(LEFT, 94, 95, null, false), new door(TOP, 117, 111, null, false), new door(RIGHT, 93, 92, RED, true)]),
    /* 93 */ new room(SQUARED, [new object(400, 500, 32, 32, true, CAVIAR), new object(700, 500, 32, 32, true, VODKA)], [new door(LEFT, 92, 93, RED, true), new door(TOP, 91, 90, null, false)]),
    /* THE CAVERNS 666 willy swagg */
    /* 94 */ new room(SQUARED, [new object(210, 400, 64, 64, true, DRAPCOM, "C"), new object(300, 500, 32, 32, true, CAVIAR), new object(300, 700, 32, 32, true, VODKA)], [new door(BOTTOM, 240, 261, RED, true), new door(RIGHT, 241, 242, null, false)]),
    /* 95 */ new room(LONGER, [new object(500, 500, 32, 32, true, CAVIAR)], [new door(LEFT, 242, 241, null, false), new door(RIGHT, 243, 244, null, false)]),
    /* 96 */ new room(SQUARED, [], [new door(LEFT, 244, 243, null, false), new door(RIGHT, 246, 247, GREEN, true), new door(BOTTOM, 245, 263, null, false)]),
    /* 97 */ new room(LONGER, [], [new door(LEFT, 247, 246, GREEN, true), new door(RIGHT, 248, 249, null, false)]),
    /* 98 */ new room(SQUARED, [new object(500, 700, 32, 32, true, CAVIAR), new object(800, 700, 32, 32, true, CIGARETTE), new object(650, 800, 64, 64, true, DRAPCOM, "D")], [new door(LEFT, 249, 248, null, false)]),
    /* 99 */ new room(SQUARED, [new object(600, 450, 64, 64, false, PEAUOURS, "A"), new object(500, 650, 32, 32, true, VODKA)], [new door(RIGHT, 250, 251, null, false)]),
    /* 100 OBJET SPÉCIAL */ new room(SQUARED, [], [new door(LEFT, 251, 250, null, false), new door(BOTTOM, 252, 265, null, false), new door(RIGHT, 253, 254, null, false)]),
    /* 101 */ new room(SQUARED, [], [new door(LEFT, 254, 253, null, false), new door(RIGHT, 256, 257, null, false), new door(BOTTOM, 255, 267, null, false)]),
    /* 102 BOSS FRANKENIGGA */ new room(SQUARED, [], [new door(LEFT, 257, 256, null, false), new door(RIGHT, 258, 259, null, false)]),
    /* 103 */ new room(SQUARED, [new object(700, 700, 32, 32, true, CAVIAR), new object(970, 450, 64, 64, true, DRAPCOM, "C")], [new door(LEFT, 259, 258, null, false), new door(BOTTOM, 260, 269, null, false)]),
    /* 104 */ new room(LARGER, [], [new door(TOP, 261, 240, RED, true), new door(BOTTOM, 262, 274, null, false)]),
    /* 105 */ new room(LARGER, [], [new door(TOP, 263, 245, null, false), new door(BOTTOM, 264, 280, null, false)]),
    /* 106 */ new room(LARGER, [], [new door(TOP, 265, 252, null, false), new door(BOTTOM, 266, 282, null, false)]),
    /* 107 */ new room(SQUARED, [], [new door(TOP, 267, 255, null, false), new door(BOTTOM, 268, 284, null, false)]),
    /* 108 */ new room(SQUARED, [new object(600, 450, 64, 64, false, PEAUOURS, "D"), new object(400, 700, 32, 32, true, VODKA), new object(600, 800, 64,64, true, DRAPCOM, "E")], [new door(TOP, 269, 260, null, false), new door(RIGHT, 270, 271, null, false)]),
    /* 109 */ new room(LONGER, [], [new door(LEFT, 271, 270, null, false), new door(RIGHT, 272, 273, BLUE, true)]),
    /* 110 */ new room(SQUARED, [new object(600, 400, 32, 32, true, CAVIAR)], [new door(TOP, 274, 262, null, false), new door(BOTTOM, 275, 292, null, false), new door(LEFT, 273, 272, BLUE, true), new door(RIGHT, 276, 277, RED, true)]),
    /* 111 */ new room(LONGER, [], [new door(LEFT, 277, 276, RED, true), new door(RIGHT, 278, 279, null, false)]),
    /* 112 */ new room(SQUARED, [new object(300, 650, 32, 32, true, CIGARETTE)], [new door(TOP, 280, 264, null, false), new door(BOTTOM, 281, 297, null, false), new door(LEFT, 279, 278, null, false)]),
    /* 113 */ new room(LARGER, [], [new door(TOP, 282, 266, null, false), new door(BOTTOM, 283, 302, null, false)]),
    /* 114 */ new room(SQUARED, [new object(600, 400, 32, 32, false, CLEFB)], [new door(TOP, 284, 268, null, false), new door(RIGHT, 285, 286, null, false)]),
    /* 115 */ new room(SQUARED, [], [new door(LEFT, 286, 285, null, false), new door(RIGHT, 287, 288, null, false)]),
    /* 116 */ new room(SQUARED, [], [new door(LEFT, 288, 287, null, false), new door(RIGHT, 289, 290, null, false)]),
    /* 117 */ new room(SQUARED, [], [new door(LEFT, 290, 289, null, false), new door(BOTTOM, 291, 313, null, false)]),
    /* 118 */ new room(LARGER, [new object(600, 810, 64, 64, true, LIVRE, "D")], [new door(TOP, 292, 275, null, false)]),
    /* 119 */ new room(SQUARED, [new object(400, 500, 32, 32, true, VODKA)], [new door(LEFT, 293, 185, null, false), new door(RIGHT, 294, 295, null, false)]),
    /* 120 BOSS DEMANUS*/ new room(SQUARED, [], [new door(LEFT, 295, 294, null, false), new door(RIGHT, 298, 299, null, false), new door(TOP, 297, 281, null, false), new door(BOTTOM, 296, 315, null, false)]),
    /* 121 */ new room(LONGER, [], [new door(LEFT, 299, 298, null, false), new door(RIGHT, 300, 301, RED, true)]),
    /* 122 */ new room(SQUARED, [new object(600, 140, 32, 32, true, CIGARETTE), new object(600, 30, 64, 64, true, DRAPCOM, "D")], [new door(LEFT, 301, 300, RED, true)]),
    /* 123 */ new room(SQUARED, [new object(600, 400, 32, 32, true, VODKA)], [new door(RIGHT, 304, 305, null, false), new door(TOP, 302, 283, null, false), new door(BOTTOM, 303, 317, null, false)]),
    /* 124 */ new room(LONGER, [], [new door(LEFT, 305, 304, null, false), new door(RIGHT, 306, 307, null, false)]),
    /* 125 */ new room(LONGER, [new object(500, 500, 32, 32, true, CAVIAR)], [new door(LEFT, 307, 306, null, false), new door(RIGHT, 308, 309, null, false)]),
    /* 126 */ new room(SQUARED, [new object(600, 30, 64, 64, true, DRAPCOM, "E")], [new door(LEFT, 309, 308, null, false), new door(RIGHT, 311, 312, GREEN, true), new door(BOTTOM, 310, 319, null, false)]),
    /* 127 */ new room(SQUARED, [new object(300, 200, 32, 32, true, CIGARETTE), new object(600, 200, 32, 32, true, CAVIAR)], [new door(LEFT, 312, 311, GREEN, true), new door(TOP, 313, 291, null, false), new door(BOTTOM, 314, 322, null, false)]),
    /* 128 */ new room(LARGER, [], [new door(TOP, 315, 296, null, false), new door(BOTTOM, 316, 331, null, false)]),
    /* 129 */ new room(LARGER, [], [new door(TOP, 317, 303, null, false), new door(BOTTOM, 318, 335, null, false)]),
    /* 130 */ new room(SQUARED, [new object(300, 600, 32, 32, true, CAVIAR)], [new door(TOP, 319, 310, null, false), new door(RIGHT, 320, 321, null, false)]),
    /* 131 */ new room(SQUARED, [new object(500, 500, 32, 32, true, VODKA)], [new door(LEFT, 321, 320, null, false), new door(RIGHT, 324, 325, null, false), new door(TOP, 322, 314, null, false), new door(BOTTOM, 323, 337, GREEN, true)]),
    /* 132 */ new room(SQUARED, [new object(600, 30, 64, 64, true, LIVRE, "D")], [new door(LEFT, 325, 324, null, false), new door(RIGHT, 327, 328, BLUE, true), new door(BOTTOM, 326, 340, null, false)]),
    /* 133 */ new room(LONGER, [], [new door(LEFT, 328, 327, BLUE, true), new door(RIGHT, 329, 330, null, false)]),
    /* 134 */ new room(SQUARED, [], [new door(LEFT, 330, 329, null, false), new door(RIGHT, 333, 334, null, false), new door(TOP, 331, 316, null, false), new door(BOTTOM, 332, 341, null, false)]),
    /* 135 */ new room(SQUARED, [new object(500, 500, 32, 32, true, VODKA), new object(750, 500, 32, 32, true, CIGARETTE), new object(600, 810, 64, 64, true, LIVRE, "E")], [new door(LEFT, 334, 333, null, false)]),
    /* 136 */ new room(SQUARED, [new object(600, 250, 32, 32, true, CAVIAR), new object(600, 450, 32, 32, true, CIGARETTE), new object(600, 650, 32, 32, true, VODKA), new object(915, 450, 64, 64, true, TANK, "F")], [new door(TOP, 335, 318, null, false), new door(BOTTOM, 336, 75, null, false)]),
    /* 137 */ new room(SQUARED, [new object(400, 650, 32, 32, true, CAVIAR)], [new door(TOP, 337, 323, GREEN, true), new door(RIGHT, 338, 339, null, false)]),
    /* 138 */ new room(SQUARED, [new object(400, 650, 32, 32, true, VODKA), new object(980, 450, 64, 64, true, LIVRE, "E")], [new door(TOP, 340, 326, null, false), new door(LEFT, 339, 338, null, false)]),
    /* 139 */ new room(SQUARED, [new object(270, 400, 64, 64, true, TANK, "F")], [new door(TOP, 341, 332, null, false)]),
];

function dispatchKeys() {
    for (var i = 0; i < 3; i++) {
        var j = Math.floor(Math.random() * GroundMap.length);
        if (i == 0) {
            GroundMap[j].objects.push(new object(600, 400, 32, 32, false, CLEF_1, null));
        } else if (i == 1) {
            GroundMap[j].objects.push(new object(600, 400, 32, 32, false, CLEF_2, null));
        } else if (i == 2) {
            GroundMap[j].objects.push(new object(600, 400, 32, 32, false, CLEF_3, null));
        } else {
            throw "Illegal Argument"
        }        
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
 * @param {boolean} sameRoom L'objet peut etre dans la chambre actuelle ?
 * @returns {Number}
 * @throws {No object match} Objet introuvable
 */
function getRoomIdWithObjectTypeAndSpec(type, spec, sameRoom) {
    if (typeof sameRoom == undefined) {
        sameRoom = true;
    }
    for (var i = 0; i < player.Map.length; i++) {
        for (var j = 0; j < player.Map[i].objects.length; j++) {
            var objectCurrent = player.Map[i].objects[j];
            if (objectCurrent.type == type && objectCurrent.spec == spec) {
                if (sameRoom) {
                    return i;
                } else {
                    if (i != player.room) {
                        return i;
                    } else {
                        continue;
                    }
                }
            }
        }
    }
    throw "No object match";
}

/**
 * Trouve l'objet avec son type et sa spec
 * @param {Number} type
 * @param {String} spec
 * @param {boolean} sameRoom L'objet peut etre dans la chambre actuelle ?
 * @returns {player.Map.objects}
 */
function getObjectWithTypeAndSpec(type, spec, sameRoom) {
    if (typeof sameRoom == undefined) {
        sameRoom = true;
    }
    for (var i = 0; i < player.Map.length; i++) {
        for (var j = 0; j < player.Map[i].objects.length; j++) {
            var objectCurrent = player.Map[i].objects[j];
            if (objectCurrent.type == type && objectCurrent.spec == spec) {
                if (sameRoom) {
                    return objectCurrent;
                } else {
                    if (i != player.room) {
                        return objectCurrent;
                    } else {
                        continue;
                    }
                }
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
