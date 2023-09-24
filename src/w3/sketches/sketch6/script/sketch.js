//  // let x;
// // let y;
// let pos;
// // let velX = 3;
// // let velY = 5;
// let vel;
let p = {
  //   add: function (otherVector) {
  //     this.x += otherVector.x;
  //     this.y += otherVector.y;
  //   },
};
let v = {
  x: 3,
  y: 5,
};

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('255');
  p.x = width / 2;
  p.y = height / 2;
  console.log('p', p);
  console.log('v', v);
  //   pos = createVector(width / 2, height / 2);
  //   vel = createVector(3, 5);
}
function draw() {
  background('255');
  //   //   x += velX;
  //   //   y += velY;
  p.x += v.x;
  p.y += v.y;

  //   pos.add(vel);
  //   ellipse(pos.x, pos.y, 20);
  ellipse(p.x, p.y, 50);

  //   if (pos.x < 0 || pos.x > width) {
  //     vel.x *= -1;
  //   }
  //   if (pos.y < 0 || pos.y > height) {
  //     vel.y *= -1;
  //   }
  //   아래 이유를 모르겠다..
  if (p.x < 0 || p.x > width) {
    v.x *= -1;
  }
  if (p.y < 0 || p.y > height) {
    v.y *= -1;
  }
}
