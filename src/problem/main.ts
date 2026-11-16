import { Shape } from './Shape';

/**
 * Array of different shapes.
 *
 * Note the positional optional parameters: (type, width?, height?, radius?).
 * `new Shape('circle', 5)` compiles but puts 5 in `width`, and area() throws
 * at runtime. The type system cannot tell a valid figure from an invalid one.
 */
const shapes: Shape[] = [
  new Shape('circle', undefined, undefined, 5),
  new Shape('rectangle', 10, 5),
  new Shape('triangle', 6, 4),
];

/**
 * Demonstrating how the current Shape class behaves.
 * Problems visible here:
 * 1. Every figure goes through the same if-chain in area().
 * 2. Adding a new figure means editing area() → OCP violation.
 * 3. Calculation and printing live in one class → SRP violation.
 * 4. printArea() is hardwired to console.log → DIP violation. (Calling
 *    console.log here in main is fine: this is the program's entry point.)
 */
console.log('--- Problematic Shape Outputs ---');
shapes.forEach(shape => shape.printArea());
