import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { AreaPrinter } from './AreaPrinter';

test('each figure computes its own area', () => {
  assert.equal(new Circle(5).area(), Math.PI * 25);
  assert.equal(new Rectangle(10, 5).area(), 50);
});

test('AreaPrinter writes to the injected output, not the console', t => {
  const log = t.mock.method(console, 'log', () => {});
  const lines: string[] = [];
  const printer = new AreaPrinter(text => lines.push(text));
  printer.print(new Rectangle(10, 5));
  printer.print(new Circle(1));
  assert.deepEqual(lines, ['The area of the Rectangle is 50', `The area of the Circle is ${Math.PI}`]);
  assert.equal(log.mock.callCount(), 0);
});

test('AreaPrinter defaults to console.log', t => {
  const log = t.mock.method(console, 'log', () => {});
  new AreaPrinter().print(new Rectangle(2, 3));
  assert.deepEqual(log.mock.calls[0]?.arguments, ['The area of the Rectangle is 6']);
});
