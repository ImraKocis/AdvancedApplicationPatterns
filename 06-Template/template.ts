class Operations {
  public makeCaffe(): void {
    this.boilWater();
    this.brewCaffeInBoilWater();
    this.pourInCup("Caffe");
    this.addSugarAndMilk();
  }

  public makeTea(): void {
    this.boilWater();
    this.steepTeeInWater();
    this.pourInCup("Tea");
    this.addLemon();
  }

  protected boilWater(): void {
    console.log("Boil water");
  }
  protected brewCaffeInBoilWater() {
    console.log("Brew Caffe");
  }
  protected pourInCup(obj: string) {
    console.log(`Pour ${obj}`);
  }
  protected addSugarAndMilk() {
    console.log("Add Sugar and milk");
  }
  protected steepTeeInWater() {
    console.log("Steep Tea");
  }
  protected addLemon() {
    console.log("Add Lemon");
  }
}

class MakeCustomCaffe extends Operations {
  protected addSugarAndMilk(): void {
    console.log("Add only milk without sugar");
  }
}

class MakeCustomTea extends Operations {
  protected addLemon() {
    console.log("Add lemon and honey");
  }
}

const makeCaffe = (operation: Operations) => {
  console.log("-------------------------");
  operation.makeCaffe();
};

const makeTea = (operation: Operations) => {
  console.log("-------------------------");
  operation.makeTea();
};

makeCaffe(new MakeCustomCaffe());
makeTea(new MakeCustomTea());
