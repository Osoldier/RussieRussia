var Game = {
    'canvas': null,
    'canvasPosition': null,
    'context': null,
    'timer': null
};

var groundIMG = new Image();
var border = {
    "SQUARED": new Image(),
    "LONGER": new Image(),
    "LARGER": new Image()
}

function Initialize() {
    Game.canvas = document.getElementById('game');
    Game.context = Game.canvas.getContext('2d');
    //#####PLAYER#####//    
    player.Initialize();
    border.SQUARED.src = 'files/images/room_squared.png';
    border.LONGER.src = 'files/images/room_longer.png';
    border.LARGER.src = 'files/images/room_larger.png';
    groundIMG.src = 'files/images/ground.png';
    score.Initialize();
    loadSprites();
    Game.timer = setInterval("mainLoop();", 40);
}


function mainLoop()
{
    Game.canvasPosition = Game.canvas.getBoundingClientRect();

    clearCanvas();
    drawMap(player.Map);
    CheckCollisions();
    player.Update();
    score.Update();

}

function CheckCollisions() {
    for (var i = 0; i < getAllDoorsInRoom(player.room).length; i++) {
        if ((getAllDoorsInRoom(player.room)[i].x + getAllDoorsInRoom(player.room)[i].width >= player.x && getAllDoorsInRoom(player.room)[i].x <= player.x + player.width) || (getAllDoorsInRoom(player.room)[i].x <= player.x + player.width && getAllDoorsInRoom(player.room)[i].x + getAllDoorsInRoom(player.room)[i].width >= player.x)) {
            if ((getAllDoorsInRoom(player.room)[i].y + getAllDoorsInRoom(player.room)[i].height >= player.y && getAllDoorsInRoom(player.room)[i].y <= player.y + player.height) || (getAllDoorsInRoom(player.room)[i].y <= player.y + player.height && getAllDoorsInRoom(player.room)[i].y + getAllDoorsInRoom(player.room)[i].height >= player.y)) {
                initRoom(player.Map, getRoomIdWithDoor(getAllDoorsInRoom(player.room)[i].arrival));
                switch (getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).place) {
                    case TOP:
                        player.y = getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).y + getAllDoorsInRoom(player.room)[i].height + 30;
                        break;
                    case LEFT:
                        player.x = getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).x + getAllDoorsInRoom(player.room)[i].width + 2;
                        break;
                    case RIGHT:
                        player.x = getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).x - getAllDoorsInRoom(player.room)[i].width - 100;
                        break;
                    case BOTTOM:
                        player.y = getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).y - getAllDoorsInRoom(player.room)[i].height - 30;
                        break;
                }
                player.room = getRoomIdWithDoor(getAllDoorsInRoom(player.room)[i].arrival);
            }
        }
    }
    for (var i = 0; i < getAllObjectsInRoom(player.room).length; i++) {
        if ((getAllObjectsInRoom(player.room)[i].x + getAllObjectsInRoom(player.room)[i].width >= player.x && getAllObjectsInRoom(player.room)[i].x <= player.x + player.width) || (getAllObjectsInRoom(player.room)[i].x <= player.x + player.width && getAllObjectsInRoom(player.room)[i].x + getAllObjectsInRoom(player.room)[i].width >= player.x)) {
            if ((getAllObjectsInRoom(player.room)[i].y + getAllObjectsInRoom(player.room)[i].height >= player.y && getAllObjectsInRoom(player.room)[i].y <= player.y + player.height) || (getAllObjectsInRoom(player.room)[i].y <= player.y + player.height && getAllObjectsInRoom(player.room)[i].y + getAllObjectsInRoom(player.room)[i].height >= player.y)) {
                if (getAllObjectsInRoom(player.room)[i].collidable)
                    return true;
            }
        }
    }
}

function WouldCollide(dX, dY) {
    for (var i = 0; i < getAllObjectsInRoom(player.room).length; i++) {
        if ((getAllObjectsInRoom(player.room)[i].x + getAllObjectsInRoom(player.room)[i].width >= player.x + dX && getAllObjectsInRoom(player.room)[i].x <= player.x + dX + player.width) || (getAllObjectsInRoom(player.room)[i].x <= player.x + dX + player.width && getAllObjectsInRoom(player.room)[i].x + getAllObjectsInRoom(player.room)[i].width >= player.x + dX)) {
            if ((getAllObjectsInRoom(player.room)[i].y + getAllObjectsInRoom(player.room)[i].height >= player.y + dY && getAllObjectsInRoom(player.room)[i].y <= player.y + dY + player.height) || (getAllObjectsInRoom(player.room)[i].y <= player.y + dY + player.height && getAllObjectsInRoom(player.room)[i].y + getAllObjectsInRoom(player.room)[i].height >= player.y + dY)) {
                if (getAllObjectsInRoom(player.room)[i].collidable)
                    return true;
            }
        }
    }
}
