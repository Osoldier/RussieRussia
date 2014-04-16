var score = new score();

function score() {
    this.value = 0;
    this.hunger = 100;
    this.
    this.inventory = {};
    this.canvas = null;
    this.context = null;
    this.background = new Image();
    this.background.src = 'files/images/parchemin_score.jpg';

    this.Initialize = function() {
        this.canvas = document.getElementById('score');
        this.context = this.canvas.getContext('2d');       
    };
    
    this.Update = function()
    {
        this.context.drawImage(this.background,0,0,200,768);
        //RUSSIE
        this.context.fillStyle = "white"
        this.context.beginPath();
        this.context.rect(0, 200-this.hunger, 10,this.hunger);
        this.context.fill();
        this.context.fillStyle = "darkblue"
        this.context.beginPath();
        this.context.rect(10, 200-this.hunger, 10,this.hunger);
        this.context.fill();
        this.context.fillStyle = "red"
        this.context.beginPath();
        this.context.rect(20, 200-this.hunger, 10,this.hunger);
        this.context.fill();
        //FIN_RUSSIE
        //UKRAINE
    };
};

