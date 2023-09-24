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

  strokeWeight(2);
  stroke('white');
  line(0, 0, cv.x, cv.y);

  mv.set(mouseX, mouseY);
  stroke('fuchsia');
  line(0, 0, mv.x, mv.y);

  cvToMv = p5.Vector.sub(mv, cv);
  stroke('blue');
  translate(cv.x, cv.y);
  line(0, 0, cvToMv.x, cvToMv.y);

  cvToMv.mult(0.5);
  strokeWeight(4);
  stroke('black');
  line(0, 0, cvToMv.x, cvToMv.y);

  //   mv.set(mouseX, mouseY);
  //   cvToMv = p5.Vector.sub(mv, cv);
  // //   let mag = cvToMv.mag();
  // //   console.log(mag);
  // strokeWeight(2);
  //   stroke('white');
  //   translate(cv.x, cv.y);
  //   line(0, 0, cvToMv.x, cvToMv.y);

  //   cvToMv.normalize();
  //   cvToMv.mult(50);
}
