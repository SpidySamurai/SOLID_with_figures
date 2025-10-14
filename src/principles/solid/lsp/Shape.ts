/**
 * LSP - Shape interface (contract)
 *
 * CONTEXT (from OCP/SRP):
 * - SRP separated responsibilities (area calculation vs printing).
 * - OCP introduced a Shape abstraction so AreaPrinter and clients depend on it.
 *
 * LSP GOAL:
 * - Ensure every concrete implementation of Shape can be used wherever Shape is expected
 *   without surprising the client or breaking correctness.
 *
 * PROBLEM (what we must avoid):
 * - Creating subclass hierarchies that change expected behavior (e.g., Square extends Rectangle)
 *   can break substitutability because client code expecting Rectangle semantics may be surprised.
 *
 * SOLUTION (this contract):
 * - Keep Shape's contract minimal and stable: `area()` returns a numeric area.
 * - Concrete shapes must honor the semantic meaning of area(), be deterministic, and not introduce
 *   unexpected side effects or change observable invariants that clients rely on.
 *
 * IMPACT:
 * - LSP ensures clients like AreaPrinter or aggregation functions can safely accept any Shape.
 * - LSP works together with OCP: we add shapes (extensions) that obey Shape contract.
 */
export interface Shape {
  area(): number;
}
