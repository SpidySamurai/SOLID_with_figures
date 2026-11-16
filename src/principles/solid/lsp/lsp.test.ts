import { test } from 'node:test';
import assert from 'node:assert/strict';
import type { Shape } from './Shape';
import { Rectangle } from './Rectangle';
import { Square } from './Square';
import { BadSquare, MutableRectangle, areaAfterResize } from './BadSquareExample';

test('bad design: MutableRectangle honors its own contract', () => {
  assert.equal(areaAfterResize(new MutableRectangle(1, 1), 5, 4), 20);
});

test('bad design: BadSquare compiles as a MutableRectangle but breaks the contract', () => {
  const rect: MutableRectangle = new BadSquare(1);
  assert.equal(areaAfterResize(rect, 5, 4), 16, 'BadSquare ends up 4x4, not the 5x4 a rectangle client asked for');
});

test('good design: every Shape keeps the area() contract', () => {
  const cases: Array<[Shape, number]> = [
    [new Rectangle(5, 4), 20],
    [new Square(4), 16],
  ];
  for (const [shape, expected] of cases) {
    assert.equal(shape.area(), expected, shape.name);
    assert.equal(shape.area(), expected, `${shape.name} area() is repeatable`);
  }
});

test('good design: a Square is not a Rectangle, so it cannot be misused as one', () => {
  // @ts-expect-error Square does not extend Rectangle, so the bad substitution does not compile.
  const rect: Rectangle = new Square(4);
  assert.equal(rect instanceof Rectangle, false);
});
