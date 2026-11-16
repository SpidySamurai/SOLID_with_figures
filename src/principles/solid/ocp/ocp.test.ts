import { test } from 'node:test';
import assert from 'node:assert/strict';
import type { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { Square } from './Square';
import { Triangle } from './Triangle';
import { AreaPrinter } from './AreaPrinter';

test('each figure computes its own area', () => {
  assert.equal(new Circle(5).area(), Math.PI * 25);
  assert.equal(new Rectangle(10, 5).area(), 50);
  assert.equal(new Triangle(6, 4).area(), 12);
  assert.equal(new Square(4).area(), 16);
});

test('a figure added later prints without touching AreaPrinter', t => {
  class Hexagon implements Shape {
    readonly name = 'Hexagon';
    constructor(private readonly side: number) {}
    area(): number {
      return ((3 * Math.sqrt(3)) / 2) * this.side ** 2;
    }
  }
  const log = t.mock.method(console, 'log', () => {});
  const printer = new AreaPrinter();
  printer.print(new Square(4));
  printer.print(new Hexagon(2));
  assert.deepEqual(
    log.mock.calls.map(call => call.arguments),
    [['The area of the Square is 16'], [`The area of the Hexagon is ${6 * Math.sqrt(3)}`]],
  );
});
