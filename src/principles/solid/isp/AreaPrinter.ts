import { AreaCalculable } from './AreaCalculable';
import { Named } from './Named';

/**
 * AreaPrinter depends only on AreaCalculable
 *
 * CONTEXT:
 * - SRP separated calculation and printing
 * - OCP allowed adding new shapes without changing printer
 * - LSP ensured substitutability
 *
 * ISP APPLICATION:
 * - AreaPrinter does not depend on a fat Shape interface
 * - Needs area() and a name, so it asks for AreaCalculable & Named:
 *   two small interfaces composed at the point of use
 *
 * IMPACT:
 * - SRP/OCP/LSP: maintained
 * - ISP: satisfied — clients are minimal and focused
 */
export class AreaPrinter {
  print(shape: AreaCalculable & Named) {
    console.log(`The area of the ${shape.name} is ${shape.area()}`);
  }
}
