var menu = new menu();

function menu() {
    this.stateDEF = {
        'TITLE': 0,
        'SELECT': 1,
        'PAUSE': 2,
        'END': 3
    };
    this.state = 0;

    this.Afficher = function() {
        switch (this.state)
        {
            case this.stateDEF.TITLE:
                //Titre
                Game.context.drawImage(Images['MenuMain'], 0, 0, 1248, 900, 0, 0, 1248, 900);
                break;
            case this.stateDEF.SELECT:
                //Choix Joueur
                Game.context.drawImage(Images['MenuSelect'], 0, 0, 1248, 900, 0, 0, 1248, 900);
                break;
            case this.stateDEF.PAUSE:
                break;
            case this.stateDEF.END:
                Game.context.drawImage(Images['MenuEnd'], 0, 0, 1248, 900, 0, 0, 1248, 900);
                break;
        }
    };

    this.Use = function() {
        switch (this.state)
        {
            case this.stateDEF.TITLE:
                if (KeyState.space)
                    this.state = this.stateDEF.SELECT;
                break;
            case this.stateDEF.SELECT:
                //Lénine
                if (KeyState.l)
                {
                    player.type = player.typeDEF.LENINE;
                    Game.state = GAME;
                    this.state = this.stateDEF.END;
                }
                //Poutine
                if (KeyState.p)
                {
                    player.type = player.typeDEF.POUTINE;
                    Game.state = GAME;
                    this.state = this.stateDEF.END;
                }
                //Staline
                if (KeyState.s)
                {
                    player.type = player.typeDEF.STALINE;
                    Game.state = GAME;
                    this.state = this.stateDEF.END;
                }
                break;
            case this.stateDEF.PAUSE:
                break;
            case this.stateDEF.END:
                if (KeyState.escape)
                {
                    this.state = this.stateDEF.TITLE;
                }
                break;
        }

        this.Afficher();
    };
}