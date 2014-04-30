// PLAYER
var player = new Player();

function Player() {
    this.Map = GroundMap;
    this.room = 9;
    this.roomInfo = new Array();
    this.time = 0;
    this.score = 0;
    this.object1 = 0;
    this.object2 = 0;
    this.object3 = 0;
    this.life = 3;
    this.x = 600;
    this.y = 400;
    this.width = 40;
    this.height = 40;
    this.speed = 8;
    this.direction = 0;
    this.Projectile = 0;
    this.type = 1;
    this.frame = 0;
    this.direction = 0;
    this.directionDEF = {
        'DOWN': 0,
        'LEFT': 1,
        'RIGHT': 2,
        'UP': 3
    };
    this.typeDEF = {
        'POUTINE': 0,
        'STALINE': 1,
        'LENINE': 2
    };
    /**
     * Fonction principale, affiche et gère le déplacement
     * @returns {undefined}
     */
    this.Update = function() {
        this.Move();
        this.Afficher();
        if (KeyState.space) {
            this.Shoot();
        }
        if (this.Projectile !== 0) {
            if (this.Projectile.Update()) {
                this.Projectile = 0;
            }
        }
    };
    /**
     * Si aucuns projectile n'existe, crée un
     * @returns {null}
     * @throws {No weapon set} Si le type est non défini
     */
    this.Shoot = function() {
        if (this.Projectile === 0) {
            switch (this.type) {
                case this.typeDEF.POUTINE:
                    this.Projectile = new vodka(this.x, this.y, this.direction);
                    break;
                case this.typeDEF.STALINE:
                    this.Projectile = new machette(this.x, this.y, this.direction);
                    break;
                case this.typeDEF.LENINE:
                    this.Projectile = new faucile(this.x, this.y, this.direction);
                    break;
                default:
                    throw "No weapon set";
            }
        }
    };

    this.Afficher = function() {
        switch (this.type)
        {
            case this.typeDEF.POUTINE:
                Game.context.drawImage(Images['spritePoutine'], 32 * this.frame, 32 * this.direction, 32, 32, this.x, this.y, this.height, this.width);
                break;
            case this.typeDEF.STALINE:
                Game.context.drawImage(Images['spriteStaline'], 32 * this.frame, 32 * this.direction, 32, 32, this.x, this.y, this.height, this.width);
                break;
            case this.typeDEF.LENINE:
                Game.context.drawImage(Images['spriteLenine'], 32 * this.frame, 32 * this.direction, 32, 32, this.x, this.y, this.height, this.width);
                break;
        }
    };

    this.UseKeyboard = function(e) {
        switch (e) {
            case this.directionDEF.DOWN:
                return (KeyState.s || KeyState.down) ? true : false;
                break;

            case this.directionDEF.UP:
                return (KeyState.w || KeyState.up) ? true : false;
                break;

            case this.directionDEF.RIGHT:
                return (KeyState.d || KeyState.right) ? true : false;
                break;

            case this.directionDEF.LEFT:
                return (KeyState.a || KeyState.left) ? true : false;
                break;
        }
    };

    this.Move = function() {

        if (!menu.locked)
        {
            if (KeyState.p)
            {
                menu.lock();
                menu.state = menu.stateDEF.PAUSE;
                Game.state = MENU;
            }
        }
        if (KeyState.Shift)
            this.speed = 16;
        else
            this.speed = 8;


        this.directionCount = true;
        //#####MOVE#UP#####// 
        if (this.UseKeyboard(this.directionDEF.UP) && this.directionCount)
        {
            if (this.y > this.roomInfo[1]) {
                if (!WouldCollide(0, -this.speed))
                    this.y -= this.speed;
            } else
                this.y = this.roomInfo[1];
            this.direction = this.directionDEF.UP;
            this.directionCount = false;
        }
        //#####MOVE#RIGHT#####// 
        if (this.UseKeyboard(this.directionDEF.RIGHT) && this.directionCount)
        {
            if (this.x + this.width < this.roomInfo[0] + this.roomInfo[2]) {
                if (!WouldCollide(this.speed, 0))
                    this.x += this.speed;
            } else
                this.x = this.roomInfo[0] + this.roomInfo[2] - this.width;
            this.direction = this.directionDEF.RIGHT;
            this.directionCount = false;
        }
        //#####MOVE#DOWN#####// 
        if (this.UseKeyboard(this.directionDEF.DOWN) && this.directionCount)
        {
            if (this.y + this.height < this.roomInfo[1] + this.roomInfo[3]) {
                if (!WouldCollide(0, this.speed))
                    this.y += this.speed;
            } else
                this.y = this.roomInfo[1] + this.roomInfo[3] - this.height;
            this.direction = this.directionDEF.DOWN;
            this.directionCount = false;

        }
        //#####MOVE#LEFT#####//  
        if (this.UseKeyboard(this.directionDEF.LEFT) && this.directionCount)
        {
            if (this.x > this.roomInfo[0]) {
                if (!WouldCollide(-this.speed, 0))
                    this.x -= this.speed;
            } else
                this.x = this.roomInfo[0];
            this.direction = this.directionDEF.LEFT;
            this.directionCount = false;
        }

        //#####SPRITE#ANIMATION#####//  
        if (this.UseKeyboard(this.directionDEF.UP) || this.UseKeyboard(this.directionDEF.LEFT) || this.UseKeyboard(this.directionDEF.RIGHT) || this.UseKeyboard(this.directionDEF.DOWN))
        {
            if (this.frame >= 2)
                this.frame = 0;
            else
                this.frame++;

        } else {
            this.frame = 1;
        }
    };
}