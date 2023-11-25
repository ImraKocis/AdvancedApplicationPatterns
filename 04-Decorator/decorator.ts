interface Component {
  operation(): string;
}

class ConcreteComponent implements Component {
  public operation(): string {
    return "Car checkup";
  }
}

class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }
  public operation(): string {
    return this.component.operation();
  }
}

class ConcreteDecoratorCarWash extends Decorator {
  public operation(): string {
    return `Washing car -> (${super.operation()})`;
  }
}
class ConcreteDecoratorCarInsideCleanup extends Decorator {
  public operation(): string {
    return `Cleaning car inside -> (${super.operation()})`;
  }
}

const client = (component: Component) => {
  console.log(`RESULT: ${component.operation()}`);
};

const doCarCheckup = new ConcreteComponent();
const doCarWash = new ConcreteDecoratorCarWash(doCarCheckup);
const doInsideCleanup = new ConcreteDecoratorCarInsideCleanup(doCarWash);

client(doInsideCleanup);
