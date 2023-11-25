interface GiveIngredients {
  salt(): void;

  meat(): void;

  paprika(): void;

  watter(): void;

  rice(): void;

  chilly(): void;

  ketchup(): void;

  cheese(): void;
  pasta(): void;
}

class ConcreteBuilder1 implements GiveIngredients {
  public product!: Product;
  public name!: string;

  constructor(name: string) {
    this.name = name;
    this.reset();
  }

  public reset(): void {
    this.product = new Product(this.name);
  }

  public salt(): void {
    this.product.parts.push("Salt");
  }

  public paprika(): void {
    this.product.parts.push("Paprika");
  }

  public meat(): void {
    this.product.parts.push("Meat");
  }

  public rice(): void {
    this.product.parts.push("Rice");
  }

  public chilly(): void {
    this.product.parts.push("Chilly");
  }

  public ketchup(): void {
    this.product.parts.push("Ketchup");
  }

  public cheese(): void {
    this.product.parts.push("Cheese");
  }
  public watter(): void {
    this.product.parts.push("Watter");
  }
  public pasta() {
    this.product.parts.push("Pasta");
  }

  public getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Product {
  public name!: string;
  constructor(name: string) {
    this.name = name;
  }
  public parts: string[] = [];

  public listParts(): void {
    console.log(`${this.name} parts: ${this.parts.join(", ")}`);
  }
}

class Director {
  public builder!: GiveIngredients;
  constructor() {}

  public setBuilder(builder: GiveIngredients): void {
    this.builder = builder;
  }

  public buildPizza(): void {
    this.builder.pasta();
    this.builder.ketchup();
    this.builder.meat();
    this.builder.cheese();
  }

  public buildRizoto(): void {
    this.builder.meat();
    this.builder.watter();
    this.builder.rice();
    this.builder.paprika();
    this.builder.salt();
  }
}

function clientCode(director: Director) {
  const builder = new ConcreteBuilder1("pizza");
  director.setBuilder(builder);

  director.buildPizza();
  builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);
