// let pos;
// let vel;
// let acc;

class Ball {
  constructor() {
    this.pos = createVector(width / 2, heigth / 2);
    this.vel = p5.Vector.random2D();
    this.vel = mult(5);
    this.acc = createVector(0, 0.1);
    this.radius = 25;
  }

  //   pos = createVector(random(width), random(height));
  //   vel = createVector(0, 0);
  //   acc = p5.Vector.random2D();
  //   acc.mult(0.1);
  //   console.log('pos', pos);
  //   console.log('vel', vel);
  //   console.log('acc', acc);
  //   console.log('velMag', vel.mag());
  //   console.log('accMag', acc.mag());
  update() {
    this.vel.add(this.acc);
    this.vel.limit(20);
    this.pos.add(this.vel);
  }
  InfiniteEdge() {
    if (this.pos.x < 0) {
      this.pos.x += width;
    } else if (this.pos.x >= width) {
      this.pos.x -= width;
    }
    if (this.pos.y < 0) {
      this.pos.y += height;
    } else if (this.pos.y >= height) {
      this.pos.y -= height;
    }
  }
  display() {
    //   noStroke();
    //   fill('cornsilk');
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }
}

let aBall;
let bBall;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('salmon');
  aBall = new Ball();
}

function draw() {
  background('salmon');
  aBall.update();
  aBall.InfiniteEdge();
  aBall.display();
  bBall.update();
  bBall.InfiniteEdge();
  bBall.display();
}
function update() {}
function InfiniteEdge() {}
function display() {}
