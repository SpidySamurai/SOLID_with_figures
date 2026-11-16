import { AreaCalculable } from './AreaCalculable';

/**
 * Rectangle implements only AreaCalculable
 *
 * CONTEXT:
 * - Rectangle could provide perimeter, but current clients only need area.
 * - Avoid forcing unnecessary methods (ISP).
 *
 * BENEFIT:
 * - Clients depending on AreaCalculable are not coupled to unused methods.
 * - Easy to extend later with PerimeterCalculable if needed.
 */
export class Rectangle implements AreaCalculable {
  constructor(public width: number, public height: number) {}

  area(): number {
    return this.width * this.height;
  }
}
