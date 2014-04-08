//Clear Canvas
function clearCanvas()
{
    Game.context.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
}
function drawMap(map) {
    Game.context.lineWidth = "1";
    Game.context.strokeStyle = "red";
    Game.context.beginPath();
    Game.context.rect(20, 20, map[player.room].width, map[player.room].height);
    Game.context.stroke();
    map[player.room].objects.forEach(function(entry) {
        Game.context.beginPath();
        Game.context.rect(entry.x, entry.y, entry.width, entry.height);
        Game.context.fill();
    });
}
