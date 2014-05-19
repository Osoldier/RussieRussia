//##############################################################################
//Fichier : game.enemys.js
//Description : Gestion des enemis
//Date : 12.05.2014
//Version : 1
//##############################################################################
var NINJA = 0;
var DESERT = 1;
var GHOST = 2;
var SERPENT = 3;
var PopCoolDown = 60;
var EnemyList = new Array();

function enemy(x, y, type, dir) {
    this.sprite = new Image();
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.speed = 4;
    this.direction = dir;
    this.type = type;
    this.frame = 0;
    switch (this.type) {
        case NINJA:
            this.sprite.src = 'files/images/Sprite4.png';
            break;
        case DESERT:
            this.sprite.src = 'files/images/Sprite7.png';
            break;
        case GHOST:
            this.sprite.src = 'files/images/Sprite8.png';
            break;
        case SERPENT:
            this.sprite.src = 'files/images/spriteOurs.png';
            break;
        default:
            this.sprite.src = 'files/images/Sprite4.png';
            break;
    }
    this.Update = function() {
        this.Afficher();
        if (this.frame >= 2)
            this.frame = 0;
        else
            this.frame += 0.25;
        //****Déplacement********
        if (toMultiple(this.x, this.speed) > toMultiple(player.x, this.speed)) {
            if (this.x > player.roomInfo[0]) {
                this.direction = player.direction.LEFT;
                this.x -= this.speed;
            }
        } else if (toMultiple(this.x, this.speed) < toMultiple(player.x, this.speed)) {
            if (this.x + this.width < player.roomInfo[0] + player.roomInfo[2]) {
                this.direction = player.direction.RIGHT;
                this.x += this.speed;
            }
        }
        if (toMultiple(this.y, this.speed) > toMultiple(player.y, this.speed)) {
            if (this.y > player.roomInfo[1]) {
                this.direction = player.direction.UP;
                this.y -= this.speed;
            }
        } else if (toMultiple(this.y, this.speed) < toMultiple(player.y, this.speed)) {
            if (this.y + this.height < player.roomInfo[1] + player.roomInfo[3]) {
                this.direction = player.direction.DOWN;
                this.y += this.speed;
            }
        }
        else if(toMultiple(this.y, this.speed) == toMultiple(player.y, this.speed) && toMultiple(this.x, this.speed) == toMultiple(player.x, this.speed)){
            EnemyList.splice(EnemyList.indexOf(this), 1)
        }



//******************************************************
//*************collision********************************
        if (player.projectile.CURRENT !== 0) {
            if ((this.x + this.width >= player.projectile.CURRENT.x && this.x <= player.projectile.CURRENT.x + player.projectile.CURRENT.width) || (this.x <= player.projectile.CURRENT.x + player.projectile.CURRENT.width && this.x + this.width >= player.projectile.CURRENT.x)) {
                if ((this.y + this.height >= player.projectile.CURRENT.y && this.y <= player.projectile.CURRENT.y + player.projectile.CURRENT.height) || (this.y <= player.projectile.CURRENT.y + player.projectile.CURRENT.height && this.y + this.height >= player.projectile.CURRENT.y)) {
                    player.projectile.CURRENT = 0;
                    if(player.type.CURRENT == player.type.POUTINE){
                        document.getElementById('soundVodkaBreak').load();
                        document.getElementById('soundVodkaBreak').play();                      
                    }
                    var index = EnemyList.indexOf(this);
                    EnemyList.splice(index, 1);
                    score.value += 200;
                }
            }
        }
        if ((this.x + this.width >= player.x && this.x <= player.x + player.width) || (this.x <= player.x + player.width && this.x + this.width >= player.x)) {
            if ((this.y + this.height >= player.y && this.y <= player.y + player.height) || (this.y <= player.y + player.height && this.y + this.height >= player.y)) {
                score.hunger -= 1;
            }
        }
//******************************************************
    };
//Affichage
    this.Afficher = function() {
        Game.context.drawImage(this.sprite, 32 * Math.round(this.frame), 32 * this.direction, 32, 32, this.x, this.y, this.height, this.width);
    };
}
