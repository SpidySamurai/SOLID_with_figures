import { Shape } from './Shape';

/**
 * DIP - AreaPrinter depends on abstraction, not concrete shapes
 *
 * CONTEXT:
 * - Previously, printers sometimes depended on concrete classes.
 * - Now AreaPrinter depends only on Shape abstraction.
 *
 * BENEFITS:
 * - Can accept any Shape implementation (Circle, Rectangle, Square, etc.)
 * - High-level module (printer) is decoupled from low-level modules (concrete shapes)
 *
 * NOTE:
 * - This satisfies DIP: both high-level and low-level modules depend on abstractions.
 */
export class AreaPrinter {
  constructor(private output: (text: string) => void = console.log) {}

  print(shape: Shape & { constructor?: { name?: string } }) {
    const name = shape.constructor?.name ?? 'Shape';
    this.output(`The area of the ${name} is ${shape.area()}`);
  }
}
