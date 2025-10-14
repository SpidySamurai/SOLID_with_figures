import { Shape } from './Shape';

/**
 * OCP - Square implements Shape (example extension)
 *
 * PURPOSE:
 * - Demonstrate adding a new shape AFTER the system depends on Shape abstraction.
 *
 * WHY THIS SHOWS OCP:
 * - Square can be added without modifying AreaPrinter, client code, or existing shapes.
 *
 * IMPACT:
 * - SRP: maintained.
 * - OCP: demonstrated (open for extension).
 */
export class Square implements Shape {
  constructor(public side: number) {}

  area(): number {
    return this.side * this.side;
  }
}
