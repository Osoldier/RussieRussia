var sounds = new soundManager;

function soundManager() {
    this.sounds = new Array();
    this.Initialize = function()
    {
        this.sounds.push(new Audio('files/Sons/3500.mp3'));
        this.sounds.push(new Audio('files/Sons/3501.mp3'));
        this.sounds.push(new Audio('files/Sons/3502.mp3'));
        this.sounds.push(new Audio('files/Sons/3608.mp3'));
    };

}
;