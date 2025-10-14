import { Shape } from './Shape';

/**
 * AreaPrinter uses Shape abstraction; LSP requires concrete Shapes to be substitutable here.
 *
 * CONTEXT:
 * - AreaPrinter was already depending on Shape (OCP).
 * - LSP requires that any Shape implementation behave correctly in this context.
 *
 * WHAT TO WATCH FOR:
 * - If a concrete Shape throws unexpected exceptions, mutates shared state, or returns incorrect
 *   values that violate the client's assumptions, substitutability is violated.
 *
 * PRACTICAL RULE:
 * - Keep Shape contract minimal and ensure implementations behave predictably.
 */
export class AreaPrinter {
  print(shape: Shape & { constructor: { name: string } }) {
    console.log(`The area of the ${shape.constructor.name} is ${shape.area()}`);
  }
}
