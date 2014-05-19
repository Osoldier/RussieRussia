//##############################################################################
//Fichier : game.menu
//Description : Affichage et utilisation du menu
//Date : 12.05.2014
//Version : 1
//##############################################################################
var menu = new menu();

function menu() {
    this.state = {
        'TITLE': 0,
        'SELECT': 1,
        'PAUSE': 2,
        'END': 3,
        'NOTHING': 4,
        'CURRENT': 0
    };

//##############################################################################
//Verouillage du menu 0.5 secondes
//##############################################################################    
    this.timer = null;
    this.defaultLockTime = 500;
    this.locked = false;
    //#####Verouillage du menu#####//
    this.Lock = function(time)
    {
        clearInterval(this.timer);
        this.locked = true;
        this.timer = setInterval("menu.Unlock();", time);
    };
    //#####Deverouillage du menu#####//
    this.Unlock = function() {
        clearInterval(this.timer);
        this.locked = false;
    };

//##############################################################################
//Changement de l'etat du menu (debut,pause,...)
//##############################################################################    
    this.SwitchToState = function(e) {
        switch (e)
        {
            //#####Menu titre#####//
            case this.state.TITLE:
                this.state.CURRENT = e;
                document.getElementById('soundGame').pause();
                document.getElementById('soundGame').load();
                document.getElementById('soundMenu').play();
                break;
                //#####Menu de selection du joueur#####//
            case this.state.SELECT:
                this.state.CURRENT = e;
                break;
                //#####Menu pause#####//
            case this.state.PAUSE:
                if (!this.locked)
                {
                    this.state.CURRENT = e;
                    Game.state = MENU;
                    this.Lock(this.defaultLockTime);
                }
                break;
                //#####Menu en jeu#####//
            case this.state.NOTHING:
                this.Lock(this.defaultLockTime);
                document.getElementById('soundMenu').pause();
                document.getElementById('soundMenu').load();
                document.getElementById('soundGame').play();
                this.state.CURRENT = e;
                Game.state = GAME;
                break;
                //#####Menu game over#####//
            case this.state.END:
                this.state.CURRENT = e;
                Game.state = MENU;
                break;
        }
    };


    this.Update = function() {
//##############################################################################
//Utilisation du menu
//##############################################################################
        switch (this.state.CURRENT)
        {
            //#####Menu titre#####//
            case this.state.TITLE:
                if (input.KeyState.SPACE)
                    this.SwitchToState(this.state.SELECT);
                this.Lock(this.defaultLockTime);
                break;
                //#####Menu de selection du joueur#####//
            case this.state.SELECT:
                //####Lenine#####//
                if (input.KeyState.L)
                {
                    player.type.CURRENT = player.type.LENINE;
                    this.SwitchToState(this.state.NOTHING);
                    this.Lock(this.defaultLockTime);
                }
                //#####Poutine#####//
                if (input.KeyState.P)
                {
                    player.type.CURRENT = player.type.POUTINE;
                    this.SwitchToState(this.state.NOTHING);
                    this.Lock(this.defaultLockTime);
                }
                //#####Staline#####//
                if (input.KeyState.S)
                {
                    player.type.CURRENT = player.type.STALINE;
                    this.SwitchToState(this.state.NOTHING);
                    this.Lock(this.defaultLockTime);
                }
                break;
                //#####Menu pause#####//
            case this.state.PAUSE:
                if (!this.locked)
                {
                    //#####Reprendre#####//
                    if (input.KeyState.P)
                    {
                        this.SwitchToState(this.state.NOTHING);
                        this.Lock(this.defaultLockTime);
                    }
                    //#####Quitter la partie#####//
                    if (input.KeyState.ESCAPE)
                    {
                        this.SwitchToState(this.state.END);
                        this.Lock(this.defaultLockTime);
                    }
                }
                break;
                //#####Menu game over#####//
            case this.state.END:
                if (!this.locked)
                {
                    //#####Aller vers le menu titre#####//
                    if (input.KeyState.ESCAPE)
                    {
                        this.SwitchToState(this.state.TITLE);
                        this.Lock(this.defaultLockTime);
                    }
                }
                break;
        }

//##############################################################################
//Affichage du menu
//##############################################################################  
        switch (this.state.CURRENT)
        {
            //#####Menu titre#####//
            case this.state.TITLE:
                //TITLE
                Game.context.drawImage(Images['menu'], 0, this.state.TITLE * 900, 1248, 900, 0, 0, 1248, 900);
                //sounds.list.menu.play();
                break;
                //#####Menu de selection du joueur#####//
            case this.state.SELECT:
                Game.context.drawImage(Images['menu'], 0, this.state.SELECT * 900, 1248, 900, 0, 0, 1248, 900);
                break;
                //#####Menu pause#####//
            case this.state.PAUSE:
                Game.context.drawImage(Images['menu'], 0, this.state.PAUSE * 900, 1248, 900, 0, 0, 1248, 900);
                break;
                //#####Menu en jeu#####//
            case this.state.NOTHING:
                break;
                //#####Menu game over#####//
            case this.state.END:
                Game.context.drawImage(Images['menu'], 0, this.state.END * 900, 1248, 900, 0, 0, 1248, 900);
                break;
        }
    };
}