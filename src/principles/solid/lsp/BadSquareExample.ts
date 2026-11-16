/**
 * BAD EXAMPLE: a classic LSP violation, kept runnable on purpose.
 *
 * CONTEXT:
 * - "A square is a rectangle" is true in geometry, so it is tempting to write
 *   `class Square extends Rectangle`.
 *
 * THE CONTRACT:
 * - A MutableRectangle has independent width and height: setting one leaves
 *   the other unchanged. `areaAfterResize` relies on exactly that.
 *
 * THE VIOLATION:
 * - BadSquare must keep width === height, so it overrides both setters to
 *   change both sides. The code compiles, but any caller that depends on the
 *   Rectangle contract gets a wrong answer when handed a BadSquare:
 *   areaAfterResize(rect, 5, 4) returns 20 for a rectangle and 16 for a square.
 *
 * THE FIX (Rectangle.ts and Square.ts in this folder):
 * - Square does not extend Rectangle. Both implement Shape, whose contract is
 *   only area() and name, and neither exposes setters a subtype could break.
 */
export class MutableRectangle {
  constructor(
    protected widthValue: number,
    protected heightValue: number,
  ) {}

  get width(): number {
    return this.widthValue;
  }

  set width(value: number) {
    this.widthValue = value;
  }

  get height(): number {
    return this.heightValue;
  }

  set height(value: number) {
    this.heightValue = value;
  }

  area(): number {
    return this.widthValue * this.heightValue;
  }
}

export class BadSquare extends MutableRectangle {
  constructor(side: number) {
    super(side, side);
  }

  override get width(): number {
    return this.widthValue;
  }

  override set width(value: number) {
    this.widthValue = value;
    this.heightValue = value;
  }

  override get height(): number {
    return this.heightValue;
  }

  override set height(value: number) {
    this.widthValue = value;
    this.heightValue = value;
  }
}

/**
 * A client written against the MutableRectangle contract: it sets width and
 * height independently and expects the area to be width * height.
 */
export function areaAfterResize(rect: MutableRectangle, width: number, height: number): number {
  rect.width = width;
  rect.height = height;
  return rect.area();
}
