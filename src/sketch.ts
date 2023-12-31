import p5 from 'p5';
import { Fern } from "./fern";

const _app = new p5(p5Instance => {
  const p5 = p5Instance as unknown as p5;
  let fern = new Fern();

  p5.setup = function setup() {
    fern.addObject({
      type: "Circle",
      x: 25,
      y: 25,
      rotation: 0,
      radius: 25,
      color: "red"
    });

    fern.addObject({
      type: "Rectangle",
      x: 25,
      y: 5,
      rotation: 0,
      width: 50,
      height: 20,
      color: "green"
    });

    fern.circleRenderer = (p5, circle) => {
      p5.fill(circle.color);
      p5.noStroke();
      p5.circle(circle.x, circle.y, 2 * circle.radius);
    };

    fern.rectangleRenderer = (p5, rect) => {
      p5.fill(rect.color);
      p5.noStroke();
      p5.rect(rect.x, rect.y, rect.width, rect.height);
    };

    p5.createCanvas(500, 500);
  };

  p5.draw = function draw() {
    p5.background(0);

    fern.render(p5);
    fern.update(p5.deltaTime);
  };

}, document.getElementById('app')!);

export default _app;