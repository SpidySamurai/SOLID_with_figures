import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Shape } from './Shape';

test('computes each figure through the if-chain', () => {
  assert.equal(new Shape('circle', undefined, undefined, 5).area(), Math.PI * 25);
  assert.equal(new Shape('rectangle', 10, 5).area(), 50);
  assert.equal(new Shape('triangle', 6, 4).area(), 12);
});

test('a dimension in the wrong slot compiles but throws at runtime', () => {
  assert.throws(() => new Shape('circle', 5).area(), /Invalid shape or missing dimensions/);
});

test('printArea writes straight to the console', t => {
  const log = t.mock.method(console, 'log', () => {});
  new Shape('rectangle', 10, 5).printArea();
  assert.deepEqual(log.mock.calls[0]?.arguments, ['The area of the rectangle is 50']);
});
