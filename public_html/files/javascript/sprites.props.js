var ImagesSprites = {
    TAPIS: "PaquetC.png", //TAPIS
    TABLE: "Table.png", //TABLE
    TABLEAU: "PaquetC.png", //TABLEAU
    PEAUOURS: "PaquetC.png", //PEAUOURS
    CLEF: "PaquetC.png", //CLEF
    PUIT: "puit.png", //PUIT
    MUR: "PaquetC.png", //MUR
    TANK: "Tank.png", //TANK
    DRAPCOM: "DrapeauCom.png", //DRAPCOM
    LIVRE: "LivreKarlM.png", //LIVRE
    OBAMA: "PaquetC.png", //OBAMA
    BENLADEN: "PaquetC.png", //BENLADEN
    YANOUKOVIC: "PaquetC.png", //YANOUKOVIC
    FEMINISTE: "bear.png", //FEMINISTE
    OURS: "PaquetC.png", //OURS
    VODKA: "Vodka.png", //VODKA
    CAVIAR: "Caviar.png", //CAVIAR
    CIGARETTE: "PaquetC.png", //CIGARETTE
    PORTECRIMEA: "PORTECRIMEE.png"  //PORTECRIMEA
};

var Sprites = new Array();

function loadSprites()
{
//    for (var i = 0; i <= 18; i++)
//   {
//        Sprites.push(new Image());
//        Sprites[Sprites.length - 1].src = 'files/images/' + ImagesSprites[i];
//       
//    }
    for (var key in ImagesSprites) {
        Sprites.push(new Image());
        Sprites[Sprites.length-1].src = 'files/images/' + ImagesSprites[key];
    }
}


var ImagesListe = [
    "border_door_ground",
    "keyColor",
    "door_locked"
];


var Images = new Array();

function loadImages()
{

    ImagesListe.forEach(function(entry) {
        Images[entry] = new Image();
        Images[entry].src = 'files/images/' + entry + '.png';
    });
    /*
     for (var i = 0; i <= 1; i++)
     {
     Images.push(new Image());
     Images[Images.length - 1].src = 'files/images/' + ImagesListe[i]+'.png';
     }*/
}




