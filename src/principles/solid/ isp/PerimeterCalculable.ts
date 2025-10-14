/**
 * ISP - PerimeterCalculable interface
 *
 * CONTEXT:
 * - Some clients may need perimeter calculations.
 * - Not all shapes or clients require it.
 *
 * SOLUTION:
 * - Separate interface for perimeter() responsibility.
 * - Shapes that can provide perimeter implement this interface.
 *
 * BENEFITS:
 * - Avoids forcing classes to implement methods they don’t need.
 * - Clients depend only on the methods they actually use.
 */
export interface PerimeterCalculable {
  perimeter(): number;
}
