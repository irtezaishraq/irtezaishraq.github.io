// ammended from https://youtu.be/YkPyedMS6s4
// Last updated 12/05/20
var canvas = document.getElementById('animation')

// function windowResized(){
//     resizeCanvas(windowWidth, windowHeight);
// }

// function setup() {
//     canvas = createCanvas(windowWidth, windowHeight);
//     canvas.position(0,0);
// }

// function draw() {
//     background(0);
// }

// var ctx = canvas.getContext('2d')
// ctx.globalAlpha = 0.02

// ctx.beginPath();
// ctx.fillStyle = "#000000";
// ctx.arc(canvas.width / 2, canvas.height / 2, 10, 0, Math.PI*2);
// ctx.fill()

// const n_balls = 10;

// function Circle (x,y,r,c) {
//     this.x = x;
//     this.y = y;
//     this.r = r;
//     this.c = c;

//     this.vx = (Math.random() * 4) + 1;
//     this.vx *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
//     this.vy = (Math.random() * 4) + 1;
//     this.vy *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

//     this.draw = function () {
//         ctx.beginPath();
//         ctx.fillStyle = this.c;
//         ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
//         ctx.fill();
//     }

//     this.animate = function () {
//         // Solid walls
//         if (this.x - this.r < 0 || this.x + this.r > canvas.width) {
//             this.vx = -this.vx;
//         }
//         if (this.y - this.r < 0 || this.y + this.r > canvas.height) {
//             this.vy = -this.vy;
//         }
        
//         V = attractor(this.x, this.y, this.vx, this.vy);

//         this.x += V[0];
//         this.y += V[1];

//         this.draw();
//     }
// }

// function attractor(x, y, vx, vy) {
    
//     const xr = (x - canvas.width/2);
//     const yr = (y - canvas.height/2);

//     r = (xr**2 + yr**2)**(1/2);
//     theta = Math.atan(yr/xr);

//     dvx = -10000*(r**(-2))*Math.cos(theta);
//     dvy = -10000*(r**(-2))*Math.sin(theta);

//     nvx = vx + dvx;
//     nvy = vy + dvy;

//     return [nvx, nvy]
// }

// const balls = [];
// const colours = ["#da8620", "#da9520","#DAB520","#DAB420","#DAC420", "#C4A21D", "#E1BD33","#DAD320"];

// for (let i = 0; i < n_balls; i++) {
//     let r = Math.floor(Math.random()*30) + 15;
//     let x = Math.random()*(canvas.width - r*2) + r;
//     let y = Math.random()*(canvas.height - r*2) + r;
//     let c = colours[Math.floor(Math.random() * colours.length)];
//     balls.push(new Circle(x,y,r,c));
// }

// function Update () {
//     for (let i = 0; i < balls.length; i++) {
//         balls[i].animate();
//     }
//     requestAnimationFrame(Update);
// }

// Update();