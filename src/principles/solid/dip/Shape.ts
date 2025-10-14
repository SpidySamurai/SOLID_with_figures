/**
 * DIP - Shape interface (abstraction)
 *
 * CONTEXT (from previous iterations):
 * - SRP: separated calculation and printing
 * - OCP: added Shape abstraction and concrete implementations
 * - LSP: ensured substitutability
 * - ISP: split interfaces (AreaCalculable, PerimeterCalculable)
 *
 * DIP GOAL:
 * - High-level modules (like printers) should depend on abstractions, not concrete shapes.
 *
 * SOLUTION:
 * - Keep Shape as an interface. Concrete shapes implement it.
 * - Clients will depend on Shape abstraction only, not specific classes.
 *
 * IMPACT:
 * - SRP/OCP/LSP/ISP: preserved
 * - DIP: high-level modules no longer depend on concrete implementations
 */
export interface Shape {
  area(): number;
}
