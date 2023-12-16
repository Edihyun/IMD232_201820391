// 메타 js 변수
var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Body = Matter.Body,
  Composite = Matter.Composite,
  Composites = Matter.Composites,
  Constraint = Matter.Constraint,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Bodies = Matter.Bodies;

// create engine 엔진
var engine = Engine.create(),
  world = engine.world;

// create runner 러너 만들고 실행
var runner = Runner.create();
Runner.run(runner, engine);

// draw에서 쓸 변수
let group;
let ropeA;
let ropeB;
let ropeC;

const oWidth = 800;
const oHeight = 600;

function setup() {
  setCanvasContainer('canvas', oWidth, oHeight, true);

  // add bodies 바디 만들기
  group = Body.nextGroup(true);

  ropeA = Composites.stack(100, 50, 8, 1, 10, 10, function (x, y) {
    return Bodies.rectangle(x, y, 50, 20, {
      collisionFilter: { group: group },
    });
  });

  Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { fillStyle: '#FF783B' },
  });
  Composite.add(
    ropeA,
    Constraint.create({
      bodyB: ropeA.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Body.nextGroup(true);

  ropeB = Composites.stack(350, 50, 10, 1, 10, 10, function (x, y) {
    return Bodies.circle(x, y, 20, { collisionFilter: { group: group } });
  });

  Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { fillStyle: '#FF783B' },
  });
  Composite.add(
    ropeB,
    Constraint.create({
      bodyB: ropeB.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Body.nextGroup(true);

  ropeC = Composites.stack(600, 50, 13, 1, 10, 10, function (x, y) {
    return Bodies.rectangle(x - 20, y, 50, 20, {
      collisionFilter: { group: group },
      chamfer: 5,
    });
  });

  Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 1, length: 0 });
  Composite.add(
    ropeC,
    Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  // 만든 바디를 세계에 추가
  Composite.add(world, [
    ropeA,
    ropeB,
    ropeC,
    Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true }),
  ]);

  console.log('group', group);
  console.log('ropeA', ropeA);
  console.log('ropeB', ropeB);
  console.log('ropeC', ropeC);

  background('white');
}

function draw() {
  background('white');
  fill(125);
  noStroke();

  Composite.vertices.forEach((each) => {
    vertex(
      (each.x / originalWidth) * width,
      (each.y / originalHeight) * height
    );
  });
  endShape(CLOSE);
}

// // create renderer
// const elem = document.querySelector('#canvas');
// var render = Render.create({
//   element: elem,
//   engine: engine,
//   options: {
//     width: 800,
//     height: 600,
//     showAngleIndicator: true,
//     showCollisions: true,
//     showVelocity: true,
//   },
// });

// add mouse control
// var mouse = Mouse.create(render.canvas),
//   mouseConstraint = MouseConstraint.create(engine, {
//     mouse: mouse,
//     constraint: {
//       stiffness: 0.2,
//       render: {
//         visible: false,
//       },
//     },
//   });

// Composite.add(world, mouseConstraint);

// keep the mouse in sync with rendering
// render.mouse = mouse;

// fit the render viewport to the scene
// Render.lookAt(render, {
//   min: { x: 0, y: 0 },
//   max: { x: 700, y: 600 },
// });
