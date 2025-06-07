const canvasBody = document.getElementById("canvas");
const drawArea = canvasBody.getContext("2d");
let w, h, particles;

const opts = {
    particleColor: "rgb(143, 143, 143)",
    lineColor: "rgb(143, 143, 143)",
    particleAmount: 60,
    defaultSpeed: 0.3,
    variantSpeed: 0.3,
    defaultRadius: 2,
    variantRadius: 2,
    linkRadius: 250,
};

function resizeReset() {
    w = canvasBody.width = window.innerWidth;
    h = canvasBody.height = window.innerHeight;
}

window.addEventListener("resize", () => {
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(resizeReset, 200);
});

function checkDistance(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
}

function linkPoints(point1, hubs) {
    const rgb = opts.lineColor.match(/\d+/g);
    for (let i = 0; i < hubs.length; i++) {
        const distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
        const opacity = 1 - distance / opts.linkRadius;
        if (opacity > 0) {
            drawArea.lineWidth = 0.5;
            drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
            drawArea.beginPath();
            drawArea.moveTo(point1.x, point1.y);
            drawArea.lineTo(hubs[i].x, hubs[i].y);
            drawArea.stroke();
        }
    }
}

class Particle {
    constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed;
        this.directionAngle = Math.random() * Math.PI * 2;
        this.color = opts.particleColor;
        this.radius = opts.defaultRadius + Math.random() * opts.variantRadius;
        this.vector = {
            x: Math.cos(this.directionAngle) * this.speed,
            y: Math.sin(this.directionAngle) * this.speed
        };
    }

    update() {
        this.border();
        this.x += this.vector.x;
        this.y += this.vector.y;
    }

    border() {
        if (this.x >= w || this.x <= 0) this.vector.x *= -1;
        if (this.y >= h || this.y <= 0) this.vector.y *= -1;
        this.x = Math.max(0, Math.min(w, this.x));
        this.y = Math.max(0, Math.min(h, this.y));
    }

    draw() {
        drawArea.beginPath();
        drawArea.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        drawArea.fillStyle = this.color;
        drawArea.fill();
    }
}

function setup() {
    particles = [];
    resizeReset();
    for (let i = 0; i < opts.particleAmount; i++) {
        particles.push(new Particle());
    }
    loop();
}

function loop() {
    drawArea.clearRect(0, 0, w, h);
    for (const particle of particles) {
        particle.update();
        particle.draw();
    }
    for (const particle of particles) {
        linkPoints(particle, particles);
    }
    requestAnimationFrame(loop);
}
setup();

// Wait for CONFIG to be available before starting
document.addEventListener('DOMContentLoaded', () => {
    if (typeof CONFIG !== 'undefined') {
        setup();
    } else {
        // Fallback if CONFIG isn't loaded yet
        setTimeout(() => setup(), 100);
    }
});