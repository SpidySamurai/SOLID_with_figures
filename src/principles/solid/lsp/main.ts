import { Shape } from './Shape';
import { Rectangle } from './Rectangle';
import { Square } from './Square';
import { AreaPrinter } from './AreaPrinter';
import { BadSquare, MutableRectangle, areaAfterResize } from './BadSquareExample';

/**
 * LSP Iteration - main
 *
 * PURPOSE:
 * - Show a real substitution failure first, then the design that avoids it.
 *
 * BEFORE (BadSquareExample.ts):
 * - BadSquare extends MutableRectangle and overrides its setters.
 * - areaAfterResize() is correct for a rectangle and wrong for the square.
 *
 * AFTER (LSP applied):
 * - Rectangle and Square both implement Shape and obey its contract.
 * - AreaPrinter and other consumers can treat them interchangeably.
 */

console.log('--- LSP violation: Square extends Rectangle ---');
const expected = 5 * 4;
const candidates: Array<[string, MutableRectangle]> = [
  ['MutableRectangle', new MutableRectangle(1, 1)],
  ['BadSquare', new BadSquare(1)],
];
for (const [label, rect] of candidates) {
  const actual = areaAfterResize(rect, 5, 4);
  const verdict = actual === expected ? 'contract holds' : 'contract broken';
  console.log(`${label}: resize to 5x4, expected area ${expected}, got ${actual} (${verdict})`);
}

const shapes: Shape[] = [
  new Rectangle(10, 5),
  new Square(4),
];

const printer = new AreaPrinter();

console.log('--- LSP applied: every Shape is substitutable ---');
shapes.forEach(shape => printer.print(shape));

/**
 * Example consumer function:
 * - This function depends only on Shape (area()), demonstrating substitutability.
 */
function totalArea(list: Shape[]) {
  return list.reduce((s, item) => s + item.area(), 0);
}

console.log('Total area (consumer):', totalArea(shapes));
