//##############################################################################
//Fichier : game.animation.js
//Description : Gestion des animations de map
//Date : 19.05.2014
//Version : 1
//##############################################################################
var CURRENTANIMATION = 0;

var FALL = 0;
var UPSTAIR = 1;
var DOWNSTAIR = 2;
var THEOREMEDELAPIZZA = 3;
var Time = 0;
var MaxTime = 100;

var pizza = {
    'images': {
        'p1': new Image(),
        'p2': new Image(),
        'p3': new Image(),
        'p4': new Image(),
        'p5': new Image(),
        'p6': new Image(),
        'p8': new Image(),
        'p9': new Image(),
        'p10': new Image(),
        'p11': new Image(),
        'p12': new Image()
    },
    'current': 0
};
pizza.images.p1.src = 'files/images/pizza/p1.png';
pizza.images.p2.src = 'files/images/pizza/p2.png';
pizza.images.p3.src = 'files/images/pizza/p3.png';
pizza.images.p4.src = 'files/images/pizza/p4.png';
pizza.images.p5.src = 'files/images/pizza/p5.png';
pizza.images.p6.src = 'files/images/pizza/p6.png';
pizza.images.p8.src = 'files/images/pizza/p8.png';
pizza.images.p9.src = 'files/images/pizza/p9.png';
pizza.images.p10.src = 'files/images/pizza/p10.png';
pizza.images.p11.src = 'files/images/pizza/p11.png';

function fall() {
    Game.context.beginPath();
    Game.context.fillStyle = "black";
    Game.context.rect(0, 0, Game.canvas.width, Game.canvas.height);
    Game.context.fill();
    for (var i = 0; i <= Time / 27; i++) {
        var vel = 4 * (Time - (i * 27));
        Game.context.beginPath();
        Game.context.strokeStyle = "white";
        Game.context.lineWidth = 1;
        Game.context.rect(Game.canvas.width / 2 - vel, Game.canvas.height / 2 - vel, 2 * vel, 2 * vel);
        Game.context.stroke();
    }
}

function UpStair() {

}

function DownStair() {

}

function Pizza() {
    Game.context.beginPath();
    Game.context.fillStyle = "black";
    Game.context.rect(0, 0, Game.canvas.width, Game.canvas.height);
    Game.context.fill();
    if (pizza.current >= 0 && pizza.current <= 15)
    {
        MaxTime = 10000;
        pizza.current++;
        Game.context.drawImage(pizza.images.p1, 0, 0, 454, 449, 350, 0, 452 * 1.3, 449 * 1.3);

    } else if (pizza.current >= 16 && pizza.current <= 40)
    {
        pizza.current++;
        Game.context.drawImage(pizza.images.p2, 0, 0, 454, 449, 350, 0, 452 * 1.3, 449 * 1.3);
    } else if (pizza.current >= 41 && pizza.current <= 65)
    {
        pizza.current++;
        Game.context.drawImage(pizza.images.p3, 0, 0, 454, 449, 350, 0, 452 * 1.3, 449 * 1.3);
    }
    else if (pizza.current >= 66 && pizza.current <= 90)
    {
        pizza.current++;
        Game.context.drawImage(pizza.images.p4, 0, 0, 454, 449, 350, 0, 452 * 1.3, 449 * 1.3);
    }
    else if (pizza.current >= 91 && pizza.current <= 115)
    {
        pizza.current++;
        Game.context.drawImage(pizza.images.p5, 0, 0, 454, 449, 350, 0, 452 * 1.3, 449 * 1.3);
    }
    else if (pizza.current >= 116 && pizza.current <= 140)
    {
        pizza.current++;
        Game.context.drawImage(pizza.images.p6, 0, 0, 454, 449, 350, 0, 452 * 1.3, 449 * 1.3);
    }
    else if (pizza.current >= 141 && pizza.current <= 165)
    {
        pizza.current++;
        Game.context.drawImage(pizza.images.p6, 0, 0, 454, 449, 350, 0, 452 * 1.3, 449 * 1.3);
        Game.context.drawImage(pizza.images.p8, 0, 0, 454, 449, 350, 250, 452 * 1.3, 449 * 1.3);
    }
    else if (pizza.current >= 166 && pizza.current <= 190)
    {
        pizza.current++;
        Game.context.drawImage(pizza.images.p6, 0, 0, 454, 449, 350, 0, 452 * 1.3, 449 * 1.3);
        Game.context.drawImage(pizza.images.p9, 0, 0, 454, 449, 350, 250, 452 * 1.3, 449 * 1.3);
    }
    else if (pizza.current >= 191 && pizza.current <= 215)
    {
        pizza.current++;
        Game.context.drawImage(pizza.images.p6, 0, 0, 454, 449, 350, 0, 452 * 1.3, 449 * 1.3);
        Game.context.drawImage(pizza.images.p10, 0, 0, 454, 449, 350, 250, 452 * 1.3, 449 * 1.3);
    }
    else if (pizza.current >= 216 && pizza.current <= 240)
    {
        pizza.current++;
        Game.context.drawImage(pizza.images.p6, 0, 0, 454, 449, 350, 0, 452 * 1.3, 449 * 1.3);
        Game.context.drawImage(pizza.images.p11, 0, 0, 454, 449, 350, 250, 452 * 1.3, 449 * 1.3);
    }
    else {
        pizza.current = 0;
        MaxTime = 100;
    }
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
        case THEOREMEDELAPIZZA:
            Pizza();
            break;
    }
    if (Time >= MaxTime) {
        Game.state = GAME;
        MaxTime = 100;

    }
}
