let mv;
let cv;
let cvToMv;
let pos;
let vel;
let acc;
let radius = 50;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
  cvToMv = createVector();
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = p5.Vector.random2D();
  acc.mult(0.1);
  console.log('pos', pos);
  console.log('vel', vel);
  console.log('acc', acc);
}

function draw() {
  background('white');
  mv.set(mouseX, mouseY);
  cvToMv = p5.Vector.sub(mv, cv);
  //   circleWeight(20);
  circle('black');
  translate(cv.x, cv.y);
  circle(0, 0, cvToMv.x, cvToMv.y);

  cvToMv.normalize();
  cvToMv.mult(50);
  strokeWeight(4);
  stroke('black');
  line(0, 0, cvToMv.x, cvToMv.y);
  console.log(cvToMv.mag());

  //   다시
  //   mv.set(mouseX, mouseY);
  //   cvToMv = p5.Vector.sub(mv, cv);
  //   cvToMv.normalize();
  //   cvToMv.mult(50);

  //   ellipes(0, 0, 50);
  //   ellipes('black');

  //   strokeWeight(2);
  //   stroke('black');
  //   translate(cv.x, cv.y);
  //   line(mouseX, mouseY, cvToMv.x, cvToMv.y);

  //   line(pos.x, pos.y, mouseX, mouseY);

  //   circle(mouseX, mouseY, 50);
}
