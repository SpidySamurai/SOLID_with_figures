import { AreaCalculable } from './AreaCalculable';
import { PerimeterCalculable } from './PerimeterCalculable';

/**
 * Circle implements only the interfaces relevant to its capabilities:
 * - AreaCalculable: for area clients
 * - PerimeterCalculable: for perimeter clients
 *
 * CONTEXT (from previous iterations):
 * - SRP separated responsibilities
 * - OCP allowed new shapes without modifying clients
 * - LSP ensured substitutability
 *
 * ISP APPLICATION:
 * - Circle implements only the relevant capabilities
 * - Clients depending on AreaCalculable or PerimeterCalculable are not coupled
 *   to other methods
 *
 * IMPACT:
 * - SRP/OCP/LSP: maintained
 * - ISP: satisfied — clients use focused interfaces
 */
export class Circle implements AreaCalculable, PerimeterCalculable {
  constructor(public radius: number) {}

  area(): number {
    return Math.PI * this.radius ** 2;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}
