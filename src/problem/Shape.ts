/**
 * --- PROBLEM ---
 *
 * One class that knows every figure. It works, but each SOLID principle
 * points at something that will hurt as the program grows:
 *
 * 1. SRP (Single Responsibility Principle):
 *    - This class calculates areas AND prints them.
 *    - Two reasons to change: the area rules, or the way results are shown.
 *
 * 2. OCP (Open/Closed Principle):
 *    - area() is an if-chain on a `type` string. Adding a figure means
 *      editing this class, so it is not closed for modification.
 *
 * 3. LSP (Liskov Substitution Principle):
 *    - Not violated here: there are no subtypes yet, so there is nothing to
 *      substitute. The lsp/ step shows what a real violation looks like.
 *
 * 4. ISP (Interface Segregation Principle):
 *    - Every client gets one wide surface: optional width, height and radius
 *      for every figure, and printArea() even for callers that only compute.
 *
 * 5. DIP (Dependency Inversion Principle):
 *    - printArea() writes straight to console.log, so the area logic depends
 *      on a concrete output detail instead of an abstraction.
 *    - Callers depend on this concrete class; no abstraction exists.
 */
export class Shape {
  constructor(public type: string, public width?: number, public height?: number, public radius?: number) {}

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

  printArea() {
    console.log(`The area of the ${this.type} is ${this.area()}`);
  }
}
