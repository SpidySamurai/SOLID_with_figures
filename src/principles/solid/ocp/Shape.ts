/**
 * OCP - Shape interface (abstraction)
 *
 * CONTEXT (coming from SRP iteration):
 * - In the SRP iteration we separated responsibilities: Shape.area() handled
 *   computation (with conditional logic) and AreaPrinter handled printing.
 * - SRP improved clarity but left the shape representation ad-hoc:
 *   Shape used a `type` string + conditionals inside area().
 *
 * PROBLEM (w.r.t. OCP):
 * - Adding new concrete shapes required editing the conditional logic
 *   inside Shape.area() (or modifying client code).
 * - That means the system was not closed for modification: every extension
 *   forced changes in existing modules.
 *
 * SOLUTION (this interface):
 * - Define a minimal abstraction: Shape with a single area() method.
 * - Concrete shapes will implement this interface and provide their own logic.
 * - High-level modules (printers, aggregators, clients) will depend on Shape.
 *
 * BENEFITS:
 * - Open for extension: add new concrete Shape implementations.
 * - Closed for modification: existing components remain unchanged when adding shapes.
 *
 * IMPACT ON OTHER PRINCIPLES:
 * - SRP: preserved — concrete shapes still focus on area calculation only.
 * - LSP: prepared — implementations must respect substitutability (next iteration).
 * - ISP: not yet applied here (we'll split interfaces later when needed).
 * - DIP: partially applied (higher-level modules depend on abstraction), full DIP needs printer abstraction later.
 */
export interface Shape {
  area(): number;
}
