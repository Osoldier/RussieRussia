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
        if (!this.locked)
        {
            switch (st)
            {
                case this.state.TITLE:
                    //TITLE
                    this.state.CURRENT = st;
                    document.getElementById('soundGame').pause();
                    document.getElementById('soundGame').load();
                    document.getElementById('soundMenu').play();
                    break;
                case this.state.SELECT:
                    //PLAYER TYPE SELECTION
                    this.state.CURRENT = st;
                    break;
                case this.state.PAUSE:
                    //PAUSE
                    this.state.CURRENT = st;
                    Game.state = MENU;
                    break;
                case this.state.NOTHING:
                    //NOTHING               
                    document.getElementById('soundMenu').pause();
                    document.getElementById('soundMenu').load();

                    document.getElementById('soundGame').play();
                    this.state.CURRENT = st;
                    Game.state = GAME;
                    break;
                case this.state.END:
                    //GAME OVER
                    this.state.CURRENT = st;
                    Game.state = MENU;
                    break;
            }
    }
    this.Lock(menu.defaultLockTime);
}
;

this.Afficher = function() {
    switch (this.state.CURRENT)
    {
        case this.state.TITLE:
            //TITLE
            Game.context.drawImage(Images['menu'], 0, this.state.TITLE * 900, 1248, 900, 0, 0, 1248, 900);
            //sounds.list.menu.play();
            break;
        case this.state.SELECT:
            //PLAYER TYPE SELECTION
            Game.context.drawImage(Images['menu'], 0, this.state.SELECT * 900, 1248, 900, 0, 0, 1248, 900);
            break;
        case this.state.PAUSE:
            //PAUSE
            Game.context.drawImage(Images['menu'], 0, this.state.PAUSE * 900, 1248, 900, 0, 0, 1248, 900);
            break;
        case this.state.NOTHING:
            //NOTHING
            break;
        case this.state.END:
            //GAME OVER
            Game.context.drawImage(Images['menu'], 0, this.state.END * 900, 1248, 900, 0, 0, 1248, 900);
            break;
    }
};

this.Use = function() {
    switch (this.state.CURRENT)
    {
        case this.state.TITLE:
            //TITLE
            if (KeyState.space)
                this.SwitchToState(this.state.SELECT);
            this.Lock(this.defaultLockTime);
            break;

        case this.state.SELECT:
            //PLAYER TYPE SELECTION
            //Lénine
            if (KeyState.l)
            {
                player.type = player.typeDEF.LENINE;
                this.SwitchToState(this.state.NOTHING);
                this.Lock(this.defaultLockTime);
            }
            //Poutine
            if (KeyState.p)
            {
                player.type = player.typeDEF.POUTINE;
                this.SwitchToState(this.state.NOTHING);
                this.Lock(this.defaultLockTime);
            }
            //Staline
            if (KeyState.s)
            {
                player.type = player.typeDEF.STALINE;
                this.SwitchToState(this.state.NOTHING);
                this.Lock(this.defaultLockTime);
            }
            break;
        case this.state.PAUSE:
            //PAUSE
            if (!this.locked)
            {
                if (KeyState.p)
                {
                    this.SwitchToState(this.state.NOTHING);
                    this.Lock(this.defaultLockTime);
                }
                if (KeyState.escape)
                {
                    this.SwitchToState(this.state.END);
                    this.Lock(this.defaultLockTime);
                }
            }
            break;

        case this.state.END:
            //GAME OVER
            if (!this.locked)
            {
                if (KeyState.escape)
                {
                    this.SwitchToState(this.state.TITLE);
                    this.Lock(this.defaultLockTime);
                }
            }
            break;
    }
    this.Afficher();
};
}