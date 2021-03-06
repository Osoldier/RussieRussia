//##############################################################################
//Fichier : game.js
//Description : Boucle principale et logique du jeu
//Date : 26.05.2014
//Version : 1
//##############################################################################
var MENU = 1000;
var GAME = 1001;
var PAUSE = 1002;
var ANIMATION = 1003;
var ENDING = 1004;

var Game = {
    'state': MENU,
    'canvas': null,
    'canvasPosition': null,
    'context': null,
    'timer': null
};

var mDoors = {};

/**
 * Initialise les sprites et images du jeu
 * @returns {null}
 */
function Initialize() {
    menu.SwitchToState(menu.state.TITLE);
    Game.canvas = document.getElementById('game');
    Game.context = Game.canvas.getContext('2d');
    //#####PLAYER#####//       
    score.Initialize();
    canvas.Initialize();
    dispatchKeys();
    initRoom(GroundMap, player.room);
    Game.timer = setInterval("mainLoop();", 40);
}

/**
 * Boucle principale 
 * @returns {null}
 */
function mainLoop()
{
    Game.canvasPosition = Game.canvas.getBoundingClientRect();
    canvas.Clear();
    switch (Game.state) {
        case GAME:
            //MAP
            canvas.DrawMap(player.Map);
            //COLLISIONS
            CheckCollisions();
            //DOORS
            updateRoom();
            //PLAYER
            player.Update();
            //SCORE
            score.Update();
            break;
        case MENU:
            menu.Update();
            break;
        case PAUSE:
            break;
        case ANIMATION:
            animation.Update();
            break;
        case ENDING:
            canvas.DrawEnd();
            break;
    }
}

/**
 * Vérifie les collisions avec les portes
 * @returns {null}
 */
function CheckCollisions() {
    //pour chaques portes de la salle
    for (var i = 0; i < getAllDoorsInRoom(player.room).length; i++) {
        //si collision
        if ((getAllDoorsInRoom(player.room)[i].x + getAllDoorsInRoom(player.room)[i].width >= player.x && getAllDoorsInRoom(player.room)[i].x <= player.x + player.width) || (getAllDoorsInRoom(player.room)[i].x <= player.x + player.width && getAllDoorsInRoom(player.room)[i].x + getAllDoorsInRoom(player.room)[i].width >= player.x)) {
            if ((getAllDoorsInRoom(player.room)[i].y + getAllDoorsInRoom(player.room)[i].height >= player.y && getAllDoorsInRoom(player.room)[i].y <= player.y + player.height) || (getAllDoorsInRoom(player.room)[i].y <= player.y + player.height && getAllDoorsInRoom(player.room)[i].y + getAllDoorsInRoom(player.room)[i].height >= player.y)) {
                //si la porte est ouverte
                if (getAllDoorsInRoom(player.room)[i].lock == false) {
                    //initialise la chambre suivante
                    initRoom(player.Map, getRoomIdWithDoor(getAllDoorsInRoom(player.room)[i].arrival));
                    //######réinitalise les variables
                    PopCoolDown = 60;
                    EnemyList = [];
                    player.projectile.CURRENT = 0;
                    //###############################
                    //définit la position d'arrivée du joueur
                    switch (getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).place) {
                        case TOP:
                        case TOPLEFT:
                        case TOPRIGHT:
                            player.y = getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).y + 14;
                            player.x = getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).x + (getAllDoorsInRoom(player.room)[i].width / 2)
                            break;
                        case LEFT:
                            player.x = getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).x + getAllDoorsInRoom(player.room)[i].width + 7;
                            break;
                        case RIGHT:
                            player.x = getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).x - getAllDoorsInRoom(player.room)[i].width - 35;
                            break;
                        case BOTTOM:
                        case BOTLEFT:
                        case BOTRIGHT:
                            player.y = getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).y - getAllDoorsInRoom(player.room)[i].height - 35;
                            player.x = getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).x + (getAllDoorsInRoom(player.room)[i].width / 2)
                            break;
                    }
                    player.room = getRoomIdWithDoor(getAllDoorsInRoom(player.room)[i].arrival);
                } else {
                    //si il peut déverouiller la porte
                    switch (getAllDoorsInRoom(player.room)[i].color) {
                        case GREEN:
                            if (player.object1 == CLEFV || player.object2 == CLEFV || player.object3 == CLEFV) {
                                getAllDoorsInRoom(player.room)[i].lock = false;
                                getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).lock = false;
                            }
                            break;
                        case BLUE:
                            if (player.object1 == CLEFB || player.object2 == CLEFB || player.object3 == CLEFB) {
                                getAllDoorsInRoom(player.room)[i].lock = false;
                                getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).lock = false;
                            }
                            break;
                        case RED:
                            if (player.object1 == CLEFR || player.object2 == CLEFR || player.object3 == CLEFR) {
                                getAllDoorsInRoom(player.room)[i].lock = false;
                                getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).lock = false;
                            }
                            break;
                        case YELLOW:
                            if (player.object1 == CLEFJ || player.object2 == CLEFJ || player.object3 == CLEFJ) {
                                getAllDoorsInRoom(player.room)[i].lock = false;
                                getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).lock = false;
                            }
                            break;
                    }
                }
            }
        }
    }
    for (var i = 0; i < getAllObjectsInRoom(player.room).length; i++) {
        var objet = getAllObjectsInRoom(player.room)[i];
        if ((objet.x + objet.width >= player.x && objet.x <= player.x + player.width)) {
            if ((objet.y + objet.height >= player.y && objet.y <= player.y + player.height)) {
                if (objet.collidable != true) {
                    if (contains(TAKEABLE, getAllObjectsInRoom(player.room)[i].type)) {

                        if (input.KeyState.N1)
                        {
                            input.KeyState.N1 = false;
                            var index = player.Map[player.room].objects.indexOf(getAllObjectsInRoom(player.room)[i]);
                            if (player.object1 == null) {
                                player.object1 = getAllObjectsInRoom(player.room)[i].type;
                                player.Map[player.room].objects.splice(index, 1);
                            }
                        }
                        if (input.KeyState.N2)
                        {
                            input.KeyState.N2 = false;
                            var index = player.Map[player.room].objects.indexOf(getAllObjectsInRoom(player.room)[i]);
                            if (player.object2 == null) {
                                player.object2 = getAllObjectsInRoom(player.room)[i].type;
                                player.Map[player.room].objects.splice(index, 1);
                            }
                        }
                        if (input.KeyState.N3)
                        {
                            input.KeyState.N3 = false;
                            var index = player.Map[player.room].objects.indexOf(getAllObjectsInRoom(player.room)[i]);
                            if (player.object3 == null) {
                                player.object3 = getAllObjectsInRoom(player.room)[i].type;
                                player.Map[player.room].objects.splice(index, 1);
                            }
                        }
                    }
                }
            }
        }
    }
}
/**
 * Si le joueur avec un delta sur le positions x et y serait en collision avec un objet de la salle
 * @param {number} dX
 * @param {number} dY
 * @returns {Boolean} True si collison false sinon
 */
function WouldCollide(dX, dY) {
    //POur chaque objets dans la salle
    for (var i = 0; i < getAllObjectsInRoom(player.room).length; i++) {
        //si il est en collison avec le DeltaX et DeltaY
        if ((getAllObjectsInRoom(player.room)[i].x + getAllObjectsInRoom(player.room)[i].width >= player.x + dX && getAllObjectsInRoom(player.room)[i].x <= player.x + dX + player.width) || (getAllObjectsInRoom(player.room)[i].x <= player.x + dX + player.width && getAllObjectsInRoom(player.room)[i].x + getAllObjectsInRoom(player.room)[i].width >= player.x + dX)) {
            if ((getAllObjectsInRoom(player.room)[i].y + getAllObjectsInRoom(player.room)[i].height >= player.y + dY && getAllObjectsInRoom(player.room)[i].y <= player.y + dY + player.height) || (getAllObjectsInRoom(player.room)[i].y <= player.y + dY + player.height && getAllObjectsInRoom(player.room)[i].y + getAllObjectsInRoom(player.room)[i].height >= player.y + dY)) {
                //Si l'object n'es pas un tapis, etc..
                if (getAllObjectsInRoom(player.room)[i].collidable) {
                    //Si c'est un puit
                    if (getAllObjectsInRoom(player.room)[i].type === PUIT) {
                        //on cheche la peau d'ours qui est en lien
                        player.room = getRoomIdWithObjectTypeAndSpec(PEAUOURS, getAllObjectsInRoom(player.room)[i].spec);
                        initRoom(GroundMap, player.room);
                        Game.state = ANIMATION;
                        animation.animation.current = animation.animation.FALL;
                    } else {
                        if (getAllObjectsInRoom(player.room)[i].type == PORTECRIMEA) {
                            if (player.object1 == CLEF_1 && player.object2 == CLEF_2 && player.object3 == CLEF_3) {
                                Game.state = ENDING;
                            }
                        }
                        if (contains(EATEABLES, getAllObjectsInRoom(player.room)[i].type)) {
                            if (score.hunger < 200) {
                                score.hunger += 30;
                                var index = player.Map[player.room].objects.indexOf(getAllObjectsInRoom(player.room)[i]);
                                player.Map[player.room].objects.splice(index, 1);
                                score.value += 50;
                                if (score.hunger > 200) {
                                    score.hunger = 200;
                                }
                            }
                        } else if (contains(TAKEABLE, getAllObjectsInRoom(player.room)[i].type)) {

                            if (input.KeyState.N1)
                            {
                                if (typeof player.object1 != undefined)
                                    player.object1 = getAllObjectsInRoom(player.room)[i].type;
                                score.value += 70;
                            }
                            if (input.KeyState.N2)
                            {
                                if (typeof player.object2 != undefined)
                                    player.object2 = getAllObjectsInRoom(player.room)[i].type;
                                score.value += 70;
                            }
                            if (input.KeyState.N3)
                            {
                                if (typeof player.object3 != undefined)
                                    player.object3 = getAllObjectsInRoom(player.room)[i].type;
                                score.value += 70;
                            }
                        } else if (contains(TP, getAllObjectsInRoom(player.room)[i].type)) {
                            console.log(((dX / Math.abs(dX)) * 75) + ", " + ((dY / Math.abs(dY)) * 75));
                            console.log(dX + ", " + dY);
                            switch (player.type.CURRENT) {
                                case player.type.POUTINE:
                                    if (getAllObjectsInRoom(player.room)[i].type == TANK) {
                                        if (dX != 0 && (dY == 0)) {
                                            player.x = getObjectWithTypeAndSpec(getAllObjectsInRoom(player.room)[i].type, getAllObjectsInRoom(player.room)[i].spec, false).x + ((dX / Math.abs(dX)) * 75);
                                            player.y = getObjectWithTypeAndSpec(getAllObjectsInRoom(player.room)[i].type, getAllObjectsInRoom(player.room)[i].spec, false).y;
                                        } else if (dY != 0 && (dX == 0)) {
                                            player.x = getObjectWithTypeAndSpec(getAllObjectsInRoom(player.room)[i].type, getAllObjectsInRoom(player.room)[i].spec, false).x;
                                            player.y = getObjectWithTypeAndSpec(getAllObjectsInRoom(player.room)[i].type, getAllObjectsInRoom(player.room)[i].spec, false).y + ((dY / Math.abs(dY)) * 75);
                                        } else {
                                            player.x = getObjectWithTypeAndSpec(getAllObjectsInRoom(player.room)[i].type, getAllObjectsInRoom(player.room)[i].spec, false).x + ((dX / Math.abs(dX)) * 75);
                                            player.y = getObjectWithTypeAndSpec(getAllObjectsInRoom(player.room)[i].type, getAllObjectsInRoom(player.room)[i].spec, false).y + ((dY / Math.abs(dY)) * 75);
                                        }

                                        player.room = getRoomIdWithObjectTypeAndSpec(getAllObjectsInRoom(player.room)[i].type, getAllObjectsInRoom(player.room)[i].spec, false);
                                    }
                                    break;
                                case player.type.LENINE:
                                    if (getAllObjectsInRoom(player.room)[i].type == LIVRE) {
                                        if (dX != 0 && (dY == 0)) {
                                            player.x = getObjectWithTypeAndSpec(getAllObjectsInRoom(player.room)[i].type, getAllObjectsInRoom(player.room)[i].spec, false).x + ((dX / Math.abs(dX)) * 75);
                                            player.y = getObjectWithTypeAndSpec(getAllObjectsInRoom(player.room)[i].type, getAllObjectsInRoom(player.room)[i].spec, false).y;
                                        } else if (dY != 0 && (dX == 0)) {
                                            player.x = getObjectWithTypeAndSpec(getAllObjectsInRoom(player.room)[i].type, getAllObjectsInRoom(player.room)[i].spec, false).x;
                                            player.y = getObjectWithTypeAndSpec(getAllObjectsInRoom(player.room)[i].type, getAllObjectsInRoom(player.room)[i].spec, false).y + ((dY / Math.abs(dY)) * 75);
                                        } else {
                                            player.x = getObjectWithTypeAndSpec(getAllObjectsInRoom(player.room)[i].type, getAllObjectsInRoom(player.room)[i].spec, false).x + ((dX / Math.abs(dX)) * 75);
                                            player.y = getObjectWithTypeAndSpec(getAllObjectsInRoom(player.room)[i].type, getAllObjectsInRoom(player.room)[i].spec, false).y + ((dY / Math.abs(dY)) * 75);
                                        }
                                        player.room = getRoomIdWithObjectTypeAndSpec(getAllObjectsInRoom(player.room)[i].type, getAllObjectsInRoom(player.room)[i].spec, false);
                                    }
                                    break;
                                case player.type.STALINE:
                                    if (getAllObjectsInRoom(player.room)[i].type == DRAPCOM) {
                                        if (dX != 0 && (dY == 0)) {
                                            player.x = getObjectWithTypeAndSpec(getAllObjectsInRoom(player.room)[i].type, getAllObjectsInRoom(player.room)[i].spec, false).x + ((dX / Math.abs(dX)) * 75);
                                            player.y = getObjectWithTypeAndSpec(getAllObjectsInRoom(player.room)[i].type, getAllObjectsInRoom(player.room)[i].spec, false).y;
                                        } else if (dY != 0 && (dX == 0)) {
                                            player.x = getObjectWithTypeAndSpec(getAllObjectsInRoom(player.room)[i].type, getAllObjectsInRoom(player.room)[i].spec, false).x;
                                            player.y = getObjectWithTypeAndSpec(getAllObjectsInRoom(player.room)[i].type, getAllObjectsInRoom(player.room)[i].spec, false).y + ((dY / Math.abs(dY)) * 75);
                                        } else {
                                            player.x = getObjectWithTypeAndSpec(getAllObjectsInRoom(player.room)[i].type, getAllObjectsInRoom(player.room)[i].spec, false).x + ((dX / Math.abs(dX)) * 75);
                                            player.y = getObjectWithTypeAndSpec(getAllObjectsInRoom(player.room)[i].type, getAllObjectsInRoom(player.room)[i].spec, false).y + ((dY / Math.abs(dY)) * 75);
                                        }
                                        player.room = getRoomIdWithObjectTypeAndSpec(getAllObjectsInRoom(player.room)[i].type, getAllObjectsInRoom(player.room)[i].spec, false);
                                    }
                                    break;
                            }
                            initRoom(GroundMap, player.room);
                            EnemyList = [];
                        }
                    }
                    return true;
                }
            }
        }
    }
}

/**
 * Met à jour les portes normales et gère les ennemis
 * @returns {null}
 */
function updateRoom() {
    //#####PORTES#######
    for (var i = 0; i < getAllDoorsInRoom(player.room).length; i++) {
        var currentDoor = getAllDoorsInRoom(player.room)[i];
        if (currentDoor.color == null && (mDoors[currentDoor] <= 0 || !containsKey(mDoors, currentDoor))) {
            if (Math.floor((Math.random() * 10) + 1) > 4) {
                mDoors[currentDoor] = 60;
                currentDoor.lock = !currentDoor.lock;
            }
        } else {
            if (containsKey(mDoors, currentDoor)) {
                mDoors[currentDoor]--;
            }
        }
    }
    //#######ENEMIS########
    PopCoolDown--;
    if (PopCoolDown <= 0) {
        EnemyList.push(new enemy(Math.floor(Math.random() * 200) + 400, Math.floor(Math.random() * 200) + 400, Math.floor(Math.random() * 4), Math.floor(Math.random() * 3)));
        PopCoolDown = 60;
    }
    EnemyList.forEach(function(entry) {
        entry.Update();
    });
}

function containsKey(array, key) {
    for (var v in array) {
        if (v == key)
            return true;
    }
    return false;
}

function contains(array, value) {
    for (var i = 0; i <= array.length; i++) {
        if (array[i] == value) {
            return true;
        }
    }
    return false;
}

function toMultiple(i, multiple) {
    return Math.round(i / multiple) * multiple;
}
