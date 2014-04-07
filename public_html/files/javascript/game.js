var Game = {
    'canvas': null,
    'canvasPosition': null,
    'context': null,
    'timer': null
};
var player;

function Initialize() {
    Game.canvas = document.getElementById('canvas');
    Game.context = Game.canvas.getContext('2d');
    
    Game.timer = setInterval("mainLoop();", 40);
}


function mainLoop()
{
    Game.canvasPosition = Game.canvas.getBoundingClientRect();
    clearCanvas();
    
}
