var menu = new menu();

function menu() {
    this.state = 0;

    this.Afficher = function() {
        switch (this.state)
        {
            case 0:
                //Titre
                Game.context.drawImage(Images['MenuMain'], 0, 0, 1248, 900, 0, 0, 1248, 900);
                break;
            case 1:
                //Choix Joueur
                Game.context.drawImage(Images['MenuSelect'], 0, 0, 1248, 900, 0, 0, 1248, 900);
                break;
        }
    };

    this.Use = function() {
        switch (this.state)
        {
            case 0:
                if (KeyState.space)
                    this.state = 1;
                break;
            case 1:
                //Lénine
                if (KeyState.l)
                {
                    player.type = player.typeDEF.LENINE;
                    Game.state = GAME;
                }
                //Poutine
                if (KeyState.p)
                {
                    player.type = player.typeDEF.POUTINE;
                    Game.state = GAME;
                }
                //Staline
                if (KeyState.s)
                {
                    player.type = player.typeDEF.STALINE;
                    Game.state = GAME;
                }
                break;
        }
        
        this.Afficher();
    };
}