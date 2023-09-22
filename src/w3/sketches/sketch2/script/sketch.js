let pos;
let vel;
let acc;
let radius = 50;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('white');
  pos = createVector(width / 2, height / 2);
  vel = createVector(3, 5);
  acc = createVector();
  console.log(pos);
  console.log(vel);
  ellipse(pos.x, pos.y, 50);
}
function draw() {
  background(255);
  // pos.add(vel);
  // if (pos.x < 0) {
  //   vel.x *= -1;
  // } else if (pos.x > width) {
  //   vel.x *= -1;
  // }
  // pos.add(vel);
  // acc.mult(2);
  // vel.add(acc);
  // acc = p5.vector.random2D();
  // if (pos.x - radius < 0 || pos.x + radius > width) {
  //   vel.x *= -1;
  // }
  // if (pos.y - radius < 0 || pos.y + radius > height) {
  //   vel.y *= -1;
  // }

  // ellipse(pos.x, pos.y, 2 * radius);
  pos.add(vel);
  ellipse(pos.x, pos.y, 50);

  if (pos.x < 0 || pos.x > width) {
    vel.x *= -1;
  }
  if (pos.y < 0 || pos.y > height) {
    vel.y *= -1;
  }
}
