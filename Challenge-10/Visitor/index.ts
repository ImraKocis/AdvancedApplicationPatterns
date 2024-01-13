import { DVD, Book, Fruit } from "./data";

export interface Item {
  accept(visitor: Visitor): void;
}

export interface Visitor {
  visitDvd(element: DVD): void;
  visitBook(element: Book): void;
  visitFruit(element: Fruit): void;
}

class ShoppingCartVisitor implements Visitor {
  public totalPrice = 0;
  public visitBook(element: Book): void {
    let discount = 0;
    if (element.price > 35) discount = 5;
    this.totalPrice = element.price * ((100 - discount) / 100);
  }

  public visitDvd(element: DVD): void {
    let discount = 0;
    if (element.price > 20) discount = 5;
    if (element.region == 2 && discount == 0) discount = 2;
    this.totalPrice += element.price * ((100 - discount) / 100);
  }

  public visitFruit(element: Fruit): void {
    this.totalPrice += element.weightKg * element.pricePerKg;
  }
  public getPrice() {
    return this.totalPrice;
  }
}

const goShopping = (cart: Item[], visitor: ShoppingCartVisitor) => {
  for (const item of cart) {
    item.accept(visitor);
  }
  console.log(visitor.getPrice());
};

const book = new Book("asdajshsgda88786", 25);
const apple = new Fruit(3, 3.99);
const dvd = new DVD(3, 35);

const items: Item[] = [book, apple, dvd];
const shoppingCartVisitor = new ShoppingCartVisitor();

goShopping(items, shoppingCartVisitor);
