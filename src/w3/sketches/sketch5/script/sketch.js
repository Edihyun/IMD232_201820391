// let x;
// let y;
let pos = [];
// let velX = 3;
// let velY = 5;
let vel = [3, 5];

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('255');
  pos = [width / 2, height / 2];

  console.log('pos', pos);
  console.log('vel', vel);
}
function draw() {
  background('255');
  //   pos.add(vel);
  pos[0] += vel[0];
  pos[1] += vel[1];
  //   ellipse(pos.x, pos.y, 20);
  ellipse(pos[0], pos[1], 50);

  //   if (pos.x < 0 || pos.x > width) {
  //     vel.x *= -1;
  //   }
  //   if (pos.y < 0 || pos.y > height) {
  //     vel.y *= -1;
  //   }
  if (pos[0] < 0 || pos[0] > width) {
    vel[1] *= -1;
  }
  if (pos[1] < 0 || pos[1] > height) {
    vel[1] *= -1;
  }
}
