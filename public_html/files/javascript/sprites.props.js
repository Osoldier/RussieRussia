var ImagesSprites = [
    "PaquetC.png", //0
    "Table.png",
    "PaquetC.png",
    "PaquetC.png",
    "PaquetC.png",
    "PaquetC.png", //5
    "PaquetC.png",
    "PaquetC.png",
    "LivreKarlM.png",
    "PaquetC.png",
    "PaquetC.png", //10
    "PaquetC.png",
    "PaquetC.png",
    "bear.png",
    "PaquetC.png",
    "Caviar.png", //15
    "PaquetC.png",
    "PaquetC.png",
    "PaquetC.png" //18
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




