var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Composites = Matter.Composites,
  Events = Matter.Events,
  Constraint = Matter.Constraint,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Body = Matter.Body,
  Composite = Matter.Composite,
  Bodies = Matter.Bodies;

// create engine
var engine = Engine.create(),
  world = engine.world;

// create runner
var runner = Runner.create();

function setup() {
  setCanvasContainer('canvas', 800, 600, ture);

  // add bodies
  var ground = Bodies.rectangle(395, 600, 815, 50, {
    isStatic: true,
    render: { fillStyle: '#060a19' },
  });
  var rock = Bodies.polygon(170, 450, 8, 20, { density: 0.004 });
  var anchor = { x: 170, y: 450 };
  var elastic = Constraint.create({
    pointA: anchor,
    bodyB: rock,
    length: 0.01,
    damping: 0.01,
    stiffness: 0.05,
  });

  var pyramid = Composites.pyramid(500, 300, 9, 10, 0, 0, function (x, y) {
    return Bodies.rectangle(x, y, 25, 40);
  });

  var ground2 = Bodies.rectangle(610, 250, 200, 20, {
    isStatic: true,
    render: { fillStyle: '#060a19' },
  });

  var pyramid2 = Composites.pyramid(550, 0, 5, 10, 0, 0, function (x, y) {
    return Bodies.rectangle(x, y, 25, 40);
  });

  Composite.add(engine.world, [
    ground,
    pyramid,
    ground2,
    pyramid2,
    rock,
    elastic,
  ]);

  // add mouse control
  var mouse = Mouse.create(document.querySelector('.p5canvas'));
  let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

  Runner.run(runner, engine);
  background('white');
}
function draw() {
  background('white');
}

// create renderer
// const elem = document.querySelector('#canvas');
// var render = Render.create({
//   element: elem,
//   engine: engine,
//   options: {
//     width: 800,
//     height: 600,
//     showAngleIndicator: true,
//   },
// });
// Render.run(render);

// Composite.add(world, mouseConstraint);

// // keep the mouse in sync with rendering
// render.mouse = mouse;

// // fit the render viewport to the scene
// Render.lookAt(render, {
//   min: { x: 0, y: 0 },
//   max: { x: 800, y: 600 },
// });
