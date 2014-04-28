var menuState = 0;

function useMenu() {
    switch (menuState)
    {
        case 0:
            if (KeyState.space)
                menuState = 1;
            break;
        case 1:
            if (KeyState.l)
            {
                Game.state = GAME;
            }
           
            if (KeyState.p)
            {
                Game.state = GAME;
            }
           
            if (KeyState.s)
            {
                Game.state = GAME;
            }


            break;
    }
    if (menuState == 0)
    {

    }

}