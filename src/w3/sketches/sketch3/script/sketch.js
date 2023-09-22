function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('orange');
}
function draw() {
  if (mouseX > width / 2) {
    console.log('mouse is right side ofthe canvas');
  }
}
