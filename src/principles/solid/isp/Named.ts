/**
 * ISP - Named interface
 *
 * A figure that can say what it is, for clients that label their output.
 * Kept apart from AreaCalculable so a client that only needs area() does
 * not also depend on a name, and the printer asks for both explicitly.
 */
export interface Named {
  readonly name: string;
}
