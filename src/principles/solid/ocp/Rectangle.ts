import { Shape } from './Shape';

/**
 * OCP - Rectangle implements Shape
 *
 * CONTEXT:
 * - Replaces conditional rectangle branch with a concrete class.
 *
 * SOLUTION:
 * - Rectangle implements Shape, providing its own area().
 *
 * WHY THIS FOLLOWS OCP:
 * - Rectangle can be added/modified independently; AreaPrinter and clients
 *   that depend on Shape remain unchanged.
 *
 * IMPACT:
 * - SRP: maintained.
 * - OCP: satisfied for rectangle.
 */
export class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}

  area(): number {
    return this.width * this.height;
  }
}
