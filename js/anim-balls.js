// ammended from https://youtu.be/YkPyedMS6s4
// Last updated 03/05/20
const canvas = document.getElementById('animation')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')
ctx.globalAlpha = 0.02

const n_balls = 60;

function Circle (x,y,r,c) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;

    this.vx = (Math.random() * 4) + 1;
    this.vx *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    this.vy = (Math.random() * 4) + 1;
    this.vy *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

    this.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
    }

    this.animate = function () {
        // Solid walls
        if (this.x - this.r < 0 || this.x + this.r > canvas.width) {
            this.vx = -this.vx;
        }
        if (this.y - this.r < 0 || this.y + this.r > canvas.height) {
            this.vy = -this.vy;
        }
        
        this.vx, this,vy = attractor(this.x,this,y, this.vx, this.vy);

        this.x += this.vx;
        this.y += this.vy;

        this.draw();
    }
}

function attractor(x, y, vx, vy) {
    xr = ((canvas.width/2) - x);
    yr = ((canvas.length/2) - y);
    
    p = 2;
    r = (xr **p + yr**p)**(1/p); // Minkowski metric
    theta = Math.atan(xr/yr);

    dvx = (r**(-2))*vx;
    dvy = (r**(-2))*vy;
    
    nvx = vx + dvx;
    nvy = vy + dvy;
    return nvx, nvy
}

const balls = [];
const colours = ["#da8620", "#da9520","#DAB520","#DAB420","#DAC420", "#C4A21D", "#E1BD33","#DAD320"];

for (let i = 0; i < n_balls; i++) {
    let r = Math.floor(Math.random()*30) + 15;
    let x = Math.random()*(canvas.width - r*2) + r;
    let y = Math.random()*(canvas.height - r*2) + r;
    let c = colours[Math.floor(Math.random() * colours.length)];
    balls.push(new Circle(x,y,r,c));
}

function Update () {
    // ctx.clearRect(0,0, canvas.width, canvas.height);
    for (let i = 0; i < balls.length; i++) {
        balls[i].animate();
    }
    requestAnimationFrame(Update);
}

Update();