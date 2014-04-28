var menuState = 0;

function useMenu() {
    switch (menuState)
    {
        case 0:
            if (KeyState.space)
                menuState = 1;
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
}