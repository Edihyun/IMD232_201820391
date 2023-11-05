let dom;
let htmlDom;
let canvasW = 600;
let canvasH = 400;

function setup() {
  dom = select('#hereMySketch');
  //   console.log('p5 select', dom);
  //   console.log('p5 select', dom.width);

  htmlDom = document.querySelector('#hereMySketch');
  //   console.log('querySelector', htmlDom);
  //   console.log('querySelector', htmlDom.clientWidth);
  let canvas = createCanvas(600, 400);
  canvas.parent(dom);
  background('black');
}

function draw() {}

function windowResized() {
  console.log('리사이즈됩니다.');
  //   dom = select('#hereMySketch');
  //   console.log('p5 select', dom.width);
  //   console.log('querySelector', htmlDom.clientWidth);
  //   console.log(dom);
  if (htmlDom.clientWidth < canvasW) {
    resizeCanvas(
      htmlDom.clientWidth,
      (htmlDom.clientWidth * canvasH) / canvasW
    );
    background('black');
  } else if (width !== canvasW) {
    resizeCanvas(canvasW, canvasH);
    background('black');
  }
}
