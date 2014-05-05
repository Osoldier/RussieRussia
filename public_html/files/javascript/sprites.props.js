/** Liste des Sprites du jeu */
var ImagesSprites = {
    TAPIS:      "O_tapis.png", //TAPIS
    TABLE:      "O_Table.png", //TABLE
    TABLEAU:    "N_PaquetC.png", //TABLEAU
    PEAUOURS:   "O_peauours.png", //PEAUOURS
    CLEFB:      "K_B.png", //CLEF
    CLEFR:      "K_R.png",
    CLEFJ:      "K_J.png",
    CLEFV:      "K_V.png",
    PUIT:       "O_puit.png", //PUIT
    MUR:        "N_PaquetC.png", //MUR
    TANK:       "O_Tank.png", //TANK
    DRAPCOM:    "O_DrapeauCom.png", //DRAPCOM
    LIVRE:      "O_LivreKarlM.png", //LIVRE
    OBAMA:      "N_PaquetC.png", //OBAMA
    BENLADEN:   "N_PaquetC.png", //BENLADEN
    YANOUKOVIC: "N_PaquetC.png", //YANOUKOVIC
    FEMINISTE:  "bear.png", //FEMINISTE
    OURS:       "N_PaquetC.png", //OURS
    VODKA:      "N_Vodka.png", //VODKA
    CAVIAR:     "N_Caviar.png", //CAVIAR
    CIGARETTE:  "N_PaquetC.png", //CIGARETTE
    PORTECRIMEA:"PORTECRIMEE.png"  //PORTECRIMEA
};

function loadSprites()
{
    for (var key in ImagesSprites) {
        var src = "files/images/"+ImagesSprites[key];
        ImagesSprites[key] = new Image();
        ImagesSprites[key].src = src;
    }
}

var ImagesListe = [
    "border_door_ground",
    "keyColor",
    "door_locked",
    "menu",    
    "spriteStaline",
    "spritePoutine",
    "spriteLenine"
];

var Images = new Array();

function loadImages()
{
    ImagesListe.forEach(function(entry) {
        Images[entry] = new Image();
        Images[entry].src = 'files/images/' + entry + '.png';
    });
}




