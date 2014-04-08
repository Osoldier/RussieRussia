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
    this.width = 16;
    this.height = 32;
    this.speed = 10;
    this.direction = 0;
    this.type = 0;
    this.frame = 0;
    this.Move = function() {
        if (KeyState.w || KeyState.up)
        {
            if (this.y > 0) {
                if (!WouldCollide(0, -this.speed))
                    this.y -= this.speed;
            }
            else
                this.y = 0;
            this.direction = Direction.UP;
        }
        if (KeyState.d || KeyState.right)
        {
            if (this.x + this.width < Game.canvas.width) {
                if (!WouldCollide(this.speed, 0))
                    this.x += this.speed;
            }
            else
                this.x = Game.canvas.width - this.width;
            this.direction = Direction.RIGHT;
        }
        if (KeyState.s || KeyState.down)
        {
            if (this.y + this.height < Game.canvas.height) {
                if (!WouldCollide(0, this.speed))
                    this.y += this.speed;
            }
            else
                this.y = Game.canvas.height - this.height;
            this.direction = Direction.DOWN;
        }
        if (KeyState.a || KeyState.left)
        {
            if (this.x > 0){
                if (!WouldCollide(-this.speed, 0)) 
                    this.x -= this.speed;
                }
                else
                    this.x = 0;
            this.direction = Direction.LEFT;
        }
    };

    this.Afficher = function() {
        Game.context.beginPath();
        Game.context.rect(this.x, this.y, this.width, this.height);
        Game.context.fill();
    };
}
