import { Shape } from './Shape';

/**
 * OCP - Triangle implements Shape
 *
 * CONTEXT:
 * - Triangle was previously handled via conditionals inside Shape.area().
 *
 * SOLUTION:
 * - Triangle now implements Shape and encapsulates triangle area logic.
 *
 * WHY THIS FOLLOWS OCP:
 * - Triangle addition requires no change to existing code that depends on Shape.
 *
 * IMPACT:
 * - SRP: maintained.
 * - OCP: satisfied for triangle.
 */
export class Triangle implements Shape {
  constructor(public base: number, public height: number) {}

  area(): number {
    return 0.5 * this.base * this.height;
  }
}
