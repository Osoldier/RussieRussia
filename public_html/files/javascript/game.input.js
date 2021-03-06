//##############################################################################
//Fichier : game.input.js
//Description : Gestion du clavier
//Date : 12.05.2014
//Version : 1
//##############################################################################
var input = new Input();

function Input() {
    //#####Etat des touches#####// 
    this.KeyState = {
        'W': false,
        'S': false,
        'A': false,
        'N': false,
        'E': false,
        'T': false,
        'K': false,
        'D': false,
        'UP': false,
        'DOWN': false,
        'LEFT': false,
        'RIGHT': false,
        'SPACE': false,
        'ESCAPE': false,
        'CTRL_LEFT': false,
        'L': false,
        'P': false,
        'R': false,
        'Q': false,
        'SHIFT': false,
        'N1': false,
        'N2': false,
        'N3': false
    };

    //#####Mise à jour de l'etat des touches#####// 
    this.setKeyState = function(e, state) {
        var key = e.keyCode;
        switch (key) {
            //#####TOUCHE A#####// 
            case 'A'.charCodeAt():
                this.KeyState.A = state;
                break;
                //#####TOUCHE G#####// 
            case 'D'.charCodeAt():
                this.KeyState.D = state;
                break;
                //#####TOUCHE R#####// 
            case 'R'.charCodeAt():
                this.KeyState.R = state;
                break;
                //#####TOUCHE N#####// 
            case 'N'.charCodeAt():
                this.KeyState.N = state;
                break;
                //#####TOUCHE T#####// 
            case 'T'.charCodeAt():
                this.KeyState.T = state;
                break;
                //#####TOUCHE E#####// 
            case 'E'.charCodeAt():
                this.KeyState.E = state;
                break;
                //#####TOUCHE W#####// 
            case 'W'.charCodeAt():
                this.KeyState.W = state;
                break;
                //#####TOUCHE S#####// 
            case 'S'.charCodeAt():
                this.KeyState.S = state;
                break;
                //#####TOUCHE L#####// 
            case 'L'.charCodeAt():
                this.KeyState.L = state;
                break;
                //#####TOUCHE K#####// 
            case 'K'.charCodeAt():
                this.KeyState.K = state;
                break;
                //#####TOUCHE P#####// 
            case 'P'.charCodeAt():
                this.KeyState.P = state;
                break;
                //#####TOUCHE 1#####// 
            case '1'.charCodeAt():
                this.KeyState.N1 = state;
                break;
                //#####TOUCHE 2#####// 
            case '2'.charCodeAt():
                this.KeyState.N2 = state;
                break;
                //#####TOUCHE 3#####// 
            case '3'.charCodeAt():
                this.KeyState.N3 = state;
                break;
                //#####TOUCHE FLECHE HAUT#####// 
            case 38 :
                this.KeyState.UP = state;
                break;
                //#####TOUCHE FLECHE DROITE#####// 
            case 39 :
                this.KeyState.RIGHT = state;
                break;
                //#####TOUCHE FLECHE BAS#####// 
            case 40 :
                this.KeyState.DOWN = state;
                break;
                //#####TOUCHE FLECHE GAUCHE#####// 
            case 37 :
                this.KeyState.LEFT = state;
                break;
                //#####TOUCHE ESPACE#####// 
            case 32 :
                this.KeyState.SPACE = state;
                break;
                //#####TOUCHE ESCAPE#####// 
            case 27 :
                this.KeyState.ESCAPE = state;
                break;
                //#####TOUCHE CTRL GAUCHE#####// 
            case 17:
                this.KeyState.CTRL_LEFT = state;
                break;
                //#####TOUCHE SHIFT#####// 
            case 16:
                this.KeyState.SHIFT = state;
                break;
        }
    };
}
