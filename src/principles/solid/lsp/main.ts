import { Shape } from './Shape';
import { Rectangle } from './Rectangle';
import { Square } from './Square';
import { AreaPrinter } from './AreaPrinter';

/**
 * LSP Iteration - main
 *
 * PURPOSE:
 * - Demonstrate substitutability: code expects Shape and gets Rectangle/Square,
 *   behavior remains correct and predictable.
 *
 * BEFORE (possible problem if designed badly):
 * - If Square extended Rectangle and changed expected semantics, clients would break.
 *
 * AFTER (LSP applied):
 * - Rectangle and Square both implement Shape and obey the area() contract.
 * - AreaPrinter and other consumers can treat them interchangeably.
 */

const shapes: Shape[] = [
  new Rectangle(10, 5),
  new Square(4),
];

const printer = new AreaPrinter();

console.log('--- LSP Iteration Output ---');
shapes.forEach(shape => printer.print(shape));

/**
 * Example consumer function:
 * - This function depends only on Shape (area()), demonstrating substitutability.
 */
function totalArea(list: Shape[]) {
  return list.reduce((s, item) => s + item.area(), 0);
}

console.log('Total area (consumer):', totalArea(shapes));
