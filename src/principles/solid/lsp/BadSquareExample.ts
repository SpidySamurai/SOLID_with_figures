/**
 * BAD EXAMPLE (demonstrates a classic LSP violation)
 *
 * CONTEXT:
 * - This file intentionally shows why `class Square extends Rectangle` is risky.
 *
 * PROBLEM:
 * - Rectangle may expose independent width and height properties.
 * - If Square inherits Rectangle but overrides setters to force width === height,
 *   code that assumes independent width/height will behave incorrectly when a Square is supplied.
 *
 * CONSEQUENCE:
 * - Substitutability is broken: functions that accept Rectangle would not behave correctly for Square.
 *
 * USAGE:
 * - This file is illustrative only; do not use this inheritance model if substitutability matters.
 */
import { Rectangle } from './Rectangle';

class BadSquare extends Rectangle {
  constructor(side: number) {
    super(side, side);
  }

  // If we were to override setters or behavior to keep width/height equal,
  // clients expecting independent width/height would suffer unexpected behavior.
}
