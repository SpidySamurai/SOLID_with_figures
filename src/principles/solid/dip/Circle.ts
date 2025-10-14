import { Shape } from './Shape';

/**
 * Circle implements Shape
 *
 * CONTEXT:
 * - Concrete shape providing area calculation.
 *
 * DIP:
 * - High-level modules using Shape do not need to know this is Circle.
 * - Can replace or extend shapes without modifying clients.
 */
export class Circle implements Shape {
  constructor(public radius: number) {}

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
