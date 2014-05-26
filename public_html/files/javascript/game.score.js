//##############################################################################
//Fichier : game.score.js
//Description : Gestion du score / vie
//Date : 26.05.2014
//Version : 1
//##############################################################################
var score = new score();

function score() {
    this.value = 0;
    this.hunger = 200;
    this.flagSize = 150;
    this.lifeSprite = new Image();
    this.lifeSprite.src = 'files/images/score/poupee.png';
    this.inventory = {};
    this.canvas = null;
    this.context = null;
    this.background = new Image();
    this.background.src = 'files/images/score/paper.png';

    this.Initialize = function() {
        this.canvas = document.getElementById('score');
        this.context = this.canvas.getContext('2d');
    };

    this.Update = function()
    {
        this.hunger -= 0.1;
        if (this.hunger <= 0) {
            this.hunger = 0;
            player.life--;
            this.hunger = 200;
            if (player.life <= 0) {
                player.audio.Ouch.currentTime = 0;
                player.audio.Ouch.play();
                player.room = 9;
                player.life = 3;
                player.object1 = null;
                player.object2 = null;
                player.object3 = null;
                this.hunger = 200;
                EnemyList = new Array();
                this.value = 0;
                menu.SwitchToState(menu.state.END);
            }
        }
        this.context.drawImage(this.background, 0, 0, 200, 768);
        for (var i = 1; i <= player.life; i++) {
            this.context.drawImage(this.lifeSprite, 20 + (i * 32), 380, 32, 64);
        }
        var ruSize = this.flagSize / 3;
        //RUSSIE
        this.context.fillStyle = "white"
        this.context.beginPath();
        this.context.rect(20, 650 - this.hunger, ruSize, this.hunger);
        this.context.fill();
        this.context.fillStyle = "darkblue"
        this.context.beginPath();
        this.context.rect(20 + ruSize, 650 - this.hunger, ruSize, this.hunger);
        this.context.fill();
        this.context.fillStyle = "red"
        this.context.beginPath();
        this.context.rect(20 + ruSize * 2, 650 - this.hunger, ruSize, this.hunger);
        this.context.fill();
        //FIN_RUSSIE
        //UKRAINE
        var ukSize = this.flagSize / 2;
        this.context.fillStyle = "darkblue"
        this.context.beginPath();
        this.context.rect(20, 650 - 200, ukSize, 200 - this.hunger);
        this.context.fill();
        this.context.fillStyle = "yellow"
        this.context.beginPath();
        this.context.rect(20 + ukSize, 650 - 200, ukSize, 200 - this.hunger);
        this.context.fill();
        //FIN_UKRAINE

        //OBJETS
        var beginObject = 60;
        var space = 5;
        if (player.object1 != null) {
            this.context.drawImage(canvas.IMAGES[player.object1], beginObject, 85, 32, 32);
        }
        if (player.object2 != null) {
            this.context.drawImage(canvas.IMAGES[player.object2], beginObject + 32 + space, 85, 32, 32);
        }
        if (player.object3 != null) {
            this.context.drawImage(canvas.IMAGES[player.object3], beginObject + 32 + 32 + space, 85, 32, 32);
        }
        this.context.font = "20px Georgia";
        this.context.fillStyle = "red"
        this.context.fillText(time, 60, 350);
        this.context.fillText("Score: " + this.value, 60, 300);
    };
}

//CHRONO
var time = "0:0:0";
function changeTime() {
    var timeSplited = time.split(':');
    var hour = timeSplited[0];
    var minute = timeSplited[1];
    var second = timeSplited[2];
    second++;
    if (second == 60) {
        second = '0';
        minute++;
        if (minute == 60) {
            minute = '0';
            hour++;
        }
    }
    hour = '0' + hour;
    hour = hour.toString().substr(-2, 2);
    minute = '0' + minute;
    minute = minute.toString().substr(-2, 2);
    second = '0' + second;
    second = second.toString().substr(-2, 2);
    time = hour + ':' + minute + ':' + second;
}
var instance = self.setInterval(changeTime, 1000);
