let mover;
let gra;
let wind;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  mover = new Moverto(width / 2, height / 2, 50);
  gra = createVector(0, 0.1);
  wind = createVector(0.2, 0);
}
function draw() {
  background(255);

  mover.addAcc(gra);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    mover.addAcc(wind);
  }
  mover.update();
  mover.checkEdges();
  mover.display();
  mover.displayVec();
}
