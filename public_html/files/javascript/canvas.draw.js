var roomX = 0;
var roomY = 0;

/**
 * Effacer la canvas
 */
function clearCanvas()
{
    Game.context.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
}

/**
 * Dessine la chambre et tout ses elements
 * @param {Array} map
 * @returns {null}
 */
function drawMap(map) {
    drawBorder();
    drawGround();
    roomX = Game.canvas.width / 2 - (map[player.room].width / 2);
    roomY = Game.canvas.height / 2 - (map[player.room].height / 2);
    player.roomInfo = [roomX, roomY, map[player.room].width, map[player.room].height];

    //Game.context.beginPath();
    //Game.context.rect(roomX, roomY, map[player.room].width, map[player.room].height);
    map[player.room].objects.forEach(function(entry) {
        //Game.context.beginPath();
        Game.context.drawImage(ImagesSprites[entry.type], entry.x, entry.y, entry.width, entry.height);
    });
    map[player.room].doors.forEach(function(entry) {
        //Game.context.beginPath();
        // var x = 0;
        // var y = 0;
        var lock = {
            'height': 58,
            'width': 53
        };
        switch (entry.place) {
            case TOP:
            case TOPLEFT:
            case TOPRIGHT:
                Game.context.drawImage(Images['border_door_ground'], 0, 682, 142, 91, entry.imgX, entry.imgY, entry.imgwidth, entry.imgHeight);
                /* HITZONE 
                 y = roomY;
                 x = roomX + (map[player.room].width / 2) - (entry.width / 2);
                 Game.context.beginPath();
                 Game.context.fillStyle = "pink";
                 Game.context.rect(entry.x, entry.y, entry.width, entry.height);
                 Game.context.fill();
                 */
                if (entry.lock) {
                    switch (entry.color) {
                        case RED:
                            Game.context.drawImage(Images['border_door_ground'], 433, 683, lock.width, lock.height, entry.x + (lock.width / 2), entry.y - (lock.height / 2) - 5, lock.width, lock.height);
                            break;
                        case BLUE:
                            Game.context.drawImage(Images['border_door_ground'], 544, 683, lock.width, lock.height, entry.x + (lock.width / 2), entry.y - (lock.height / 2) - 5, lock.width, lock.height);
                            break;
                        case GREEN:
                            Game.context.drawImage(Images['border_door_ground'], 655, 683, lock.width, lock.height, entry.x + (lock.width / 2), entry.y - (lock.height / 2) - 5, lock.width, lock.height);
                            break;
                        case YELLOW:
                            Game.context.drawImage(Images['border_door_ground'], 766, 683, lock.width, lock.height, entry.x + (lock.width / 2), entry.y - (lock.height / 2) - 5, lock.width, lock.height);
                            break;
                        case null:
                            Game.context.drawImage(Images['border_door_ground'], 322, 683, lock.width, lock.height, entry.x + (lock.width / 2), entry.y - (lock.height / 2) - 5, lock.width, lock.height);
                            break;
                    }
                    /*
                     Game.context.beginPath();
                     Game.context.rect(x + 7, y - 48, 5, 48);
                     Game.context.rect(x + 22, y - 48, 5, 48);
                     Game.context.rect(x + 37, y - 48, 5, 48);
                     Game.context.rect(x + 50, y - 48, 5, 48);
                     Game.context.fill();
                     */
                }
                break;
            case LEFT:
                Game.context.drawImage(Images['border_door_ground'], 233, 683, 85, 140, entry.imgX, entry.imgY, entry.imgwidth, entry.imgHeight);
                /* HITZONE
                 Game.context.beginPath();
                 Game.context.fillStyle = "pink";
                 Game.context.rect(entry.x, entry.y, entry.width, entry.height);
                 Game.context.fill();
                 */
                if (entry.lock) {
                    switch (entry.color) {
                        case RED:
                            Game.context.drawImage(Images['border_door_ground'], 486, 741, lock.height, lock.width, entry.x - (lock.height / 2), entry.y + (lock.width / 2), lock.height, lock.width);
                            break;
                        case BLUE:
                            Game.context.drawImage(Images['border_door_ground'], 597, 741, lock.height, lock.width, entry.x - (lock.height / 2), entry.y + (lock.width / 2), lock.height, lock.width);
                            break;
                        case GREEN:
                            Game.context.drawImage(Images['border_door_ground'], 708, 741, lock.height, lock.width, entry.x - (lock.height / 2), entry.y + (lock.width / 2), lock.height, lock.width);
                            break;
                        case YELLOW:
                            Game.context.drawImage(Images['border_door_ground'], 819, 741, lock.height, lock.width, entry.x - (lock.height / 2), entry.y + (lock.width / 2), lock.height, lock.width);
                            break;
                        case null:
                            Game.context.drawImage(Images['border_door_ground'], 375, 741, lock.height, lock.width, entry.x - (lock.height / 2), entry.y + (lock.width / 2), lock.height, lock.width);
                            break;
                    }
                    /*
                     y = roomY + (map[player.room].height / 2) - (entry.height / 2);
                     x = roomX;
                     Game.context.beginPath();
                     Game.context.rect(x - 49, y + 13, 47, 5);
                     Game.context.rect(x - 49, y + 28, 47, 5);
                     Game.context.rect(x - 49, y + 43, 47, 5);
                     Game.context.rect(x - 49, y + 55, 47, 5);
                     Game.context.fill();
                     */
                }
                break;
            case BOTTOM:
            case BOTLEFT:
            case BOTRIGHT:
                Game.context.drawImage(Images['border_door_ground'], 0, 773, 142, 91, entry.imgX, entry.imgY, entry.imgwidth, entry.imgHeight);
                /* HITZONE
                 Game.context.beginPath();
                 Game.context.fillStyle = "pink";
                 Game.context.rect(entry.x, entry.y, entry.width, entry.height);
                 Game.context.fill();
                 */
                if (entry.lock) {

                    switch (entry.color) {
                        case RED:
                            Game.context.drawImage(Images['border_door_ground'], 433, 741, 53, 58, entry.x + (lock.width / 2), entry.y, lock.width, lock.height);
                            break;
                        case BLUE:
                            Game.context.drawImage(Images['border_door_ground'], 544, 741, 53, 58, entry.x + (lock.width / 2), entry.y, lock.width, lock.height);
                            break;
                        case GREEN:
                            Game.context.drawImage(Images['border_door_ground'], 655, 741, 53, 58, entry.x + (lock.width / 2), entry.y, lock.width, lock.height);
                            break;
                        case YELLOW:
                            Game.context.drawImage(Images['border_door_ground'], 766, 741, 53, 58, entry.x + (lock.width / 2), entry.y, lock.width, lock.height);
                            break;
                        case null:
                            Game.context.drawImage(Images['border_door_ground'], 322, 741, 53, 58, entry.x + (lock.width / 2), entry.y, lock.width, lock.height);
                            break;
                    }
                    /*
                     * y = roomY + map[player.room].height - entry.height;
                     x = roomX + (map[player.room].width / 2) - (entry.width / 2);
                     Game.context.beginPath();
                     Game.context.rect(x + 7, y + 10, 5, 48);
                     Game.context.rect(x + 22, y + 10, 5, 48);
                     Game.context.rect(x + 37, y + 10, 5, 48);
                     Game.context.rect(x + 52, y + 10, 5, 48);
                     Game.context.fill();
                     */
                }
                break;
            case RIGHT:
                Game.context.drawImage(Images['border_door_ground'], 142, 683, 91, 140, entry.imgX, entry.imgY, entry.imgwidth, entry.imgHeight);
                /* HITZONE
                 Game.context.beginPath();
                 Game.context.fillStyle = "pink";
                 Game.context.rect(entry.x, entry.y, entry.width, entry.height);
                 Game.context.fill();
                 */
                if (entry.lock) {
                    switch (entry.color) {
                        case RED:
                            Game.context.drawImage(Images['border_door_ground'], 486, 683, lock.height, lock.width, entry.x, entry.y + (lock.width / 2), lock.height, lock.width);
                            break;
                        case BLUE:
                            Game.context.drawImage(Images['border_door_ground'], 597, 683, lock.height, lock.width, entry.x, entry.y + (lock.width / 2), lock.height, lock.width);
                            break;
                        case GREEN:
                            Game.context.drawImage(Images['border_door_ground'], 708, 683, lock.height, lock.width, entry.x, entry.y + (lock.width / 2), lock.height, lock.width);
                            break;
                        case YELLOW:
                            Game.context.drawImage(Images['border_door_ground'], 819, 683, lock.height, lock.width, entry.x, entry.y + (lock.width / 2), lock.height, lock.width);
                            break;
                        case null:
                            Game.context.drawImage(Images['border_door_ground'], 375, 683, lock.height, lock.width, entry.x, entry.y + (lock.width / 2), lock.height, lock.width);
                            break;
                    }
                    /*
                     y = roomY + (map[player.room].height / 2) - (entry.height / 2);
                     x = roomX + (map[player.room].width) - entry.width;
                     Game.context.beginPath();
                     Game.context.rect(x + 10, y + 13, 50, 5);
                     Game.context.rect(x + 10, y + 28, 50, 5);
                     Game.context.rect(x + 10, y + 43, 50, 5);
                     Game.context.rect(x + 10, y + 55, 50, 5);
                     Game.context.fill();
                     */
                }
                break;
        }
        //Game.context.fill();
    });
}

/**
 * Dessine la sol
 * @returns {null}
 */
function drawGround()
{
    var x = player.roomInfo[0];
    var y = player.roomInfo[1];

    while (y < player.roomInfo[1] + player.roomInfo[3])
    {
        x = player.roomInfo[0];
        while (x < player.roomInfo[0] + player.roomInfo[2])
        {
            Game.context.drawImage(Images["border_door_ground"], 142, 824, 50, 50, x, y, 50, 50);
            x = x + 50;
        }
        y = y + 50;
    }
}

/**
 * dessine la bord de la map
 * @returns {null}
 */
function drawBorder() {
    var x = player.roomInfo[0];
    var y = player.roomInfo[1];
    if (player.roomInfo[2] == 700 && player.roomInfo[3] == 700) //SQUARED        
        Game.context.drawImage(Images['border_door_ground'], 1566, 0, 880, 882, x - 91, y - 91, 880, 882);

    if (player.roomInfo[2] == 500 && player.roomInfo[3] == 700) //LONGER
        Game.context.drawImage(Images['border_door_ground'], 884, 0, 682, 884, x - 91, y - 91, 682, 884);

    if (player.roomInfo[2] == 700 && player.roomInfo[3] == 500) //LARGER
        Game.context.drawImage(Images['border_door_ground'], 0, 0, 884, 682, x - 92, y - 91, 884, 682);
}