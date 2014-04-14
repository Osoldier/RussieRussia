var ImagesSprites = [
    "PaquetC.png", //TAPIS
    "Table.png",   //TABLE
    "PaquetC.png", //TABLEAU
    "PaquetC.png", //PEAUOURS
    "PaquetC.png", //CLEF
    "puit.png", //PUIT
    "PaquetC.png", //MUR
    "PaquetC.png", //TANK
    "DrapeauCom.png", //DRAPCOM
    "PaquetC.png", //LIVRE
    "PaquetC.png", //OBAMA
    "PaquetC.png", //BENLADEN
    "PaquetC.png", //YANOUKOVIC
    "bear.png",    //FEMINISTE
    "PaquetC.png", //OURS
    "Vodka.png",  //VODKA
    "Caviar.png", //CAVIAR
    "PaquetC.png", //CIGARETTE
    "PaquetC.png"  //PORTECRIMEA
];

var Sprites = new Array();

function loadSprites()
{
    for (var i = 0; i <= 18; i++)
    {
        Sprites.push(new Image());
        Sprites[Sprites.length - 1].src = 'files/images/' + ImagesSprites[i];
    }
}




