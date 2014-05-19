//##############################################################################
//Fichier : game.player.js
//Description : Joueur
//Date : 19.05.2014
//Version : 1
//##############################################################################
var player = new Player();

function Player() {
    this.Map = GroundMap;
    this.room = 9;
    this.roomInfo = new Array();
    this.time = 0;
    this.score = 0;
    this.object1 = null;
    this.object2 = null;
    this.object3 = null;
    this.life = 3;
    this.x = 600;
    this.y = 400;
    this.width = 40;
    this.height = 40;
    this.speed = 8;
    this.projectile = {
        'FAUCILLE': function(x, y, dir) {
            this.x = x;
            this.y = y;
            this.width = 30;
            this.height = 45;
            this.theta = 0;
            this.sprite = new Image();
            this.sprite.src = "files/images/A_Faucille.png";
            this.dir = dir;
            this.Update = function() {
                switch (dir) {
                    case player.direction.UP:
                        this.y -= 16;
                        break;
                    case player.direction.DOWN:
                        this.y += 16;
                        break;
                    case player.direction.LEFT:
                        this.x -= 16;
                        break;
                    case player.direction.RIGHT:
                        this.x += 16;
                        break;
                }
                if (this.x < player.roomInfo[0] || this.y < player.roomInfo[1] || this.y > player.roomInfo[1] + player.Map[player.room].height - 30 || this.x > player.roomInfo[0] + player.Map[player.room].width) {
                    return true;
                }
                this.theta += 25;
                Game.context.save();
                Game.context.translate(this.x, this.y);
                Game.context.rotate(this.theta * (Math.PI / 180));
                Game.context.drawImage(this.sprite, 0, 0, this.width, this.height);
                Game.context.restore();
            };
        },
        'MACHETTE': function(x, y, dir) {
            this.x = x;
            this.y = y;
            this.width = 30;
            this.height = 45;
            this.theta = 0;
            this.sprite = new Image();
            this.sprite.src = "files/images/A_Machette.png";
            this.dir = dir;
            this.Update = function() {
                switch (dir) {
                    case player.direction.UP:
                        this.y -= 16;
                        break;
                    case player.direction.DOWN:
                        this.y += 16;
                        break;
                    case player.direction.LEFT:
                        this.x -= 16;
                        break;
                    case player.direction.RIGHT:
                        this.x += 16;
                        break;
                }
                if (this.x < player.roomInfo[0] || this.y < player.roomInfo[1] || this.y > player.roomInfo[1] + player.Map[player.room].height - 30 || this.x > player.roomInfo[0] + player.Map[player.room].width) {
                    return true;
                }
                this.theta += 25;
                Game.context.save();
                Game.context.translate(this.x, this.y);
                Game.context.rotate(this.theta * (Math.PI / 180));
                Game.context.drawImage(this.sprite, 0, 0, this.width, this.height);
                Game.context.restore();
            };
        },
        'VODKA': function(x, y, dir) {
            this.x = x;
            this.y = y;
            this.width = 15;
            this.height = 30;
            this.dir = dir;
            this.theta = 1;
            this.sprite = new Image();
            this.sprite.src = "files/images/N_Vodka.png";
            this.Update = function() {
                switch (dir) {
                    case player.direction.UP:
                        this.y -= 16;
                        break;
                    case player.direction.DOWN:
                        this.y += 16;
                        break;
                    case player.direction.LEFT:
                        this.x -= 16;
                        break;
                    case player.direction.RIGHT:
                        this.x += 16;
                        break;
                }
                if (this.x < player.roomInfo[0] || this.y < player.roomInfo[1] || this.y > player.roomInfo[1] + player.Map[player.room].height - 30 || this.x > player.roomInfo[0] + player.Map[player.room].width) {
                    return true;
                }
                this.theta += 25;
                Game.context.save();
                Game.context.translate(this.x, this.y);
                Game.context.rotate(this.theta * (Math.PI / 180));
                Game.context.drawImage(this.sprite, 0, 0, this.width, this.height);
                Game.context.restore();
            };
        },
        'CURRENT': 0
    };
    this.frame = 0;
    this.isMoving = false;
    this.direction = {
        'DOWN': 0,
        'LEFT': 1,
        'RIGHT': 2,
        'UP': 3,
        'CURRENT': 0
    };
    this.type = {
        'POUTINE': 0,
        'STALINE': 1,
        'LENINE': 2,
        'CURRENT': 1
    };
    this.sprites = {
        'lenine': new Image(),
        'staline': new Image(),
        'poutine': new Image()
    };
    this.sprites.lenine.src = 'files/images/spriteLenine.png';
    this.sprites.staline.src = 'files/images/spriteStaline.png';
    this.sprites.poutine.src = 'files/images/spritePoutine.png';

    this.audio = {
        'vodka': new Audio('files/sounds/vodka.ogg'),
        'machette': new Audio('files/sounds/machette.ogg'),
        'faucille': new Audio('files/sounds/faucille.ogg'),
        'vodkaBreak': new Audio('files/sounds/vodkaBreak.ogg'),
    };

    /**
     * Fonction principale, affiche et gère le déplacement
     * @returns {undefined}
     */
    this.Update = function() {
        //#####Mettre en pause#####//         
        if (input.KeyState.P)
            menu.SwitchToState(menu.state.PAUSE);


        if (input.KeyState.S && input.KeyState.E && input.KeyState.N && input.KeyState.A)
        {
            Game.state = ANIMATION;
            Time = 0;
            CURRENTANIMATION = THEOREMEDELAPIZZA;
            score.value += 666;
            score.hunger -= 66,6; 
        }

//##############################################################################
//Inventaire (3 objets)
//##############################################################################
        //#####OBJET 1#####// 
        if (input.KeyState.N1) {
            input.KeyState.N1 = false;
            if (this.object1 != null) {
                GroundMap[this.room].objects.push(new object(this.x, this.y, 32, 32, false, this.object1));
                this.object1 = null;
            }
        }
        //#####OBJET 2#####// 
        if (input.KeyState.N2) {
            input.KeyState.N2 = false;
            if (this.object2 != null) {
                GroundMap[this.room].objects.push(new object(this.x, this.y, 32, 32, false, this.object2));
                this.object2 = null;
            }
        }
        //#####OBJET 3#####// 
        if (input.KeyState.N3) {
            input.KeyState.N3 = false;
            if (this.object3 != null) {
                GroundMap[this.room].objects.push(new object(this.x, this.y, 32, 32, false, this.object3));
                this.object3 = null;
            }
        }

//##############################################################################
//Armes
//##############################################################################
        if (input.KeyState.SPACE) {
            if (this.projectile.CURRENT === 0) {
                switch (this.type.CURRENT) {
                    //#####VODKA#####//
                    default :
                    case this.type.POUTINE:
                        this.projectile.CURRENT = new this.projectile.VODKA(this.x, this.y, this.direction.CURRENT);
                        this.audio.vodka.currentTime = 0;
                        this.audio.vodka.play();
                        break;
                        //#####MACHETTE#####//
                    case this.type.STALINE:
                        this.projectile.CURRENT = new this.projectile.MACHETTE(this.x, this.y, this.direction.CURRENT);
                        this.audio.machette.currentTime = 0;
                        this.audio.machette.play();
                        break;
                        //#####FAUCILLE#####//
                    case this.type.LENINE:
                        this.projectile.CURRENT = new this.projectile.FAUCILLE(this.x, this.y, this.direction.CURRENT);
                        this.audio.faucille.currentTime = 0;
                        this.audio.faucille.play();
                        break;
                }
            }
        }
        //#####Mise a jour du projectile#####//
        if (this.projectile.CURRENT !== 0) {
            if (this.projectile.CURRENT.Update())
                this.projectile.CURRENT = 0;
        }

//##############################################################################
//Déplacement du personnage
//##############################################################################
        //#####Sprint#####// 
        if (input.KeyState.SHIFT)
            this.speed = 16;
        else
            this.speed = 8;
        //#####Déplacement en haut#####// 
        if (input.KeyState.W || input.KeyState.UP && !this.isMoving)
        {
            if (this.y > this.roomInfo[1]) {
                if (!WouldCollide(0, -this.speed))
                    this.y -= this.speed;
            } else
                this.y = this.roomInfo[1];
            this.direction.CURRENT = this.direction.UP;
            this.isMoving = true;
        }
        //#####Déplacement à droite#####// 
        if (input.KeyState.D || input.KeyState.RIGHT && !this.isMoving)
        {
            if (this.x + this.width < this.roomInfo[0] + this.roomInfo[2]) {
                if (!WouldCollide(this.speed, 0))
                    this.x += this.speed;
            } else
                this.x = this.roomInfo[0] + this.roomInfo[2] - this.width;
            this.direction.CURRENT = this.direction.RIGHT;
            this.isMoving = true;
        }
        //#####Déplacement en bas#####// 
        if (input.KeyState.S || input.KeyState.DOWN && !this.isMoving)
        {
            if (this.y + this.height < this.roomInfo[1] + this.roomInfo[3]) {
                if (!WouldCollide(0, this.speed))
                    this.y += this.speed;
            } else
                this.y = this.roomInfo[1] + this.roomInfo[3] - this.height;
            this.direction.CURRENT = this.direction.DOWN;
            this.isMoving = true;
        }
        //#####Déplacement à gauche#####//  
        if (input.KeyState.A || input.KeyState.LEFT && !this.isMoving)
        {
            if (this.x > this.roomInfo[0]) {
                if (!WouldCollide(-this.speed, 0))
                    this.x -= this.speed;
            } else
                this.x = this.roomInfo[0];
            this.direction.CURRENT = this.direction.LEFT;
            this.isMoving = true;
        }

//##############################################################################
//Animation du personnage
//##############################################################################
        if (this.isMoving)
        {
            if (this.frame >= 2)
                this.frame = 0;
            else
                this.frame += 0.25;

        } else {
            this.frame = 1;
        }
        this.isMoving = false;

//##############################################################################
//Affichage du personnage
//##############################################################################
        switch (this.type.CURRENT)
        {
            //#####POUTINE#####// 
            case this.type.POUTINE:
                Game.context.drawImage(this.sprites.poutine, 32 * Math.round(this.frame), 32 * this.direction.CURRENT, 32, 32, this.x, this.y, this.height, this.width);
                break;
                //#####STALINE#####// 
            case this.type.STALINE:
                Game.context.drawImage(this.sprites.staline, 32 * Math.round(this.frame), 32 * this.direction.CURRENT, 32, 32, this.x, this.y, this.height, this.width);
                break;
                //#####LENINE#####// 
            case this.type.LENINE:
                Game.context.drawImage(this.sprites.lenine, 32 * Math.round(this.frame), 32 * this.direction.CURRENT, 32, 32, this.x, this.y, this.height, this.width);
                break;
        }
    };
}