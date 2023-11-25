interface Shape {
  Rectangle(): void;
  Circle(): void;
}

interface Operation {
  drawShape(shape: string): void;
}

class Monitor implements Operation {
  drawShape(shape: string): void {
    console.log(`Drawing ${shape} on Monitor`);
  }
}

class Printer implements Operation {
  drawShape(shape: string): void {
    console.log(`Printing ${shape} on Printer`);
  }
}

class Shapes implements Shape {
  constructor(private drawingAPI: Operation) {}

  Rectangle(): void {
    this.drawingAPI.drawShape("Rectangle");
  }
  Circle() {
    this.drawingAPI.drawShape("Circle");
  }
}

// Client Code
const monitor = new Monitor();
const printer = new Printer();

const rectangleOnMonitor = new Shapes(monitor);
const circleOnPrinter = new Shapes(printer);

rectangleOnMonitor.Rectangle();

circleOnPrinter.Circle();
