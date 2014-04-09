

//Clear Canvas
function clearCanvas()
{
    Game.context.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
}
function drawMap(map) {
    drawBorder();
    drawGround();
    //Game.context.lineWidth = "2";
    //Game.context.strokeStyle = "red";
    var roomX = Game.canvas.width / 2 - (map[player.room].width / 2), roomY = Game.canvas.height / 2 - (map[player.room].height / 2);
    player.roomInfo = [roomX, roomY, map[player.room].width, map[player.room].height];
    Game.context.beginPath();
    Game.context.rect(roomX, roomY, map[player.room].width, map[player.room].height);
    //Game.context.stroke();
    map[player.room].objects.forEach(function(entry) {
        Game.context.beginPath();
        Game.context.drawImage(Sprites[entry.type], entry.x, entry.y);

    });
    map[player.room].doors.forEach(function(entry) {
        Game.context.beginPath();
        var x = 0;
        var y = 0;
        switch (entry.place) {
            case TOP:
                y = roomY;
                x = roomX + (map[player.room].width / 2) - (entry.width / 2);
                Game.context.rect(x, y, entry.width, entry.height);
                break;
            case LEFT:
                y = roomY + (map[player.room].height / 2) - (entry.height / 2);
                x = roomX;
                Game.context.rect(x, y, entry.width, entry.height);
                break;
            case BOTTOM:
                y = roomY + map[player.room].height - entry.height;
                x = roomX + (map[player.room].width / 2) - (entry.width / 2);
                Game.context.rect(x, y, entry.width, entry.height);
                break;
            case RIGHT:
                y = roomY + (map[player.room].height / 2) - (entry.height / 2);
                x = roomX + (map[player.room].width) - entry.width;
                Game.context.rect(x, y, entry.width, entry.height);
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
            Game.context.drawImage(this.groundIMG, x, y);

            x = x + 20;
        }
        y = y + 20;
    }
}

function drawBorder() {
    var x = player.roomInfo[0];
    var y = player.roomInfo[1];
    switch (player.roomInfo[2])
    {
        case 700: //SQUARED
            Game.context.drawImage(this.border.SQUARED, x - 91, y - 91);
            break;
        case 800: //LONGER    
            break;
        case 500: //LARGER
            break;
    }
    
}
