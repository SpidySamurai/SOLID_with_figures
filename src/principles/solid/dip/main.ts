import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { AreaPrinter } from './AreaPrinter';

/**
 * DIP Iteration - main
 *
 * PURPOSE:
 * - Demonstrate Dependency Inversion Principle
 * - High-level module AreaPrinter depends on Shape abstraction, not concrete classes
 *
 * OBSERVE:
 * - Can add new shapes without modifying AreaPrinter
 * - Printer could even print to a file, HTTP response, or console by passing a different output function
 */

const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(10, 5)
];

// Example: printer printing to console
const consolePrinter = new AreaPrinter();
console.log('--- DIP Iteration Output (console) ---');
shapes.forEach(shape => consolePrinter.print(shape));

// Example: printer printing to a custom output function (e.g., collect strings)
const results: string[] = [];
const arrayPrinter = new AreaPrinter((text: string) => results.push(text));
shapes.forEach(shape => arrayPrinter.print(shape));
console.log('Collected output:', results);
