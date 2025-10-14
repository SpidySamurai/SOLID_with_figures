import { Shape } from './Shape';

/**
 * Rectangle implements Shape.
 *
 * CONTEXT:
 * - A straightforward concrete implementation with predictable semantics.
 *
 * WHY THIS IS LSP-SAFE:
 * - Rectangle.area() returns width * height and does not modify external state.
 * - Code that expects a Shape and calls area() will get the expected numeric result.
 *
 * LSP NOTE:
 * - Avoid designing APIs where callers rely on Rectangle-specific behaviors (like independent setters).
 *   Those expectations reduce substitutability.
 */
export class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}

  area(): number {
    return this.width * this.height;
  }
}
