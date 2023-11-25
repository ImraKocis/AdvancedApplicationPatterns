
abstract class Creator {
    /**
     * Note that the Creator may also provide some default implementation of the
     * factory method.
     */
    public abstract factoryMethod(): Product;

    /**
     * Also note that, despite its name, the Creator's primary responsibility is
     * not creating products. Usually, it contains some core business logic that
     * relies on Product objects, returned by the factory method. Subclasses can
     * indirectly change that business logic by overriding the factory method
     * and returning a different type of product from it.
     */
    public someOperation(): string {
        // Call the factory method to create a Product object.
        const product = this.factoryMethod();
        // Now, use the product.
        return `${product.getProduct()}`;
    }
}
class ZagrebFactory extends Creator {
    public factoryMethod(): Product {
        return new Ball('Ball', 50, 10, 'zg');
    }
}

class OsijekFactory extends Creator {
    public factoryMethod(): Product {
        return new Ball('Ball', 50,15,'os');
    }
}
interface Product {
    name: string;
    price: number;
    discount: number;
    sign: FactorySign
    getProduct(): string;
}
type FactorySign = 'os' | 'zg';
class Ball implements Product {
    name: string;
    price: number;
    discount: number;
    sign: FactorySign

    constructor(name: string, price:number, discount: number, sign: FactorySign) {
        this.name = name;
        this.price = price
        this.discount = discount
        this.sign = sign
    }
    public getProduct(): string {
        return `\nProduct: ${this.name}\nprice: ${this.price}\ndiscount: ${this.discount}\nprice after discount: ${this.price - (this.price*(this.discount/100))}\nfrom ${this.sign} factory`;
    }
}

class Shoe implements Product {
    name: string;
    price: number;
    discount: number;
    sign: FactorySign

    constructor(name: string, price:number, discount: number, sign: FactorySign) {
        this.name = name;
        this.price = price
        this.discount = discount
        this.sign = sign
    }
    public getProduct(): string {
        return '{Result of the Shoe}';
    }
}

function clientCode(creator: Creator) {
    console.log(creator.someOperation());
}

clientCode(new ZagrebFactory());

