let pos;
let vel;
let acc;
let mouse;
let mov;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  mov = createVector();
  acc = createVector();
  acc.mult(0.01);
}

function draw() {
  background('white');
  update();
  mouse = createVector(mouseX, mouseY);
  mov = p5.Vector.sub(mouse, pos);
  displayMov();
  display();
  displayAcc();
  displayVel();
}

function update() {
  acc = createVector(mov.x, mov.y);
  acc.mult(0.001);
  vel.add(acc);
  vel.limit(10);
  pos.add(vel);
}

function display() {
  noStroke();
  fill('black');
  ellipse(pos.x, pos.y, 50);
}

function displayAcc() {
  stroke('red');
  line(pos.x, pos.y, pos.x + acc.x * 100, pos.y + acc.y * 100);
}
function displayVel() {
  stroke('blue');
  line(pos.x, pos.y, pos.x + vel.x * 10, pos.y + vel.y * 10);
}
function displayMov() {
  stroke('black');
  line(pos.x, pos.y, mov.x + pos.x, mov.y + pos.y);
}
