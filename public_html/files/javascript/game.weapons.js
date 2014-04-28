function vodka(x, y, dir) {
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.theta = 1;
    this.sprite = new Image();
    this.sprite.src = "files/images/Vodka.png";
    this.Update = function() {
        switch (dir) {
            case player.directionDEF.UP:
                this.y -= 16;
                break;
            case player.directionDEF.DOWN:
                this.y += 16;
                break;
            case player.directionDEF.LEFT:
                this.x -= 16;
                break;
            case player.directionDEF.RIGHT:
                this.x += 16;
                break;
        }
        if (this.x < roomX || this.y < roomY || this.y > roomY + player.Map[player.room].height - 30 || this.x > roomX + player.Map[player.room].width) {
            return true;
        }
        this.theta+=25;
        Game.context.save();
        Game.context.translate(this.x, this.y);
        Game.context.rotate(this.theta * (Math.PI / 180));
        Game.context.drawImage(this.sprite, 0, 0, 15, 30);
        Game.context.restore();
    };
}

function faucile(x, y, dir) {
    this.x = x;
    this.y = y;
    this.sprite = new Image();
    this.sprite.src = "files/images/Faucille.png";
    this.dir = dir;
    this.Update = vodka.Update();
}

function machette(x, y, dir) {
    this.x = x;
    this.y = y;
    this.sprite = new Image();
    this.sprite.src = "files/images/Machette.png";
    this.dir = dir;
    this.Update = vodka.Update();
}
