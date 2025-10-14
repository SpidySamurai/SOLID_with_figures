import { Shape } from './Shape';

/**
 * OCP - AreaPrinter depends on Shape abstraction
 *
 * CONTEXT:
 * - In SRP AreaPrinter consumed a concrete Shape instance (ad-hoc type).
 *
 * PROBLEM (before OCP):
 * - AreaPrinter or clients might have relied on shape.type strings or conditional logic.
 *
 * SOLUTION:
 * - AreaPrinter now accepts any object that implements Shape and calls area().
 * - It does not need to be modified when new Shape implementations are added.
 *
 * BENEFITS:
 * - AreaPrinter remains closed for modification.
 * - We can extend the system by adding new shapes that implement Shape.
 *
 * LIMITATIONS:
 * - AreaPrinter still prints to console directly (DIP not fully applied yet).
 * - ISP not addressed here; area is still the only required capability for printing.
 */
export class AreaPrinter {
  print(shape: Shape & { constructor: { name: string } }) {
    console.log(`The area of the ${shape.constructor.name} is ${shape.area()}`);
  }
}
