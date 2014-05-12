function vodka(x, y, dir) {
    player.ProjectileType = 1;
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
}

function faucile(x, y, dir) {
    player.ProjectileType = 2;
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
        if (this.x < player.roomInfo[0] || this.y < player.roomInfo[1] || this.y > player.roomInfo[1] + player.Map[player.room].height - 30 || this.x > player.roomInfo[0] + player.Map[player.room].width) {
            return true;
        }
        this.theta += 25;
        Game.context.save();
        Game.context.translate(this.x, this.y);
        Game.context.rotate(this.theta * (Math.PI / 180));
        Game.context.drawImage(this.sprite, 0, 0, this.width, this.height);
        Game.context.restore();
    };}

function machette(x, y, dir) {
    player.ProjectileType = 3;
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
        if (this.x < player.roomInfo[0] || this.y < player.roomInfo[1] || this.y > player.roomInfo[1] + player.Map[player.room].height - 30 || this.x > player.roomInfo[0] + player.Map[player.room].width) {
            return true;
        }
        this.theta += 25;
        Game.context.save();
        Game.context.translate(this.x, this.y);
        Game.context.rotate(this.theta * (Math.PI / 180));
        Game.context.drawImage(this.sprite, 0, 0, this.width, this.height);
        Game.context.restore();
    };}