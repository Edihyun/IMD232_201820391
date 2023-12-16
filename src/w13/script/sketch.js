let mic;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  angleMode(DEGREES);

  // 마이크 설정
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(225);
  strokeWeight(3);
  noFill();

  translate(width / 2, height / 2);

  // 마이크 입력값 얻기
  let volume = mic.getLevel();

  for (var t = 0; t < 8; t++) {
    stroke(100 - t * 20, 150 - t * 30, 220 - t * 30);

    beginShape();
    for (var i = 0; i < 359; i++) {
      var r1Min = map(sin(frameCount), -1, 1, 50, 120);
      var r1Max = map(sin(frameCount * 2), -1, 1, 100, 20);

      var r2Min = map(sin(frameCount / 2), -1, 1, 120, 50);
      var r2Max = map(sin(frameCount), -1, 1, 20, 100);

      var r1 = map(sin(i * 3), -1, 1, r1Min, r1Max);
      var r2 = map(sin(i * 6 + 90), -1, 1, r2Min, r2Max);
      var r = r1 + r2 - t * 10 + volume * 100; // 마이크 볼륨에 따라 움직임 추가
      var x = r * cos(i);
      var y = r * sin(i);
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}
