let cam;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  //   createCapture(800, 300);
  cam = createCapture(VIDEO);
  //   cam.size(320, 480);
  cam.hide();
  console.log(cam);
  noLoop();
}

function draw() {
  background(255);
  image(cam, 0, 0, width, (cam.height / cam.width) * width);
  cam.loadPixels(); //픽셀 계산
  console.log('width', cam.width);
  console.log('height', cam.height);
  console.log('pixels', cam.pixels);
  for (let y = 0; y < cam.height; y++) {
    for (let x = 0; x < cam.width; x++) {
      const idx = cam.width * y + x;
      //   cam.pixels[idx];
      const color = cam.pixels[idx];
      const brightness = brightness(color);
      ellipse(x, y, (brightness / 255) * 20);
    }
  }
}
