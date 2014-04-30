var menu = new menu();

function menu() {
    this.stateDEF = {
        'TITLE': 0,
        'SELECT': 1,
        'PAUSE': 2,
        'NOTHING': 3,
        'END': 4
    };
    this.state = 0;
    this.timer = null;
    this.defaultLockTime = 500;
    this.locked = false;
    this.Lock = function(time)
    { 
        clearInterval(this.timer);
        this.locked = true;
        this.timer = setInterval("menu.unlock();", time);
    };
    this.Unlock = function() {
        clearInterval(this.timer);
        this.locked = false;
    };
    this.Afficher = function() {
        switch (this.state)
        {
            case this.stateDEF.TITLE:
                //TITLE
                Game.context.drawImage(Images['MenuMain'], 0, 0, 1248, 900, 0, 0, 1248, 900);
                break;
            case this.stateDEF.SELECT:
                //PLAYER TYPE SELECTION
                Game.context.drawImage(Images['MenuSelect'], 0, 0, 1248, 900, 0, 0, 1248, 900);
                break;
            case this.stateDEF.PAUSE:
                //PAUSE
                Game.context.drawImage(Images['MenuPause'], 0, 0, 1248, 900, 0, 0, 1248, 900);
                break;
            case this.stateDEF.NOTHING:
                //NOTHING
                break;
            case this.stateDEF.END:
                //GAME OVER
                Game.context.drawImage(Images['MenuEnd'], 0, 0, 1248, 900, 0, 0, 1248, 900);
                break;
        }
    };

    this.Use = function() {
        switch (this.state)
        {
            
            case this.stateDEF.TITLE:
                //TITLE
                if (KeyState.space)
                    this.state = this.stateDEF.SELECT;
                this.Lock(this.defaultLockTime);
                break;
                
            case this.stateDEF.SELECT:
                //PLAYER TYPE SELECTION
                //Lénine
                if (KeyState.l)
                {
                    player.type = player.typeDEF.LENINE;
                    Game.state = GAME;
                    this.state = this.stateDEF.NOTHING;
                     this.Lock(this.defaultLockTime);
                }
                //Poutine
                if (KeyState.p)
                {
                    player.type = player.typeDEF.POUTINE;
                    Game.state = GAME;
                    this.state = this.stateDEF.NOTHING;
                     this.Lock(this.defaultLockTime);
                }
                //Staline
                if (KeyState.s)
                {
                    player.type = player.typeDEF.STALINE;
                    Game.state = GAME;
                    this.state = this.stateDEF.NOTHING;
                     this.Lock(this.defaultLockTime);
                }
                break;               
            case this.stateDEF.PAUSE:
                 //PAUSE
                if (!this.locked)
                {
                    if (KeyState.p)
                    {
                        Game.state = GAME;
                        this.state = this.stateDEF.NOTHING;
                         this.Lock(this.defaultLockTime);
                    }
                    if (KeyState.escape)
                    {
                        this.state = this.stateDEF.END;
                         this.Lock(this.defaultLockTime);
                    }
                }
                break;
                
            case this.stateDEF.END:
                //GAME OVER
                if (!this.locked)
                {
                    if (KeyState.escape)
                    {
                        this.state = this.stateDEF.TITLE;
                         this.Lock(this.defaultLockTime);
                    }
                }
                break;
        }

        this.Afficher();
    };
}