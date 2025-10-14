/**
 * SRP - AreaPrinter (printing only)
 *
 * CONTEXT:
 * - Following SRP, we remove printing from Shape and place it into AreaPrinter.
 *
 * PROBLEM (from Problem):
 * - Shape.printArea() mixed concerns: calculation + output formatting/printing.
 *
 * SRP SOLUTION (this file):
 * - AreaPrinter is responsible only for presentation of area values.
 * - It consumes a Shape instance (which provides area()) and prints the result.
 *
 * WHY KEEP IT SIMPLE:
 * - At this stage we purposely accept Shape as the input type so the SRP
 *   iteration focuses strictly on separating responsibilities. Later OCP
 *   iteration will replace the ad-hoc Shape with a Shape abstraction/interface.
 *
 * IMPACT ON OTHER PRINCIPLES:
 * - SRP: fixed — printing is separated.
 * - OCP: still violated — adding a new shape still requires editing Shape.area() conditionals.
 * - DIP: not fully applied (AreaPrinter uses console.log here); will be improved later.
 */
import { Shape } from './Shape';

export class AreaPrinter {
  print(shape: Shape) {
    // Using constructor.name would be unreliable for ad-hoc Shape instances,
    // so we print the declared type string for clarity in this SRP iteration.
    console.log(`The area of the ${shape.type} is ${shape.area()}`);
  }
}
