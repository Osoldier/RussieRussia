var NINJA = 1;
var DESERT = 2;
var GHOST = 3;

var PopCoolDown = 120;

var EnemyList = new Array();

function enemy(x, y, type, dir) {
    this.sprite = new Image();
    this.x = x;
    this.changeDirCD = 120;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.speed = 6;
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
        default:
            this.sprite.src = 'files/images/Sprite4.png';
            break;
    }
    this.Update = function() {
        this.Afficher();
        this.changeDirCD--;
        if (this.changeDirCD <= 0) {
            this.direction = player.direction;
            this.changeDirCD = 120;
        }
        switch (this.direction) {
            case player.directionDEF["DOWN"]:
                if (this.y + this.height < player.roomInfo[1] + player.roomInfo[3])
                    this.y += this.speed;
                else
                    this.direction = player.directionDEF["UP"];
                break;
            case player.directionDEF["UP"]:
                if (this.y > player.roomInfo[1])
                    this.y -= this.speed;
                else
                    this.direction = player.directionDEF["DOWN"];
                break;
            case player.directionDEF["LEFT"]:
                if (this.x > player.roomInfo[0])
                    this.x -= this.speed;
                else
                    this.direction = player.directionDEF["RIGHT"]
                break;
            case player.directionDEF["RIGHT"]:
                if (this.x + this.width < player.roomInfo[0] + player.roomInfo[2])
                    this.x += this.speed;
                else
                    this.direction = player.directionDEF["LEFT"];
                break;
        }
        if (player.Projectile !== 0) {
            if ((this.x + this.width >= player.Projectile.x && this.x <= player.Projectile.x + player.Projectile.width) || (this.x <= player.Projectile.x + player.Projectile.width && this.x + this.width >= player.Projectile.x)) {
                if ((this.y + this.height >= player.Projectile.y && this.y <= player.Projectile.y + player.Projectile.height) || (this.y <= player.Projectile.y + player.Projectile.height && this.y + this.height >= player.Projectile.y)) {
                    player.Projectile = 0;
                    var index = EnemyList.indexOf(this);
                    EnemyList.splice(index, 1);
                }
            }
        }
    };


    this.Afficher = function() {
        Game.context.drawImage(this.sprite, 32 * this.frame, 32 * this.direction, 32, 32, this.x, this.y, this.height, this.width);
    };

}