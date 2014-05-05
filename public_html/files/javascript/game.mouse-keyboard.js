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
    'space': false,
    'escape': false,
    'ctrlLeft': false,
    'l': false,
    'p': false,
    'q': false,
    'y': false
};

//Gestion des touches du clavier
function setKeyState(e, state) {
    var key = e.keyCode;

    switch (key) {
        case 'A'.charCodeAt():
            KeyState.a = state;
            break;
        case 'D'.charCodeAt():
            KeyState.d = state;
            break;
        case 'W'.charCodeAt():
            KeyState.w = state;
            break;
        case 'S'.charCodeAt():
            KeyState.s = state;
            break;
        case 'L'.charCodeAt():
            KeyState.l = state;
            break;
        case 'P'.charCodeAt():
            KeyState.p = state;
            break;
        case 'Q'.charCodeAt():
            KeyState.q = state;
        case 'Y'.charCodeAt():
            KeyState.y = state;
            break;
        case 38 :
            KeyState.up = state;
            break;
        case 39 :
            KeyState.right = state;
            break;
        case 40 :
            KeyState.down = state;
            break;
        case 37 :
            KeyState.left = state;
            break;

        case 32 :
            KeyState.space = state;
            break;
        case 27 :
            KeyState.escape = state;
            break;
        case 17:
            KeyState.ctrlLeft = state;
            break;
        case 16:
            KeyState.Shift = state;
            break;
    }
}