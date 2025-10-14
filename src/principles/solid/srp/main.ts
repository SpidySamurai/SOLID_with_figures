import { Shape } from './Shape';
import { AreaPrinter } from './AreaPrinter';

/**
 * SRP Iteration - main
 *
 * PURPOSE:
 * - Demonstrate the effect of applying SRP (only), without introducing OCP yet.
 * - Show a clear "Before / After" comparison so the learner can see the exact change.
 *
 * BEFORE (Problem):
 * - Shape computed and printed areas via shape.printArea() (mixed responsibilities).
 *
 * AFTER (SRP):
 * - Shape computes areas only, AreaPrinter prints them.
 *
 * RUN:
 * - This script constructs the same data as Problem, prints the literal "Before"
 *   output (for comparison), then uses the refactored classes to show "After".
 *
 * NOTE:
 * - We intentionally keep Shape as the ad-hoc conditional-based type so SRP's
 *   benefit is isolated and easy to see. OCP comes next.
 */

const circle = new Shape('circle', undefined, undefined, 5);
const rectangle = new Shape('rectangle', 10, 5);
const triangle = new Shape('triangle', 6, 4);

const printer = new AreaPrinter();

console.log('--- BEFORE SRP (reference values from Problem) ---');
console.log('Circle: area = 78.53981633974483');   // reference numeric example
console.log('Rectangle: area = 50');
console.log('Triangle: area = 12');

console.log('--- AFTER SRP (computed via Shape.area() + AreaPrinter) ---');
printer.print(circle);
printer.print(rectangle);
printer.print(triangle);
