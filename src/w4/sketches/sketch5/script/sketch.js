let mover;
let moverB;
let gra;
let wind;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  mover = new MovertoMass(width / 3, height / 2, 10);
  moverB = new MovertoMass((2 * width) / 3, height / 2, 2);
  gra = createVector(0, 0.1);
  wind = createVector(0.2, 0);
}
function draw() {
  background(255);

  mover.applyForce(gra);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    mover.applyForce(wind);
  }
  mover.update();
  mover.checkEdges();
  mover.display();
  mover.displayVec();

  moverB.applyForce(gra);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverB.applyForce(wind);
  }
  moverB.update();
  moverB.checkEdges();
  moverB.display();
  moverB.displayVec();
}
