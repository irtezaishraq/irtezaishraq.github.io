// Last updated 12/05/20
// Individual pix manipulation on 

const canvas = document.getElementById('animation')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')

const block = canvas.width/4;
const vel = canvas.height / 1000;
const nLines = 30;
const lines = [];

var fps = 30;
var started = Date.now();

var duration = 120; // (seconds)
var now;
var then = Date.now();
var interval = 1000/fps;
var delta;

var trigger;

var image = new Image();

image.onload = function(){
    fillScreen(image);
    Update();
}

image.src = "./imgs/icons/favicon.jpg";

function fillScreen(img) {
    var scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    var x = (canvas.width / 2) - (img.width / 2) * scale;
    var y = (canvas.height / 2) - (img.height / 2) * scale;
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale); 
}

function fuzz(data){
    for (var i = 0; i < data.length; i += 4) {
        N = Math.floor(Math.random() * 3);
        if (N == 0){
            data[i] *= 1.3; // red
        } else if (N == 1) {
            data[i + 1] *= 1.2; // green
        } else {
            data[i + 2] *= 1.4; // blue
        }
    }
}

class line {
    constructor(X, W, V) {
        this.x = X; // Math.floor(Math.random()*canvas.width-block);
        this.width = W; // Math.floor(Math.random()*block);
        this.length = canvas.height;
        this.v = V; // Math.floor(Math.random()*30);
        this.currentY = 0;
        this.animate = function () {
            var imageData = ctx.getImageData(this.x, this.currentY, this.width, this.v);
            fuzz(imageData.data);
            ctx.putImageData(imageData, this.x, this.currentY);
            this.currentY += this.v;
            if (this.currentY > canvas.height) {
                this.refresh();
                return;
            }
        };
        this.refresh = function () {
            this.width = Math.ceil(Math.random() * block);
            this.x = Math.ceil(Math.random() * canvas.width) - this.width;
            this.v = Math.ceil(vel);
            this.currentY = 0;
        };
    }
}


for (let i = 0; i < nLines; i++){
    var W = Math.ceil(Math.random()*block);
    var X = Math.ceil(Math.random()*canvas.width)-W;
    var V = Math.ceil(vel);

    lines.push(new line(X,W,V));
}

function Update () {
    trigger = requestAnimationFrame(Update);
    now = Date.now();
    delta = now - then;
    if (delta > interval) {
        then = now;
        for (let i = 0; i < nLines; i++){
            lines[i].animate();
        }
    }
    if (now-started > duration * 1000){
        cancelAnimationFrame(trigger);
    }
}

Update();

function pullTrigger() {
    cancelAnimationFrame(trigger);
    console.log("Shot fired")
}

canvas.addEventListener('click', pullTrigger);