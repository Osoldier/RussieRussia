var Game = {
    'canvas': null,
    'canvasPosition': null,
    'context': null,
    'timer': null
};

var Direction = {
    'UP': 0,
    'RIGHT': 1,
    'DOWN': 2,
    'LEFT': 3
};

function Initialize() {
    Game.canvas = document.getElementById('canvas');
    Game.context = Game.canvas.getContext('2d');

    Game.timer = setInterval("mainLoop();", 40);
}


function mainLoop()
{
    Game.canvasPosition = Game.canvas.getBoundingClientRect();
    clearCanvas();
    drawMap(GroundMap);
    player.Move();
    player.Afficher();
    CheckCollisions();
}

function CheckCollisions() {
    for (var i = 0; i < getAllDoorsInRoom(player.room).length; i++) {
        if ((getAllDoorsInRoom(player.room)[i].x + DOORWIDTH >= player.x && getAllDoorsInRoom(player.room)[i].x <= player.x + player.width) || (getAllDoorsInRoom(player.room)[i].x <= player.x + player.width && getAllDoorsInRoom(player.room)[i].x + DOORWIDTH >= player.x)) {
            if ((getAllDoorsInRoom(player.room)[i].y + DOORHEIGHT >= player.y && getAllDoorsInRoom(player.room)[i].y <= player.y + player.height) || (getAllDoorsInRoom(player.room)[i].y <= player.y + player.height && getAllDoorsInRoom(player.room)[i].y + DOORHEIGHT >= player.y)) {
                player.room = getRoomIdWithDoor(getAllDoorsInRoom(player.room)[i].arrival);
            }
        }
    }
    for (var i = 0; i < getAllObjectsInRoom(player.room).length; i++) {
        if ((getAllObjectsInRoom(player.room)[i].x + getAllObjectsInRoom(player.room)[i].width >= player.x && getAllObjectsInRoom(player.room)[i].x <= player.x + player.width) || (getAllObjectsInRoom(player.room)[i].x <= player.x + player.width && getAllObjectsInRoom(player.room)[i].x + getAllObjectsInRoom(player.room)[i].width >= player.x)) {
            if ((getAllObjectsInRoom(player.room)[i].y + getAllObjectsInRoom(player.room)[i].height >= player.y && getAllObjectsInRoom(player.room)[i].y <= player.y + player.height) || (getAllObjectsInRoom(player.room)[i].y <= player.y + player.height && getAllObjectsInRoom(player.room)[i].y + getAllObjectsInRoom(player.room)[i].height >= player.y)) {
                return true;
            }
        }
    }
}
