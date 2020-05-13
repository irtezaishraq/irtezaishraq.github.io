// Last updated 12/05/20
// Pixel manipulation on Canvas

const canvas = document.getElementById('animation')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')

const block = canvas.width/6;

var fps = 4;
var now;
var started = Date.now();
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
            data[i] *= 1.1; // red
        } else if (N == 1) {
            data[i + 1] *= 1.1; // green
            
        } else {
            data[i + 2] *= 1.1; // blue
        }
    }
}

function Update () {
    trigger = requestAnimationFrame(Update);
    now = Date.now();
    delta = now - then;
    if (delta > interval) {
        then = now;
        X = Math.floor(Math.random()*canvas.width);
        Y = Math.floor(Math.random()*canvas.height);
        // var imageData = ctx.getImageData(X,Y,Math.floor(Math.random()*block), Math.floor(Math.random()*block));
        var imageData = ctx.getImageData(X,Y,Math.floor(Math.random()*block), canvas.height-Y);
        var imageData2 = ctx.getImageData(X,0,Math.floor(Math.random()*block), canvas.height-Y);
        fuzz(imageData2.data);
        ctx.putImageData(imageData2, X,0);
        fuzz(imageData.data);
        ctx.putImageData(imageData, X,Y);
    }
}

Update();

function pullTrigger() {
    cancelAnimationFrame(trigger);
    console.log("Shot fired")
}
canvas.addEventListener('click', pullTrigger);

