function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  background(255);

  //   rectMode(CORNER); 이게 들어가야 전체 색이 안바뀜
  // rect 사각형  ellipse 원형 Stroke 선

  rectMode(CORNER);
  fill(255);
  colorMode(RGB);
  stroke(0);
  strokeWeight(1);

  rect(100, 100, 50, 50);
  ellipse(100, 100, 50, 50);
  rect(200, 100, 25, 50);
  ellipse(200, 100, 25, 50);

  rectMode(CENTER);
  rect(300, 120, 50, 50);
  ellipse(300, 120, 50, 50);
  rect(400, 120, 50, 25);
  ellipse(400, 120, 25, 50);

  fill(255, 127, 0);
  ellipse(100, 200, 50);
  fill('#00EE40');
  circle(200, 200, 50);
  colorMode(HSL);
  fill(200, 100, 50);
  rect(300, 200, 50);
  noStroke();
  square(400, 200, 50);

  rect(100, 300, 50, 50, 20);
  rect(200, 300, 50, 50, 20, 30, 10, 5);

  stroke(0);
  line(100, 400, 150, 450);

  stroke('blueviolet');
  //  색상  가로 선
  line(200, 400, 250, 400);
  strokeWeight(3);
  stroke('darkblue');
  //  색상 세로 선
  line(250, 400, 250, 450);
  stroke('darkred');
  //   선 두께
  strokeWeight(5);
  line(250, 450, 200, 450);

  stroke(50, 100, 10);
  strokeWeight(2);
  point(300, 400);
  point(310, 400);
  point(320, 400);
  point(330, 400);
  point(340, 400);
  stroke(50, 110, 20);
  strokeWeight(2);
  point(300, 410);
  point(310, 410);
  point(320, 410);
  point(330, 410);
  point(340, 410);
  stroke(50, 120, 30);
  strokeWeight(2);
  point(320, 420);
  point(300, 420);
  point(330, 420);
  point(310, 420);
  point(340, 420);
  stroke(50, 120, 40);
  strokeWeight(2);
  point(300, 430);
  point(320, 430);
  point(330, 430);
  point(310, 430);
  point(340, 430);
  stroke(50, 130, 50);
  strokeWeight(2);
  point(300, 440);
  point(330, 440);
  point(310, 440);
  point(320, 440);
  point(340, 440);
}
