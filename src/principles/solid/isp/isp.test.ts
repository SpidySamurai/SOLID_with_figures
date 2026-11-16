import { test } from 'node:test';
import assert from 'node:assert/strict';
import type { PerimeterCalculable } from './PerimeterCalculable';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { AreaPrinter } from './AreaPrinter';

test('figures compute the capabilities they implement', () => {
  const circle = new Circle(5);
  assert.equal(circle.area(), Math.PI * 25);
  assert.equal(circle.perimeter(), 10 * Math.PI);
  assert.equal(new Rectangle(10, 5).area(), 50);
});

test('a perimeter client only accepts figures that implement PerimeterCalculable', () => {
  const perimeters: PerimeterCalculable[] = [new Circle(1)];
  // @ts-expect-error Rectangle does not implement PerimeterCalculable.
  perimeters.push(new Rectangle(10, 5));
  assert.equal(perimeters[0]?.perimeter(), 2 * Math.PI);
});

test('AreaPrinter needs only area() and a name', t => {
  const log = t.mock.method(console, 'log', () => {});
  new AreaPrinter().print({ name: 'Plot', area: () => 7 });
  assert.deepEqual(log.mock.calls[0]?.arguments, ['The area of the Plot is 7']);
});
