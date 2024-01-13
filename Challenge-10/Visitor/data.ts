import { Item, Visitor } from "./index";

export class DVD implements Item {
  public region: number;
  public price: number;
  constructor(region: number, price: number) {
    this.region = region;
    this.price = price;
  }

  accept(visitor: Visitor): void {
    visitor.visitDvd(this);
  }
}

export class Fruit implements Item {
  public weightKg: number;
  public pricePerKg: number;
  constructor(weightKg: number, pricePerKg: number) {
    this.weightKg = weightKg;
    this.pricePerKg = pricePerKg;
  }

  accept(visitor: Visitor): void {
    visitor.visitFruit(this);
  }
}

export class Book implements Item {
  public isbn: string;
  public price: number;
  constructor(isbn: string, price: number) {
    this.isbn = isbn;
    this.price = price;
  }

  accept(visitor: Visitor): void {
    visitor.visitBook(this);
  }
}
