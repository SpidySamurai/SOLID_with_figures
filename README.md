# SOLID with Figures

The five SOLID principles as a step-by-step TypeScript refactor of a small shapes program.

[![CI](https://github.com/SpidySamurai/SOLID_with_figures/actions/workflows/ci.yml/badge.svg)](https://github.com/SpidySamurai/SOLID_with_figures/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

It starts from one `Shape` class that computes and prints the area of every figure through an if-chain, and refactors it one principle at a time: SRP, OCP, LSP, ISP, then DIP. Each step lives in its own folder, runs on its own, and has comments that say what changed and why. I wrote it to make the principles stick with concrete figures instead of abstract examples.

## Quick start

Requires Node.js 22 or newer.

```sh
npm install
npm run problem   # the starting point
npm run lsp       # any step by name
npm run steps     # every step, in order
```

## How it works

| Step | Principle | What changes | Run |
| --- | --- | --- | --- |
| [problem](src/problem) | None yet | One `Shape` class computes every area through an if-chain on a `type` string and prints it with `console.log`. | `npm run problem` |
| [srp](src/principles/solid/srp) | Single Responsibility | Printing moves out of `Shape` into `AreaPrinter`; `Shape` only computes. | `npm run srp` |
| [ocp](src/principles/solid/ocp) | Open/Closed | A `Shape` interface replaces the if-chain; each figure is its own class, and `Square` is added without editing the printer. | `npm run ocp` |
| [lsp](src/principles/solid/lsp) | Liskov Substitution | A runnable violation (`BadSquare extends MutableRectangle` breaks a resize client), then `Square` and `Rectangle` as separate `Shape`s. | `npm run lsp` |
| [isp](src/principles/solid/isp) | Interface Segregation | `Shape` splits into `AreaCalculable`, `PerimeterCalculable` and `Named`; each client asks only for what it uses. | `npm run isp` |
| [dip](src/principles/solid/dip) | Dependency Inversion | `AreaPrinter` receives its output function instead of calling `console.log`. | `npm run dip` |

Read the steps in order. The comments in each step say what it fixes and which principles are still open.

### Project layout

```text
src/
  problem/              starting point: one class that does everything
  principles/solid/
    srp/ ocp/ lsp/ isp/ dip/
      main.ts           runnable entry point for the step
      *.test.ts         tests for the step's figures and clients
      *.ts              the step's shapes, interfaces and printer
```

## Development

```sh
npm install
npm run typecheck   # tsc in strict mode, no emit
npm test            # node:test, run through tsx
```

CI runs `npm ci`, `npm run typecheck`, `npm test` and `npm run steps` on Node LTS for every push and pull request to `master`.

## License

[MIT](LICENSE)

Built by [Javier Chi Ortiz](https://javierchiortiz.dev).
