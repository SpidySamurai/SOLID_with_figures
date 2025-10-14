- `problem/` → Initial non-SOLID code, shows tight coupling and nested if-statements for different shapes.  
- `principles/solid/` → Iterative application of each SOLID principle.  
  - `srp/` → Single Responsibility Principle applied.  
  - `ocp/` → Open/Closed Principle applied on top of SRP.  
  - `lsp/` → Liskov Substitution Principle applied on top of OCP.  
  - `isp/` → Interface Segregation Principle applied on top of LSP.  
  - `dip/` → Dependency Inversion Principle applied on top of ISP.

---

## Principles Explanation

### 1. SRP – Single Responsibility Principle
- **Problem:** Shape classes handled both area calculation and printing.  
- **Solution:** Separated responsibilities:  
  - Shape classes calculate area.  
  - `AreaPrinter` handles output.  
- **Impact:** Classes have one responsibility, easier to maintain and test.

### 2. OCP – Open/Closed Principle
- **Problem:** Adding new shapes required modifying existing code.  
- **Solution:** Introduced a `Shape` abstraction.  
- **Impact:** You can add new shapes without modifying existing clients.

### 3. LSP – Liskov Substitution Principle
- **Problem:** Some subclasses (e.g., Square extending Rectangle) could break substitutability.  
- **Solution:** Each concrete shape implements the `Shape` interface directly.  
- **Impact:** Any client using `Shape` can safely use any concrete implementation.

### 4. ISP – Interface Segregation Principle
- **Problem:** Clients were forced to depend on methods they did not use.  
- **Solution:** Split interfaces: `AreaCalculable`, `PerimeterCalculable`.  
- **Impact:** Clients depend only on the interfaces they actually use.

### 5. DIP – Dependency Inversion Principle
- **Problem:** High-level modules depended on concrete classes.  
- **Solution:** `AreaPrinter` depends on the `Shape` abstraction instead of concrete shapes.  
- **Impact:** High-level modules are decoupled from low-level modules. New shapes can be added without changing the printer.