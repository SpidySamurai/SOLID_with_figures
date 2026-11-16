import { AreaCalculable } from './AreaCalculable';

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
 * - Only needs area() method
 *
 * IMPACT:
 * - SRP/OCP/LSP: maintained
 * - ISP: satisfied — clients are minimal and focused
 */
export class AreaPrinter {
  print(shape: AreaCalculable & { constructor?: { name?: string } }) {
    const name = shape.constructor?.name ?? 'Shape';
    console.log(`The area of the ${name} is ${shape.area()}`);
  }
}
