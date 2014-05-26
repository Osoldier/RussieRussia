//##############################################################################
//Fichier : game.animation.js
//Description : Gestion des animations de map
//Date : 19.05.2014
//Version : 1
//##############################################################################

var animation = new animation();

function animation() {
    this.animation = {
        'FALL': 0,
        'UPSTAIR': 1,
        'DOWNSTAIR': 2,
        'THEOREMEDELAPIZZA': 3,
        'current': 0
    };
    this.time = 0;
    this.maxTime = 100;

    this.pizza = {
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

    this.pizza.images.p1.src = 'files/images/pizza/p1.png';
    this.pizza.images.p2.src = 'files/images/pizza/p2.png';
    this.pizza.images.p3.src = 'files/images/pizza/p3.png';
    this.pizza.images.p4.src = 'files/images/pizza/p4.png';
    this.pizza.images.p5.src = 'files/images/pizza/p5.png';
    this.pizza.images.p6.src = 'files/images/pizza/p6.png';
    this.pizza.images.p8.src = 'files/images/pizza/p8.png';
    this.pizza.images.p9.src = 'files/images/pizza/p9.png';
    this.pizza.images.p10.src = 'files/images/pizza/p10.png';
    this.pizza.images.p11.src = 'files/images/pizza/p11.png';

//##############################################################################
//Mise a jour de l'animation
//##############################################################################
    this.Update = function() {
        animation.time++;
        //#####Chute#####// 
        switch (animation.animation.current) {
            case animation.animation.FALL:
                Game.context.beginPath();
                Game.context.fillStyle = "black";
                Game.context.rect(0, 0, Game.canvas.width, Game.canvas.height);
                Game.context.fill();
                for (var i = 0; i <= animation.time / 27; i++) {
                    var vel = 4 * (animation.time - (i * 27));
                    Game.context.beginPath();
                    Game.context.strokeStyle = "white";
                    Game.context.lineWidth = 1;
                    Game.context.rect(Game.canvas.width / 2 - vel, Game.canvas.height / 2 - vel, 2 * vel, 2 * vel);
                    Game.context.stroke();
                }
                break;
                //#####Monter les escaliers#####// 
            case animation.animation.UPSTAIR:
                
                break;
                //#####Descendre les escaliers#####// 
            case animation.animation.DOWNSTAIR:
                break;
                //#####Theoreme de la pizza mdrrrrrrrrrr#####// 
            case animation.animation.THEOREMEDELAPIZZA:
                Game.context.beginPath();
                Game.context.fillStyle = "black";
                Game.context.rect(0, 0, Game.canvas.width, Game.canvas.height);
                Game.context.fill();
                if (animation.pizza.current >= 0 && animation.pizza.current <= 15)
                {
                    animation.maxTime = 10000;
                    animation.pizza.current++;
                    Game.context.drawImage(animation.pizza.images.p1, 0, 0, 454, 449, 350, 0, 452 * 1.3, 449 * 1.3);

                } else if (animation.pizza.current >= 16 && animation.pizza.current <= 40)
                {
                    animation.pizza.current++;
                    Game.context.drawImage(animation.pizza.images.p2, 0, 0, 454, 449, 350, 0, 452 * 1.3, 449 * 1.3);
                } else if (animation.pizza.current >= 41 && animation.pizza.current <= 65)
                {
                    animation.pizza.current++;
                    Game.context.drawImage(animation.pizza.images.p3, 0, 0, 454, 449, 350, 0, 452 * 1.3, 449 * 1.3);
                }
                else if (animation.pizza.current >= 66 && animation.pizza.current <= 90)
                {
                    animation.pizza.current++;
                    Game.context.drawImage(animation.pizza.images.p4, 0, 0, 454, 449, 350, 0, 452 * 1.3, 449 * 1.3);
                }
                else if (animation.pizza.current >= 91 && animation.pizza.current <= 115)
                {
                    animation.pizza.current++;
                    Game.context.drawImage(animation.pizza.images.p5, 0, 0, 454, 449, 350, 0, 452 * 1.3, 449 * 1.3);
                }
                else if (animation.pizza.current >= 116 && animation.pizza.current <= 140)
                {
                    animation.pizza.current++;
                    Game.context.drawImage(animation.pizza.images.p6, 0, 0, 454, 449, 350, 0, 452 * 1.3, 449 * 1.3);
                }
                else if (animation.pizza.current >= 141 && animation.pizza.current <= 165)
                {
                    animation.pizza.current++;
                    Game.context.drawImage(animation.pizza.images.p6, 0, 0, 454, 449, 350, 0, 452 * 1.3, 449 * 1.3);
                    Game.context.drawImage(animation.pizza.images.p8, 0, 0, 454, 449, 350, 250, 452 * 1.3, 449 * 1.3);
                }
                else if (animation.pizza.current >= 166 && animation.pizza.current <= 190)
                {
                    animation.pizza.current++;
                    Game.context.drawImage(animation.pizza.images.p6, 0, 0, 454, 449, 350, 0, 452 * 1.3, 449 * 1.3);
                    Game.context.drawImage(animation.pizza.images.p9, 0, 0, 454, 449, 350, 250, 452 * 1.3, 449 * 1.3);
                }
                else if (animation.pizza.current >= 191 && animation.pizza.current <= 215)
                {
                    animation.pizza.current++;
                    Game.context.drawImage(animation.pizza.images.p6, 0, 0, 454, 449, 350, 0, 452 * 1.3, 449 * 1.3);
                    Game.context.drawImage(animation.pizza.images.p10, 0, 0, 454, 449, 350, 250, 452 * 1.3, 449 * 1.3);
                }
                else if (animation.pizza.current >= 216 && animation.pizza.current <= 240)
                {
                    animation.pizza.current++;
                    Game.context.drawImage(animation.pizza.images.p6, 0, 0, 454, 449, 350, 0, 452 * 1.3, 449 * 1.3);
                    Game.context.drawImage(animation.pizza.images.p11, 0, 0, 454, 449, 350, 250, 452 * 1.3, 449 * 1.3);
                }
                else {
                    animation.pizza.current = 0;
                    animation.maxTime = 100;
                }
                break;
        }
        //#####Retour au jeu#####// 
        if (animation.time >= animation.maxTime) {
            Game.state = GAME;
            animation.maxTime = 100;
            animation.time = 0;

        }
    };
}
