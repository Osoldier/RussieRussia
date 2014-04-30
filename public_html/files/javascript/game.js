var MENU = 1000;
var GAME = 1001;
var PAUSE = 1002;

var Game = {
    'state': MENU,
    'canvas': null,
    'canvasPosition': null,
    'context': null,
    'timer': null
};

var mDoors = {
};

/**
 * Initialise les sprites et images du jeu
 * @returns {null}
 */
function Initialize() {
    Game.canvas = document.getElementById('game');
    Game.context = Game.canvas.getContext('2d');
    //#####PLAYER#####//   
    sounds.Initialize();
    score.Initialize();
    //#####Sprites#####//
    loadSprites();
    loadImages();
    Game.timer = setInterval("mainLoop();", 40);
}

/**
 * Boucle principale 
 * @returns {null}
 */
function mainLoop()
{
    Game.canvasPosition = Game.canvas.getBoundingClientRect();
    clearCanvas();
    switch (Game.state) {
        case GAME:
            //MAP
            drawMap(player.Map);
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
            menu.Use();
            break;
        case PAUSE:
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
                    player.Projectile = 0;
                    //###############################
                    //définit la position d'arrivée du joueur
                    switch (getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).place) {
                        case TOP || TOPLEFT || TOPRIGHT:
                            player.y = getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).y + getAllDoorsInRoom(player.room)[i].height + 7;
                            break;
                        case LEFT:
                            player.x = getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).x + getAllDoorsInRoom(player.room)[i].width + 7;
                            break;
                        case RIGHT:
                            player.x = getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).x - getAllDoorsInRoom(player.room)[i].width - 35;
                            break;
                        case BOTTOM || BOTLEFT || BOTRIGHT:
                            player.y = getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).y - getAllDoorsInRoom(player.room)[i].height - 35;
                            break;
                    }
                    player.room = getRoomIdWithDoor(getAllDoorsInRoom(player.room)[i].arrival);
                } else {
                    //si il peut déverouiller la porte
                    if (player.object1 === getAllDoorsInRoom(player.room)[i].color || player.object2 === getAllDoorsInRoom(player.room)[i].color || player.object3 === getAllDoorsInRoom(player.room)[i].color) {
                        getAllDoorsInRoom(player.room)[i].lock = false;
                        getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).lock = false;
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
                    if(getAllObjectsInRoom(player.room)[i].type === PUIT) {
                        //on cheche la peau d'ours qui est en lien
                        player.room = getRoomIdWithObjectTypeAndSpec(PEAUOURS, getAllObjectsInRoom(player.room)[i].spec);
                    }
                    return true;
                }
            }
        }
    }
}
/**
 * Fonction temporaire
 * @returns {null}
 */
function tempChangerSalle() {
    player.room = 1 * document.getElementById("salle").value;
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
    array.forEach(function(entry) {
        if (entry == value)
            return true;
    });
    return false;
}
