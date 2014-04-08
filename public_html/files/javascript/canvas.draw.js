//Clear Canvas
function clearCanvas()
{
    Game.context.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
}
function drawMap(map) {
    Game.context.lineWidth = "2";
    Game.context.strokeStyle = "red";
    var roomX = Game.canvas.width/2-(map[player.room].width/2), roomY = Game.canvas.height/2-(map[player.room].height/2);
    Game.context.beginPath();
    Game.context.rect(roomX, roomY, map[player.room].width, map[player.room].height);
    Game.context.stroke();
    map[player.room].objects.forEach(function(entry) {
        Game.context.beginPath();
        Game.context.rect(entry.x, entry.y, entry.width, entry.height);
        Game.context.fill();
    });
    map[player.room].doors.forEach(function(entry) {
        Game.context.beginPath();
        var x = 0;
        var y = 0;
        switch (entry.place) {
            case TOP:
                y = roomY;
                x = roomX + (map[player.room].width/2)-(DOORWIDTH/2);
                break;
            case LEFT:
                y = roomY + (map[player.room].height/2)-(DOORHEIGHT/2);
                x = roomX;
                break;
            case BOTTOM:
                y = roomY + map[player.room].height-DOORHEIGHT;
                x = roomX + (map[player.room].width/2)-(DOORWIDTH/2);
                break;
            case RIGHT:
                y = roomY + (map[player.room].height/2)-DOORHEIGHT/2;
                x = roomX + (map[player.room].width)-DOORHEIGHT;
                break;
        }
        entry.x = x;
        entry.y = y;
        Game.context.rect(x, y, DOORWIDTH, DOORHEIGHT);
        Game.context.fill();
    });
}
