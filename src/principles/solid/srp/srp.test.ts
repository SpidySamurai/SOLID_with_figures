import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Shape } from './Shape';
import { AreaPrinter } from './AreaPrinter';

test('Shape only computes areas', () => {
  assert.equal(new Shape('circle', undefined, undefined, 5).area(), Math.PI * 25);
  assert.equal(new Shape('rectangle', 10, 5).area(), 50);
  assert.equal(new Shape('triangle', 6, 4).area(), 12);
  assert.equal('printArea' in new Shape('rectangle', 10, 5), false);
});

test('AreaPrinter owns the printing', t => {
  const log = t.mock.method(console, 'log', () => {});
  new AreaPrinter().print(new Shape('triangle', 6, 4));
  assert.deepEqual(log.mock.calls[0]?.arguments, ['The area of the triangle is 12']);
});
