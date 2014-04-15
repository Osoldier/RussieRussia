var score = new score();

function score() {
    this.value = 0;
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
    };
};

