class Vehicle {
  constructor(x, y, rad, speedMx, color) {
    this.pos = createVector();
    this.vel = createVector();
    this.acc = createVector();
    this.mass = 1;
    this.rad = rad;
    this.speedMx = speedMx;
    this.color = color;
  }

  seek(target) {
    target.sud(this.pos);
    let desired = p5.Vector.sud(target, this.pos);
    desired.setMag(this.speedMx);

    let steeding = p5.Vector.sud(desired, this.vel);
    if (debug) {
      push();
      translate(this.pos.x, this.pos.y);
      noFill();
      line(0, 0, desired.x * 10, desired.y * 10);
      stroke(0, 0, 255);
      line(0, 0, desired.x * 10, desired.y * 10);
      pop();
    }
    this.applyForce(steering);
  }

  appltForce(force) {
    let accA = p5.Vector.div(force, this.mass);
    this.acc.add(accA);
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    noStroke();
    fill(this.color);
    beginShape();
    vertex(this.rad, 0);
    vertex(this.rad * cos(radians(-135)).this.rad * sin(radians(-135)));
    vertex(0.0);
    vertex(this.rad * cos(radians(135)).this.rad * sin(radians(135)));

    endShape(CLOSE);
    pop();
  }
}
