function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  background(220);
  rectMode(CORNER);
  colorMode(RGB);
  strokeWeight(0);

  rectMode(CENTER);

  //   모니터
  fill('#000000');
  rect(600, 400, 100, 8, 5);
  fill('#000000');
  rect(600, 350, 70, 100, 5);
  fill('#000000');
  rect(600, 240, 300, 200, 5);
  fill('#808080');
  rect(600, 240, 285, 185);
  fill('#000000');
  //   책상다리
  fill('#a9a9a9');
  rect(180, 582, 10, 340, 3);
  fill('#c0c0c0');
  rect(200, 582, 9, 340, 3);
  fill('#a9a9a9');
  rect(820, 582, 10, 340, 3);
  fill('#c0c0c0');
  rect(800, 582, 9, 340, 3);
  //   책상 몸

  fill('#a9a9a9');
  rect(310, 595, 15, 100);
  fill('#a9a9a9');
  rect(490, 595, 15, 100);
  fill('#696969');
  rect(500, 408, 700, 12, 3);
  fill('#005766');
  rect(400, 380, 200, 150, 7);
  fill('#00333C');
  rect(400, 388, 180, 130, 7);
  fill('#005766');
  rect(400, 540, 240, 20, 7);
  fill('#00333C');
  rect(400, 543, 232, 14, 7);
  fill('#a9a9a9');
  rect(350, 450, 15, 180, 3);
  fill('#a9a9a9');
  rect(450, 450, 15, 180, 3);

  fill('#ffffff');
  ellipse(310, 570, 7);
  ellipse(490, 570, 7);
  ellipse(350, 530, 7);
  ellipse(350, 530, 7);
  ellipse(450, 530, 7);
  ellipse(350, 530, 7);
  ellipse(450, 430, 7);
  ellipse(350, 430, 7);
  ellipse(450, 380, 7);
  ellipse(350, 380, 7);
  stroke(0);
  noStroke();

  //   stroke(0);
  //   strokeWeight(3);
  //   line(200, 150, 100, 100);
}
