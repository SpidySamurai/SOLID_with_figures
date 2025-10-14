/**
 * --- PROBLEM ---
 *
 * This class violates several SOLID principles:
 *
 * 1. SRP (Single Responsibility Principle):
 *    - This class calculates areas AND prints them.
 *    - Multiple reasons to change: if printing changes, or area calculation changes.
 *
 * 2. OCP (Open/Closed Principle):
 *    - To add a new shape, we must modify this class.
 *    - Not closed for modification.
 *
 * 3. LSP (Liskov Substitution Principle):
 *    - All shapes are handled via if statements.
 *    - Cannot substitute a new shape without modifying code that uses this class.
 *
 * 4. ISP (Interface Segregation Principle):
 *    - This class exposes methods that might not be needed for some clients.
 *    - E.g., printArea is only needed for printing, not calculation.
 *
 * 5. DIP (Dependency Inversion Principle):
 *    - High-level modules (main.ts) depend on this concrete class.
 *    - No abstraction exists.
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
