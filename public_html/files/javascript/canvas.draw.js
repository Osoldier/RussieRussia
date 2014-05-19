//##############################################################################
//Fichier : game.canvas
//Description : Gestion du canvas (dessin)
//Date : 12.05.2014
//Version : 1
//##############################################################################
var canvas = new Canvas();

function Canvas()
{
//##############################################################################
//Efface le canvas
//##############################################################################
    this.Clear = function()
    {
        Game.context.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
    };

//##############################################################################
//Dessine toute la carte (murs,sol,objets,portes,...)
//##############################################################################
    this.DrawMap = function(map) {
        player.roomInfo = [Game.canvas.width / 2 - (map[player.room].width / 2), Game.canvas.height / 2 - (map[player.room].height / 2), map[player.room].width, map[player.room].height];
        this.DrawBorder();
        this.DrawGround();
        this.DrawObjects(map);
        this.DrawDoors(map);
    };

//##############################################################################
//Dessine le sol
//##############################################################################
    this.DrawGround = function()
    {
        var x = player.roomInfo[0];
        var y = player.roomInfo[1];
        while (y < player.roomInfo[1] + player.roomInfo[3])
        {
            x = player.roomInfo[0];
            while (x < player.roomInfo[0] + player.roomInfo[2])
            {
                Game.context.drawImage(Images['borderDoorGround'], 142, 824, 50, 50, x, y, 50, 50);
                x = x + 50;
            }
            y = y + 50;
        }
    };

//##############################################################################
//Dessine les objets
//##############################################################################
    this.DrawObjects = function(map)
    {
        map[player.room].objects.forEach(function(entry) {
            Game.context.drawImage(ImagesSprites[entry.type], entry.x, entry.y, entry.width, entry.height);
        });
    };

//##############################################################################
//Dessine les murs
//##############################################################################
    this.DrawBorder = function() {
        var x = player.roomInfo[0];
        var y = player.roomInfo[1];
        //#####Salle carrée#####//
        if (player.roomInfo[2] == 700 && player.roomInfo[3] == 700) //SQUARED        
            Game.context.drawImage(Images['borderDoorGround'], 1566, 0, 880, 882, x - 91, y - 91, 880, 882);

        //#####Salle longue#####//
        if (player.roomInfo[2] == 500 && player.roomInfo[3] == 700) //LONGER
            Game.context.drawImage(Images['borderDoorGround'], 884, 0, 682, 884, x - 91, y - 91, 682, 884);

        //#####Salle large#####// 
        if (player.roomInfo[2] == 700 && player.roomInfo[3] == 500) //LARGER
            Game.context.drawImage(Images['borderDoorGround'], 0, 0, 884, 682, x - 92, y - 91, 884, 682);
    };

//##############################################################################
//Dessine les portes
//##############################################################################
    this.DrawDoors = function(map)
    {
        map[player.room].doors.forEach(function(entry) {
            var lock = {
                'height': 58,
                'width': 53
            };
            switch (entry.place) {
                case TOP:
                case TOPLEFT:
                case TOPRIGHT:
                    Game.context.drawImage(Images['borderDoorGround'], 0, 682, 142, 91, entry.imgX, entry.imgY, entry.imgwidth, entry.imgHeight);
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
                                Game.context.drawImage(Images['borderDoorGround'], 433, 683, lock.width, lock.height, entry.x + (lock.width / 2), entry.y - (lock.height / 2) - 5, lock.width, lock.height);
                                break;
                            case BLUE:
                                Game.context.drawImage(Images['borderDoorGround'], 544, 683, lock.width, lock.height, entry.x + (lock.width / 2), entry.y - (lock.height / 2) - 5, lock.width, lock.height);
                                break;
                            case GREEN:
                                Game.context.drawImage(Images['borderDoorGround'], 655, 683, lock.width, lock.height, entry.x + (lock.width / 2), entry.y - (lock.height / 2) - 5, lock.width, lock.height);
                                break;
                            case YELLOW:
                                Game.context.drawImage(Images['borderDoorGround'], 766, 683, lock.width, lock.height, entry.x + (lock.width / 2), entry.y - (lock.height / 2) - 5, lock.width, lock.height);
                                break;
                            case null:
                                Game.context.drawImage(Images['borderDoorGround'], 322, 683, lock.width, lock.height, entry.x + (lock.width / 2), entry.y - (lock.height / 2) - 5, lock.width, lock.height);
                                break;
                        }
                    }
                    break;
                case LEFT:
                    Game.context.drawImage(Images['borderDoorGround'], 233, 683, 85, 140, entry.imgX, entry.imgY, entry.imgwidth, entry.imgHeight);

                    if (entry.lock) {
                        switch (entry.color) {
                            case RED:
                                Game.context.drawImage(Images['borderDoorGround'], 486, 741, lock.height, lock.width, entry.x - (lock.height / 2), entry.y + (lock.width / 2), lock.height, lock.width);
                                break;
                            case BLUE:
                                Game.context.drawImage(Images['borderDoorGround'], 597, 741, lock.height, lock.width, entry.x - (lock.height / 2), entry.y + (lock.width / 2), lock.height, lock.width);
                                break;
                            case GREEN:
                                Game.context.drawImage(Images['borderDoorGround'], 708, 741, lock.height, lock.width, entry.x - (lock.height / 2), entry.y + (lock.width / 2), lock.height, lock.width);
                                break;
                            case YELLOW:
                                Game.context.drawImage(Images['borderDoorGround'], 819, 741, lock.height, lock.width, entry.x - (lock.height / 2), entry.y + (lock.width / 2), lock.height, lock.width);
                                break;
                            case null:
                                Game.context.drawImage(Images['borderDoorGround'], 375, 741, lock.height, lock.width, entry.x - (lock.height / 2), entry.y + (lock.width / 2), lock.height, lock.width);
                                break;
                        }
                    }
                    break;
                case BOTTOM:
                case BOTLEFT:
                case BOTRIGHT:
                    Game.context.drawImage(Images['borderDoorGround'], 0, 773, 142, 91, entry.imgX, entry.imgY, entry.imgwidth, entry.imgHeight);

                    if (entry.lock) {

                        switch (entry.color) {
                            case RED:
                                Game.context.drawImage(Images['borderDoorGround'], 433, 741, 53, 58, entry.x + (lock.width / 2), entry.y, lock.width, lock.height);
                                break;
                            case BLUE:
                                Game.context.drawImage(Images['borderDoorGround'], 544, 741, 53, 58, entry.x + (lock.width / 2), entry.y, lock.width, lock.height);
                                break;
                            case GREEN:
                                Game.context.drawImage(Images['borderDoorGround'], 655, 741, 53, 58, entry.x + (lock.width / 2), entry.y, lock.width, lock.height);
                                break;
                            case YELLOW:
                                Game.context.drawImage(Images['borderDoorGround'], 766, 741, 53, 58, entry.x + (lock.width / 2), entry.y, lock.width, lock.height);
                                break;
                            case null:
                                Game.context.drawImage(Images['borderDoorGround'], 322, 741, 53, 58, entry.x + (lock.width / 2), entry.y, lock.width, lock.height);
                                break;
                        }
                    }
                    break;
                case RIGHT:
                    Game.context.drawImage(Images['borderDoorGround'], 142, 683, 91, 140, entry.imgX, entry.imgY, entry.imgwidth, entry.imgHeight);

                    if (entry.lock) {
                        switch (entry.color) {
                            case RED:
                                Game.context.drawImage(Images['borderDoorGround'], 486, 683, lock.height, lock.width, entry.x, entry.y + (lock.width / 2), lock.height, lock.width);
                                break;
                            case BLUE:
                                Game.context.drawImage(Images['borderDoorGround'], 597, 683, lock.height, lock.width, entry.x, entry.y + (lock.width / 2), lock.height, lock.width);
                                break;
                            case GREEN:
                                Game.context.drawImage(Images['borderDoorGround'], 708, 683, lock.height, lock.width, entry.x, entry.y + (lock.width / 2), lock.height, lock.width);
                                break;
                            case YELLOW:
                                Game.context.drawImage(Images['borderDoorGround'], 819, 683, lock.height, lock.width, entry.x, entry.y + (lock.width / 2), lock.height, lock.width);
                                break;
                            case null:
                                Game.context.drawImage(Images['borderDoorGround'], 375, 683, lock.height, lock.width, entry.x, entry.y + (lock.width / 2), lock.height, lock.width);
                                break;
                        }
                    }
                    break;
            }
        });
    };
}