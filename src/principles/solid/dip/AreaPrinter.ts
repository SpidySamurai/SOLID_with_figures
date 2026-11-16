import { Shape } from './Shape';

/**
 * DIP - AreaPrinter depends on abstraction, not concrete shapes
 *
 * CONTEXT:
 * - Since OCP, AreaPrinter depends on the Shape abstraction, not concrete figures.
 * - It still called console.log itself, so the reporting policy depended on a
 *   concrete output detail.
 *
 * DIP APPLICATION:
 * - The output is injected as a function `(text: string) => void`.
 * - console.log is only the default; a test, a file writer or an HTTP response
 *   can be passed in without changing AreaPrinter.
 *
 * NOTE:
 * - Both sides now depend on abstractions: Shape for the figures, the output
 *   function for where the text goes.
 */
export class AreaPrinter {
  constructor(private output: (text: string) => void = console.log) {}

  print(shape: Shape) {
    this.output(`The area of the ${shape.name} is ${shape.area()}`);
  }
}
