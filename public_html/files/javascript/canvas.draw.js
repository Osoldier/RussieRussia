//Clear Canvas
function clearCanvas()
{
    Game.context.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
}
function drawMap(map) {
    Game.context.lineWidth = "6";
    Game.context.strokeStyle = "red";
    Game.context.beginPath();
    Game.context.rect(map[player.room].x, map[player.room].y, map[player.room].width, map[player.room].height);
    Game.context.stroke();
}
