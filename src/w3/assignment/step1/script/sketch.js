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
  acc = p5.Vector.random2D();
  acc.mult(0.01);
}

function draw() {
  background('white');
  update();
  checkEdges();
  mouse = createVector(mouseX, mouseY);
  mov = p5.Vector.sub(mouse, pos);
  displayMov();
  display();
  displayAcc();
  displayVel();
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(0.1);
  vel.add(acc);
  vel.limit(10);
  pos.add(vel);
}

function checkEdges() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
}

function display() {
  noStroke();
  fill('black');
  ellipse(pos.x, pos.y, 50);
}

function displayAcc() {
  stroke('red');
  line(pos.x, pos.y, pos.x + acc.x * 80, pos.y + acc.y * 80);
}
function displayVel() {
  stroke('blue');
  line(pos.x, pos.y, pos.x + vel.x * 10, pos.y + vel.y * 10);
}
function displayMov() {
  stroke('black');
  line(pos.x, pos.y, mov.x + pos.x, mov.y + pos.y);
}
