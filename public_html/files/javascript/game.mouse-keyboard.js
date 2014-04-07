//ETAT CLAVIER
var KeyState = {
    'w': false,
    's': false,
    'a': false,
    'd': false,
    'up': false,
    'down': false,
    'left': false,
    'right': false,
    'space': false
};

//JQUERY
//
//KeyDown
$(function() {
    $(document).keydown(function(e) {
        setKeyState(e, true);
    });
    //KeyUp
    $(document).keyup(function(e) {
        setKeyState(e, false);
    });
});

//Gestion des touches du clavier
function setKeyState(e, state) {
    var key = e.keyCode;

    switch (key) {
        case 17:
            vgKeyState.ctrlLeft = state;
            break;
    }
}