/**
 * SRP - Shape (calculation only)
 *
 * CONTEXT (coming from Problem iteration):
 * - The initial Problem version used one class (Shape) that both computed areas
 *   for many kinds of shapes via if/else branches AND printed the results.
 *
 * PROBLEM (w.r.t SRP):
 * - Single Responsibility Principle (SRP) was violated because the class had
 *   multiple reasons to change: changes to area calculation logic and changes
 *   to printing/formatting both required modifying the same class.
 *
 * SRP SOLUTION (this file):
 * - This Shape class focuses ONLY on area calculation for the current
 *   representation (keeps the string-type representation for now).
 * - Printing is moved to a separate AreaPrinter class.
 *
 * WHY THIS MATTERS:
 * - A class should have only one reason to change. Now Shape changes only when
 *   area calculation rules change (not when printing/formatting changes).
 *
 * NOTE ABOUT ITERATIVE MIGRATION:
 * - This SRP step intentionally does NOT yet apply OCP (we keep the conditional
 *   logic here). The goal is to demonstrate SRP in isolation first, then
 *   introduce OCP in the next iteration.
 *
 * IMPACT ON OTHER PRINCIPLES:
 * - OCP: still violated (conditionals remain; we'll fix this in OCP iteration).
 * - LSP: not yet addressed here.
 * - ISP: not applicable yet (we'll split interfaces later).
 * - DIP: partially improved (printer depends on an abstraction of Shape later),
 *        but AreaPrinter currently may still take the concrete Shape type.
 */
export class Shape {
  constructor(
    public type: string,
    public width?: number,
    public height?: number,
    public radius?: number
  ) {}

  /**
   * area():
   * - Keeps the same conditional-based logic as Problem for now.
   * - Responsibility: compute area only.
   */
  area(): number {
    if (this.type === 'circle' && this.radius !== undefined) {
      return Math.PI * this.radius ** 2;
    } else if (this.type === 'rectangle' && this.width !== undefined && this.height !== undefined) {
      return this.width * this.height;
    } else if (this.type === 'triangle' && this.width !== undefined && this.height !== undefined) {
      return 0.5 * this.width * this.height;
    } else {
      throw new Error('Invalid shape or missing dimensions');
    }
  }
}
