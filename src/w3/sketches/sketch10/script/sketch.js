// let = cv;
// let = mv;
// let = cvToMv;

// function setup() {
//   setCanvasContainer('canvas', 3, 2, true);
//   background('pink');
//   cv = createVactor(width / 2, height / 2);
//   mv = createVactor();
//   cvToMv = createVactor();
// }

// function draw() {
//   background('pink');
//   mv.set = set(mvX, mvY);
//   cvToMv = p5.Vector.sub(mv, cv);
//   strokeWeight(2);
//   stroke('white');
//   translate(cv.x, cv.y);
//   line(0, 0, cvToMv.x, cvToMv.y);

//   cvToMv.normalize();
//   cvToMv.mult(50);
//   strokeWeight(4);
//   stroke('black');
//   line(0, 0, cvToMv.x, cvToMv.y);
//   console.log(cvToMv.mag());
// }
let cv;
let mv;
let cvToMv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('pink');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
  cvToMv = createVector();
}
function draw() {
  background('pink');
  mv.set(mouseX, mouseY);
  cvToMv = p5.Vector.sub(mv, cv);
  strokeWeight(2);
  stroke('white');
  translate(cv.x, cv.y);
  line(0, 0, cvToMv.x, cvToMv.y);

  cvToMv.normalize();
  cvToMv.mult(50);
  strokeWeight(4);
  stroke('black');
  line(0, 0, cvToMv.x, cvToMv.y);
  console.log(cvToMv.mag());
}
