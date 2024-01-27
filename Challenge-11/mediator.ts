interface Mediator {
  notify(sender: object, event: string): void;
}

class WashingPrograms {
  protected mediator: Mediator;

  constructor(mediator?: Mediator) {
    this.mediator = mediator!;
  }

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}

class WhiteClothes extends WashingPrograms {
  public setWashingType(): void {
    console.log("Washing type: White");
    this.mediator.notify(this, "White");
  }
  public setTemperature(): void {
    console.log("Washing temperature: 40 degrees Celsius");
    // this.mediator.notify(this, "White");
  }

  public setDrumSpeed(): void {
    console.log("Drum speed 700/min");
    // this.mediator.notify(this, "B");
  }
  public setSoftener(): void {
    console.log("Softener: 20ml.");
    // this.mediator.notify(this, "B");
  }
}

class ColorClothes extends WashingPrograms {
  public setWashingType(): void {
    console.log("Washing type: Color");
    this.mediator.notify(this, "Color");
  }
  public setTemperature(): void {
    console.log("Washing temperature: 60 degrees Celsius");
    // this.mediator.notify(this, "White");
  }

  public setDrumSpeed(): void {
    console.log("Drum speed 1300/min");
    // this.mediator.notify(this, "B");
  }
  public setStainRemover(): void {
    console.log("Stain remover: 100ml.");
    // this.mediator.notify(this, "B");
  }
}

class ConcreteMediator implements Mediator {
  private white: WhiteClothes;
  private color: ColorClothes;

  constructor(c1: WhiteClothes, c2: ColorClothes) {
    this.white = c1;
    this.white.setMediator(this);
    this.color = c2;
    this.color.setMediator(this);
  }

  public notify(sender: object, event: string): void {
    if (event === "White") {
      console.log(
        "Mediator reacts on White clothes option and triggers following operations:",
      );
      this.white.setTemperature();
      this.white.setDrumSpeed();
      this.white.setSoftener();
    }

    if (event === "Color") {
      console.log(
        "Mediator reacts on Color clothes option and triggers following operations:",
      );
      this.color.setTemperature();
      this.color.setDrumSpeed();
      this.color.setStainRemover();
    }
  }
}

const white = new WhiteClothes();
const color = new ColorClothes();
new ConcreteMediator(white, color);

console.log("Do white");
white.setWashingType();

console.log("Do color");
color.setWashingType();
