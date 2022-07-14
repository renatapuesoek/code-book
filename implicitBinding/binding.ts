export const Person = function (name, age) {
  return {
    name,
    age,
    sayName() {
      return this.name;
    },
  };
};
export class Person2 {
  constructor(private readonly name, private readonly age) {}

  sayName() {
    return this.name;
  }
}
const jim = Person("Jim", 42);
jim.sayName();
