var roomX = 0;
var roomY = 0;

//Clear Canvas
function clearCanvas()
{
    Game.context.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
}
function drawMap(map) {
    drawBorder();
    drawGround();
    roomX = Game.canvas.width / 2 - (map[player.room].width / 2);
    roomY = Game.canvas.height / 2 - (map[player.room].height / 2);
    player.roomInfo = [roomX, roomY, map[player.room].width, map[player.room].height];
    Game.context.beginPath();
    Game.context.rect(roomX, roomY, map[player.room].width, map[player.room].height);
    map[player.room].objects.forEach(function(entry) {
        Game.context.beginPath();
        Game.context.drawImage(Sprites[entry.type], entry.x, entry.y, entry.width, entry.height);
    });
    map[player.room].doors.forEach(function(entry) {
        Game.context.beginPath();
        var x = 0;
        var y = 0;
        switch (entry.place) {
            case TOP:
                y = roomY;
                x = roomX + (map[player.room].width / 2) - (entry.width / 2);
                Game.context.drawImage(Images['border_door_ground'], 0, 682, 142, 91, x - 42, y - 91, 142, 91);
                //Game.context.rect(x, y, entry.width, entry.height);

                break;
            case LEFT:
                y = roomY + (map[player.room].height / 2) - (entry.height / 2);
                x = roomX;
                Game.context.drawImage(Images['border_door_ground'], 233, 682, 91, 142, x - 91, y - 36, 91, 142);
                //Game.context.rect(x, y, entry.width, entry.height);                
                break;
            case BOTTOM:
                y = roomY + map[player.room].height - entry.height;
                x = roomX + (map[player.room].width / 2) - (entry.width / 2);
                Game.context.drawImage(Images['border_door_ground'], 0, 773, 142, 91, x - 42, y + 10, 142, 91);
                //Game.context.rect(x, y, entry.width, entry.height);
                break;
            case RIGHT:
                y = roomY + (map[player.room].height / 2) - (entry.height / 2);
                x = roomX + (map[player.room].width) - entry.width;
                Game.context.drawImage(Images['border_door_ground'], 142, 682, 91, 142, x + 10, y - 36, 91, 142);
                //Game.context.rect(x, y, entry.width, entry.height);
                break;
        }
        entry.x = x;
        entry.y = y;
        Game.context.fill();

    });
}

function drawGround()
{
    var x = player.roomInfo[0];
    var y = player.roomInfo[1];

    while (y < player.roomInfo[1] + player.roomInfo[3])
    {
        x = player.roomInfo[0];
        while (x < player.roomInfo[0] + player.roomInfo[2])
        {
            Game.context.drawImage(Images["border_door_ground"], 142, 824, 50, 50, x, y, 50, 50);

            x = x + 50;
        }
        y = y + 50;
    }
}

function drawBorder() {
    var x = player.roomInfo[0];
    var y = player.roomInfo[1];
    if (player.roomInfo[2] == 700 && player.roomInfo[3] == 700) //SQUARED        
        Game.context.drawImage(Images['border_door_ground'], 1567, 0, 880, 882, x - 90, y - 91, 880, 882);

    if (player.roomInfo[2] == 500 && player.roomInfo[3] == 700) //LONGER
        Game.context.drawImage(Images['border_door_ground'], 884, 0, 682, 884, x - 91, y - 92, 682, 884);

    if (player.roomInfo[2] == 700 && player.roomInfo[3] == 500) //LARGER
        Game.context.drawImage(Images['border_door_ground'], 0, 0, 884, 682, x - 92, y - 91, 884, 682);

}
