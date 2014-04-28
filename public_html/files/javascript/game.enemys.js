var NINJA = 1;
var DESERT = 2;
var GHOST = 3;

var PopCoolDown = 120;

var EnemyList = new Array();

function enemy(x, y, type) {
    this.sprite = new Image();
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.speed = 6;
    this.direction = 0;
    this.type = type;
    this.frame = 0;
    this.direction = 0;
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
    };


    this.Afficher = function() {
        Game.context.drawImage(this.sprite, 32 * this.frame, 32 * this.direction, 32, 32, this.x, this.y, this.height, this.width);
    };

}