import { Shape } from './Shape';

/**
 * Rectangle implements Shape
 *
 * CONTEXT:
 * - Another concrete shape
 *
 * DIP:
 * - High-level modules depend on Shape abstraction, not Rectangle specifics
 */
export class Rectangle implements Shape {
  readonly name = 'Rectangle';

  constructor(public width: number, public height: number) {}

  area(): number {
    return this.width * this.height;
  }
}
