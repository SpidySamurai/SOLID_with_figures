import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { Triangle } from './Triangle';
import { Square } from './Square';
import { AreaPrinter } from './AreaPrinter';

/**
 * OCP Iteration - main
 *
 * PURPOSE:
 * - Show the system after applying SRP then OCP.
 * - Demonstrate we can add Square without modifying AreaPrinter or other code.
 *
 * RUN:
 * - Create an array of Shape (abstraction) and pass to AreaPrinter.
 *
 * NOTES:
 * - SRP: printing and calculation remain separated.
 * - OCP: adding new shapes requires no change in printer or client logic.
 * - LSP/ISP/DIP: will be addressed in subsequent iterations.
 */

const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(10, 5),
  new Triangle(6, 4),
  new Square(4) // added as an extension
];

const printer = new AreaPrinter();

console.log('--- OCP Iteration Output ---');
shapes.forEach(shape => printer.print(shape));
