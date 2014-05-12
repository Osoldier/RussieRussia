var menu = new menu();

function menu() {
    this.stateDEF = {
        'TITLE': 0,
        'SELECT': 1,
        'PAUSE': 2,
        'END': 3,
        'NOTHING': 4
    };
    this.state = 0;
    this.timer = null;
    this.defaultLockTime = 500;
    this.locked = false;
    this.Lock = function(time)
    {
        clearInterval(this.timer);
        this.locked = true;
        this.timer = setInterval("menu.Unlock();", time);
    };
    this.Unlock = function() {
        clearInterval(this.timer);
        this.locked = false;
    };

    this.SwitchToState = function(st) {
        switch (st)
        {
            case this.stateDEF.TITLE:
                //TITLE
                this.state = st;
                document.getElementById('soundGame').pause();
                document.getElementById('soundGame').load();
                document.getElementById('soundMenu').play();
                break;
            case this.stateDEF.SELECT:
                //PLAYER TYPE SELECTION
                this.state = st;
                break;
            case this.stateDEF.PAUSE:
                //PAUSE
                this.state = st;
                Game.state = MENU;
                break;
            case this.stateDEF.NOTHING:
                //NOTHING
                document.getElementById('soundMenu').pause();
                document.getElementById('soundMenu').load();
                
                document.getElementById('soundGame').play();
                this.state = st;
                Game.state = GAME;
                break;
            case this.stateDEF.END:
                //GAME OVER
                this.state = st;
                Game.state = MENU;
                break;
        }
    };

    this.Afficher = function() {
        switch (this.state)
        {
            case this.stateDEF.TITLE:
                //TITLE
                Game.context.drawImage(Images['menu'], 0, this.stateDEF.TITLE * 900, 1248, 900, 0, 0, 1248, 900);
                //sounds.list.menu.play();
                break;
            case this.stateDEF.SELECT:
                //PLAYER TYPE SELECTION
                Game.context.drawImage(Images['menu'], 0, this.stateDEF.SELECT * 900, 1248, 900, 0, 0, 1248, 900);
                break;
            case this.stateDEF.PAUSE:
                //PAUSE
                Game.context.drawImage(Images['menu'], 0, this.stateDEF.PAUSE * 900, 1248, 900, 0, 0, 1248, 900);
                console.log("pause");
                break;
            case this.stateDEF.NOTHING:
                //NOTHING
                break;
            case this.stateDEF.END:
                //GAME OVER
                Game.context.drawImage(Images['menu'], 0, this.stateDEF.END * 900, 1248, 900, 0, 0, 1248, 900);
                break;
        }
    };

    this.Use = function() {
        switch (this.state)
        {
            case this.stateDEF.TITLE:
                //TITLE
                if (KeyState.space)
                    this.SwitchToState(this.stateDEF.SELECT);
                this.Lock(this.defaultLockTime);
                break;

            case this.stateDEF.SELECT:
                //PLAYER TYPE SELECTION
                //Lénine
                if (KeyState.l)
                {
                    player.type = player.typeDEF.LENINE;
                    this.SwitchToState(this.stateDEF.NOTHING);
                    this.Lock(this.defaultLockTime);
                }
                //Poutine
                if (KeyState.p)
                {
                    player.type = player.typeDEF.POUTINE;
                    this.SwitchToState(this.stateDEF.NOTHING);
                    this.Lock(this.defaultLockTime);
                }
                //Staline
                if (KeyState.s)
                {
                    player.type = player.typeDEF.STALINE;
                    this.SwitchToState(this.stateDEF.NOTHING);
                    this.Lock(this.defaultLockTime);
                }
                break;
            case this.stateDEF.PAUSE:
                //PAUSE
                if (!this.locked)
                {
                    if (KeyState.p)
                    {
                        this.SwitchToState(this.stateDEF.NOTHING);
                        this.Lock(this.defaultLockTime);
                    }
                    if (KeyState.escape)
                    {
                        this.SwitchToState(this.stateDEF.END);
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
                        this.SwitchToState(this.stateDEF.TITLE);
                        this.Lock(this.defaultLockTime);
                    }
                }
                break;
        }
        this.Afficher();
    };
}