class Aattraction {
  constructor() {
    this.pos = createVector(x, y);
    this.mass = mass;
  }

  attract(mover) {
    let divV = p5.Vector.sub(this.pos, mover.pos);
    let distance = divV.mag();
    distance = constrain(distance, 5, 25);
    let strength = (this.mass * mover.mass) / distance ** 2;
    return divV.setmag(strength);
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 100);
  }
}
