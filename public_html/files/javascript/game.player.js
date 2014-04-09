var player = new player();

function player() {
    this.sprite = new Image();
    this.sprite.src = 'files/images/sprite_homme.png'
    this.Map = GroundMap;
    this.room = 9;
    this.roomInfo = new Array();
    this.time = 0;
    this.score = 0;
    this.object1 = 0;
    this.object2 = 0;
    this.object3 = 0;
    this.life = 0;
    this.x = 600;
    this.y = 400;
    this.width = 32;
    this.height = 32;
    this.speed = 8;
    this.direction = 0;
    this.type = 0;
    this.frame = 0;
    this.direction = 0;
    this.directionDEF = {
        'DOWN': 0,
        'LEFT': 1,
        'RIGHT': 2,
        'UP': 3
    };

    this.testDirection = function(direction) {
        switch (direction) {
            case this.directionDEF.down:
               if (KeyState.s || KeyState.down)
               return true;
           else
               return false;
                break;
        }
    };

    this.Move = function() {
        if (KeyState.w || KeyState.up)
        {
            if (this.y > this.roomInfo[1]) {
                if (!WouldCollide(0, -this.speed))
                    this.y -= this.speed;
            }
            else
                this.y = this.roomInfo[1];
            this.direction = this.directionDEF.UP;
        }
        if (KeyState.d || KeyState.right)
        {
            if (this.x + this.width < this.roomInfo[0] + this.roomInfo[2]) {
                if (!WouldCollide(this.speed, 0))
                    this.x += this.speed;
            }
            else
                this.x = this.roomInfo[0] + this.roomInfo[2] - this.width;
            this.direction = this.directionDEF.RIGHT;
        }
        if (KeyState.s || KeyState.down)
        {
            if (this.y + this.height < this.roomInfo[1] + this.roomInfo[3]) {
                if (!WouldCollide(0, this.speed))
                    this.y += this.speed;
            }
            else
                this.y = this.roomInfo[1] + this.roomInfo[3] - this.height;
            this.direction = this.directionDEF.DOWN;
        }
        if (KeyState.a || KeyState.left)
        {
            if (this.x > this.roomInfo[0]) {
                if (!WouldCollide(-this.speed, 0))
                    this.x -= this.speed;
            }
            else
                this.x = this.roomInfo[0];
            this.direction = this.directionDEF.LEFT;
        }
    };

    this.Afficher = function() {
        if (KeyState.a || KeyState.left || KeyState.s || KeyState.down || KeyState.d || KeyState.right || KeyState.w || KeyState.up)
        {
            if (this.frame >= 2)
                this.frame = 0;
            else
                this.frame++;

        } else {
            this.frame = 1;
        }
        Game.context.drawImage(this.sprite, this.width * this.frame, this.height * this.direction, this.height, this.width, this.x, this.y, this.height, this.width);
    };

    this.Update = function() {
        this.Move();
        this.Afficher();
    };
}
