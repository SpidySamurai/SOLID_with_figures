/**
 * ISP - AreaCalculable interface
 *
 * CONTEXT (from LSP/OCP/SRP):
 * - Previously, Shape was a single abstraction with a single method: area().
 * - AreaPrinter depended on Shape and used area().
 *
 * PROBLEM (w.r.t ISP):
 * - As we add more features (like perimeter, resize, serialization), a single
 *   broad interface could force all shapes to implement unrelated methods.
 * - Clients that only need area() would be coupled to irrelevant methods.
 *
 * SOLUTION:
 * - Introduce a focused interface: AreaCalculable.
 * - Clients that only need area() now depend on this minimal interface.
 *
 * BENEFITS:
 * - Reduced coupling.
 * - Classes implement only the capabilities they actually support.
 * - Clients are focused and maintainable.
 *
 * IMPACT:
 * - SRP: maintained (classes have one responsibility).
 * - OCP: maintained (new classes implement interfaces without changing clients).
 * - LSP: maintained (substitutable via AreaCalculable).
 */
export interface AreaCalculable {
  area(): number;
}
