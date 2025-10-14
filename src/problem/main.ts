import { Shape } from './Shape';

/**
 * Array of different shapes
 * We include multiple shapes to show how nested ifs get complicated
 */
const shapes: Shape[] = [
  new Shape('circle', 5),
  new Shape('rectangle', undefined, 10, 5),
  new Shape('triangle', undefined, 6, 4),
];

/**
 * Demonstrating how the current Shape class behaves
 * Problems visible here:
 * 1. Each shape needs to go through nested ifs
 * 2. Adding a new shape would require modifying area() → OCP violation
 * 3. Calculation and printing are mixed → SRP violation
 * 4. Cannot substitute a Shape subclass without potential errors → LSP violation
 * 5. Directly using console.log → DIP violation
 */
console.log('--- Problematic Shape Outputs ---');
shapes.forEach(shape => shape.printArea());
