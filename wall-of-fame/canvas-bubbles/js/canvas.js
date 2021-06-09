const canvas = document.getElementById("canvas-el");

const width = window.innerWidth;
const height = window.innerHeight;

let circles = [];
let totalNum = 25;
let maxRadius = 60;
let minRadius = 20;
let theme = "light";
let burstCircles = [];

canvas.width = width;
canvas.height = height;

let timeoutForLines;

let c = canvas.getContext("2d");

class Circle {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.id = uid();
    this.radius = radius;
    this.color =
      color ||
      `rgba(${this._rand(255)}, ${this._rand(255)}, ${this._rand(255)}, 1)`;
  }

  draw() {
    const [x, y, r] = [this.x, this.y, this.radius];

    let grd = c.createRadialGradient(x, y, 0, x, y, r);
    grd.addColorStop(
      0.7,
      `rgba(${theme === "light" ? "255,255,255" : "0,0,0"},0)`
    );
    grd.addColorStop(1, this.color);
    c.fillStyle = grd;
    c.beginPath();
    c.arc(x, y, r, 0, Math.PI * 2, false);
    c.strokeStyle = this.color;
    c.fill();

    c.beginPath();
    c.ellipse(x, y - r + r / 1.25, r / 1.15, r / 1.25, Math.PI, 0, 2 * Math.PI);
    let grd2 = c.createRadialGradient(x, y, 0, x, y, r);
    grd2.addColorStop(
      0.7,
      `rgba(${theme === "light" ? "255,255,255" : "0,0,0"},0)`
    );
    grd2.addColorStop(1, this.color);
    c.fillStyle = grd2;
    c.fill();

    c.beginPath();
    c.ellipse(
      x - r / 2 - r * 0.05,
      y - r / 2 - r * 0.15,
      r / 20,
      r / 6,
      Math.PI / 3.5,
      0,
      2 * Math.PI
    );
    c.fillStyle = "white";
    c.fill();
  }

  update() {
    if (this.x + this.radius > width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }

  _rand(n) {
    return Math.random() * n;
  }
}

class Line {
  constructor(index, bubble) {
    this.done = false;
    this.distance = 0;
    this.lineLength = 0;
    this.reverse = false;
    this.returnDistance = 0;

    this.index = index;
    this.bubble = bubble;
  }

  draw() {
    if (this.done) {
      if (timeoutForLines) return;

      timeoutForLines = setTimeout(() => {
        burstCircles = burstCircles.filter(
          (c) => c.id === this.bubble.id && this.done
        );

        clearTimeout(timeoutForLines);
        timeoutForLines = null;
      }, 2000);
      return;
    }

    this.update();

    c.beginPath();
    c.lineCap = "round";
    c.strokeStyle = this.bubble.color;
    c.lineWidth = Math.min(this.bubble.radius / 10, 5);
    c.moveTo(this.x, this.y);

    if (this.x < Math.round(this.bubble.x)) {
      this.endX = this.lineLength * -1;
    }
    if (this.y < Math.round(this.bubble.y)) {
      this.endY = this.lineLength * -1;
    }
    if (this.y === Math.round(this.bubble.y)) {
      this.endY = 0;
    }
    if (this.x === Math.round(this.bubble.x)) {
      this.endX = 0;
    }

    c.lineTo(this.x + this.endX, this.y + this.endY);
    c.stroke();
  }

  update() {
    const { x, y, radius } = this.bubble;
    this.x = Math.round(
      x +
        (radius + this.returnDistance) *
          Math.cos((2 * Math.PI * this.index) / 8)
    );

    this.y = Math.round(
      y +
        (radius + this.returnDistance) *
          Math.sin((2 * Math.PI * this.index) / 8)
    );

    this.lineLength = radius * this.distance;
    this.endX = this.lineLength;
    this.endY = this.lineLength;

    const factor = radius / 10;

    if (this.lineLength < 4 * factor && !this.reverse) {
      this.distance += 0.05;
    } else {
      if (this.distance >= 0) {
        this.reverse = true;
        this.distance -= 0.05;
        this.returnDistance += (3 * factor) / 4;
      } else {
        this.done = true;
      }
    }
  }
}

canvas.addEventListener("mousemove", (e) => {
  clearTimeout(timeoutForLines);
  timeoutForLines = null;

  const { clientX: x, clientY: y } = e;

  const isInsideCircle = ({ x: xCoord, y: yCoord, radius }) => {
    const nX = xCoord - x - Math.PI;
    const nY = y - yCoord - Math.PI;
    return nX * nX + nY * nY - radius * radius < 0;
  };

  circles = circles.filter((c) => {
    const isInside = isInsideCircle(c);

    if (isInside) {
      const lines = [];
      for (let index = 0; index < 8; index++) {
        line = new Line(index, c);
        lines.push(line);
      }
      c.lines = lines;
      burstCircles.push(c);
    }

    return !isInside;
  });
});

function computeCircles() {
  circles = [];
  burstCircles = [];

  for (let index = 0; index < totalNum; index++) {
    let dx = (Math.random() - 0.5) * 3;
    let dy = (Math.random() - 0.5) * 3;
    let radius = Math.random() * maxRadius + minRadius * 1;
    let x = Math.random() * (width - radius * 2) + radius;
    let y = Math.random() * (height - radius * 2) + radius;
    circles.push(new Circle(x, y, dx, dy, radius));
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, width, height);
  for (let index = 0; index < circles.length; index++) {
    circles[index].update();
  }
  for (let index = 0; index < burstCircles.length; index++) {
    for (let j = 0; j < burstCircles[index].lines.length; j++) {
      burstCircles[index].lines[j].draw();
    }
  }
}

function uid() {
  return Math.random() * 100 + new Date().getTime().toString();
}

computeCircles();
animate();
