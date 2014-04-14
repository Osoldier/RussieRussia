function vodka(x, y, dir) {
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.sprite = new Image();
    this.sprite.src = "file/images/Vodka.png";
    this.Update = function() {
        switch (dir) {
            case player.directionDEF.UP:
                this.y -= 2;
                break;
            case player.directionDEF.DOWN:
                this.y += 2;
                break;
            case player.directionDEF.LEFT:
                this.x -= 2;
                break;
            case player.directionDEF.RIGHT:
                this.x -= 2;
                break;
        }
        Game.context.drawImage(this.sprite, this.x, this.y);
    };
}

function faucile(x, y, dir) {
    this.x = x;
    this.y = y;
    this.sprite = new Image();
    this.sprite.src = "file/images/Vodka.png";
    this.dir = dir;
    this.Update = vodka.Update();
}

function machette(x, y, dir) {
    this.x = x;
    this.y = y;
    this.sprite = new Image();
    this.sprite.src = "file/images/Vodka.png";
    this.dir = dir;
    this.Update = vodka.Update();
}
