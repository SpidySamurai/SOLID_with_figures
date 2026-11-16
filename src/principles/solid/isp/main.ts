import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { AreaPrinter } from './AreaPrinter';
import { PerimeterCalculable } from './PerimeterCalculable';

/**
 * ISP Iteration - main
 *
 * PURPOSE:
 * - Show clients depending only on the interfaces they need
 * - AreaPrinter uses AreaCalculable
 * - A perimeter client uses PerimeterCalculable
 *
 * OBSERVE:
 * - Rectangle implements AreaCalculable only
 * - Circle implements both interfaces
 * - Trying to use perimeter client on Rectangle would be compile-time error in TS
 */

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

const printer = new AreaPrinter();
console.log('--- ISP Iteration Output ---');
printer.print(circle);
printer.print(rectangle);

// Example perimeter client
function printPerimeter(obj: PerimeterCalculable) {
  console.log('Perimeter:', obj.perimeter());
}

console.log('--- Perimeter client output ---');
printPerimeter(circle); // OK
// printPerimeter(rectangle); // Compile-time error if uncommented — Rectangle doesn't implement PerimeterCalculable
