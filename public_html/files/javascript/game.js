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
    console.log(getRoomIdWithDoor(0));
}


function mainLoop()
{
    Game.canvasPosition = Game.canvas.getBoundingClientRect();
    clearCanvas();
    drawMap(GroundMap);
    player.Move();
    player.Afficher();
}
