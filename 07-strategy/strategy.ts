class Student implements StudentData {
  name: string;
  lastName: string;
  age: number;
  sex: sex;

  constructor(name: string, lastName: string, age: number, sex: sex) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.sex = sex;
  }
}

interface StudentData {
  name: string;
  lastName: string;
  age: number;
  sex: sex;
}

type sex = "male" | "female";

interface Strategy {
  doAlgorithm(data: Student[]): Student[];
}

class Context {
  private strategy: Strategy;
  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public doSomeBusinessLogic(): void {
    console.log("Context: Sorting data using the strategy");
    const result = this.strategy.doAlgorithm([
      new Student("Petar", "Peric", 22, "male"),
      new Student("Marko", "Maric", 23, "male"),
      new Student("Lara", "Laric", 24, "female"),
      new Student("Katarina", "Katic", 25, "female"),
    ]);
    result.map((entry) => {
      console.log(entry);
    });
  }
}

class FilterMalesStrategy implements Strategy {
  public doAlgorithm(data: Student[]): Student[] {
    return data.filter((student) => student.sex == "male");
  }
}
class FilterFemalesStrategy implements Strategy {
  public doAlgorithm(data: Student[]): Student[] {
    return data.filter((student) => student.sex == "female");
  }
}

const context = new Context(new FilterMalesStrategy());
context.doSomeBusinessLogic();

console.log("-------------------------");

context.setStrategy(new FilterFemalesStrategy());
context.doSomeBusinessLogic();
