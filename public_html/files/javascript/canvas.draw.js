//##############################################################################
//Fichier : game.canvas.js
//Description : Gestion du canvas (dessin)
//Date : 26.05.2014
//Version : 1
//##############################################################################
var canvas = new Canvas();

function Canvas()
{
//##############################################################################
//Chargements des images 
//##############################################################################
    this.IMAGES = {
        BORDER_DOOR_GROUND: "map/borderDoorGround.png",
        TAPIS: "O_tapis.png", //TAPIS
        TABLE: "O_Table.png", //TABLE
        TABLEAU: "N_PaquetC.png", //TABLEAU
        PEAUOURS: "O_peauours.png", //PEAUOURS
        CLEFB: "K_B.png", //CLEF
        CLEFR: "K_R.png",
        CLEFJ: "K_J.png",
        CLEFV: "K_V.png",
        PUIT: "O_puit.png", //PUIT       
        TANK: "O_Tank.png", //TANK
        DRAPCOM: "O_DrapeauCom.png", //DRAPCOM
        DRAPCOMBAS: "DrapeauComBas.png",
        DRAPCOMDROITE: "DrapeauComDroite.png",
        DRAPCOMGAUCHE: "DrapeauComGauche.png",
        LIVREBAS: "LivreKarlMBas.png",
        LIVREDROITE: "KarlMDroite.png",
        LIVREGAUCHE: "KarlMGauche.png",
        LIVRE: "O_LivreKarlM.png", //LIVRE   
        VODKA: "N_Vodka.png", //VODKA
        CAVIAR: "N_Caviar.png", //CAVIAR
        CIGARETTE: "N_PaquetC.png", //CIGARETTE
        PORTECRIMEA: "PORTECRIMEE.png", //PORTECRIMEA
        CLEF_1: "clef1.png",
        CLEF_2: "clef2.png",
        CLEF_3: "clef3.png"
    };
    
    this.Initialize = function() {
        for (var key in canvas.IMAGES) {
            var src = "files/images/" + canvas.IMAGES[key];
            canvas.IMAGES[key] = new Image();
            canvas.IMAGES[key].src = src;
        }
    };
    
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
        //this.DrawGround();
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
                Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 142, 824, 50, 50, x, y, 50, 50);
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
            Game.context.drawImage(canvas.IMAGES[entry.type], entry.x, entry.y, entry.width, entry.height);
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
            Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 1566, 0, 880, 882, x - 91, y - 91, 880, 882);

        //#####Salle longue#####//
        if (player.roomInfo[2] == 500 && player.roomInfo[3] == 700) //LONGER
            Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 884, 0, 682, 884, x - 91, y - 91, 682, 884);

        //#####Salle large#####// 
        if (player.roomInfo[2] == 700 && player.roomInfo[3] == 500) //LARGER
            Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 0, 0, 884, 682, x - 92, y - 91, 884, 682);
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
                    Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 0, 682, 142, 91, entry.imgX, entry.imgY, entry.imgwidth, entry.imgHeight);
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
                                Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 433, 683, lock.width, lock.height, entry.x + (lock.width / 2), entry.y - (lock.height / 2) - 5, lock.width, lock.height);
                                break;
                            case BLUE:
                                Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 544, 683, lock.width, lock.height, entry.x + (lock.width / 2), entry.y - (lock.height / 2) - 5, lock.width, lock.height);
                                break;
                            case GREEN:
                                Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 655, 683, lock.width, lock.height, entry.x + (lock.width / 2), entry.y - (lock.height / 2) - 5, lock.width, lock.height);
                                break;
                            case YELLOW:
                                Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 766, 683, lock.width, lock.height, entry.x + (lock.width / 2), entry.y - (lock.height / 2) - 5, lock.width, lock.height);
                                break;
                            case null:
                                Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 322, 683, lock.width, lock.height, entry.x + (lock.width / 2), entry.y - (lock.height / 2) - 5, lock.width, lock.height);
                                break;
                        }
                    }
                    break;
                case LEFT:
                    Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 233, 683, 85, 140, entry.imgX, entry.imgY, entry.imgwidth, entry.imgHeight);

                    if (entry.lock) {
                        switch (entry.color) {
                            case RED:
                                Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 486, 741, lock.height, lock.width, entry.x - (lock.height / 2), entry.y + (lock.width / 2), lock.height, lock.width);
                                break;
                            case BLUE:
                                Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 597, 741, lock.height, lock.width, entry.x - (lock.height / 2), entry.y + (lock.width / 2), lock.height, lock.width);
                                break;
                            case GREEN:
                                Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 708, 741, lock.height, lock.width, entry.x - (lock.height / 2), entry.y + (lock.width / 2), lock.height, lock.width);
                                break;
                            case YELLOW:
                                Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 819, 741, lock.height, lock.width, entry.x - (lock.height / 2), entry.y + (lock.width / 2), lock.height, lock.width);
                                break;
                            case null:
                                Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 375, 741, lock.height, lock.width, entry.x - (lock.height / 2), entry.y + (lock.width / 2), lock.height, lock.width);
                                break;
                        }
                    }
                    break;
                case BOTTOM:
                case BOTLEFT:
                case BOTRIGHT:
                    Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 0, 773, 142, 91, entry.imgX, entry.imgY, entry.imgwidth, entry.imgHeight);

                    if (entry.lock) {

                        switch (entry.color) {
                            case RED:
                                Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 433, 741, 53, 58, entry.x + (lock.width / 2), entry.y, lock.width, lock.height);
                                break;
                            case BLUE:
                                Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 544, 741, 53, 58, entry.x + (lock.width / 2), entry.y, lock.width, lock.height);
                                break;
                            case GREEN:
                                Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 655, 741, 53, 58, entry.x + (lock.width / 2), entry.y, lock.width, lock.height);
                                break;
                            case YELLOW:
                                Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 766, 741, 53, 58, entry.x + (lock.width / 2), entry.y, lock.width, lock.height);
                                break;
                            case null:
                                Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 322, 741, 53, 58, entry.x + (lock.width / 2), entry.y, lock.width, lock.height);
                                break;
                        }
                    }
                    break;
                case RIGHT:
                    Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 142, 683, 91, 140, entry.imgX, entry.imgY, entry.imgwidth, entry.imgHeight);

                    if (entry.lock) {
                        switch (entry.color) {
                            case RED:
                                Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 486, 683, lock.height, lock.width, entry.x, entry.y + (lock.width / 2), lock.height, lock.width);
                                break;
                            case BLUE:
                                Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 597, 683, lock.height, lock.width, entry.x, entry.y + (lock.width / 2), lock.height, lock.width);
                                break;
                            case GREEN:
                                Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 708, 683, lock.height, lock.width, entry.x, entry.y + (lock.width / 2), lock.height, lock.width);
                                break;
                            case YELLOW:
                                Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 819, 683, lock.height, lock.width, entry.x, entry.y + (lock.width / 2), lock.height, lock.width);
                                break;
                            case null:
                                Game.context.drawImage(canvas.IMAGES.BORDER_DOOR_GROUND, 375, 683, lock.height, lock.width, entry.x, entry.y + (lock.width / 2), lock.height, lock.width);
                                break;
                        }
                    }
                    break;
            }
        });
    };
}
