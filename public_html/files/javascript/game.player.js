var player = new player();

function player() {
    this.room = 0;
    this.time = 0;
    this.score = 0;
    this.object1 = 0;
    this.object2 = 0;
    this.object3 = 0;
    this.life = 0;
    this.x = 0;
    this.y = 0;
    this.speed = 10;
    this.direction = 0;
    this.type = 0;
    this.frame = 0;
    this.Move = function() {
        if (KeyState.w || KeyState.up)
        {
            if (this.y > 0)
                this.y -= this.speed;
            else
                this.y = 0;
            this.direction = Direction.UP;
        }
        if (KeyState.d || KeyState.right)
        {
            if (this.x + vgSpriteSize.width < Game.canvas.width)
                this.x += this.speed;
            else
                this.x = Game.canvas.width - vgSpriteSize.width;
            this.direction = Direction.RIGHT;
        }
        if (KeyState.s || KeyState.down)
        {
            if (this.y + vgSpriteSize.height < Game.canvas.height)
                this.y += this.speed;
            else
                this.y = G.canvas.height - vgSpriteSize.height;
            this.direction = Direction.DOWN;
        }
        if (KeyState.a || KeyState.left)
        {
            if (this.x > 0)
                this.x -= this.speed;
            else
                this.x = 0;
            this.direction = Direction.LEFT;
        }
    };

    this.Afficher = function() {

    };
}