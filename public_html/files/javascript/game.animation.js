//##############################################################################
//Fichier : game.animation
//Description : Gestion des animations de map
//Date : 19.05.2014
//Version : 1
//##############################################################################
var CURRENTANIMATION = 0;

var FALL = 0;
var UPSTAIR = 1;
var DOWNSTAIR = 2;
var Time = 0;

function fall() {
     Game.context.beginPath();
        Game.context.fillStyle = "black";
        Game.context.rect(0,0,Game.canvas.width,Game.canvas.height);
        Game.context.fill();
    for (var i = 0; i <= Time/60; i++) {
        var vel = 4*(Time-(i*60));
        Game.context.beginPath();
        Game.context.strokeStyle = "white";
        Game.context.lineWidth = 1;
        Game.context.rect(Game.canvas.width/2-vel, Game.canvas.height/2-vel, 2*vel, 2*vel);
        Game.context.stroke();
    }
}

function UpStair() {

}

function DownStair() {

}

function UpdateAnimation() {
    Time++;
    switch (CURRENTANIMATION) {
        case FALL:
            fall();
            break;
        case UPSTAIR:
            UpStair();
            break;
        case DOWNSTAIR:
            DownStair();
            break;
    }
    if (Time >= 300) {
        Game.state = GAME;
    }
}
