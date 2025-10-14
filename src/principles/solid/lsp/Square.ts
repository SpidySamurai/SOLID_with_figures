import { Shape } from './Shape';

/**
 * Square implements Shape.
 *
 * CONTEXT:
 * - It is tempting to model Square as `extends Rectangle`. That can lead to LSP violations
 *   because Rectangle clients might expect independent width/height semantics.
 *
 * DESIGN DECISION (LSP-compliant):
 * - Model Square as its own concrete type implementing Shape, not as a subclass of Rectangle.
 * - Square.area() returns side * side. No side effects, no hidden invariants that break callers.
 *
 * WHY THIS IS LSP-SAFE:
 * - Any client that depends only on Shape.area() will receive correct behavior when passed a Square.
 * - There are no assumptions about setters or mutability that differ from Rectangle.
 */
export class Square implements Shape {
  constructor(public side: number) {}

  area(): number {
    return this.side * this.side;
  }
}
