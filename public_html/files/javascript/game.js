var Game = {
    'canvas': null,
    'canvasPosition': null,
    'context': null,
    'timer': null
};

var Game = {
    'canvas': null,
    'canvasPosition': null,
    'context': null,
    'timer': null
};


function Initialize() {
    Game.canvas = document.getElementById('game');
    Game.context = Game.canvas.getContext('2d');
    Game.timer = setInterval("mainLoop();", 40);
    score.Initialize();
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
        if ((getAllDoorsInRoom(player.room)[i].x + DOORWIDTH >= player.x && getAllDoorsInRoom(player.room)[i].x <= player.x + player.width) || (getAllDoorsInRoom(player.room)[i].x <= player.x + player.width && getAllDoorsInRoom(player.room)[i].x + DOORWIDTH >= player.x)) {
            if ((getAllDoorsInRoom(player.room)[i].y + DOORHEIGHT >= player.y && getAllDoorsInRoom(player.room)[i].y <= player.y + player.height) || (getAllDoorsInRoom(player.room)[i].y <= player.y + player.height && getAllDoorsInRoom(player.room)[i].y + DOORHEIGHT >= player.y)) {
                initRoom(player.Map, getAllDoorsInRoom(player.room)[i].arrival);
                switch (getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).place) {
                    case TOP:
                        player.x = getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).x;
                        player.y = getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).y-DOORHEIGHT-2;
                        break;
                    case LEFT:
                        player.x = getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).x+DOORWIDTH+2;
                        player.y = getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).y;
                        break;
                    case RIGHT:
                        player.x = getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).x-DOORWIDTH-2;
                        player.y = getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).y;
                        break;
                    case BOTTOM:
                        player.x = getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).x;
                        player.y = getDoorWithId(getAllDoorsInRoom(player.room)[i].arrival).y+DOORHEIGHT+2;
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
