// Get the canvas element
var canvas = document.getElementById( "canvas" );
// Get the 2D context for drawing
var ctx = canvas.getContext( "2d" );

// Frames-per-second
var FPS = 30;

// Particle object
var particle = {
    x: 250,
    y: 150,
    vx: 200,
    vy: 200,
    ax: 0,
    ay: 0,
    radius: 20,
    color: "red",
    draw: function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
        ctx.fill();
    },
    update: function() {
        this.vx += this.ax / FPS;
        this.vy += this.ay / FPS;
        this.x += this.vx / FPS;
        this.y += this.vy / FPS;
        // Collision detection
        if ( (this.x - this.radius) < 0 ) {
            this.x = this.radius;
            this.vx = -this.vx;
        }
        if ( (this.x + this.radius) > canvas.width ) {
            this.x = canvas.width - this.radius;
            this.vx = -this.vx;
        }
        if ( (this.y - this.radius) < 0 ) {
            this.y = this.radius;
            this.vy = -this.vy;
        }
        if ( (this.y + this.radius) > canvas.height ) {
            this.y = canvas.height - this.radius;
            this.vy = -this.vy;
        }
    }
};

// Game loop draw function
function draw() {
    ctx.clearRect( 0, 0, canvas.width, canvas.height );
    particle.draw();
}

// Game loop update function
function update() {
    particle.update();
}

function tick() {
    draw();
    update();
}

setInterval( tick, 1000 / FPS );
