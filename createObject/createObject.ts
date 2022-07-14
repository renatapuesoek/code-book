// eslint-disable-next-line max-classes-per-file
export class Animal {
  constructor(private readonly name, private energy) {
    this.name = name;
    this.energy = energy;
  }

  eat(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  }

  sleep(length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  }

  play(length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  }
}

// create object

class Person {
  constructor(
    private readonly name,
    private readonly birthYear,
    private readonly profession
  ) {
    this.name = name;
    this.birthYear = birthYear;
    this.profession = profession;
  }

  howOld() {
    const age = new Date().getFullYear() - this.birthYear;
    console.log(age);
  }

  static greeting() {
    console.log("hello");
  }
}

const lucy = new Person("Lucy", 1982, "Graphic Designer");
lucy.howOld();
Person.greeting();

// private fields
class Car {
  milesDriven = 0;

  drive(distance) {
    this.milesDriven += distance;
  }

  getMilesDriven() {
    return this.milesDriven;
  }
}

const tesla = new Car();
tesla.drive(10);
tesla.getMilesDriven(); // 10
// tesla.#milesDriven; // Invalid
