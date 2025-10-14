import { Shape } from './Shape';

/**
 * OCP - Circle implements Shape
 *
 * CONTEXT:
 * - SRP kept a single Shape with conditional area() logic.
 *
 * PROBLEM (w.r.t OCP before this file):
 * - The previous conditional approach required editing core logic to add circles,
 *   or relied on string-based type checks in many places.
 *
 * SOLUTION:
 * - Circle is a concrete implementation of Shape.
 * - It encapsulates circle-specific area calculation.
 *
 * WHY THIS FOLLOWS OCP:
 * - Adding Circle does not require changing any existing modules that depend on Shape.
 *
 * IMPACT:
 * - SRP: maintained (single responsibility).
 * - OCP: satisfied for circle addition.
 * - LSP/ISP/DIP: to be further addressed in later iterations.
 */
export class Circle implements Shape {
  constructor(public radius: number) {}

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
