class Body {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0.1, 0.1);
    this.acc = createVector(0.01, 0.01);
    this.mass = random(16, 100);
    this.radius = this.mass ** (1 / 2);
    this.velvl = createVector(0, 0);
    this.accvl = createVector(0, 0);
  }

  attract(body) {
    let force = p5.Vector.sub(this.pos, body.pos);
    let dis = constrain(force.mag(), 20, 50);
    let strength = (G * (this.mass * body.mass)) / distance ** 3;
    force.setMag(strength);
    return force;
  }

  applyForce(force) {
    let forceDividedByMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceDividedByMass);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.velvl.set(this.vel);
    this.velvl.mult(5);

    this.accvl.set(this.acc);
    this.accvl.mult(50);

    this.acc.set(0, 0);
  }

  display() {
    noStroke();
    strokeWeight(2);
    fill(0, 150);
    circle(this.pos.x, this.pos.y, this.radius * 6);
  }

  displayVectors() {
    noFill();
    stroke('red');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.velvl.x,
      this.pos.y + this.velvl.y
    );
    stroke('blue');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.accvl.x,
      this.pos.y + this.accvl.y
    );
  }
}

let bodies = [];
let G = 0.5;
let showVector = false;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  reset();
}

function draw() {
  background(255);

  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      if (i !== j) {
        let forceForJ = bodies[i].attract(bodies[j]);
        bodies[j].applyForce(forceForJ);
      }
    }
    bodies[i].update();
    bodies[i].display();
    if (showVector) {
      bodies[i].displayVectors();
    }
  }
}

function mousePressed() {
  if (isMouseInsideCanvas()) {
    reset();
  }
}

function reset() {
  for (let i = 0; i < 30; i++) {
    bodies[i] = new Body(random(width), random(height));
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    showVector = !showVector;
  }
}
