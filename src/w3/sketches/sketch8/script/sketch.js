let cv;
let mv;
let cvToMv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('slateblue');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
  cvToMv = createVector();
}

function draw() {
  background('slateblue');

  mv.set(mouseX, mouseY);
  cvToMv = p5.Vector.sub(mv, cv);
  let mag = cvToMv.mag();
  console.log(mag);

  noStroke();
  fill('255');
  rect(10, 10, mag, 10);

  strokeWeight(2);
  stroke('white');
  translate(cv.x, cv.y);
  line(0, 0, cvToMv.x, cvToMv.y);

  //   strokeWeight(2);
  //   stroke('cornflowerlue');
  //   line(0, 0, cv.x, cv.y);

  //   mv.x = mouseX;
  //   mv.y = mouseY;
  //   stroke('crimson');
  //   line(0, 0, mv.x, mv.y);

  //   mv.sub(cv);
  //   translate(cv.x, cv.y);
  //   stroke('white');
  //   line(0, 0, mv.x, mv.y);
}
