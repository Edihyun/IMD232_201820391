// let x;
// let y;
let pos;
// let velX = 3;
// let velY = 5;
let vel;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('255');
  //   x = width / 2.0;
  //   y = height / 2.0;
  pos = createVector(width / 2, height / 2);
  vel = createVector(3, 5);
}
function draw() {
  background('255');
  //   x += velX;
  //   y += velY;
  pos.add(vel);
  ellipse(pos.x, pos.y, 20);

  if (pos.x < 0 || pos.x > width) {
    vel.x *= -1;
  }
  if (pos.y < 0 || pos.y > height) {
    vel.y *= -1;
  }
}
